import {
  useAcceptFriendRequest,
  useCancelSentRequest,
  useRejectFriendRequest,
} from "../api";
import { FriendRequestActions } from "./friend-request-actions";

interface FriendRequestActionsSlotProps {
  type: "received" | "sent";
  requestId: string;
}

export const FriendRequestActionsSlot = ({
  type,
  requestId,
}: FriendRequestActionsSlotProps) => {
  const acceptMutation = useAcceptFriendRequest();
  const cancelMutation = useCancelSentRequest();
  const rejectMutation = useRejectFriendRequest();

  const handleAccept =
    type === "received" ? () => acceptMutation.mutate(requestId) : undefined;

  const handleCancel = () => {
    if (type === "sent") {
      cancelMutation.mutate(requestId);
    } else {
      rejectMutation.mutate(requestId);
    }
  };

  return (
    <FriendRequestActions
      type={type}
      onAccept={handleAccept}
      onCancel={handleCancel}
    />
  );
};
