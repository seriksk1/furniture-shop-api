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
import { Category } from "./categories.model";
import { CategoriesService } from "./categories.service";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";

@ApiTags("Categories")
@Controller(endpoints.categories.main)
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @ApiOperation({ summary: "Create category" })
  @ApiResponse({ status: 200, type: [Category] })
  @Post()
  create(@Body() dto: CreateCategoryDto) {
    return this.categoriesService.createCategory(dto);
  }

  @ApiOperation({ summary: "Update category" })
  @ApiResponse({ status: 200, type: [Category] })
  @Put(endpoints.categories.id)
  update(@Param("id") id: number, @Body() dto: UpdateCategoryDto) {
    return this.categoriesService.updateCategory(id, dto);
  }

  @ApiOperation({ summary: "Delete category" })
  @ApiResponse({ status: 200, type: [Category] })
  @Delete(endpoints.categories.id)
  delete(@Param("id") id: number) {
    return this.categoriesService.deleteCategory(id);
  }

  @ApiOperation({ summary: "Get the category by id" })
  @ApiResponse({ status: 200, type: [Category] })
  @Get(endpoints.categories.id)
  getById(@Param("id") id: number) {
    return this.categoriesService.getCategoryById(id);
  }

  @ApiOperation({ summary: "Get all categories" })
  @ApiResponse({ status: 200, type: [Category] })
  @Get()
  getAll() {
    return this.categoriesService.getAllCategories();
  }
}
