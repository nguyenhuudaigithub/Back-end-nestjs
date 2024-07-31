import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Profile, ProfileDocument } from './schemas/profile.schemas';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { IUser } from 'src/users/users.interface';

@Injectable()
export class ProfileService {
  constructor(
    @InjectModel(Profile.name)
    private profileModel: SoftDeleteModel<ProfileDocument>,
  ) {}

  create(createProfileDto: CreateProfileDto, user: IUser) {
    const { title, logo, description, navLink } = createProfileDto;

    return this.profileModel.create({
      title,
      logo,
      description,
      navLink,
      createBy: { _id: user._id, email: user.email },
    });
  }

  findAll() {
    return `This action returns all profile`;
  }

  findOne(id: number) {
    return `This action returns a #${id} profile`;
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    return `This action updates a #${id} profile`;
  }

  remove(id: number) {
    return `This action removes a #${id} profile`;
  }
}
