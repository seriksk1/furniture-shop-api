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

interface GoalCreationAttrs {
  title: string;
  description: string;
  date: string;
}

@Table({ tableName: "goals" })
export class Goal extends Model<Goal, GoalCreationAttrs> {
  @ApiProperty({ example: "1", description: "Goal unique ID" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "Example title", description: "Goal title" })
  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @ApiProperty({
    example: "Some goal description",
    description: "Goal description",
  })
  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  @ApiProperty({
    example: "Some goal date",
    description: "Goal date",
  })
  @Column({ type: DataType.STRING, allowNull: false })
  date: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @BelongsTo(() => User)
  author: User;
}
