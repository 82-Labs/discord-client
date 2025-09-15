import { type LoaderFunctionArgs, redirect } from "react-router";
import {
  ACCESS_TOKEN_NAME,
  accessTokenStorage,
  REFRESH_TOKEN_NAME,
} from "~/shared/server/cookie";
import { requestKy } from "~shared/api/ky";

type KakaoLoginResponse = { accessToken: string; refreshToken: string | null };

export const kakaoLoader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");

  const res = await requestKy.post("auth/kakao", {
    json: { code },
    throwHttpErrors: false,
  });

  const { accessToken, refreshToken } =
    (await res.json()) as KakaoLoginResponse;

  const cookieHeader = request.headers.get("Cookie");
  const session = await accessTokenStorage.getSession(cookieHeader);

  session.set(ACCESS_TOKEN_NAME, accessToken);
  if (refreshToken) {
    session.set(REFRESH_TOKEN_NAME, refreshToken);
  } else {
    session.unset(REFRESH_TOKEN_NAME);
  }

  const headers = new Headers();
  headers.append("Set-Cookie", await accessTokenStorage.commitSession(session));

  const target = refreshToken ? "/channels/@me" : "/auth/register";
  return redirect(target, { headers });
};
