import { AchievementsModule } from "./achievements/achievements.module";
import * as path from "path";
import { EventsModule } from "./events/events.module";
import { GoalsModule } from "./goals/goals.module";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { ServeStaticModule } from "@nestjs/serve-static";
import { FilesModule } from "./files/files.module";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { RolesModule } from "./roles/roles.module";
import { User } from "./users/users.model";
import { Role } from "./roles/roles.model";
import { UserRoles } from "./roles/user-roles.model";
import { Achievement } from "./achievements/achievements.model";
import { Event } from "./events/events.model";
import { Goal } from "./goals/goals.model";

@Module({
  imports: [
    AchievementsModule,
    EventsModule,
    GoalsModule,
    FilesModule,
    AuthModule,
    RolesModule,
    UsersModule,
    ConfigModule.forRoot({ envFilePath: `.${process.env.NODE_ENV}.env` }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, "static"),
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Role, UserRoles, Achievement, Event, Goal],
      autoLoadModels: true,
    }),
  ],
})
export class AppModule {}
