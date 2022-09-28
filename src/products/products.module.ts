import { ProductsService } from "./products.service";
import { ProductsController } from "./products.controller";
import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Product } from "./products.model";

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [SequelizeModule.forFeature([Product])],
  exports: [ProductsService],
})
export class ProductsModule {}
