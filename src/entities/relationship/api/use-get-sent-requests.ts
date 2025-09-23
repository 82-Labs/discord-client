import { useQuery } from "@tanstack/react-query";
import { requestKy } from "~shared/api/ky";
import { QUERY_KEYS } from "~shared/api/query-keys";

export interface SentRequestsContent {
  id: string;
  receiverId: string;
  receiverUsername: string;
  receiverNickname: string;
}

interface SentRequestsResponse {
  content: SentRequestsContent[];
}

const getSentRequests = async (): Promise<SentRequestsResponse> => {
  const response = await requestKy.get("users/relations/requests/sent");
  return response.json();
};

export function useGetSentRequests() {
  return useQuery({
    queryKey: [QUERY_KEYS.FRIEND_SENT_REQUESTS],
    queryFn: () => getSentRequests(),
    select: (data) => data.content,
  });
}
