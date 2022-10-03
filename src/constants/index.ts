export const endpoints = {
  users: {
    main: "/users",
    role: "/role",
    ban: "/ban",
    unban: "/unban",
  },
  roles: {
    main: "/roles",
    value: "/:value",
  },
  auth: {
    main: "/auth",
    login: "/login",
    register: "/registration",
  },
  products: {
    main: "/products",
    id: "/:id",
  },
  orders: {
    main: "/orders",
    id: "/:id",
  },
  categories: {
    main: "/categories",
    id: "/:id",
  },
  messages: {
    main: "/messages",
    id: "/:id",
  },
};

export enum RolesEnum {
  Admin = "admin",
  User = "user",
  Creator = "creator",
}
