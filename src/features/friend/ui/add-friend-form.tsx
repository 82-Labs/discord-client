import { useState } from "react";

import { useAddFriend } from "../api/use-add-friend";
import { useUsername } from "~features/auth/register/hooks/use-username";

import { cn } from "~shared/lib";

import { Button } from "~shared/ui/button";
import { Input } from "~shared/ui/input";

export default function AddFriendForm() {
  const [sendUsername, setSendUsername] = useState("");

  const {
    register: field,
    formState: { errors, isValid, isSubmitting },
    handleSubmit,
    handleUsernameInput,
    reset,
  } = useUsername();

  const {
    mutate: handleAddFriend,
    isPending,
    isSuccess,
    isError,
  } = useAddFriend({
    onError: () => {
      reset();
      setSendUsername("");
    },
  });

  const disabled = !isValid || isSubmitting || isPending;

  return (
    <section className="w-full px-7.5 py-5">
      <h2 className="text-xl font-bold mb-2 h-6">친구 추가하기</h2>

      <form
        className="mb-2"
        onSubmit={handleSubmit(({ username }) => {
          setSendUsername(username);
          handleAddFriend(username);
        })}
      >
        <p className="text-discord-text text-sm">
          Discord 사용자명을 사용하여 친구를 추가할 수 있어요.
        </p>

        <div
          className={cn(
            "relative grid grid-cols-12 place-items-center  mt-4 h-13 rounded-md bg-discord-input border-discord-input border focus-within:ring-discord-input-focus focus-within:ring-0.5 focus-within:border-discord-input-focus ",
            isSuccess && "ring-discord-success border-discord-success",
            isError && "ring-discord-error border-discord-error",
          )}
        >
          <img
            src="/add-friend.svg"
            alt="add friend form"
            className="absolute -top-1/2 right-3 -translate-y-2/3"
          />
          <Input
            className="col-span-11 ring-0 border-0 focus-visible:ring-0 focus-visible:border-0
            placeholder:text-base"
            {...field("username")}
            type="text"
            autoComplete="username"
            spellCheck={false}
            onChange={handleUsernameInput}
            placeholder="Discord 사용자명을 사용하여 친구를 추가할 수 있어요."
            aria-invalid={!!errors.username || undefined}
            aria-describedby={
              errors.username
                ? "username-error"
                : "username-help사용자 이름 도움말"
            }
          />

          <Button
            className="absolute top-1/2 -translate-y-1/2 right-3
            bg-discord text-white
            disabled:text-discord-tab-pointer-text
            disabled:bg-discord-tab-pointer-active
          "
            disabled={disabled || isPending}
          >
            친구 요청 보내기
          </Button>
        </div>
      </form>

      {isSuccess && sendUsername && (
        <p className="text-discord-success text-sm">
          {sendUsername}에게 성공적으로 친구 요청을 보냈어요.
        </p>
      )}
      {isError && (
        <p className="text-discord-error text-sm">
          친구 추가 요청에 실패했습니다.
        </p>
      )}
    </section>
  );
}
