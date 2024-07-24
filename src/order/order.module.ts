import { forwardRef, Module } from '@nestjs/common';
import { OrderService } from './services';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [forwardRef(() => DatabaseModule)],
  providers: [OrderService],
  exports: [OrderService],
})
export class OrderModule {}
