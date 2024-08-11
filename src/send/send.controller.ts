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
import { SendService } from './send.service';
import { CreateSendDto } from './dto/create-send.dto';
import { UpdateSendDto } from './dto/update-send.dto';
import { Public, ResponseMessage, User } from 'src/decorator/customize';
import { IUser } from 'src/users/users.interface';

@Controller('send')
export class SendController {
  constructor(private readonly sendService: SendService) {}

  @Post()
  @ResponseMessage('Gửi tin thành công!')
  @Public()
  create(@Body() createSendDto: CreateSendDto) {
    return this.sendService.create(createSendDto);
  }
  @Get()
  @ResponseMessage('Lấy ra danh sách tin nhắn thành công!')
  findAll(
    @Query('current') currentPage: string,
    @Query('pageSize') limit: string,
    @Query() qs: string,
  ) {
    return this.sendService.findAll(+currentPage, +limit, qs);
  }

  @Get(':id')
  @ResponseMessage('Tìm tin nhắn thành công!')
  findOne(@Param('id') id: string) {
    return this.sendService.findOne(id);
  }

  @Delete(':id')
  @ResponseMessage('Xóa tin nhắn thành công!')
  remove(@Param('id') id: string, @User() user: IUser) {
    return this.sendService.remove(id, user);
  }
}
