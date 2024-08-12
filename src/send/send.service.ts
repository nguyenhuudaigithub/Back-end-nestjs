import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateSendDto } from './dto/create-send.dto';
import { UpdateSendDto } from './dto/update-send.dto';
import { Send, SendDocument } from './schemas/send.schemas';
import { InjectModel } from '@nestjs/mongoose';
import aqp from 'api-query-params';
import mongoose from 'mongoose';
import { IUser } from 'src/users/users.interface';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class SendService {
  constructor(
    @InjectModel(Send.name)
    private sendModel: SoftDeleteModel<SendDocument>,
    private readonly mailerService: MailerService,
  ) {}
  async create(createSendDto: CreateSendDto) {
    const { email, subject, message } = createSendDto;

    await this.mailerService.sendMail({
      to: 'nguyenhuudaidev@gmail.com',
      from: 'My Profile',
      subject: 'Bạn có thông báo mới trên trang cá nhân',
      template: 'mailSend',
      context: {
        email: email,
        subject: subject,
        message: message,
      },
    });

    const send = await this.sendModel.create({ email, subject, message });
    return {
      id: send._id,
    };
  }

  async findAll(currentPage: number, limit: number, qs: string) {
    const { filter, sort, projection, population } = aqp(qs);

    delete filter.current;
    delete filter.pageSize;

    let offset = (+currentPage - 1) * +limit;
    let defaultLimit = +limit ? +limit : 10;

    const totalItems = (await this.sendModel.find(filter)).length;
    const totalPages = Math.ceil(totalItems / defaultLimit);

    const result = await this.sendModel
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

  async findOne(id: string) {
    if (!mongoose.Types.ObjectId.isValid(id))
      throw new BadRequestException(`Không tìm thấy tin nhắn ! với ${id}`);
    return await this.sendModel.findOne({ _id: id });
  }

  async remove(id: string, user: IUser) {
    if (!mongoose.Types.ObjectId.isValid(id))
      throw new BadRequestException(`Không tìm thấy  vai trò ! với ${id}`);

    await this.sendModel.updateOne(
      {
        _id: id,
      },
      {
        deletecBy: { _id: user._id, email: user.email },
      },
    );

    return this.sendModel.softDelete({ _id: id });
  }
}
