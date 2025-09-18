import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { requestKy } from "~/shared/api/ky";

const handleRegister = async (username: string): Promise<void> => {
  const response = await requestKy.post("users/register", {
    credentials: "include",
    json: { username },
  });
  return response.json();
};

export const useRegister = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: handleRegister,
    onSuccess: () => {
      toast.success("계정이 생성되었습니다.");
      navigate("/channels/@me", { replace: true });
    },
    onError: () => {
      console.error("계정 생성에 실패했습니다.");
      toast.error("계정 생성에 실패했습니다.");
    },
  });

  return mutation;
};
