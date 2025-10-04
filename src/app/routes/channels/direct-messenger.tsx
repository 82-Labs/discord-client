import { DirectMessengerPage } from "~pages/direct-messenger/ui";
import type { Route } from "./+types/direct-messenger";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Discord Clone | 친구" },
    { name: "description", content: "친구" },
  ];
}

export default function DirectMessenger() {
  return <DirectMessengerPage />;
}
