import { useGetReceivedRequests } from "../api/use-get-received-requests";
import { FriendHeader } from "./friend-header";
import { RequestItem } from "./request-item";

export type RenderActions = (args: {
  type: "received" | "sent";
  requestId: string;
}) => React.ReactNode;

interface ReceivedRequestsProps {
  renderActions?: RenderActions;
  searchValue: string;
}

export function ReceivedRequests({
  renderActions,
  searchValue,
}: ReceivedRequestsProps) {
  const { data: receivedRequests } = useGetReceivedRequests();

  const filteredReceivedRequests = receivedRequests?.filter((request) =>
    request.senderUsername.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <div>
      {(filteredReceivedRequests?.length ?? 0) > 0 && (
        <>
          <FriendHeader
            type="received"
            count={filteredReceivedRequests?.length ?? 0}
          />

          <ul>
            {filteredReceivedRequests?.map((request) => (
              <RequestItem
                key={request.id}
                type="received"
                username={request.senderUsername}
                nickname={request.senderNickname}
                avatar={
                  "https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxsG72wAo9EWJR4yQWyJJaDaK1XdUso6cUMpI9hAdPUU_FNs11cY1X284vsHrnWtRw7oqRpN1m9YAg21d_aNKnIo-&format=source&h=210"
                }
                actionsSlot={renderActions?.({
                  requestId: request.id,
                  type: "received",
                })}
              />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
