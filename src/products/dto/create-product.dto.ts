import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
  @ApiProperty({ example: "Red sofa", description: "Product name" })
  readonly name: string;

  @ApiProperty({
    example: "Red soft sofa, the best!",
    description: "Product description",
  })
  readonly description: string;
}
