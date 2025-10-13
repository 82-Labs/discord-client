import { XIcon } from "lucide-react";

import { Button } from "~/shared/ui/button";
import { useHideDirectMessage } from "../api/use-hide-direct-message";

export function DirectMessageHideButton({ channelId }: { channelId: number }) {
  const hideDirectMessageMutation = useHideDirectMessage();
  return (
    <Button
      type="button"
      onClick={() => hideDirectMessageMutation.mutate(channelId)}
      variant="ghost"
      size="icon"
      className="hidden group-hover:block hover:bg-transparent hover:text-white text-discord-button-text cursor-pointer"
    >
      <XIcon className="w-4 h-4" />
    </Button>
  );
}
