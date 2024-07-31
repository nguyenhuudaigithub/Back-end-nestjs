import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  ValidateNested,
} from 'class-validator';

class NavLink {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  path: string;
}

export class CreateProfileDto {
  @IsNotEmpty({ message: 'Tên tiêu đề không được để trống !' })
  title: string;

  @IsNotEmpty({ message: 'Tên biểu tượng không được để trống !' })
  logo: string;

  @IsNotEmpty({ message: 'Chi tiết về trang không được để trống !' })
  description: string;

  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => NavLink)
  navLink: NavLink;
}
