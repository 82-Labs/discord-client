import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { extractErrorMessage } from "~shared/api/error";
import { queryClient } from "~app/providers";
import { requestKy } from "~shared/api/ky";
import { QUERY_KEYS } from "~shared/api/query-keys";

const addFriend = async (username: string) => {
  try {
    await requestKy.post("users/relations/request", {
      credentials: "include",
      json: { receiverUsername: username },
    });
  } catch (error) {
    const message = await extractErrorMessage(error);
    throw new Error(message);
  }
};

interface UseAddFriendOptions {
  onError?: () => void;
}

export const useAddFriend = (options?: UseAddFriendOptions) => {
  return useMutation({
    mutationFn: (username: string) => addFriend(username),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.FRIEND_SENT_REQUESTS],
      });
      toast.success("친구 추가 요청이 전송되었습니다.");
    },
    onError: () => {
      toast.error("친구 추가 요청에 실패했습니다.");
      options?.onError?.();
    },
  });
};
