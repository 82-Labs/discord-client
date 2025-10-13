import { useQuery } from "@tanstack/react-query";
import type { FriendContent } from "~/entities/relationship/api/use-get-friends";
import { extractErrorMessage } from "~/shared/api/error";
import { requestKy } from "~shared/api/ky";
import { QUERY_KEYS } from "~shared/api/query-keys";

interface DirectMessageContent {
  channelId: string;
  users: FriendContent[];
  hidden: boolean;
}

interface DirectMessagesResponse {
  content: DirectMessageContent[];
}

const getDirectMessages = async (): Promise<DirectMessagesResponse> => {
  try {
    const response = await requestKy.get(`channels/direct-messages`);
    return response.json();
  } catch (error) {
    const message = await extractErrorMessage(error);
    throw new Error(message);
  }
};

export function useGetDirectMessages() {
  return useQuery({
    queryKey: [QUERY_KEYS.DIRECT_MESSAGES],
    queryFn: () => getDirectMessages(),
    select: (response) => response.content,
  });
}
