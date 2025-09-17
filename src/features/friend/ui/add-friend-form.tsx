import { Button } from "~shared/ui/button";
import { Input } from "~shared/ui/input";

export default function AddFriendForm() {
  return (
    <section className="w-full px-7.5 py-5">
      <h2 className="text-xl font-bold mb-2 h-6">친구 추가하기</h2>

      <form>
        <p className="text-discord-text text-sm">
          Discord 사용자명을 사용하여 친구를 추가할 수 있어요.
        </p>

        <div
          className="relative grid grid-cols-12 place-items-center  mt-4 h-13 rounded-md
        bg-discord-input border-discord-input border
        focus-within:ring-discord-input-focus focus-within:ring-0.5 focus-within:border-discord-input-focus 
        "
        >
          <img
            src="/add-friend.svg"
            alt="add friend form"
            className="absolute -top-1/2 right-3 -translate-y-2/3"
          />
          <Input
            className="col-span-11 ring-0 border-0 focus-visible:ring-0 focus-visible:border-0
            placeholder:text-base
            "
            placeholder="Discord 사용자명을 사용하여 친구를 추가할 수 있어요."
          />
          <Button
            className="absolute top-1/2 -translate-y-1/2 right-3
          disabled:text-discord-tab-pointer-text
          disabled:bg-discord-tab-pointer-active
          "
            disabled
          >
            친구 요청 보내기
          </Button>
        </div>
      </form>
    </section>
  );
}
