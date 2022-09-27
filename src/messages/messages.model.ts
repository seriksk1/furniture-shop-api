import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface MessageCreationAttrs {
  text: string;
  rating: number;
}

@Table({ tableName: "messages" })
export class Message extends Model<Message, MessageCreationAttrs> {
  @ApiProperty({ example: "1", description: "Message unique ID" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "Good product!", description: "Message text" })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  text: string;

  @ApiProperty({
    example: "5",
    description: "Rating",
  })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  rating: number;
}
