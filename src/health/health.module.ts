import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HealthController } from './health.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RedisHealthIndicator } from '@nestjs-modules/ioredis';
import { Redis } from 'ioredis';

@Module({
  imports: [
    TerminusModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [HealthController],
  providers: [
    {
      provide: RedisHealthIndicator,
      useFactory: async (configService: ConfigService) => {
        const redisUrl = configService.get<string>('REDIS_URL');
        const redisClient = new Redis(redisUrl);
        return new RedisHealthIndicator(redisClient);
      },
      inject: [ConfigService],
    },
  ],
})
export class HealthModule {}
