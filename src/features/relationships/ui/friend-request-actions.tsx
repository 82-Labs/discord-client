import { CheckIcon, XIcon } from "lucide-react";
import { Button } from "~shared/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "~shared/ui/tooltip";

interface FriendRequestActionsProps {
  type: "received" | "sent";
  onAccept?: () => void;
  onCancel?: () => void;
}

export const FriendRequestActions = ({
  type,
  onAccept,
  onCancel,
}: FriendRequestActionsProps) => {
  return (
    <div>
      {type === "received" && (
        <Tooltip>
          <TooltipTrigger>
            <Button
              variant="ghost"
              onClick={onAccept}
              className="bg-discord-content rounded-full hover:text-discord-success w-9 h-9
              hover:bg-discord-content"
            >
              <CheckIcon className="w-4 h-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent className="p-2 text-sm bg-discord-button h-full border-none **:*:bg-discord-button  **:*:fill-discord-button">
            <span>수락</span>
          </TooltipContent>
        </Tooltip>
      )}

      <Tooltip>
        <TooltipTrigger>
          <Button
            variant="ghost"
            onClick={onCancel}
            className="ml-3 bg-discord-content rounded-full hover:text-discord-error w-9 h-9
              hover:bg-discord-content"
          >
            <XIcon className="w-4 h-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent className="p-2 text-sm bg-discord-button h-full border-none **:*:bg-discord-button  **:*:fill-discord-button">
          <span>{type === "received" ? "거절" : "취소"}</span>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};
