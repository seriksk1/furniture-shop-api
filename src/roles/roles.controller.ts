import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { endpoints } from "src/constants";
import { CreateRoleDto } from "./dto/create-role.dto";
import { Role } from "./roles.model";
import { RolesService } from "./roles.service";

@ApiTags("Roles")
@Controller(endpoints.roles.main)
export class RolesController {
  constructor(private roleService: RolesService) {}

  @ApiOperation({ summary: "Create Role" })
  @ApiResponse({ status: 200, type: Role })
  @Post()
  create(@Body() dto: CreateRoleDto) {
    return this.roleService.createRole(dto);
  }

  @ApiOperation({ summary: "Get Role by the value" })
  @ApiResponse({ status: 200, type: Role })
  @Get(endpoints.roles.get)
  getByValue(@Param("value") value: string) {
    return this.roleService.getRoleByValue(value);
  }
}
