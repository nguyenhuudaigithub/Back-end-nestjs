import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

//Xác thực người dùng trước khi cho phép truy cập route
@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {}
