import { Module } from '@nestjs/common';
import { KnexModule } from 'nestjs-knex';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    KnexModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        config: {
          client: 'pg',
          connection: {
            host: configService.get('RDS_HOST'),
            user: configService.get('RDS_USERNAME'),
            password: configService.get('RDS_PASSWORD'),
            database: configService.get('RDS_DATABASE'),
            port: Number(configService.get('RDS_PORT')),
          },
        },
      }),
    }),
  ],
  exports: [KnexModule],
})
export class DatabaseModule {}
