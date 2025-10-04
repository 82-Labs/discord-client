import { Link } from "react-router";

import { Navigation } from "~widgets/landing/ui";
import { Features } from "~widgets/landing/ui/features";
import { Footer } from "~widgets/landing/ui/footer";
import { Hero } from "~widgets/landing/ui/hero";

export function LandingPage() {
  return (
    <div className="h-full bg-no-repeat bg-cover bg-center  bg-[#171c7c] overflow-x-hidden">
      <div className="hidden md:block absolute top-0 left-0 w-full h-full bg-[url('/hero_powder.webp')] bg-cover bg-center bg-no-repeat w-full" />
      <Navigation />
      <Hero />

      <div className="bg-[url('/hero_powder.webp')] bg-cover bg-center bg-no-repeat mb-36 w-full">
        <div className="flex justify-center items-center  w-full mt-[-1px]  bg-[#171c7c]">
          <Link
            to="/auth/kakao"
            className="flex justify-start items-center bg-discord px-6 py-4 rounded-2xl w-full max-w-xs h-14 mt-6"
          >
            웹 브라우저에서 Discord 열기
          </Link>
        </div>
      </div>
      <Features />
      <Footer />
    </div>
  );
}
