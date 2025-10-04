import { Link } from "react-router";

import { NavigationList } from "~widgets/landing/ui/navigation-list";
import { KakaoAuthButton } from "~features/auth/kakao/ui";
import { useToggle } from "~shared/hooks/use-toggle";
import { cn } from "~shared/lib/utils/cn";
import { useScrolled } from "../lib/use-scolled";
export function Navigation() {
  const { isOpen, toggle } = useToggle();
  const isScrolled = useScrolled();

  return (
    <nav
      className={cn(
        "fixed md:absolute flex justify-center items-center w-full pt-8 md:pt-0 h-20 md:h-30 xl:px-10 z-20",
        isScrolled && "bg-discord md:bg-transparent",
      )}
    >
      <Link to="/">
        <img
          src={isScrolled ? "/logo_black.svg" : "/logo_white.svg"}
          alt="discord logo"
          className={cn(
            "fixed top-5 left-4 md:top-10 md:left-9 w-full h-full max-w-[146px] max-h-[40px] ",
            isScrolled && "bg-white rounded-lg px-2",
          )}
          width={146}
          height={40}
        />
      </Link>

      <NavigationList type="desktop" />

      <div className="fixed top-4 right-4 md:top-10 md:right-10 z-10 flex items-center gap-5">
        <KakaoAuthButton />

        <button
          type="button"
          className="flex lg:hidden w-fit h-full p-2 rounded-xl bg-[#ffffff1a] cursor-pointer"
          onClick={toggle}
        >
          <img src="/menu.svg" alt="menu" className="text-white" />
        </button>
      </div>

      <div
        className={cn(
          "fixed top-0 left-0 w-full h-screen bg-[#000c] z-10 transition-all duration-300",
          isOpen ? "block" : "hidden",
        )}
      />

      <div
        className={cn(
          "block lg:hidden fixed top-0 right-0 w-full sm:w-1/2 h-screen bg-discord sm:rounded-l-5xl overflow-hidden ml-auto z-10 transition-all duration-500",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex justify-between items-center p-6">
          <img
            src="/navigation_logo.svg"
            alt="close"
            className="text-white"
            width={32}
            height={23}
          />
          <button
            type="button"
            onClick={toggle}
            className=" bg-[#ffffff1a] cursor-pointer p-2 rounded-xl hover:bg-[#ffffff4d] transition-all duration-300"
          >
            <img src="/close.svg" alt="close" className="text-white" />
          </button>
        </div>

        <NavigationList type="mobile" />

        <div className="fixed bottom-0 left-0 flex  items-center justify-center z-10 bg-discord px-8 h-28 w-full">
          <button
            type="button"
            className="border border-neutral-400/80 bg-kakao text-nowrap text-center text-white text-sm backdrop:blur-lg rounded-2xl overflow-hidden w-full h-11"
          >
            <img
              src="/ko_kakao_login_desktop.webp"
              alt="kakao login"
              className="w-full h-full object-contain"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}
