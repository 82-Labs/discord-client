import { NavLink } from "react-router";

import { MeHeader } from "./me-header";
import { StartChattingDialog } from "~features/chatting/ui";

import { cn } from "~shared/lib/utils/cn";
import { FriendsIcon, NitroIcon, StoreIcon } from "~shared/ui/icons";

export function MyNavigation() {
  return (
    <>
      <div className="flex justify-start items-center w-full px-2.5 md:h-12.5 md:border-b border-discord-outline border-r-0">
        <MeHeader />

        {/* Desktop */}
        <StartChattingDialog />
      </div>
      <ul className="hidden md:flex flex-col justify-center  gap-0.5 mt-2 w-full px-0.5 text-discord-button-text font-semibold font-size-sm">
        <li className="w-full px-2.5 py-1 h-9.8 ">
          <NavLink
            to="/channels/@me"
            className={({ isActive }) =>
              cn(
                "flex gap-3 w-full pl-2.5 py-2 rounded-md hover:bg-button-active-hover transition-all duration-200 overflow-hidden",
                isActive && "bg-button-active text-white",
              )
            }
          >
            <FriendsIcon className="w-5 h-5.5 flex-shrink-0" />
            <span className="flex items-center h-5 truncate">친구</span>
          </NavLink>
        </li>
        <li className="w-full px-2.5 py-1 h-9.5 ">
          <NavLink
            to="/channels/store"
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 w-full pl-2.5 py-2 rounded-md hover:bg-button-active-hover transition-all duration-200 overflow-hidden",
                isActive && "bg-button-active",
              )
            }
          >
            <NitroIcon className="w-5 h-5.5 flex-shrink-0" />
            <span className="flex items-center h-5 truncate">Nitro</span>
          </NavLink>
        </li>
        <li className="w-full px-2.5 py-1 h-9.5 ">
          <NavLink
            to="/channels/store"
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 w-full pl-2.5 py-2 rounded-md hover:bg-button-active-hover transition-all duration-200 overflow-hidden",
                isActive && "bg-button-active",
              )
            }
          >
            <StoreIcon className="w-5 h-5.5 flex-shrink-0" />
            <span className="flex items-center h-5 truncate">상점</span>
          </NavLink>
        </li>
      </ul>
    </>
  );
}
