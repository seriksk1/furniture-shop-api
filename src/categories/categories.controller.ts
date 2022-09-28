import { Controller, Get } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { endpoints } from "src/constants";
import { Category } from "./categories.model";
import { CategoriesService } from "./categories.service";

@ApiTags("Categories")
@Controller(endpoints.categories.main)
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @ApiOperation({ summary: "Get all categories" })
  @ApiResponse({ status: 200, type: [Category] })
  @Get()
  getAll() {
    return this.categoriesService.getAllCategories();
  }
}
