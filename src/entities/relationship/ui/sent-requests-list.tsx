import { useGetSentRequests } from "../api/use-get-sent-requests";
import { FriendRequestHeader } from "./friend-request-header";
import { RequestItem } from "./request-item";

interface SentRequestsProps {
  renderActions?: (args: {
    type: "received" | "sent";
    requestId: string;
  }) => React.ReactNode;
}

export function SentRequests({ renderActions }: SentRequestsProps) {
  const { data: sentRequests } = useGetSentRequests();
  return (
    <div>
      {(sentRequests?.length ?? 0) > 0 && (
        <>
          <FriendRequestHeader type="sent" count={sentRequests?.length ?? 0} />

          <ul>
            {sentRequests?.map((request) => (
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
