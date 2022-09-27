import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { endpoints } from "src/constants";
import { CategoriesService } from "./categories.service";

@ApiTags("Categories")
@Controller(endpoints.categories.main)
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}
}
