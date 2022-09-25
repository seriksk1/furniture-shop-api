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
    main: "/posts",
  },
  achievements: {
    main: "/achievements",
  },
  events: {
    main: "/events",
  },
  goals: {
    main: "/goals",
  },
};

export enum RolesEnum {
  Admin = "admin",
  User = "user",
  Creator = "creator",
}
