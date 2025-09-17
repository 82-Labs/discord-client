import { Link } from "react-router";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "~shared/ui/tabs";
import { Tooltip, TooltipTrigger, TooltipContent } from "~shared/ui/tooltip";

import Slot, { triggers, contents } from "./tabs-slot";

import { FriendsIcon } from "~shared/ui/icons/friends-icon";
import { MailBoxIcon } from "./icons/mail-box-icon";

export function SendMailBox() {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <div className="flex items-center gap-2 text-white text-xl">
          <MailBoxIcon className="w-5 h-5" />
          <span>받은 편지함</span>
        </div>

        <div>
          <Tooltip>
            <TooltipTrigger
              className="flex justify-center items-center w-14 h-8 bg-discord-button rounded-md px-2 text-white
            hover:bg-discord-button/80 transition-all delay-200 cursor-pointer
            "
            >
              <Link to="" className="flex items-center gap-2">
                <FriendsIcon />

                <span className="text-xs">0</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent className="p-2 text-sm bg-discord-button h-full border-none **:*:bg-discord-button  **:*:fill-discord-button">
              <span>친구 요청 보기</span>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>

      <Tabs defaultValue="my-notification">
        <TabsList className="flex justify-start items-center gap- bg-transparent rounded-none p-0 border-b-2 border-b-gray-600/50 w-full">
          {triggers.map((tab, index) => (
            <TabsTrigger
              value={tab.value}
              key={`${tab.value}-${index}`}
              className="w-full max-w-fit rounded-none shadow-none text-white pb-4 border-0 px-4 pt-0 first:ml-0 last:mr-0 transition-all delay-100 cursor-pointer
                        data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-b-light-discord data-[state=active]:text-light-discord
                        hover:border-b-2 hover:border-light-discord"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {contents.map((content, index) => (
          <TabsContent
            value={content.value}
            key={`${content.value}-${index}`}
            className="relative flex flex-col justify-center items-center text-white py-20 w-xl min-h-[400px] shadow-md p-4"
          >
            <Slot
              title={content.title}
              description={content.description}
              isNote={content.isNote ?? false}
            >
              {content.content}
            </Slot>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
