import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateSendDto {
  @IsEmail({}, { message: 'Email không đúng định dạng !' })
  @IsNotEmpty({ message: 'Email không được để trống !' })
  email: string;

  @IsNotEmpty({ message: 'Chi tiết không được để trống !' })
  subject: string;

  @IsNotEmpty({ message: 'Chi tiết không được để trống !' })
  message: string;
}
