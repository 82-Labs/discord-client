import { Outlet } from "react-router";
import { useViewport } from "~shared/hooks/use-viewport";

import { SplitPanel } from "~shared/ui/split";
import { Sidebar } from "~widgets/sidebar/ui";
import { NotificationHeader } from "~widgets/notifications/ui";

export default function ChannelsLayout() {
  const { isMobile } = useViewport();
  return (
    <div className="h-screen flex flex-col">
      <NotificationHeader />
      <div className="flex-1">
        <SplitPanel handleSize={2}>
          <SplitPanel.Pane
            minSize={260}
            defaultSize={260}
            maxSize={isMobile ? 0 : 430}
            fill={isMobile}
          >
            <Sidebar />
          </SplitPanel.Pane>
          <SplitPanel.Handle />
          <SplitPanel.Pane
            minSize={isMobile ? 0 : 260}
            fill
            className="hidden md:block"
          >
            <Outlet />
          </SplitPanel.Pane>
        </SplitPanel>
      </div>
    </div>
  );
}
