import { useUsername } from "~entities/user/lib";
import { useRegister } from "~features/auth/register/api";

export function RegisterPage() {
  const { mutate: handleRegister, isPending } = useRegister();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    handleUsernameInput,
  } = useUsername();

  const disabled = !isValid || isSubmitting || isPending;

  return (
    <div className="flex justify-center items-center bg-[url('/register_background.svg')] bg-cover bg-center bg-no-repeat w-screen h-screen p-1">
      <header className="fixed top-11 left-10 z-0">
        <img src="/logo_white.svg" alt="discord logo" />
      </header>

      <main className="w-full max-w-md  bg-discord-gray h-fit p-8 text-white rounded-xl z-10">
        <h1 className="text-2xl font-bold text-center mb-5">계정 만들기</h1>

        <form
          className=" flex flex-col gap-2 w-full mb-3"
          onSubmit={handleSubmit(({ username }) => {
            handleRegister(username);
          })}
        >
          <label htmlFor="username">
            사용자 명 <span className="text-red-500">*</span>
          </label>
          <div className="group w-full">
            <input
              type="text"
              autoComplete="username"
              spellCheck={false}
              {...register("username")}
              onChange={handleUsernameInput}
              className="w-full h-10 mb-1 bg-discord-deep-gray rounded-xl p-2 focus:outline-1 focus:outline-blue-300"
              aria-invalid={!!errors.username || undefined}
              aria-describedby={
                errors.username
                  ? "username-error"
                  : "username-help사용자 이름 도움말"
              }
            />
            <p className="text-sm input-focus-slide">
              숫자, 문자, 밑줄 _, 마침표만 사용할 수 있습니다.
            </p>
          </div>

          <div className="text-sm text-gray-300/80 my-3">
            "계정 만들기"를 클릭하면 Discord의{" "}
            <a
              href="/discord.com/terms"
              rel="noreferrer noopener"
              target="_blank"
              className="text-blue-300/80"
            >
              이용 약관
            </a>
            에 동의하며{" "}
            <a
              href="/discord.com/privacy"
              rel="noreferrer noopener"
              target="_blank"
              className="text-blue-300/80"
            >
              개인정보 보호 정책
            </a>
            을 읽었음을 확인하는 것으로 간주됩니다.
          </div>
          <button
            type="submit"
            className="bg-discord text-white rounded-xl p-2 cursor-pointer disabled:bg-discord/50 disabled:cursor-not-allowed"
            disabled={disabled}
          >
            계정 만들기
          </button>
        </form>

        <a href="/auth/login" className="text-sm text-blue-300/80">
          이미 계정이 있나요? 로그인하세요
        </a>
      </main>
    </div>
  );
}
