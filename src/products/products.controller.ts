import { Controller, Get } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { endpoints } from "src/constants";
import { Product } from "./products.model";
import { ProductsService } from "./products.service";

@ApiTags("Products")
@Controller(endpoints.posts.main)
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @ApiOperation({ summary: "Get all products" })
  @ApiResponse({ status: 200, type: [Product] })
  @Get()
  getAll() {
    return this.productsService.getAllProducts();
  }
}
