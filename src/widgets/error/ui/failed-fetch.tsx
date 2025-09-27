import { useNavigate } from "react-router";
import { ErrorIcon } from "~/shared/ui/icons/error-icon";
import { ErrorPageLayout } from "~shared/ui/error-page-layout";

export function FailedFetch() {
  const navigate = useNavigate();

  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <ErrorPageLayout
      title="연결에 문제가 발생했습니다"
      description="네트워크 연결을 확인하고 잠시 후 다시 시도해 주세요."
      primaryButton={{
        text: "다시 시도",
        onClick: handleRetry,
      }}
      secondaryButton={{
        text: "홈으로 이동",
        onClick: () => navigate("/"),
      }}
      gradientColors="from-orange-500/25 via-red-500/10 to-pink-400/10"
      glowColor="bg-orange-500/20"
    >
      <ErrorIcon
        strokeColor="#ef4444"
        circleColor="#ef4444"
        ariaLabel="네트워크 연결 오류"
        title="네트워크 연결 오류"
      />
    </ErrorPageLayout>
  );
}
