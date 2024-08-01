import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ResponseMessage, User } from 'src/decorator/customize';
import { IUser } from 'src/users/users.interface';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  @ResponseMessage('Tạo thành công hồ sơ!')
  create(@Body() createProfileDto: CreateProfileDto, @User() user: IUser) {
    return this.profileService.create(createProfileDto, user);
  }

  @Get()
  @ResponseMessage('Lấy ra danh sách hồ sơ thành công!')
  findAll(
    @Query('current') currentPage: string,
    @Query('pageSize') limit: string,
    @Query() qs: string,
  ) {
    return this.profileService.findAll(+currentPage, +limit, qs);
  }

  @Get(':id')
  @ResponseMessage('Lấy ra hồ sơ thành công!')
  findOne(@Param('id') _id: string) {
    return this.profileService.findOne(_id);
  }

  @Patch(':id')
  @ResponseMessage('Cập nhập hồ sơ thành công!')
  update(
    @Param('id') id: string,
    @Body() updateProfileDto: UpdateProfileDto,
    @User() user: IUser,
  ) {
    return this.profileService.update(id, updateProfileDto, user);
  }

  @Delete(':id')
  @ResponseMessage('Xóa công việc thành công!')
  remove(@Param('id') id: string, @User() user: IUser) {
    return this.profileService.remove(id, user);
  }
}
