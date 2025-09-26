import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center w-full h-full">
      <div>
        <h2 className="text-3xl font-semibold text-center mb-10">
          더는 스크롤할 수 없어요.
          <br />
          채팅을 하러 가세요.
        </h2>
      </div>

      <Link
        to="/auth/kakao"
        className="flex justify-center items-center w-full h-14 max-w-3xs rounded-lg bg-white text-black mb-80"
      >
        웹 브라우저에서 Discord 열기
      </Link>

      <div className="relative w-full h-96 bg-[#333691] px-5 py-10 lg:px-32">
        <div className="absolute -top-[55%]  sm:-top-[78%]  md:-top-[90%] left-1/2 -translate-x-1/2">
          <img
            src="/hero_leaf.webp"
            alt=""
            className="overflow-hidden w-full"
            width={100}
          />
          <img
            src="/footer_sit_down_pig.webp"
            loading="lazy"
            alt=""
            width={400}
            height={400}
          />
        </div>

        <img
          src="/logo_mark-white.webp"
          loading="lazy"
          alt=""
          width={60}
          height={60}
          className="mt-20"
        />
      </div>
    </footer>
  );
}
