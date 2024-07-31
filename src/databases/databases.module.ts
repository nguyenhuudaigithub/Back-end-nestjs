import { Module } from '@nestjs/common';
import { DatabasesService } from './databases.service';
import { DatabasesController } from './databases.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from 'src/users/users.module';
import { ConfigModule } from '@nestjs/config';
import { User, UserSchema } from 'src/users/schemas/user.schemas';
import {
  Permission,
  PermissionSchema,
} from 'src/permissions/schemas/permission.schemas';
import { Role, RoleSchema } from 'src/roles/schemas/role.schemas';

@Module({
  imports: [
    UsersModule,
    ConfigModule,
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Permission.name, schema: PermissionSchema },
      { name: Role.name, schema: RoleSchema },
    ]),
  ],
  controllers: [DatabasesController],
  providers: [DatabasesService],
})
export class DatabasesModule {}
