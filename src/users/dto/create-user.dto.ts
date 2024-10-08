import { IsEmail, IsMongoId, IsNotEmpty } from 'class-validator';
import mongoose from 'mongoose';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Họ tên không được để trống !' })
  name: string;

  @IsEmail({}, { message: 'Email không đúng định dạng !' })
  @IsNotEmpty({ message: 'Email không được để trống !' })
  email: string;

  @IsNotEmpty({ message: 'Mật khẩu không được để trống !' })
  password: string;

  @IsNotEmpty({ message: 'Tuổi không được để trống !' })
  age: string;

  @IsNotEmpty({ message: 'Giới tính không được để trống !' })
  gender: string;

  @IsNotEmpty({ message: 'Địa chỉ không được để trống !' })
  address: string;

  @IsNotEmpty({ message: 'Chức vụ không được để trống !' })
  @IsMongoId({ message: 'Chức vụ có định dạng là id !' })
  role: mongoose.Schema.Types.ObjectId;
}

export class RegisterUserDto {
  @IsNotEmpty({ message: 'Họ tên không được để trống !' })
  name: string;

  @IsEmail({}, { message: 'Email không đúng định dạng !' })
  @IsNotEmpty({ message: 'Email không được để trống !' })
  email: string;

  @IsNotEmpty({ message: 'Mật khẩu không được để trống !' })
  password: string;

  @IsNotEmpty({ message: 'Tuổi không được để trống !' })
  age: string;

  @IsNotEmpty({ message: 'Giới tính không được để trống !' })
  gender: string;

  @IsNotEmpty({ message: 'Địa chỉ không được để trống !' })
  address: string;
}
