import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type SendDocument = HydratedDocument<Send>;

@Schema({ timestamps: true })
export class Send {
  @Prop()
  email: string;

  @Prop()
  subject: string;

  @Prop()
  message: string;

  @Prop({ type: Object })
  deletecBy: {
    _id: mongoose.Schema.Types.ObjectId;
    email: string;
  };

  @Prop()
  createdAt: Date;

  @Prop()
  isDeleted: boolean;

  @Prop()
  deletedAt: Date;
}

export const SendSchema = SchemaFactory.createForClass(Send);
