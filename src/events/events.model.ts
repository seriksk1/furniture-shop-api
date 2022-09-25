import { ApiProperty } from "@nestjs/swagger";
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { User } from "src/users/users.model";

interface EventCreationAttrs {
  title: string;
  description: string;
  date: string;
}

@Table({ tableName: "events" })
export class Event extends Model<Event, EventCreationAttrs> {
  @ApiProperty({ example: "1", description: "Event unique ID" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "Example title", description: "Event title" })
  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @ApiProperty({
    example: "Some event description",
    description: "Event description",
  })
  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  @ApiProperty({
    example: "Some event date",
    description: "Event date",
  })
  @Column({ type: DataType.STRING, allowNull: false })
  date: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @BelongsTo(() => User)
  author: User;
}
