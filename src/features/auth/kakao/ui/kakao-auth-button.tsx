import { redirectToKakaoAuth } from "~features/auth/kakao/lib/redirect-to-kakao-auth";

export default function KakaoAuthButton() {
  return (
    <button
      className="cursor-pointer "
      type="button"
      onClick={redirectToKakaoAuth}
    >
      <img
        src="/ko_kakao_login_mobile.webp"
        alt="kakao login button"
        className="flex md:hidden w-full h-full  object-contain"
        width={100}
        height={36}
      />

      <img
        src="/ko_kakao_login_desktop.webp"
        alt="kakao login button"
        className="hidden md:flex w-full h-full  object-contain"
        width={100}
        height={36}
      />
    </button>
  );
}
