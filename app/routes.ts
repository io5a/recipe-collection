import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("account", "routes/account.tsx"),
  route("search", "routes/search.tsx"),
  route("details", "routes/details.tsx"),
] satisfies RouteConfig;
