import { cn } from "~/shared/lib/utils";
import type { FriendStatus } from "~entities/relationship/api/use-get-friends";

type UserStatusProps = {
  status: FriendStatus;
  className?: string;
};

export function UserStatusBadge({ status, className }: UserStatusProps) {
  return (
    <div
      className={cn(
        "absolute right-2 -bottom-0.5 flex items-center justify-center w-4 h-4 rounded-full bg-discord-content",
        className,
      )}
    >
      {(status === "ONLINE" || status === "NONE") && (
        <div className="bg-green-600 rounded-full w-2.5 h-2.5" />
      )}
      {status === "IDLE" && (
        <div className="relative flex items-center justify-center rounded-full w-3 h-3">
          <div className="absolute bg-discord-content rounded-full w-1.5 h-1.5 z-10 top-0.5 left-0.5" />
          <div className="absolute bg-yellow-500 w-2 h-2 rounded-full" />
        </div>
      )}
      {status === "DO_NOT_DISTURB" && (
        <div className="flex items-center justify-center bg-red-600 rounded-full w-3 h-3">
          <div className="bg-discord-content w-2 h-0.5" />
        </div>
      )}
      {(status === "INVISIBLE" || status === "OFFLINE") && (
        <div className="flex items-center justify-center bg-gray-500 rounded-full w-3 h-3">
          <div className="bg-discord-content rounded-full w-1.5 h-1.5" />
        </div>
      )}
    </div>
  );
}

export function UserStatusText({ status }: UserStatusProps) {
  return (
    <>
      {status === "ONLINE" && <span>온라인</span>}
      {status === "IDLE" && <span>자리비움</span>}
      {status === "DO_NOT_DISTURB" && <span>방해금지</span>}
      {status === "INVISIBLE" && <span>오프라인</span>}
      {status === "OFFLINE" && <span>오프라인</span>}
      {status === "NONE" && <span>온라인</span>}
    </>
  );
}
