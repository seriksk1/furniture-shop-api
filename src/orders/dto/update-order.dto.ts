import { ApiProperty } from "@nestjs/swagger";

export class UpdateOrderDto {
  @ApiProperty({ example: "1", description: "Product ID" })
  productId: number;

  @ApiProperty({ example: "1", description: "Product amount" })
  amount: number;

  @ApiProperty({
    example: "Some info about the Order",
    description: "Order description",
  })
  totalPrice: number;
}
