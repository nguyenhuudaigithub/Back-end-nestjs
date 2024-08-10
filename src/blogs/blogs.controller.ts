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
import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { Public, ResponseMessage, User } from 'src/decorator/customize';
import { IUser } from 'src/users/users.interface';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Post()
  @ResponseMessage('Tạo bài viết thành công!')
  create(@Body() createBlogDto: CreateBlogDto, @User() user: IUser) {
    return this.blogsService.create(createBlogDto, user);
  }

  @Get()
  @Public()
  @ResponseMessage('Lấy ra danh sách bài viết thành công!')
  findAll(
    @Query('current') currentPage: string,
    @Query('pageSize') limit: string,
    @Query() qs: string,
  ) {
    return this.blogsService.findAll(+currentPage, +limit, qs);
  }

  @Get('/admin')
  @ResponseMessage('Lấy ra danh sách bài viết thành công!')
  findAllAdmin(
    @Query('current') currentPage: string,
    @Query('pageSize') limit: string,
    @Query() qs: string,
  ) {
    return this.blogsService.findAllAdmin(+currentPage, +limit, qs);
  }

  @Get(':id')
  @Public()
  findbyId(@Param('id') id: string) {
    return this.blogsService.findById(id);
  }

  @Patch(':id')
  @ResponseMessage('Cập nhập bài viết thành công!')
  update(
    @Param('id') id: string,
    @Body() updateBlogDto: UpdateBlogDto,
    @User() user: IUser,
  ) {
    return this.blogsService.update(id, updateBlogDto, user);
  }

  @Delete(':id')
  @ResponseMessage('Xóa bài viết thành công!')
  remove(@Param('id') id: string, @User() user: IUser) {
    return this.blogsService.remove(id, user);
  }
}
