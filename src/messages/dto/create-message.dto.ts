import { ApiProperty } from "@nestjs/swagger";

export class CreateMessageDto {
  @ApiProperty({
    example: "1",
    description: "Author id",
  })
  author: number;

  @ApiProperty({ example: "Good product!", description: "Message text" })
  text: string;

  @ApiProperty({
    example: "5",
    description: "Rating",
  })
  rating: number;
}
