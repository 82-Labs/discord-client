import { Button } from "./button";

interface ErrorPageLayoutProps {
  title: string;
  description: string;
  primaryButton: {
    text: string;
    onClick: () => void;
  };
  secondaryButton: {
    text: string;
    onClick: () => void;
  };
  gradientColors: string;
  glowColor: string;
  children: React.ReactNode;
}

export function ErrorPageLayout({
  title,
  description,
  primaryButton,
  secondaryButton,
  gradientColors,
  glowColor,
  children,
}: ErrorPageLayoutProps) {
  return (
    <main className="min-h-screen w-full bg-[#0b0d12] text-zinc-100 flex items-center justify-center p-6">
      <div className="relative w-full max-w-sm z-10">
        <div
          className={`absolute -inset-6 bg-gradient-to-tr ${gradientColors} blur-2xl rounded-3xl`}
        />

        <section className="relative rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur p-8 flex flex-col items-center gap-6 shadow-2xl">
          <div className="relative">
            <div>{children}</div>
            <div
              className={`absolute inset-0 -z-10 h-20 w-20 rounded-full ${glowColor} blur-xl`}
            />
          </div>

          <div className="text-center">
            <h1 className="text-xl font-semibold tracking-tight text-zinc-100">
              {title}
            </h1>
            <p className="text-sm text-zinc-400 mt-1">{description}</p>
          </div>

          <div className="w-full space-y-3">
            <Button
              onClick={primaryButton.onClick}
              className="w-full bg-discord hover:bg-discord-blur text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 cursor-pointer"
            >
              {primaryButton.text}
            </Button>
            <Button
              onClick={secondaryButton.onClick}
              variant="outline"
              className="w-full border-zinc-700 text-zinc-950 hover:text-white hover:bg-zinc-800 font-medium py-3 px-6 rounded-lg transition-colors duration-200 cursor-pointer"
            >
              {secondaryButton.text}
            </Button>
          </div>
        </section>
      </div>

      <img
        src="/footer_assemble.webp"
        alt=""
        width={1000}
        height={1000}
        className="absolute bottom-[10%] left-1/2 -translate-x-1/2"
      />
    </main>
  );
}
