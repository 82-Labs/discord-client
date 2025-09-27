import { useNavigate } from "react-router";
import { ErrorIcon } from "~/shared/ui/icons/error-icon";
import { ErrorPageLayout } from "~shared/ui/error-page-layout";

export function NotFound() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <ErrorPageLayout
      title="페이지를 찾을 수 없습니다"
      description="요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다."
      primaryButton={{
        text: "이전 페이지로 돌아가기",
        onClick: handleGoBack,
      }}
      secondaryButton={{
        text: "홈으로 이동",
        onClick: () => navigate("/"),
      }}
      gradientColors="from-red-500/25 via-orange-500/10 to-yellow-400/10"
      glowColor="bg-red-500/20"
    >
      <ErrorIcon
        strokeColor="#ef4444"
        circleColor="#ef4444"
        ariaLabel="페이지를 찾을 수 없음"
        title="페이지를 찾을 수 없음"
      />
    </ErrorPageLayout>
  );
}
