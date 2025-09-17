import { Outlet } from "react-router";

import NotificationsHeader from "~widgets/notifications/ui/channels-header";
import { useViewport } from "~/shared/hooks/use-viewport";
import { SplitPanel } from "~/shared/ui/split";
import Sidebar from "~/widgets/sidebar/ui/sidebar";

export default function ChannelsLayout() {
  const { isMobile } = useViewport();

  if (isMobile) {
    return (
      <div className="h-screen flex flex-col">
        <NotificationsHeader />
        <div className="flex-1">
          <Sidebar />
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col">
      <NotificationsHeader />

      <SplitPanel handleSize={8}>
        <SplitPanel.Pane minSize={280} defaultSize={280} maxSize={430}>
          <Sidebar />
        </SplitPanel.Pane>
        <SplitPanel.Handle />
        <SplitPanel.Pane minSize={240} fill>
          <Outlet />
        </SplitPanel.Pane>
      </SplitPanel>
    </div>
  );
}
