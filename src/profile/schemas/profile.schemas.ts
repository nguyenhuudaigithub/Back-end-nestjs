import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type ProfileDocument = HydratedDocument<Profile>;

@Schema({ timestamps: true })
export class Profile {
  @Prop()
  title: string;

  @Prop()
  logo: string;

  @Prop()
  description: string;

  @Prop({ type: mongoose.Schema.Types.Array })
  navLink: {
    title: string;
    path: string;
  }[];

  @Prop()
  isActive: boolean;

  @Prop({ type: Object })
  heroSection: {
    image: string;
    text: string;
    infor: {
      title: string;
      time: number;
    }[];
  };

  @Prop({ type: mongoose.Schema.Types.Array })
  achievementsList: {
    prefix: string;
    metric: string;
    value: string;
    postfix: string;
  }[];

  @Prop({ type: Object })
  about: {
    title: string;
    detail: string;
  };

  @Prop({ type: mongoose.Schema.Types.Array })
  tabData: {
    title: string;
    id: string;
    content: string;
  }[];

  @Prop({ type: Object })
  projectsData: {
    title: string;
    data: {
      id: number;
      title: string;
      description: string;
      image: string;
      tag: string[];
      gitUrl: string;
      previewUrl: string;
    }[];
  };

  @Prop({ type: Object })
  contact: {
    title: string;
    detail: string;
    socialMedia: {
      name: string;
      image: string;
      link: string;
    }[];
  };

  @Prop({ type: Object })
  createBy: {
    _id: mongoose.Schema.Types.ObjectId;
    email: string;
  };

  @Prop({ type: Object })
  updateBy: {
    _id: mongoose.Schema.Types.ObjectId;
    email: string;
  };

  @Prop({ type: Object })
  deletecBy: {
    _id: mongoose.Schema.Types.ObjectId;
    email: string;
  };

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop()
  isDeleted: boolean;

  @Prop()
  deletedAt: Date;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
