import { useGetSentRequests } from "../api/use-get-sent-requests";
import { FriendHeader } from "./friend-header";
import type { RenderActions } from "./received-requests-list";
import { RequestItem } from "./request-item";

interface SentRequestsProps {
  renderActions?: RenderActions;
  searchValue: string;
}

export function SentRequests({
  renderActions,
  searchValue,
}: SentRequestsProps) {
  const { data: sentRequests } = useGetSentRequests();

  const filteredSentRequests = sentRequests?.filter((request) =>
    request.receiverUsername.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <div>
      {(filteredSentRequests?.length ?? 0) > 0 && (
        <>
          <FriendHeader type="sent" count={filteredSentRequests?.length ?? 0} />

          <ul>
            {filteredSentRequests?.map((request) => (
              <RequestItem
                key={request.id}
                type="sent"
                username={request.receiverUsername}
                nickname={request.receiverNickname}
                avatar={
                  "https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxsG72wAo9EWJR4yQWyJJaDaK1XdUso6cUMpI9hAdPUU_FNs11cY1X284vsHrnWtRw7oqRpN1m9YAg21d_aNKnIo-&format=source&h=210"
                }
                actionsSlot={renderActions?.({
                  requestId: request.id,
                  type: "sent",
                })}
              />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
