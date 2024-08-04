import { IsUUID, IsNotEmpty, IsJSON, IsString, IsEnum, IsNumber } from 'class-validator';

export class CreateOrderDto {
  @IsUUID()
  user_id: string;

  @IsUUID()
  cart_id: string;

  @IsJSON()
  payment: Record<string, any>;

  @IsJSON()
  delivery: Record<string, any>;

  @IsString()
  comments: string;

  @IsEnum(['ORDERED', 'SHIPPED', 'DELIVERED', 'CANCELLED'])
  status: 'ORDERED' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED';

  @IsNumber()
  total: number;
}
