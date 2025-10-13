import type { FriendContent } from "~/entities/relationship/api/use-get-friends";
import { useUserStore } from "~/features/user/model/use-user-store";
import { cn } from "~/shared/lib/utils";
import { UserStatusBadge } from "~entities/user/ui/user-status";

interface DirectMessageItemProps {
  users: FriendContent[];
  actionsSlot: React.ReactNode;
}

export function DirectMessageItem({
  users,
  actionsSlot,
}: DirectMessageItemProps) {
  const currentUserId = useUserStore((state) => state.userId);

  const filteredUsers = users.filter((user) => user.userId !== currentUserId);

  return (
    <li
      className={cn(
        "group flex justify-between items-start h-10 hover:bg-discord-gray rounded-md mx-2 px-1 ",
        filteredUsers.length > 1 ? "pt-1" : "items-center",
      )}
    >
      <div className="relative flex items-center mr-3 h-full ">
        {filteredUsers.map((user, index) => (
          <div
            key={user.id}
            className={cn(
              "relative",
              index > 0 ? "-ml-3.5 -mb-1.5" : "-mt-1.5",
            )}
          >
            <img
              src="https://cdn.discordapp.com/embed/avatars/0.png"
              alt={`${user.nickname}'s avatar`}
              width={32}
              height={32}
              className="rounded-full w-8 h-8 border-2 border-discord-gray"
            />
            {index === filteredUsers.length - 1 && (
              <UserStatusBadge status={user.status} className="right-0" />
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-col min-w-0 flex-1">
        <p className="text-discord-text truncate">
          {filteredUsers.map((user, index) => (
            <span key={user.id}>
              {user.nickname}
              {index < filteredUsers.length - 1 && ", "}
            </span>
          ))}
        </p>
        {filteredUsers.length > 1 && (
          <p className="text-xs text-discord-text">
            멤버 {filteredUsers.length}명
          </p>
        )}
      </div>
      {actionsSlot}
    </li>
  );
}
