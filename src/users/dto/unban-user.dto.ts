import { ApiProperty } from "@nestjs/swagger";

export class UnbanUserDto {
  @ApiProperty({ example: "1", description: "User id" })
  readonly userId: number;
}
