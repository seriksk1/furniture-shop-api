import { ApiProperty } from "@nestjs/swagger";

export class UpdateMessageDto {
  @ApiProperty({ example: "Good product!", description: "Message text" })
  text: string;

  @ApiProperty({
    example: "5",
    description: "Rating",
  })
  rating: number;
}
