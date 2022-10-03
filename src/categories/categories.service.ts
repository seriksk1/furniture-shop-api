import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Category } from "./categories.model";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category)
    private categoryRepository: typeof Category
  ) {}

  async createCategory(dto: CreateCategoryDto) {
    try {
      const category = await this.categoryRepository.create(dto);
      return category;
    } catch (error) {
      throw new HttpException(
        "Category was not created",
        HttpStatus.BAD_REQUEST
      );
    }
  }
  async updateCategory(id: number, dto: UpdateCategoryDto) {
    try {
      const category = await this.categoryRepository.update(dto, {
        where: { id },
      });
      return category;
    } catch (error) {
      throw new HttpException("Category was not found", HttpStatus.NOT_FOUND);
    }
  }

  async deleteCategory(id: number) {
    try {
      await this.categoryRepository.destroy({ where: { id } });
    } catch (error) {
      throw new HttpException("Category was not found", HttpStatus.NOT_FOUND);
    }
  }

  async getCategoryById(id: number) {
    try {
      const category = await this.categoryRepository.findOne({ where: { id } });
      return category;
    } catch (error) {
      throw new HttpException("Category was not found", HttpStatus.NOT_FOUND);
    }
  }

  async getAllCategories() {
    try {
      const categories = await this.categoryRepository.findAll({
        include: { all: true },
      });
      return categories;
    } catch (error) {
      throw new HttpException(
        "Categories were not found",
        HttpStatus.NOT_FOUND
      );
    }
  }
}
