import {
  UserStatusBadge,
  UserStatusText,
} from "~/entities/user/ui/user-status";
import type { FriendContent } from "../api/use-get-friends";

interface FriendItemProps extends FriendContent {
  avatar: string;
  actionsSlot?: React.ReactNode;
}

export function FriendItem({
  nickname,
  username,
  avatar,
  status,
  actionsSlot,
}: FriendItemProps) {
  return (
    <li className="group flex justify-between items-center h-15 ml-4 hover:bg-discord-gray rounded-md px-2 border-t border-discord-outline">
      <div className="flex items-center">
        <div className="relative">
          <img
            src={avatar}
            alt={`${nickname}'s avatar`}
            width={32}
            height={32}
            className="rounded-full w-8 h-8 mr-3"
          />
          <UserStatusBadge status={status} />
        </div>

        <div className="flex flex-col">
          <div className="flex items-end gap-2">
            <strong>{nickname}</strong>
            <span className="hidden group-hover:block text-sm text-discord-text">
              {username}
            </span>
          </div>
          <div className="text-sm text-discord-text">
            <UserStatusText status={status} />
          </div>
        </div>
      </div>
      {actionsSlot}
    </li>
  );
}
