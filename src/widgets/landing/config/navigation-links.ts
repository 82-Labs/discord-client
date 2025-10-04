interface Link {
  label: string;
  href?: string;
}

interface NavigationLink extends Link {
  type: "link" | "popover";
  icon?: string;
  popoverAlign?: "row" | "column";
  popoverSections?: PopoverSection[];
}

interface PopoverSection {
  title: string;
  links: Link[];
}

const SAFETY_CENTER_POPOVER_LINKS: PopoverSection[] = [
  {
    title: "리소스",
    links: [
      {
        label: "Family Center",
        href: "/safety-family-center",
      },
      {
        label: "보안 라이브러리",
        href: "/safety-library",
      },
      {
        label: "보안 뉴스",
        href: "/safety-news",
      },
      {
        label: "청소년 현장",
        href: "/safety-teen-charter",
      },
    ],
  },
  {
    title: "Hubs",
    links: [
      {
        label: "부모님 허브",
        href: "/safety-parents",
      },
      {
        label: "정책 허브",
        href: "/safety-policies",
      },
      {
        label: "개인정보 보호 허브",
        href: "/safety-privacy",
      },
      {
        label: "투명성 허브",
        href: "/safety-transparency",
      },
      {
        label: "웰빙 허브",
        href: "/safety-wellbeing",
      },
    ],
  },
];

const QUEST_POPOVER_LINKS: PopoverSection[] = [
  {
    title: "리소스",
    links: [
      {
        label: "광고",
        href: "/ads/quests",
      },
      {
        label: "성공 사례",
        href: "/ads/quests-success-stories",
      },
      {
        label: "퀘스트 자주 묻는 질문",
        href: "/ads/quests-faq",
      },
    ],
  },
];

const SUPPORT_POPOVER_LINKS: PopoverSection[] = [
  {
    title: "리소스",
    links: [
      {
        label: "고객센터",
        href: "/hc/en-us",
      },
      {
        label: "피드백",
        href: "/hc/en-us/community/topics",
      },
      {
        label: "요청제출",
        href: "/hc/en-us/requests/new",
      },
    ],
  },
];

const BLOG_POPOVER_LINKS: PopoverSection[] = [
  {
    title: "컬렉션",
    links: [
      {
        label: "블로그",
        href: "/blog",
      },
      {
        label: "추천",
        href: "/blog",
      },
      {
        label: "커뮤니티",
        href: "/category/community",
      },
      {
        label: "Discord HQ",
        href: "/category/company",
      },
      {
        label: "엔지니어링 및 개발사",
        href: "/category/engineering",
      },
      {
        label: "Discord 이용 방법",
        href: "/category/how-to-discord",
      },
      {
        label: "정책 및 안전",
        href: "/category/safety",
      },
      {
        label: "제품 및 기능",
        href: "/category/product",
      },
    ],
  },
];

const DEVELOPER_POPOVER_LINKS: PopoverSection[] = [
  {
    title: "추천",
    links: [
      {
        label: "Discord 소셜 SDK",
        href: "/developers/social-sdk",
      },
      {
        label: "앱과 활동",
        href: "/developers/build",
      },
    ],
  },
  {
    title: "문서",
    links: [
      {
        label: "개발자",
        href: "/developers",
      },
      {
        label: "개발자 문서",
        href: "/developers/docs/intro",
      },
      {
        label: "개발자 애플리케이션",
        href: "/developers/applications",
      },
      {
        label: "개발자 고객센터",
        href: "/hc/en-us",
      },
    ],
  },
];

export const NAVIGATION_LINKS: NavigationLink[] = [
  {
    label: "다운로드",
    href: "/download",
    type: "link",
  },
  {
    label: "Nitro",
    href: "/nitro",
    type: "link",
  },
  {
    label: "찾기",
    href: "/servers",
    type: "link",
  },
  {
    label: "보안센터",
    type: "popover",
    icon: "/egg.webp",
    popoverAlign: "row",
    popoverSections: SAFETY_CENTER_POPOVER_LINKS,
  },
  {
    label: "퀘스트",
    type: "popover",
    icon: "/trophy.webp",
    popoverAlign: "column",
    popoverSections: QUEST_POPOVER_LINKS,
  },
  {
    label: "지원",
    type: "popover",
    icon: "/hamster.webp",
    popoverAlign: "column",
    popoverSections: SUPPORT_POPOVER_LINKS,
  },
  {
    label: "블로그",
    icon: "/discord.webp",
    type: "popover",
    popoverAlign: "column",
    popoverSections: BLOG_POPOVER_LINKS,
  },
  {
    label: "개발자",
    icon: "/robot.webp",
    type: "popover",
    popoverAlign: "column",
    popoverSections: DEVELOPER_POPOVER_LINKS,
  },
  {
    label: "인재채용",
    type: "link",
  },
];

export type { NavigationLink, PopoverSection, Link };
