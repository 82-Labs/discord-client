import { MessageCircleIcon } from "lucide-react";
import { NavLink } from "react-router";

import { cn } from "~shared/lib/utils/cn";
import { LogoIcon } from "~shared/ui/icons/logo-icon";

export function NavigationList() {
  return (
    <nav className="mt-3 md:mt-0 flex flex-col items-center gap-2.5 bg-discord-black min-w-20 flex-shrink-0">
      <div className="relative flex items-center justify-center w-20">
        <NavLink
          to="/channels/@me"
          className={({ isActive }) =>
            cn(
              "flex items-center justify-center bg-discord-gray/90 w-10 h-10 rounded-lg text-gray-300 hover:bg-discord hover:text-white",
              "before:absolute before:block before:-left-1 before:bg-white before:rounded-md before:w-2 before:h-5 before:-translate-1 hover:before:-translate-0  before:transition-all before:duration-300 ",
              isActive &&
                "bg-discord text-white before:-translate-0 before:h-10",
            )
          }
        >
          <LogoIcon className="w-6 h-6 hidden md:block" />
          <MessageCircleIcon className="w-6 h-6 md:hidden fill-white" />
        </NavLink>
      </div>

      <hr className="w-7 border-discord-gray/80" />
    </nav>
  );
}
