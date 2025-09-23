import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { queryClient } from "~app/providers";
import { requestKy } from "~shared/api";
import { extractErrorMessage } from "~shared/api/error";
import { QUERY_KEYS } from "~shared/api/query-keys";

const acceptFriendRequest = async (id: string) => {
  try {
    await requestKy.post(`users/relations/requests/ACCEPT`, {
      credentials: "include",
      json: { requestId: id },
    });
    return;
  } catch (error) {
    const message = await extractErrorMessage(error);
    throw new Error(message);
  }
};

export function useAcceptFriendRequest() {
  return useMutation({
    mutationFn: (id: string) => acceptFriendRequest(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.FRIEND_RECEIVED_REQUESTS],
      });
      toast.success("친구 요청이 수락되었습니다.");
    },
    onError: () => {
      toast.error("친구 요청을 수락하는데 실패했습니다.");
    },
  });
}
