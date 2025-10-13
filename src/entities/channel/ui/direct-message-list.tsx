import { useGetDirectMessages } from "../api/use-get-direct-messages";
import { DirectMessageItem } from "./direct-message-item";

interface DirectMessageListProps {
  renderActions: (args: { channelId: number }) => React.ReactNode;
}

export function DirectMessageList({ renderActions }: DirectMessageListProps) {
  const { data: directMessages } = useGetDirectMessages();

  return (
    <ul className="flex flex-col gap-1 w-full">
      {directMessages?.map((directMessage) => (
        <DirectMessageItem
          key={directMessage.channelId}
          {...directMessage}
          actionsSlot={renderActions?.({
            channelId: Number(directMessage.channelId),
          })}
        />
      ))}
    </ul>
  );
}
