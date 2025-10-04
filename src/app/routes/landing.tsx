import { LandingPage } from "~pages/landing/ui";

export function meta() {
  return [
    { title: "Discord Clone" },
    { name: "description", content: "Welcome to Discord Clone!" },
  ];
}

export default function Landing() {
  return <LandingPage />;
}
