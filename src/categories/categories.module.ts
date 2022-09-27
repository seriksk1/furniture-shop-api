import { CategoriesService } from "./categories.service";
import { CategoriesController } from "./categories.controller";
import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Category } from "./categories.model";

@Module({
  imports: [SequelizeModule.forFeature([Category])],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}
