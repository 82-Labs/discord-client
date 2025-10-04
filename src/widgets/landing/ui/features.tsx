import { CardContainer } from "~/shared/ui/card-container";

export function Features() {
  return (
    <div className="relative max-w-[1500px] mx-auto">
      <div className="relative mb-60  xl:mb-80">
        <CardContainer
          className="z-10 lg:flex-row-reverse"
          title="그룹 채팅을 더 재밌게 만드세요"
          description="사용자 지정 이모티콘, 스티커, 사운드보드 효과 등을 사용해 음성 채팅, 영상 채팅, 텍스트 채팅에 개성을 더해 주세요. 아바타와 사용자 지정 상태를 설정하고 프로필을 만들어 나만의 방식으로 채팅에 보여주세요."
          videoSrc="/features_group.mp4"
        />
        <img
          src="/features_pig.gif"
          alt=""
          loading="lazy"
          className="absolute -top-16 translate-y-0.5 left-1/2 translate-x-1/3 md:left-2/3 lg:w-40 lg:-top-[16%] xl:-top-[13%]"
          width={100}
          height={100}
        />

        <img
          src="/features_egg.webp"
          alt=""
          loading="lazy"
          width={170}
          height={170}
          className="absolute top-11/12 translate-y-10 left-12 -translate-x-1/2 lg:w-52 xl:w-82 xl:-left-10 xl:-translate-x-1/2"
        />
      </div>

      <div className="relative h-full mb-60  xl:mb-80">
        <CardContainer
          className="bg-linear-to-r from-indigo-800 to-indigo-900 z-10"
          title="같은 방에 있는 것 같은 방송"
          description="지연 시간이 짧은 고품질의 방송 덕분에 게임을 방송하거나, 쇼를 시청하거나, 사진을 보거나, 숙제를 할 때도 친구와 소파에 앉아 노는 기분이 들 것입니다."
          videoSrc="/features_live.mp4"
        />
        <img
          src="/features_logo.webp"
          alt=""
          loading="lazy"
          width={180}
          height={180}
          className="absolute bottom-0 translate-y-2/3 left-10 lg:w-52 xl:w-82"
        />
      </div>

      <div className="relative h-full mb-60  xl:mb-80">
        <CardContainer
          className="bg-linear-to-r from-indigo-800 to-indigo-900 z-10 lg:flex-row-reverse"
          title="전화할 필요 없이 한가할 때 참여하세요"
          description="전화하거나 초대할 필요 없이 언제든 음성 채팅이나 텍스트 채팅에 쉽게 참여하고 나갈 수 있어 게임 세션 전이든 도중이든 후든 파티 채팅을 계속 이어 할 수 있습니다."
          videoSrc="/features_call.mp4"
        />
        <img
          src="/features_box.webp"
          alt=""
          loading="lazy"
          width={300}
          height={300}
          className="hidden lg:block absolute -top-40 translate-y-0 right-10 z-10"
        />
      </div>
      <div className="relative h-full mb-60  xl:mb-80">
        <CardContainer
          className="bg-linear-to-r from-indigo-800 to-indigo-900 z-10"
          title="함께 놀 사람이 있는지 확인하세요"
          description="누가 게임을 플레이 중이거나 놀고 있는지 확인해 보세요. 지원되는 게임의 경우 친구들이 어떤 모드나 캐릭터를 플레이하고 있는지 확인하고 바로 참여할 수 있습니다."
          videoSrc="/features_online.mp4"
        />
        <img
          src="/features_coin.webp"
          alt=""
          loading="lazy"
          width={140}
          height={140}
          className="absolute -bottom-1/2 -translate-y-20 -left-10 -translate-x-1 lg:w-52 xl:w-82"
        />
      </div>

      <div className="relative  h-full mb-60  xl:mb-80">
        <CardContainer
          className="bg-linear-to-r from-indigo-gray/80 to-indigo-gray/80 z-10 lg:flex-row-reverse"
          title="항상 함께할 수 있는 활동"
          description="동영상을 시청하거나, 내장된 게임을 플레이하거나 음악을 듣거나 그냥 스크롤하며 밈을 잔뜩 보내세요. 하나의 그룹 채팅에서 원활하게 텍스트를 보내고, 통화하고, 영상 채팅을 하고, 게임을 플레이할 수 있습니다."
          videoSrc="/features_activity.mp4"
        />
        <img
          src="/features_men.webp"
          alt=""
          loading="lazy"
          width={100}
          height={100}
          className="absolute top-0 -translate-y-16 left-1/2 translate-x-1/2 lg:-top-[13%] lg:left-[60%] xl:-top-[15%] xl:left-[60%] lg:w-52 xl:w-72"
        />

        <div className="absolute top-0 -translate-y-14 right-1/2 translate-x-16  lg:-top-[13%] lg:right-[35%] xl:-top-[16%] xl:right-[35%]">
          <div className="relative">
            <img
              src="/features_woman-top.webp"
              alt=""
              width={90}
              height={90}
              className="lg:w-52 xl:w-72"
            />
            <img
              src="/features_woman-bottom.webp"
              alt=""
              width={90}
              height={90}
              className="absolute top-1/2 translate-y-1/4 -left-2 lg:w-52 xl:w-72"
            />
          </div>
        </div>

        <img
          src="/features_radish.webp"
          alt=""
          width={100}
          height={100}
          className="absolute -bottom-1/3 -translate-y-24 z-10 lg:-left-[10%] lg:w-52 xl:w-82"
        />
        <img
          src="/features_frying_pen.webp"
          alt=""
          width={130}
          height={130}
          className="absolute -bottom-1/2 -translate-y-1/3 -right-5 z-10 lg:-bottom-[70%] lg:w-52 xl:w-82"
        />
      </div>

      <div className="relative h-full mb-60  xl:mb-80">
        <CardContainer
          className="bg-linear-to-r from-indigo-800 to-indigo-900 z-10"
          title="어디서 게임을 하든 여기서 어울리세요"
          description="PC든, 휴대전화든, 콘솔이든 Discord에서 어울릴 수 있습니다. 기기 간에 쉽게 전환하고 도구를 사용하여 친구들과 여러 개의 그룹 채팅을 관리할 수 있습니다."
          videoSrc="/features_os.mp4"
        />
      </div>
    </div>
  );
}
