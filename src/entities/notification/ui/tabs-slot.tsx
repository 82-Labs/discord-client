import { AtIcon } from "./icons/at-icon";
import { MailBoxIcon } from "./icons/mail-box-icon";
import { SatelliteIcon } from "./icons/satellite-icon";

interface Tab {
  label: string;
  value: string;
}

export const triggers: Tab[] = [
  {
    label: "나의 알림",
    value: "my-notification",
  },
  {
    label: "읽지 않은 알림",
    value: "unread",
  },
  {
    label: "멘션",
    value: "mention",
  },
];

interface TabContent {
  title: string;
  description: string;
  value: string;
  isNote?: boolean;
  content: React.ReactNode;
}

export const contents: TabContent[] = [
  {
    title: "아직 아무것도 없어요",
    description: "나중에 돌아와서 이벤트, 스트림 등의 알림을 확인하세요.",
    value: "my-notification",
    content: <img src="/send_mail_box.svg" alt="send mail box" />,
  },
  {
    title: "다 읽으셨어요",
    description:
      "받은 메시지함을 열려면 CMD+I를 누르시고, 맨 위에 메시지를 읽음으로 표시하려면 CMD+Shift+E를 누르세요.",
    value: "unread",
    isNote: true,
    content: (
      <div className="relative flex items-center justify-center">
        <SatelliteIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-32 w-28" />
        <div className="flex justify-center items-center bg-discord-black/20 rounded-full p-4 w-20 h-20">
          <MailBoxIcon />
        </div>
      </div>
    ),
  },
  {
    title: "모두 읽으셨어요!",
    description: "모든 멘션은 이곳에 7일동안 저장돼요.",
    value: "mention",
    isNote: true,
    content: (
      <div className="relative flex items-center justify-center">
        <SatelliteIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-32 w-28" />
        <div className="flex justify-center items-center bg-discord-black/20 rounded-full p-4 w-20 h-20">
          <AtIcon className="w-10 h-10 text-gray-400" />
        </div>
      </div>
    ),
  },
];

interface HeaderTabsContentProps {
  children: React.ReactNode;
  title: string;
  description: string;
  isNote: boolean;
}

export default function Slot({
  children,
  title,
  description,
  isNote = false,
}: HeaderTabsContentProps) {
  return (
    <>
      <div className="mb-7">{children}</div>
      <strong className="mb-2 text-2xl">{title}</strong>
      <div className="flex text-xs">
        {isNote && <p className="min-w-fit text-green-300">참고:</p>}
        <p className="min-w-fit text-center">{description}</p>
      </div>
    </>
  );
}
