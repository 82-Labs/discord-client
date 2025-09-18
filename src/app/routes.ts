import { index, type RouteConfig, route } from "@react-router/dev/routes";

export default [
  index("routes/landing.tsx"),
  route("/auth/kakao", "routes/auth/kakao-callback.tsx"),
  route("/auth/register", "routes/auth/register.tsx"),
  route("/channels", "routes/channels/layout.tsx", [
    route("@me", "routes/channels/direct-messenger.tsx"),
  ]),
] satisfies RouteConfig;
