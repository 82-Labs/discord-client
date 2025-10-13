import { MessageCircleIcon } from "lucide-react";
import { ToggleIcon } from "~shared/ui/icons/toggle-icon";

import { Button } from "~shared/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~shared/ui/dropdown-menu";
import { useEnsureDirectMessage } from "../api/use-ensure-direct-message";
import { useUserStore } from "~features/user/model/use-user-store";
import { useDeleteFriend } from "../api/use-delete-friend";

interface FriendActionsProps {
  userId: number;
  username: string;
}

export function FriendActionsSlot({ userId, username }: FriendActionsProps) {
  const { userId: currentUserId } = useUserStore();

  const ensureDirectMessageMutation = useEnsureDirectMessage();
  const deleteFriendMutation = useDeleteFriend();

  return (
    <div>
      <Button
        type="button"
        variant="ghost"
        disabled={ensureDirectMessageMutation.isPending}
        onClick={() =>
          ensureDirectMessageMutation.mutate([currentUserId, userId])
        }
        className="group-hover:bg-discord-black hover:bg-discord-black rounded-full mr-3 cursor-pointer"
      >
        <MessageCircleIcon className="w-4 h-4 text-discord-text fill-discord-text" />
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button
            type="button"
            variant="ghost"
            className="group-hover:bg-discord-black hover:bg-discord-black rounded-full hover:text-discord-text cursor-pointer"
          >
            <ToggleIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="w-48 p-2 bg-discord-gray border-none text-white"
        >
          <DropdownMenuItem className="cursor-pointer focus:bg-gray-200/10 focus:text-white">
            영상 통화 시작하기
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer focus:bg-gray-200/10  focus:text-white">
            음성 통화 시작하기
          </DropdownMenuItem>
          <DropdownMenuItem
            disabled={deleteFriendMutation.isPending}
            onClick={() => {
              deleteFriendMutation.mutate(username);
            }}
            className="cursor-pointer text-red-400 focus:bg-red-400/10 focus:text-red-400"
          >
            친구 삭제하기
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
