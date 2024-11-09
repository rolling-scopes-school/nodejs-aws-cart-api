import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, ValidateNested } from 'class-validator';

export class ItemDto {
  @IsString()
  @IsNotEmpty()
  productId: string;

  @IsNumber()
  @IsNotEmpty()
  count: number;
}
export class UpdateCartDto {
  @ValidateNested({ each: true })
  @Type(() => ItemDto)
  items: ItemDto[];
}
