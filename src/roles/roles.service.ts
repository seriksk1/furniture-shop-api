import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateRoleDto } from "./dto/create-role.dto";
import { UpdateRoleDto } from "./dto/update-role.dto";
import { Role } from "./roles.model";

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private roleRepository: typeof Role) {}

  async createRole(dto: CreateRoleDto) {
    try {
      const role = await this.roleRepository.create(dto);
      return role;
    } catch (error) {
      throw new HttpException("Role is already exists", HttpStatus.BAD_REQUEST);
    }
  }

  async updateRole(id: number, dto: UpdateRoleDto) {
    try {
      const role = await this.roleRepository.update(dto, {
        where: { id },
      });
      return role;
    } catch (error) {
      throw new HttpException("Role was not found", HttpStatus.NOT_FOUND);
    }
  }

  async deleteRole(id: number) {
    try {
      await this.roleRepository.destroy({ where: { id } });
    } catch (error) {
      throw new HttpException("Role was not found", HttpStatus.NOT_FOUND);
    }
  }

  async getAll() {
    try {
      const roles = await this.roleRepository.findAll({
        include: { all: true },
      });
      return roles;
    } catch (error) {
      throw new HttpException("Role was not found", HttpStatus.NOT_FOUND);
    }
  }

  async getRoleByValue(value: string) {
    try {
      const role = await this.roleRepository.findOne({ where: { value } });
      return role;
    } catch (error) {
      throw new HttpException("Roles were not found", HttpStatus.NOT_FOUND);
    }
  }
}
