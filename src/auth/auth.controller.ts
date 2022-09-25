import { Body, Controller, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { endpoints } from "src/constants";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { AuthService } from "./auth.service";

@ApiTags("Auth")
@Controller(endpoints.auth.main)
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: "User login" })
  @Post(endpoints.auth.login)
  login(@Body() userDto: CreateUserDto) {
    return this.authService.login(userDto);
  }

  @ApiOperation({ summary: "User registration" })
  @Post(endpoints.auth.register)
  registration(@Body() userDto: CreateUserDto) {
    return this.authService.registration(userDto);
  }
}
