import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { endpoints } from "src/constants";
import { ProductsService } from "./products.service";

@ApiTags("Products")
@Controller(endpoints.posts.main)
export class ProductsController {
  constructor(private productsService: ProductsService) {}
}
