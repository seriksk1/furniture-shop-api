import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ProductCreationAttrs {
  name: string;
  description: string;
  price: number;
  image?: string;
}

@Table({ tableName: "products" })
export class Product extends Model<Product, ProductCreationAttrs> {
  @ApiProperty({ example: "1", description: "Product unique ID" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "Red Sofa", description: "Product name" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({
    example: "Some info about the product",
    description: "Product description",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @ApiProperty({ example: "200", description: "Product price" })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  price: number;

  @ApiProperty({ example: "image.png", description: "Product image" })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  image: string;
}
