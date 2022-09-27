import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface CategoryCreationAttrs {
  name: string;
  description: string;
}

@Table({ tableName: "categories" })
export class Category extends Model<Category, CategoryCreationAttrs> {
  @ApiProperty({ example: "1", description: "Category unique ID" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "Sofas Collection", description: "Category name" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({
    example: "Some info about the category",
    description: "Category description",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;
}
