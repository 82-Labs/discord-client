export function KakaoCallbackPage() {
  return (
    <main className="min-h-screen w-full bg-[#0b0d12] text-zinc-100 flex items-center justify-center p-6">
      <div className="relative w-full max-w-sm">
        <div className="absolute -inset-6 bg-gradient-to-tr from-discord/25 via-fuchsia-500/10 to-cyan-400/10 blur-2xl rounded-3xl" />

        <section className="relative rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur p-8 flex flex-col items-center gap-6 shadow-2xl">
          <div className="relative">
            <div className="h-14 w-14 rounded-full border-4 border-zinc-700 border-t-discord animate-spin" />
            <div className="absolute inset-0 -z-10 h-16 w-16 rounded-full bg-discord/20 blur-xl" />
          </div>

          <div className="text-center">
            <h1 className="text-xl font-semibold tracking-tight">
              카카오 로그인 중 …
            </h1>
            <p className="text-sm text-zinc-400 mt-1">잠시만 기다려주세요</p>
          </div>
        </section>
      </div>
    </main>
  );
}
