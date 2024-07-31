import {
  IsArray,
  IsNotEmpty,
  IsString,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProfileDto {
  @IsString({ message: 'Tiêu đề phải là kiểu chuỗi' })
  @IsNotEmpty({ message: 'Tiêu đề không được để trống' })
  title: string;

  @IsString({ message: 'Logo phải là kiểu chuỗi' })
  @IsNotEmpty({ message: 'Logo không được để trống' })
  logo: string;

  @IsString({ message: 'Mô tả phải là kiểu chuỗi' })
  @IsNotEmpty({ message: 'Mô tả không được để trống' })
  description: string;

  @IsArray({ message: 'Danh sách liên kết phải là kiểu mảng' })
  @IsNotEmpty({ message: 'Danh sách liên kết không được để trống' })
  @ValidateNested({ each: true })
  @Type(() => Object)
  navLink: { title: string; path: string }[];

  @IsNotEmpty({ message: 'Phần hero không được để trống' })
  @ValidateNested()
  @Type(() => Object)
  heroSection: {
    image: string;
    text: string;
    infor: { title: string; time: string }[];
  };

  @IsArray({ message: 'Danh sách thành tích phải là kiểu mảng' })
  @IsNotEmpty({ message: 'Danh sách thành tích không được để trống' })
  @ValidateNested({ each: true })
  @Type(() => Object)
  achievementsList: {
    prefix: string;
    metric: string;
    value: string;
    postfix: string;
  }[];

  @IsNotEmpty({ message: 'Phần giới thiệu không được để trống' })
  @ValidateNested()
  @Type(() => Object)
  about: {
    title: string;
    detail: string;
  };

  @IsArray({ message: 'Danh sách tab phải là kiểu mảng' })
  @IsNotEmpty({ message: 'Danh sách tab không được để trống' })
  @ValidateNested({ each: true })
  @Type(() => Object)
  tabData: {
    title: string;
    id: string;
    content: string;
  }[];

  @IsNotEmpty({ message: 'Dữ liệu dự án không được để trống' })
  @ValidateNested()
  @Type(() => Object)
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

  @IsNotEmpty({ message: 'Thông tin liên hệ không được để trống' })
  @ValidateNested()
  @Type(() => Object)
  contact: {
    title: string;
    detail: string;
    socialMedia: {
      name: string;
      image: string;
      link: string;
    }[];
  };
}
