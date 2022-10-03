import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { Order } from "./orders.model";

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order)
    private orderRepository: typeof Order
  ) {}

  async createOrder(dto: CreateOrderDto) {
    try {
      const order = await this.orderRepository.create(dto);
      return order;
    } catch (error) {
      throw new HttpException("Order was not created", HttpStatus.BAD_REQUEST);
    }
  }
  async updateOrder(id: number, dto: UpdateOrderDto) {
    try {
      const order = await this.orderRepository.update(dto, {
        where: { id },
      });
      return order;
    } catch (error) {
      throw new HttpException("Order was not found", HttpStatus.NOT_FOUND);
    }
  }

  async deleteOrder(id: number) {
    try {
      await this.orderRepository.destroy({ where: { id } });
    } catch (error) {
      throw new HttpException("Order was not found", HttpStatus.NOT_FOUND);
    }
  }

  async getOrderById(id: number) {
    try {
      const order = await this.orderRepository.findOne({ where: { id } });
      return order;
    } catch (error) {
      throw new HttpException("Order was not found", HttpStatus.NOT_FOUND);
    }
  }

  async getAllOrders() {
    try {
      const Orders = await this.orderRepository.findAll({
        include: { all: true },
      });
      return Orders;
    } catch (error) {
      throw new HttpException("Orders were not found", HttpStatus.NOT_FOUND);
    }
  }
}
