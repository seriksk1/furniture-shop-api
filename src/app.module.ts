import { OrdersModule } from "./orders/orders.module";
import { MessagesModule } from "./messages/messages.module";
import { CategoriesModule } from "./categories/categories.module";
import { ProductsModule } from "./products/products.module";
import * as path from "path";
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
import { Category } from "./categories/categories.model";
import { Product } from "./products/products.model";
import { Order } from "./orders/orders.model";
import { Message } from "./messages/messages.model";

@Module({
  imports: [
    OrdersModule,
    MessagesModule,
    CategoriesModule,
    ProductsModule,
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
      models: [User, Role, UserRoles, Category, Product, Order, Message],
      autoLoadModels: true,
    }),
  ],
})
export class AppModule {}
