import { Outlet } from "react-router";
import ChannelsHeader from "~widgets/channels/ui/channels-header";

export default function ChannelsLayout() {
  return (
    <div>
      <ChannelsHeader />
      <Outlet />
    </div>
  );
}
