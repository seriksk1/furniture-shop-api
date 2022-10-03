import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { Product } from "./products.model";

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product)
    private productRepository: typeof Product
  ) {}

  async createProduct(dto: CreateProductDto) {
    try {
      const product = await this.productRepository.create(dto);
      return product;
    } catch (error) {
      throw new HttpException(
        "Product was not created",
        HttpStatus.BAD_REQUEST
      );
    }
  }
  async updateProduct(id: number, dto: UpdateProductDto) {
    try {
      const product = await this.productRepository.update(dto, {
        where: { id },
      });
      return product;
    } catch (error) {
      throw new HttpException("Product was not found", HttpStatus.NOT_FOUND);
    }
  }

  async deleteProduct(id: number) {
    try {
      await this.productRepository.destroy({ where: { id } });
    } catch (error) {
      throw new HttpException("Product was not found", HttpStatus.NOT_FOUND);
    }
  }

  async getProductById(id: number) {
    try {
      const product = await this.productRepository.findOne({ where: { id } });
      return product;
    } catch (error) {
      throw new HttpException("Product was not found", HttpStatus.NOT_FOUND);
    }
  }

  async getAllProducts() {
    try {
      const products = await this.productRepository.findAll({
        include: { all: true },
      });
      return products;
    } catch (error) {
      throw new HttpException("Products were not found", HttpStatus.NOT_FOUND);
    }
  }
}
