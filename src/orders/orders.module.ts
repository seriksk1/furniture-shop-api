import { OrdersService } from "./orders.service";
import { OrdersController } from "./orders.controller";
import { Module } from "@nestjs/common";

@Module({
  imports: [],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
