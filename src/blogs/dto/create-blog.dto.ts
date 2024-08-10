import { IsNotEmpty } from 'class-validator';

export class CreateBlogDto {
  @IsNotEmpty({ message: 'Tiêu đề không được để trống !' })
  title: string;

  @IsNotEmpty({ message: 'Trạng thái không được để trống !' })
  isActive: boolean;

  @IsNotEmpty({ message: 'Hình ảnh không được để trống !' })
  img: string;

  @IsNotEmpty({ message: 'Mô tả không được để trống !' })
  description: string;

  @IsNotEmpty({ message: 'Chi tiết không được để trống !' })
  detail: string;
}
