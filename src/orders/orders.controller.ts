import { Controller, Get } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { endpoints } from "src/constants";
import { Order } from "./orders.model";
import { OrdersService } from "./orders.service";

@ApiTags("Orders")
@Controller(endpoints.orders.main)
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @ApiOperation({ summary: "Get all orders" })
  @ApiResponse({ status: 200, type: [Order] })
  @Get()
  getAll() {
    return this.ordersService.getAllOrders();
  }
}
