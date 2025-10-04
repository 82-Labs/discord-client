import { type LoaderFunctionArgs, redirect } from "react-router";
import { z } from "zod";
import { requestKy } from "~shared/api/ky";
import {
  accessTokenCookie,
  refreshTokenCookie,
} from "~shared/lib/utils/cookie";

const KakaoLoginResponseSchema = z.object({
  accessToken: z.string().min(10),
  refreshToken: z.string().min(10).nullable(),
});

export const kakaoLoader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");

  const response = await requestKy.post("auth/kakao", {
    json: { code },
  });

  const json = (await response.json()) as unknown;
  const { accessToken, refreshToken } = KakaoLoginResponseSchema.parse(json);

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
