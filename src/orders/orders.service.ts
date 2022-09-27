import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Order } from "./orders.model";

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order)
    private orderRepository: typeof Order
  ) {}
}
