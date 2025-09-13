import KakaoCallbackPage from "~pages/auth/kakao-callback";

export function meta() {
  return [
    { title: "Discord Clone - 카카오 로그인" },
    { name: "description", content: "카카오 로그인 중입니다." },
  ];
}

export default function KakaoCallback() {
  return <KakaoCallbackPage />;
}
