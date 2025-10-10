import { useQuery } from "@tanstack/react-query";
import { requestKy } from "~shared/api/ky";
import { QUERY_KEYS } from "~shared/api/query-keys";

export type FriendStatus =
  | "NONE"
  | "ONLINE"
  | "IDLE"
  | "DO_NOT_DISTURB"
  | "INVISIBLE"
  | "OFFLINE";

export type FriendType = "FRIEND" | "BLOCKED";

export interface FriendContent {
  id: string;
  userId: number;
  username: string;
  nickname: string;
  type: FriendType;
  status: FriendStatus;
}

interface FriendResponse {
  content: FriendContent[];
}

const getFriends = async (): Promise<FriendResponse> => {
  const response = await requestKy.get("users/relations/FRIEND");
  return response.json();
};

export function useGetFriends() {
  return useQuery({
    queryKey: [QUERY_KEYS.FRIENDS],
    queryFn: () => getFriends(),
    select: (data) => data.content,
  });
}
