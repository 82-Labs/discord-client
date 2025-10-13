import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { queryClient } from "~app/providers";
import { requestKy } from "~shared/api";
import { extractErrorMessage } from "~shared/api/error";
import { QUERY_KEYS } from "~shared/api/query-keys";

const deleteFriend = async (targetUsername: string) => {
  try {
    await requestKy.delete(`users/relations/${targetUsername}`, {
      credentials: "include",
    });
    return;
  } catch (error) {
    const message = await extractErrorMessage(error);
    throw new Error(message);
  }
};

export function useDeleteFriend() {
  return useMutation({
    mutationFn: (targetUsername: string) => deleteFriend(targetUsername),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.FRIENDS],
      });
      toast.success("친구가 삭제되었습니다.");
    },
  });
}
