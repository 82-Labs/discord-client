import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { queryClient } from "~app/providers";
import { requestKy } from "~shared/api";
import { extractErrorMessage } from "~shared/api/error";
import { QUERY_KEYS } from "~shared/api/query-keys";

const cancelFriendRequest = async (id: string) => {
  try {
    await requestKy.post(`users/relations/requests/CANCEL`, {
      credentials: "include",
      json: { requestId: id },
    });
    return;
  } catch (error) {
    const message = await extractErrorMessage(error);
    throw new Error(message);
  }
};

export function useCancelSentRequest() {
  return useMutation({
    mutationFn: (id: string) => cancelFriendRequest(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.FRIEND_SENT_REQUESTS],
      });
      toast.success("친구 요청이 취소되었습니다.");
    },
    onError: () => {
      toast.error("친구 요청을 취소하는데 실패했습니다.");
    },
  });
}
