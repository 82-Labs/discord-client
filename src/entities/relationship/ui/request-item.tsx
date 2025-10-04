interface RequestItemProps {
  username: string;
  nickname: string;
  avatar: string;
  type: "received" | "sent";
  actionsSlot?: React.ReactNode;
}

export function RequestItem({
  username,
  nickname,
  avatar,
  actionsSlot,
}: RequestItemProps) {
  return (
    <li className="group flex justify-between items-center h-15 ml-4 hover:bg-discord-gray rounded-md px-2 border-t border-discord-outline">
      <div className="flex items-center">
        <img
          src={avatar}
          alt={`${nickname}'s avatar`}
          width={32}
          height={32}
          className="rounded-full w-8 h-8 mr-3"
        />

        <div className="flex flex-col">
          <div className="flex items-end gap-2">
            <strong>{nickname}</strong>
            <span className="hidden group-hover:block text-sm text-discord-text">
              {username}
            </span>
          </div>
          <div className="text-sm text-discord-text">{username}</div>
        </div>
      </div>
      {actionsSlot}
    </li>
  );
}
