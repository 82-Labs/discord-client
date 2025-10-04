import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import { useSelectMenu } from "~shared/hooks";
import { cn } from "~shared/lib/utils";
import { NAVIGATION_LINKS } from "../config";

interface NavigationListProps {
  type: "mobile" | "desktop";
}

const MIN_POPOVER_SECTIONS = 1;

export function NavigationList({ type }: NavigationListProps) {
  const { selectedMenu, handleSelectMenu } = useSelectMenu();

  switch (type) {
    case "desktop":
      return (
        <ul
          className={cn(
            "hidden lg:flex  xl:gap-0.5 ext-white text-xs lg:text-sm xl:text-base relative ",
          )}
        >
          {NAVIGATION_LINKS.map((link, index) => (
            <li
              key={`${link.href} + ${index}`}
              className={cn(
                "group relative flex items-center justify-center rounded-2xl h-10 py-1 px-2 xl:py-2.5 xl:px-4 hover:bg-discord hover:text-white transition-all duration-300",
                link.type === "popover" && "hover:bg-discord hover:text-white",
              )}
            >
              <div className="flex items-center gap-1 ">
                {link.label}
                {link.type === "popover" && (
                  <ChevronDownIcon className="w-4 h-4 group-hover:rotate-180 transition-all duration-300" />
                )}
              </div>

              {link.type === "popover" && (
                <div
                  className={cn(
                    "group group-hover:flex hidden text-white absolute top-11 -left-1/2 -translate-x-1/4 p-4 rounded-6xl w-fit bg-discord ",
                    link.popoverAlign === "row" ? "flex-row" : "flex-col",
                  )}
                >
                  {link.popoverSections?.map((section) => (
                    <div
                      key={section.title}
                      className={cn(
                        "text-nowrap py-4 px-8 first:border-r first:border-zinc-400/20",
                        link.popoverSections?.length &&
                          link.popoverSections?.length <=
                            MIN_POPOVER_SECTIONS &&
                          "first:border-0 last:border-0 border-transparent",
                      )}
                    >
                      <strong className="block text-zinc-300 font-light p-1">
                        {section.title}
                      </strong>
                      <ul>
                        {section.links.map((link, index) => (
                          <li className="p-1" key={`${link.href} + ${index}`}>
                            {link.label}
                          </li>
                        ))}
                        {link.icon && (
                          <img
                            src={link.icon}
                            alt={`${link.label}-icon`}
                            className="absolute  -right-10 translate-x-1/3 z-20 
                            group group-hover:block group-hover:-bottom-14 group-hover:translate-y-1/3 
                            hidden w-full h-full max-w-[12.5rem] object-contain animate-slide-up"
                            width={100}
                            height={100}
                          />
                        )}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      );
  }

  return (
    <ul className="flex flex-col text-lg text-neutral-200 p-7 overflow-y-auto h-full max-h-[78.5vh] [&::-webkit-scrollbar]:hidden">
      {NAVIGATION_LINKS.map((link, index) => {
        return (
          <React.Fragment key={`${link.href} + ${index}`}>
            {link.popoverSections?.length ? (
              <li className="group pt-6 pb-3 border-b border-zinc-400/20">
                <button
                  type="button"
                  onClick={() => handleSelectMenu(link.label)}
                  className="flex justify-between items-center mb-5 gap-1 w-full text-left pr-5 cursor-pointer"
                >
                  <p>{link.label}</p>
                  <ChevronDownIcon
                    className={`w-4 h-4 transition-transform duration-300 ${selectedMenu === link.label ? "rotate-180" : ""}`}
                  />
                </button>
                {selectedMenu === link.label && (
                  <div className="text-base"> {link.label}</div>
                )}
                {selectedMenu === link.label &&
                  link.popoverSections?.map((section) => (
                    <div
                      key={section.title}
                      className="text-nowrap py-8 border-b border-neutral-400/20 last:border-b-0"
                    >
                      <strong className="block text-neutral-300/60 font-medium py-1 text-base ">
                        {section.title}
                      </strong>
                      <ol>
                        {section.links.map((link) => (
                          <li className="py-1 text-base" key={link.href}>
                            {link.href && (
                              <Link to={link.href}>{link.label}</Link>
                            )}
                          </li>
                        ))}
                      </ol>
                    </div>
                  ))}
              </li>
            ) : (
              link.href && (
                <Link
                  to={link.href}
                  className="py-5 border-b border-zinc-400/20"
                >
                  {link.label}
                </Link>
              )
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
}
