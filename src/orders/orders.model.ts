import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface OrderCreationAttrs {
  productId: number;
  amount: number;
  totalPrice: number;
}

@Table({ tableName: "orders" })
export class Order extends Model<Order, OrderCreationAttrs> {
  @ApiProperty({ example: "1", description: "Order unique ID" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "1", description: "Product ID" })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  productId: number;

  @ApiProperty({ example: "1", description: "Product amount" })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  amount: number;

  @ApiProperty({
    example: "Some info about the Order",
    description: "Order description",
  })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  totalPrice: number;
}
