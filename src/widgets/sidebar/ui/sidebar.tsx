import { UserControlPanel } from "~entities/user/ui/user-control-panel";

import { DirectMessageList } from "~entities/channel/ui/direct-message-list";
import { DirectMessageHideButton } from "~features/channel/ui/direct-message-hide-button";

import { MyNavigation } from "./me-navigation";
import { NavigationList } from "./navigation-list";

export function Sidebar() {
  return (
    <aside className="relative flex flex-1 h-full w-full overflow-hidden">
      <NavigationList />
      <section className="flex flex-col items-center flex-1 min-w-0 bg-discord-deep-gray border border-discord-outline rounded-tl-md">
        <MyNavigation />
        <div className="flex my-3.5 w-full border border-b border-discord-outline" />
        <DirectMessageList
          renderActions={(args) => <DirectMessageHideButton {...args} />}
        />
      </section>
      <UserControlPanel />
    </aside>
  );
}
