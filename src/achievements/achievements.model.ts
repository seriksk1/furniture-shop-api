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

interface AchievementCreationAttrs {
  title: string;
  description: string;
  value: string;
}

@Table({ tableName: "achievements" })
export class Achievement extends Model<Achievement, AchievementCreationAttrs> {
  @ApiProperty({ example: "1", description: "Achievement unique ID" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "Example title", description: "Achievement title" })
  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @ApiProperty({
    example: "Some achievement description",
    description: "Achievement description",
  })
  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  @ApiProperty({
    example: "false",
    description: "Achievement status",
  })
  @Column({ type: DataType.BOOLEAN })
  value: boolean;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @BelongsTo(() => User)
  author: User;
}
