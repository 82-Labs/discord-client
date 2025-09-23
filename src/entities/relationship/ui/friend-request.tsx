import { ReceivedRequests } from "./received-requests-list";
import { SentRequests } from "./sent-requests-list";

interface FriendRequestProps {
  renderActions?: (args: {
    type: "received" | "sent";
    requestId: string;
  }) => React.ReactNode;
}

export function FriendRequest({ renderActions }: FriendRequestProps) {
  return (
    <div>
      <ReceivedRequests renderActions={renderActions} />
      <SentRequests renderActions={renderActions} />
    </div>
  );
}
