import { Link, useLocation } from "react-router";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "~/shared/ui/dropdown-menu";
import { Tooltip, TooltipTrigger, TooltipContent } from "~shared/ui/tooltip";

import { SendMailBox } from "~entities/notification/ui/send-mail-box";
import { FriendsIcon } from "~/shared/ui/icons/friends-icon";
import { MailBoxIcon } from "~/entities/notification/ui/icons/mail-box-icon";
import { SupportIcon } from "~/entities/notification/ui/icons/support-icon";
import { LogoIcon } from "~/shared/ui/icons/logo-icon";

export default function NotificationHeader() {
  const location = useLocation();

  return (
    <header className="relative hidden md:flex items-center justify-center bg-discord-black text-sm h-8 text-gray-300/80">
      <div className="flex items-center gap-2">
        {location.pathname === "/channels/@me" && (
          <>
            <FriendsIcon className="w-4 h-4" />
            <span>친구</span>
          </>
        )}
        {location.pathname.includes("/channels/@me/") && (
          <>
            <LogoIcon className="w-4 h-4" />
            <span>다이렉트 메시지</span>
          </>
        )}
      </div>

      <div className="absolute right-3 flex items-center gap-5 z-1 w-20">
        <DropdownMenu>
          <DropdownMenuTrigger className="w-9 h-6 outline-none cursor-pointer hover:text-white transition-all delay-200">
            <Tooltip>
              <TooltipTrigger>
                <MailBoxIcon className="w-full h-full" />
              </TooltipTrigger>
              <TooltipContent className="p-2 text-sm bg-discord-gray h-full border-none **:*:fill-discord-gray  **:*:bg-discord-gray">
                <span>받은 편지함</span>
              </TooltipContent>
            </Tooltip>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side="bottom"
            sideOffset={5}
            align="end"
            alignOffset={0}
            className="bg-discord-gray h-full border-none"
          >
            <SendMailBox />
          </DropdownMenuContent>
        </DropdownMenu>

        <Link
          to="https://support.discord.com/hc/ko"
          className="flex items-center gap-2 w-5 h-5"
        >
          <SupportIcon className="w-full h-full" />
        </Link>
      </div>
    </header>
  );
}
