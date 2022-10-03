import { ApiProperty } from "@nestjs/swagger";

export class CreateCategoryDto {
  @ApiProperty({ example: "Sofas", description: "Category name" })
  readonly name: string;

  @ApiProperty({
    example: "Sofa Collection",
    description: "Category description",
  })
  readonly description: string;
}
