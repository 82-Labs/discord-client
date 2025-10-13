import { useQuery } from "@tanstack/react-query";
import type { FriendStatus } from "~entities/relationship/api/use-get-friends";
import { extractErrorMessage } from "~/shared/api/error";
import { requestKy } from "~shared/api/ky";
import { QUERY_KEYS } from "~shared/api/query-keys";

interface GetUserResponse {
  id: number;
  username: string;
  nickname: string;
  status: FriendStatus;
}

const getUser = async (): Promise<GetUserResponse> => {
  try {
    const response = await requestKy.get("users/me");
    return response.json();
  } catch (error) {
    const message = await extractErrorMessage(error);
    throw new Error(message);
  }
};

export function useGetUser() {
  return useQuery({
    queryKey: [QUERY_KEYS.USER],
    queryFn: () => getUser(),
  });
}
