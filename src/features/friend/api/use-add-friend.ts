import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { requestKy } from "~/shared/api/ky";

const addFriend = async (username: string) => {
  const response = await requestKy.post("users/relations/request", {
    credentials: "include",
    json: { receiverUsername: username },
  });
  return response.json();
};

interface UseAddFriendOptions {
  onError?: () => void;
}

export const useAddFriend = (options?: UseAddFriendOptions) => {
  const mutation = useMutation({
    mutationFn: (username: string) => addFriend(username),
    onSuccess: () => {
      toast.success("친구 추가 요청이 전송되었습니다.");
    },
    onError: () => {
      toast.error("친구 추가 요청에 실패했습니다.");
      options?.onError?.();
    },
  });

  return mutation;
};
