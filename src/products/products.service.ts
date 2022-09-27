import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Product } from "./products.model";

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product)
    private productRepository: typeof Product
  ) {}
}
