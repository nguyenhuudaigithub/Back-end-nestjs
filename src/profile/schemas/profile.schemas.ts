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

  @Prop({ type: [{ title: String, path: String }] })
  navLink: {
    title: string;
    path: string;
  }[];

  @Prop()
  isActice: boolean;

  @Prop({
    type: {
      image: String,
      text: String,
      infor: [
        {
          title: String,
          time: String,
        },
      ],
    },
  })
  heroSection: {
    image: string;
    text: string;
    infor: {
      title: string;
      time: string;
    }[];
  };

  @Prop({
    type: [
      {
        prefix: String,
        metric: String,
        value: String,
        postfix: String,
      },
    ],
  })
  achievementsList: {
    prefix: string;
    metric: string;
    value: string;
    postfix: string;
  }[];

  @Prop({
    type: {
      title: String,
      detail: String,
    },
  })
  about: {
    title: string;
    detail: string;
  };

  @Prop({
    type: [
      {
        title: String,
        id: String,
        content: String,
      },
    ],
  })
  tabData: {
    title: string;
    id: string;
    content: string;
  }[];

  @Prop({
    type: {
      title: String,
      data: [
        {
          id: Number,
          title: String,
          description: String,
          image: String,
          tag: [String],
          gitUrl: String,
          previewUrl: String,
        },
      ],
    },
  })
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

  @Prop({
    type: {
      title: String,
      detail: String,
      socialMedia: [
        {
          name: String,
          image: String,
          link: String,
        },
      ],
    },
  })
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
