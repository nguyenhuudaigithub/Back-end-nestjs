import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Profile, ProfileDocument } from './schemas/profile.schemas';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { IUser } from 'src/users/users.interface';
import aqp from 'api-query-params';
import mongoose from 'mongoose';
import { InjectRedis } from '@nestjs-modules/ioredis';
import { Redis } from 'ioredis';

@Injectable()
export class ProfileService {
  constructor(
    @InjectModel(Profile.name)
    private profileModel: SoftDeleteModel<ProfileDocument>,
    @InjectRedis() private readonly redisClient: Redis,
  ) {}

  async create(createProfileDto: CreateProfileDto, user: IUser) {
    const {
      title,
      logo,
      description,
      navLink,
      heroSection,
      achievementsList,
      about,
      tabData,
      projectsData,
      contact,
      isActive = false,
    } = createProfileDto;

    return this.profileModel.create({
      title,
      logo,
      description,
      navLink,
      heroSection,
      achievementsList,
      about,
      tabData,
      projectsData,
      contact,
      isActive,
      createBy: { _id: user._id, email: user.email },
    });
  }

  async findAll(currentPage: number, limit: number, qs: string) {
    const { filter, sort, projection, population } = aqp(qs);

    delete filter.current;
    delete filter.pageSize;

    let offset = (+currentPage - 1) * +limit;
    let defaultLimit = +limit ? +limit : 10;

    const totalItems = (await this.profileModel.find(filter)).length;
    const totalPages = Math.ceil(totalItems / defaultLimit);

    const result = await this.profileModel
      .find(filter)
      .skip(offset)
      .limit(defaultLimit)
      // @ts-ignore: Unreachable code error
      .sort(sort)
      .populate(population)
      .select(projection as any)
      .exec();

    return {
      meta: {
        current: currentPage,
        pageSize: limit,
        pages: totalPages,
        total: totalItems,
      },
      result,
    };
  }

  async findOne(_id: string) {
    const profile = await this.profileModel.findOne({ _id });
    if (!profile) {
      throw new BadRequestException(`Không tìm thấy hồ sơ ! với ${_id}`);
    }

    const active = profile.isActive;
    if (active) {
      const cachedProfile = await this.redisClient.get(`profile:${_id}`);
      if (cachedProfile) {
        return JSON.parse(cachedProfile);
      }

      await this.redisClient.set(
        `profile:${_id}`,
        JSON.stringify(profile),
        'EX',
        3600,
      );
    } else {
      return this.profileModel.findOne({ _id: _id });
    }

    return profile;
  }

  async findFontEnd() {
    const profile = await this.profileModel.findOne({ isActive: true }).exec();

    if (!profile) {
      throw new BadRequestException(`Không tìm thấy hồ sơ !`);
    }

    const cachedProfile = await this.redisClient.get(`profile:${profile._id}`);
    if (cachedProfile) {
      return JSON.parse(cachedProfile);
    }

    await this.redisClient.set(
      `profile:${profile._id}`,
      JSON.stringify(profile),
      'EX',
      3600,
    );

    return profile;
  }

  async update(id: string, updateProfileDto: UpdateProfileDto, user: IUser) {
    if (!mongoose.Types.ObjectId.isValid(id))
      throw new BadRequestException(`Không tìm thấy hồ sơ ! với ${id}`);

    const { isActive } = updateProfileDto;

    const result = await this.profileModel.updateOne(
      {
        _id: id,
      },
      {
        ...updateProfileDto,
        updateBy: { _id: user._id, email: user.email },
      },
    );

    // Nếu isActive là true, cập nhật hoặc thêm mới vào Redis
    if (isActive) {
      const updatedProfile = await this.profileModel.findOne({ _id: id });
      await this.redisClient.set(
        `profile:${id}`,
        JSON.stringify(updatedProfile),
        'EX',
        3600,
      );
    } else {
      // Nếu isActive là false, xóa khỏi Redis
      await this.redisClient.del(`profile:${id}`);
    }

    return result;
  }

  async remove(id: string, user: IUser) {
    if (!mongoose.Types.ObjectId.isValid(id))
      throw new BadRequestException(`Không tìm thấy công việc ! với ${id}`);

    await this.profileModel.updateOne(
      {
        _id: id,
      },
      {
        isActice: false,
        deletecBy: { _id: user._id, email: user.email },
      },
    );

    await this.redisClient.del(`profile:${id}`);

    return this.profileModel.softDelete({ _id: id });
  }
}
