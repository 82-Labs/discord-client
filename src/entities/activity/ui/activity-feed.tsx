export function ActivityFeed() {
  return (
    <div className="w-full max-w-[420px] h-screen pl-4 pb-4 pr-2 pt-1.5 border-l-2 border-t border-discord-outline bg-discord-side-panel">
      <h3 className="text-xl font-bold my-2">현재 활동 중</h3>
      <div className="flex flex-col items-center justify-center p-4">
        <strong>지금은 조용하네요....</strong>
        <p className="text-sm text-discord-text">
          친구가 게임이나 음성 채팅과 같은 활동을 시작하면 여기에 표시돼요!
        </p>
      </div>
    </div>
  );
}
