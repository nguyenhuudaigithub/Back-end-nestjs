import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
require('dotenv').config();
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import { TransformInterceptor } from './core/transform.interceptor';

async function bootstrap() {
  // Khởi tạo ứng dụng NestJS với NestExpressApplication
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Lấy ConfigService để sử dụng cho cấu hình
  const configService = app.get(ConfigService);

  // Cấu hình các guard toàn cục
  const reflector = app.get(Reflector);
  app.useGlobalGuards(new JwtAuthGuard(reflector));

  // Cấu hình tĩnh (static assets)
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('ejs');

  // Sử dụng ValidationPipe toàn cục (Transform data : convert string => number ,array … Validate data)
  app.useGlobalPipes(new ValidationPipe());

  // Sử dụng TransformInterceptor toàn cục (custom message khi trả về)
  app.useGlobalInterceptors(new TransformInterceptor(reflector));

  // Cấu hình cookie
  app.use(cookieParser());

  // Cấu hình CORS (Cross-Origin Resource Sharing)
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    credentials: true,
  });

  // Đặt tiền tố cho phiên bản API
  app.setGlobalPrefix('api');
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: ['1', '2'],
  });

  // Cấu hình bảo mật Helmet
  app.use(helmet());

  // Lắng nghe ứng dụng trên cổng được cấu hình trong ConfigService
  await app.listen(configService.get('PORT'),'0.0.0.0');
}
bootstrap();
