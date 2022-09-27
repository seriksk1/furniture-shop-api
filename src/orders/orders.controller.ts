import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { endpoints } from "src/constants";
import { OrdersService } from "./orders.service";

@ApiTags("Orders")
@Controller(endpoints.orders.main)
export class OrdersController {
  constructor(private ordersService: OrdersService) {}
}
