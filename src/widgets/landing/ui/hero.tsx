export function Hero() {
  return (
    <section className=" pt-16 md:pt-36 bg-[radial-gradient(at_top_left,rgba(0,0,0,0.9)_0%,transparent_80%),radial-gradient(at_top_right,rgba(0,0,0,0.9)_0%,transparent_80%),linear-gradient(to_bottom_right,#1a2089e5,#1a2089e5)] lg:pt-32">
      <div className="flex flex-col-reverse lg:flex-row lg:w-full lg:justify-between md:px-32 max-w-screen-2xl mx-auto ">
        <div className="relative flex flex-col items-center justify-center md:justify-start  mt-7 md:mt-20 lg:mt-32 w-full lg:max-w-3xs xl:max-w-1/2">
          <img
            src="/hero_crown.webp"
            alt=""
            className="hidden lg:block absolute -top-40 -right-32 lg:left-1/2"
            width={200}
            height={200}
          />
          <h1 className="block w-full mb-1 text-2xl font-bold max-w-[325px]  lg:max-w-md text-center lg:text-start lg:mb-5 md:text-3xl xl:text-6xl">
            재미와 게임으로 가득한 그룹 채팅
          </h1>
          <p className="w-full text-center text-sm max-w-[378px] lg:max-w-md lg:text-start lg:text-base  xl:text-lg">
            Discord는 친구들과 게임을 플레이하며 놀거나 글로벌 커뮤니티를
            만들기에 좋습니다. 나만의 공간을 만들어 대화하고, 게임을 플레이하며,
            어울려 보세요.
          </p>
        </div>
        <div className="relative flex justify-center items-center lg:w-1/2">
          <div className="relative">
            <img
              src="/hero_monitor.webp"
              alt=""
              width={454}
              className="max-w-[379px] w-full md:max-w-[450px] lg:max-w-[800px]"
            />
            <img
              src="/hero_robot.webp"
              alt=""
              width={35}
              className="absolute bottom-7 left-1/3 -translate-1/12 md:left-0 md:bottom-3  md:w-10 lg:w-16"
            />

            <div className="absolute -bottom-[0%] left-[30%] translate-x-1/2 w-32 md:bottom-0 md:left-20  xl:left-24 xl:w-52  flex flex-col items-center justify-center">
              <img
                src="/hero_leaf.webp"
                alt=""
                className="overflow-hidden w-full"
                width={100}
              />
              <img src="/hero_pig.webp" alt="" width={100} className="w-full" />
            </div>

            <img
              src="/hero_girl.webp"
              alt=""
              className="absolute bottom-5 -left-1/4 translate-x-1 z-10 lg:-left-24 xl:-left-36 lg:w-24  md:w-28 xl:w-40 md:bottom-0 "
              width={100}
            />
            <img
              src="/hero_men.webp"
              alt=""
              className="absolute bottom-7 -right-5  lg:w-24 xl:w-40"
              width={124}
            />
            <img
              src="/hero_trophy.webp"
              alt=""
              className=" absolute top-1/3 left-5/6 translate-x-15 lg:left-1/2 lg:translate-x-80 lg:-rotate-12 lg:w-40"
              width={120}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
