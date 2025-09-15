import { createCookieSessionStorage } from "react-router";

export const ACCESS_TOKEN_NAME = "discordCloneAccessToken";
export const REFRESH_TOKEN_NAME = "discordCloneRefreshToken";

const secret = process.env.COOKIE_SECRET;
if (!secret) {
  throw new Error("Missing COOKIE_SECRET");
}

export const accessTokenStorage = createCookieSessionStorage({
  cookie: {
    name: "discordCloneAccessToken",
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    secrets: [secret],
    maxAge: 60 * 60 * 24,
  },
});
