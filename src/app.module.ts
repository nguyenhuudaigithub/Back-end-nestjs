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

    UsersModule,

    RolesModule,

    PermissionsModule,

    DatabasesModule,

    AuthModule,

    ProfileModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
