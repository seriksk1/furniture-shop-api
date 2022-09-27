import { OrdersService } from "./orders.service";
import { OrdersController } from "./orders.controller";
import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Order } from "./orders.model";

@Module({
  imports: [SequelizeModule.forFeature([Order])],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
