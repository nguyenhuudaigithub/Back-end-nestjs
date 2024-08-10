import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Blog, BlogDocument } from './schemas/blog.schemas';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import mongoose from 'mongoose';
import { IUser } from 'src/users/users.interface';
import aqp from 'api-query-params';
import { InjectRedis } from '@nestjs-modules/ioredis';
import { Redis } from 'ioredis';

@Injectable()
export class BlogsService {
  constructor(
    @InjectModel(Blog.name)
    private blogModel: SoftDeleteModel<BlogDocument>,
    @InjectRedis() private readonly redisClient: Redis,
  ) {}
  async create(createBlogDto: CreateBlogDto, user: IUser) {
    const { title, isActive, img, description, detail } = createBlogDto;

    const newBlog = await this.blogModel.create({
      title,

      isActive,
      img,
      description,
      detail,
      createBy: {
        _id: user._id,
        email: user.email,
      },
    });

    return {
      _id: newBlog?._id,
      createBy: newBlog?.createBy,
    };
  }

  async findAllAdmin(currentPage: number, limit: number, qs: string) {
    const { filter, sort, projection, population } = aqp(qs);

    delete filter.current;
    delete filter.pageSize;

    let offset = (+currentPage - 1) * +limit;
    let defaultLimit = +limit ? +limit : 10;

    const totalItems = (await this.blogModel.find(filter)).length;
    const totalPages = Math.ceil(totalItems / defaultLimit);

    const result = await this.blogModel
      .find(filter)
      .skip(offset)
      .limit(defaultLimit)
      // @ts-ignore: Unreachable code error
      .sort(sort)
      .populate(population)
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

  async findAll(currentPage: number, limit: number, qs: string) {
    const { filter, sort, projection, population } = aqp(qs);

    delete filter.current;
    delete filter.pageSize;

    // Ensure only active blogs are fetched
    filter.isActive = true;

    let offset = (+currentPage - 1) * +limit;
    let defaultLimit = +limit ? +limit : 10;

    const totalItems = (await this.blogModel.find(filter)).length;
    const totalPages = Math.ceil(totalItems / defaultLimit);

    const result = await this.blogModel
      .find(filter)
      .skip(offset)
      .limit(defaultLimit)
      // @ts-ignore: Unreachable code error
      .sort(sort)
      .populate(population)
      .exec();

    return {
      meta: {
        current: currentPage, // trang hiện tại
        pageSize: limit, // số lượng bản ghi đã lấy
        pages: totalPages, // tổng số trang với điều kiện query
        total: totalItems, // tổng số phần tử (số bản ghi)
      },
      result, // kết quả query
    };
  }

  async findById(id: string) {
    const blogs = await this.blogModel.findOne({ _id: id, isActive: true });

    if (!blogs) {
      throw new BadRequestException(`Không tìm thấy bài viết !`);
    }

    const cachedBlog = await this.redisClient.get(`blogs:${blogs._id}`);
    if (cachedBlog) {
      return JSON.parse(cachedBlog);
    }

    await this.redisClient.set(
      `blogs:${blogs._id}`,
      JSON.stringify(blogs),
      'EX',
      3600,
    );

    return blogs;
  }

  async update(id: string, updateblogDto: UpdateBlogDto, user: IUser) {
    if (!mongoose.Types.ObjectId.isValid(id))
      throw new BadRequestException(`Không tìm thấy phân quyền ! với ${id}`);
    return await this.blogModel.updateOne(
      {
        _id: id,
      },
      {
        ...updateblogDto,
        updateBy: { _id: user._id, email: user.email },
      },
    );
  }

  async remove(id: string, user: IUser) {
    if (!mongoose.Types.ObjectId.isValid(id))
      throw new BadRequestException(`Không tìm thấy công việc ! với ${id}`);

    await this.blogModel.updateOne(
      {
        _id: id,
      },
      {
        deletecBy: { _id: user._id, email: user.email },
      },
    );

    return this.blogModel.softDelete({ _id: id });
  }
}
