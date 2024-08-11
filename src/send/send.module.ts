import { Module } from '@nestjs/common';
import { SendService } from './send.service';
import { SendController } from './send.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Send, SendSchema } from './schemas/send.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Send.name, schema: SendSchema }]),
  ],
  controllers: [SendController],
  providers: [SendService],
})
export class SendModule {}
