import { GoalsService } from "./goals.service";
import { GoalsController } from "./goals.controller";
import { Module } from "@nestjs/common";

@Module({
  imports: [],
  controllers: [GoalsController],
  providers: [GoalsService],
})
export class GoalsModule {}
