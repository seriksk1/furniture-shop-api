import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { endpoints } from "src/constants";
import { CreateRoleDto } from "./dto/create-role.dto";
import { UpdateRoleDto } from "./dto/update-role.dto";
import { RolesService } from "./roles.service";
import { Role } from "./roles.model";

@ApiTags("Roles")
@Controller(endpoints.roles.main)
export class RolesController {
  constructor(private roleService: RolesService) {}

  @ApiOperation({ summary: "Create role" })
  @ApiResponse({ status: 200, type: Role })
  @Post()
  create(@Body() dto: CreateRoleDto) {
    return this.roleService.createRole(dto);
  }

  @ApiOperation({ summary: "Update role" })
  @ApiResponse({ status: 200, type: [Role] })
  @Put(endpoints.roles.value)
  update(@Param("value") value: number, @Body() dto: UpdateRoleDto) {
    return this.roleService.updateRole(value, dto);
  }

  @ApiOperation({ summary: "Delete role" })
  @ApiResponse({ status: 200, type: [Role] })
  @Delete(endpoints.roles.value)
  delete(@Param("value") value: number) {
    return this.roleService.deleteRole(value);
  }

  @ApiOperation({ summary: "Get role by the value" })
  @ApiResponse({ status: 200, type: Role })
  @Get(endpoints.roles.value)
  getByValue(@Param("value") value: string) {
    return this.roleService.getRoleByValue(value);
  }

  @ApiOperation({ summary: "Get all roles" })
  @ApiResponse({ status: 200, type: [Role] })
  @Get()
  getAll() {
    return this.roleService.getAll();
  }
}
