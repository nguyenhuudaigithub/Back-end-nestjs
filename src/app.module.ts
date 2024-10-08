import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { softDeletePlugin } from 'soft-delete-plugin-mongoose';
import { ThrottlerModule } from '@nestjs/throttler';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { PermissionsModule } from './permissions/permissions.module';
import { DatabasesModule } from './databases/databases.module';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { FilesModule } from './files/files.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { HealthModule } from './health/health.module';
import { RedisModule } from '@nestjs-modules/ioredis';
import { BlogsModule } from './blogs/blogs.module';
import { SendModule } from './send/send.module';

@Module({
  imports: [
    // Cấu hình ConfigModule để đọc các biến môi trường
    ConfigModule.forRoot({
      ignoreEnvFile: true,
    }),

    // Cấu hình ThrottlerModule để kiểm soát tốc độ yêu cầu
    ThrottlerModule.forRoot([
      {
        ttl: 60000, // 1 phút
        limit: 10, // 10 yêu cầu/phút
      },
    ]),

    // Cấu hình MongooseModule để kết nối với MongoDB
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>('MONGODB_URL'),
        connectionFactory: (connection) => {
          connection.plugin(softDeletePlugin);
          return connection;
        },
      }),
      inject: [ConfigService],
    }),

    // Cấu hình RedisModule để kết nối với Redis
    RedisModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => {
        return {
          type: 'single',
          url: config.get<string>('REDIS_URL'),
        };
      },
      inject: [ConfigService],
    }),

    UsersModule,

    RolesModule,

    PermissionsModule,

    DatabasesModule,

    AuthModule,

    ProfileModule,

    FilesModule,

    CloudinaryModule,

    HealthModule,

    BlogsModule,

    SendModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
