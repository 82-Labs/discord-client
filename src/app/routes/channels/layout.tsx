import { Outlet } from "react-router";
import ChannelsHeader from "~/components/channels/header/ui/channels-header";

export default function ChannelsLayout() {
  return (
    <div>
      <ChannelsHeader />
      <Outlet />
    </div>
  );
}
