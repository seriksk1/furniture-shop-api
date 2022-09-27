import { MessagesService } from "./messages.service";
import { MessagesController } from "./messages.controller";
import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Message } from "./messages.model";

@Module({
  imports: [SequelizeModule.forFeature([Message])],
  controllers: [MessagesController],
  providers: [MessagesService],
})
export class MessagesModule {}
