interface FriendRequestHeaderProps {
  type: "sent" | "received";
  count: number;
}

export function FriendRequestHeader({ type, count }: FriendRequestHeaderProps) {
  return (
    <div className="flex items-center ml-6 mr-5 my-4 h-4.5">
      <p className="text-sm text-discord-text">
        {type === "received" ? "받음" : "보냄"} - {count}
      </p>
    </div>
  );
}
