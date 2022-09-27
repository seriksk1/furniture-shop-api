export const endpoints = {
  users: {
    main: "/users",
    role: "/role",
    ban: "/ban",
    unban: "/unban",
  },
  roles: {
    main: "/roles",
    get: "/:value",
  },
  auth: {
    main: "/auth",
    login: "/login",
    register: "/registration",
  },
  posts: {
    main: "/products",
  },
  orders: {
    main: "/orders",
  },
  categories: {
    main: "/categories",
  },
  messages: {
    main: "/messages",
  },
};

export enum RolesEnum {
  Admin = "admin",
  User = "user",
  Creator = "creator",
}
