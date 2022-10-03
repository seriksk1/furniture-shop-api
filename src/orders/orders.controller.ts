import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { endpoints } from "src/constants";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { Order } from "./orders.model";
import { OrdersService } from "./orders.service";

@ApiTags("Orders")
@Controller(endpoints.orders.main)
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @ApiOperation({ summary: "Create order" })
  @ApiResponse({ status: 200, type: [Order] })
  @Post()
  create(@Body() dto: CreateOrderDto) {
    return this.ordersService.createOrder(dto);
  }

  @ApiOperation({ summary: "Update order" })
  @ApiResponse({ status: 200, type: [Order] })
  @Put(endpoints.orders.id)
  update(@Param("id") id: number, @Body() dto: UpdateOrderDto) {
    return this.ordersService.updateOrder(id, dto);
  }

  @ApiOperation({ summary: "Delete order" })
  @ApiResponse({ status: 200, type: [Order] })
  @Delete(endpoints.orders.id)
  delete(@Param("id") id: number) {
    return this.ordersService.deleteOrder(id);
  }

  @ApiOperation({ summary: "Get the order by id" })
  @ApiResponse({ status: 200, type: [Order] })
  @Get(endpoints.orders.id)
  getById(@Param("id") id: number) {
    return this.ordersService.getOrderById(id);
  }

  @ApiOperation({ summary: "Get all orders" })
  @ApiResponse({ status: 200, type: [Order] })
  @Get()
  getAll() {
    return this.ordersService.getAllOrders();
  }
}
