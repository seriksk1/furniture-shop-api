import { CategoriesService } from "./categories.service";
import { CategoriesController } from "./categories.controller";
import { Module } from "@nestjs/common";

@Module({
  imports: [],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}
