import { AchievementsService } from "./achievements.service";
import { AchievementsController } from "./achievements.controller";
import { Module } from "@nestjs/common";

@Module({
  imports: [],
  controllers: [AchievementsController],
  providers: [AchievementsService],
})
export class AchievementsModule {}
