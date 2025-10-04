import { useQuery } from "@tanstack/react-query";
import { requestKy } from "~shared/api/ky";
import { QUERY_KEYS } from "~shared/api/query-keys";

export interface ReceivedRequestsContent {
  id: string;
  senderId: string;
  senderUsername: string;
  senderNickname: string;
}

interface ReceivedRequestsResponse {
  content: ReceivedRequestsContent[];
}

const getReceivedRequests = async (): Promise<ReceivedRequestsResponse> => {
  const response = await requestKy.get("users/relations/requests/received");
  return response.json();
};

export function useGetReceivedRequests() {
  return useQuery({
    queryKey: [QUERY_KEYS.FRIEND_RECEIVED_REQUESTS],
    queryFn: () => getReceivedRequests(),
    select: (data) => data.content,
  });
}
