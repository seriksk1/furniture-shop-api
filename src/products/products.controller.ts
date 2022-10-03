import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { endpoints } from "src/constants";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { ProductsService } from "./products.service";
import { Product } from "./products.model";

@ApiTags("Products")
@Controller(endpoints.products.main)
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @ApiOperation({ summary: "Create product" })
  @ApiResponse({ status: 200, type: [Product] })
  @Post()
  create(@Body() dto: CreateProductDto) {
    return this.productsService.createProduct(dto);
  }

  @ApiOperation({ summary: "Update product" })
  @ApiResponse({ status: 200, type: [Product] })
  @Put(endpoints.products.id)
  update(@Param("id") id: number, @Body() dto: UpdateProductDto) {
    return this.productsService.updateProduct(id, dto);
  }

  @ApiOperation({ summary: "Delete product" })
  @ApiResponse({ status: 200, type: [Product] })
  @Delete(endpoints.products.id)
  delete(@Param("id") id: number) {
    return this.productsService.deleteProduct(id);
  }

  @ApiOperation({ summary: "Get the product by id" })
  @ApiResponse({ status: 200, type: [Product] })
  @Get(endpoints.products.id)
  getById(@Param("id") id: number) {
    return this.productsService.getProductById(id);
  }

  @ApiOperation({ summary: "Get all products" })
  @ApiResponse({ status: 200, type: [Product] })
  @Get()
  getAll() {
    return this.productsService.getAllProducts();
  }
}
