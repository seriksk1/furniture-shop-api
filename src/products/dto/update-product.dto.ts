import { ApiProperty } from "@nestjs/swagger";

export class UpdateProductDto {
  @ApiProperty({ example: "Sofas", description: "Product name" })
  readonly name: string;

  @ApiProperty({
    example: "Sofa Collection",
    description: "Product description",
  })
  readonly description: string;
}
