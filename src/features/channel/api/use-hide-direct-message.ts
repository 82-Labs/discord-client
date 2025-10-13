import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { extractErrorMessage } from "~shared/api/error";
import { requestKy } from "~shared/api/ky";
import { queryClient } from "~shared/api/query";
import { QUERY_KEYS } from "~shared/api/query-keys";

const hideDirectMessage = async (channelId: number) => {
  try {
    await requestKy.patch(`channels/direct-messages/${channelId}/visibility`, {
      credentials: "include",
      json: { hide: true },
    });
  } catch (error) {
    const message = await extractErrorMessage(error);
    throw new Error(message);
  }
};

export function useHideDirectMessage() {
  return useMutation({
    mutationFn: (channelId: number) => hideDirectMessage(channelId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.DIRECT_MESSAGES],
      });
    },
    onError: () => {
      toast.error("대화를 숨기는데 실패했습니다.");
    },
  });
}
