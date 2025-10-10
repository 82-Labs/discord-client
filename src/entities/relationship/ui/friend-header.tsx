interface FriendRequestHeaderProps {
  type: "sent" | "received" | "all" | "online";
  count: number;
}

const getHeaderTitle = (type: FriendRequestHeaderProps["type"]) => {
  switch (type) {
    case "received":
      return "받음";
    case "sent":
      return "보냄";
    case "all":
      return "모두";
    case "online":
      return "온라인";
  }
};

export function FriendHeader({ type, count }: FriendRequestHeaderProps) {
  return (
    <div className="flex items-center ml-6 mr-5 my-4 h-4.5">
      <p className="text-sm text-discord-text">
        {getHeaderTitle(type)} - {count}명
      </p>
    </div>
  );
}
