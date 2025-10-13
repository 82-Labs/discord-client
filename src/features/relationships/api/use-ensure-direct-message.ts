import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { toast } from "sonner";

import { extractErrorMessage } from "~shared/api/error";
import { requestKy } from "~shared/api/ky";

interface EnsureDirectMessageResponse {
  channelId: string;
  users: string[];
  hidden: boolean;
}

const ensureDirectMessage = async (
  userIds: number[],
): Promise<EnsureDirectMessageResponse> => {
  try {
    const response = await requestKy.post(`channels/direct-messages`, {
      credentials: "include",
      json: { userIds },
    });
    return response.json();
  } catch (error) {
    const message = await extractErrorMessage(error);
    throw new Error(message);
  }
};

export function useEnsureDirectMessage() {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (userIds: number[]) => ensureDirectMessage(userIds),
    onSuccess: ({ channelId }) => {
      navigate(`/channels/@me/${channelId}`);
    },
    onError: () => toast.error("대화를 시작하는데 실패했습니다."),
  });
}
