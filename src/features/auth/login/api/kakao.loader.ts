import { type LoaderFunctionArgs, redirect } from "react-router";
import { accessTokenCookie, refreshTokenCookie } from "~/shared/server/cookie";
import { requestKy } from "~shared/api/ky";

type KakaoLoginResponse = { accessToken: string; refreshToken: string | null };

export const kakaoLoader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");

  const response = await requestKy.post("auth/kakao", {
    json: { code },
    throwHttpErrors: false,
  });

  const { accessToken, refreshToken } =
    (await response.json()) as KakaoLoginResponse;

  const headers = new Headers();
  headers.append("Set-Cookie", await accessTokenCookie.serialize(accessToken));
  if (refreshToken) {
    headers.append(
      "Set-Cookie",
      await refreshTokenCookie.serialize(refreshToken),
    );
  } else {
    headers.append(
      "Set-Cookie",
      await refreshTokenCookie.serialize("", { maxAge: 0 }),
    );
  }

  const target = refreshToken ? "/channels/@me" : "/auth/register";
  return redirect(target, { headers });
};
