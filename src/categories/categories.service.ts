import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Category } from "./categories.model";

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category)
    private categoryRepository: typeof Category
  ) {}
}
