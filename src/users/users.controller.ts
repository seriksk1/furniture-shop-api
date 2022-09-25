import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Roles } from "src/auth/roles-auth.decorator";
import { RolesGuard } from "src/auth/roles.guard";
import { endpoints, RolesEnum } from "src/constants";
import { AddRoleDto } from "./dto/add-role.dto";
import { BanUserDto } from "./dto/ban-user.dto";
import { CreateUserDto } from "./dto/create-user.dto";
import { UnbanUserDto } from "./dto/unban-user.dto";
import { User } from "./users.model";
import { UsersService } from "./users.service";

@ApiTags("Users")
@Controller(endpoints.users.main)
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: "Create User" })
  @ApiResponse({ status: 200, type: User })
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }

  @ApiOperation({ summary: "Get all users" })
  @ApiResponse({ status: 200, type: [User] })
  @Roles(RolesEnum.Admin)
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  }

  @ApiOperation({ summary: "Give a role" })
  @ApiResponse({ status: 200 })
  @Roles(RolesEnum.Admin)
  @UseGuards(RolesGuard)
  @Post(endpoints.users.role)
  addRole(@Body() dto: AddRoleDto) {
    return this.usersService.addRole(dto);
  }

  @ApiOperation({ summary: "Ban a user" })
  @ApiResponse({ status: 200 })
  @Roles(RolesEnum.Admin)
  @UseGuards(RolesGuard)
  @Post(endpoints.users.ban)
  ban(@Body() dto: BanUserDto) {
    return this.usersService.ban(dto);
  }

  @ApiOperation({ summary: "Unban a user" })
  @ApiResponse({ status: 200 })
  @Roles(RolesEnum.Admin)
  @UseGuards(RolesGuard)
  @Post(endpoints.users.unban)
  unban(@Body() dto: UnbanUserDto) {
    return this.usersService.unban(dto);
  }
}
