import { DirectMessage } from "~entities/message/ui";
import { MyNavigation } from "./me-navigation";
import { NavigationList } from "./navigation-list";

export function Sidebar() {
  return (
    <aside className="flex flex-1 h-full w-full overflow-hidden">
      <NavigationList />
      <section className="flex flex-col items-center flex-1 min-w-0 bg-discord-deep-gray border border-discord-outline rounded-tl-md">
        <MyNavigation />
        <div className="flex my-3.5 w-full border border-b border-discord-outline" />
        <DirectMessage />
      </section>
    </aside>
  );
}
