import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Profile, ProfileDocument } from './schemas/profile.schemas';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { IUser } from 'src/users/users.interface';
import aqp from 'api-query-params';
import mongoose from 'mongoose';

@Injectable()
export class ProfileService {
  constructor(
    @InjectModel(Profile.name)
    private profileModel: SoftDeleteModel<ProfileDocument>,
  ) {}

  create(createProfileDto: CreateProfileDto, user: IUser) {
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
        current: currentPage, //trang hiện tại
        pageSize: limit, //số lượng bản ghi đã lấy
        pages: totalPages, //tổng số trang với điều kiện query
        total: totalItems, // tổng số phần tử (số bản ghi)
      },
      result, //kết quả query
    };
  }

  findOne(_id: string) {
    if (!mongoose.Types.ObjectId.isValid(_id))
      throw new BadRequestException(`Không tìm thấy hồ sơ ! với ${_id}`);
    return this.profileModel.findOne({ _id });
  }

  update(id: string, updateProfileDto: UpdateProfileDto, user: IUser) {
    if (!mongoose.Types.ObjectId.isValid(id))
      throw new BadRequestException(`Không tìm thấy hồ sơ ! với ${id}`);
    return this.profileModel.updateOne(
      {
        _id: id,
      },
      {
        ...updateProfileDto,
        updateBy: { _id: user._id, email: user.email },
      },
    );
  }

  async remove(id: string, user: IUser) {
    if (!mongoose.Types.ObjectId.isValid(id))
      throw new BadRequestException(`Không tìm thấy công việc ! với ${id}`);

    await this.profileModel.updateOne(
      {
        _id: id,
      },
      {
        deletecBy: { _id: user._id, email: user.email },
      },
    );

    return this.profileModel.softDelete({ _id: id });
  }
}
