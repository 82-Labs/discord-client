export const redirectToKakaoAuth = async (): Promise<void> => {
  const kakaoAuthUrl = new URL("https://kauth.kakao.com/oauth/authorize");
  kakaoAuthUrl.searchParams.set(
    "client_id",
    import.meta.env.VITE_KAKAO_CLIENT_ID,
  );
  kakaoAuthUrl.searchParams.set(
    "redirect_uri",
    import.meta.env.VITE_KAKAO_REDIRECT_URI,
  );
  kakaoAuthUrl.searchParams.set("response_type", "code");

  window.location.href = kakaoAuthUrl.toString();
};
