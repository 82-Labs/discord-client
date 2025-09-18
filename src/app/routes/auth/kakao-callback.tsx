import { kakaoLoader } from "~features/auth/kakao/api";
import { KakaoCallbackPage } from "~pages/auth/ui";

import type { Route } from "./+types/kakao-callback";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Discord Clone - 카카오 로그인" },
    { name: "description", content: "카카오 로그인 중입니다." },
  ];
}

export const loader = kakaoLoader;
export default function KakaoCallback() {
  return <KakaoCallbackPage />;
}
