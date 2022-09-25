import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ example: "user@gmail.com", description: "User email" })
  @IsString({ message: "Should be a string" })
  @IsEmail({}, { message: "Incorrect email" })
  readonly email: string;

  @ApiProperty({ example: "mypassword", description: "User password" })
  @IsString({ message: "Should be a string" })
  @Length(6, 20, { message: "Password should be from 6 to 20 symbols" })
  readonly password: string;
}
