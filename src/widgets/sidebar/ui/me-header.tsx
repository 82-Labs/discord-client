import { SearchIcon, UserRoundPlusIcon } from "lucide-react";

export default function MeHeader() {
  return (
    <div className="flex flex-col md:hidden w-full p-2 gap-2">
      <h1 className="font-semibold"> 메시지</h1>

      <div className="flex items-center gap-2 w-full">
        <button
          type="button"
          className="flex items-center justify-center  w-9 h-8 bg-discord-mobile-button rounded-full hover:bg-discord-mobile-button-hover"
        >
          <SearchIcon className="w-4 h-4" />
        </button>

        <button
          type="button"
          className="flex items-center justify-center w-full h-9 bg-discord-mobile-button rounded-lg hover:bg-discord-mobile-button-hover"
        >
          <UserRoundPlusIcon className="w-4 h-4" />
          <span>친구 추가하기</span>
        </button>
      </div>
    </div>
  );
}
