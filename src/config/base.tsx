import {
  LinkIcon,
  AboutIcon,
  GithubIcon,
  TwitterIcon,
  BgmIcon,
  ToysIcon,
  HomeIcon,
} from "~/components/icons";

const BASE = {
  profile_card: {
    name: "CottonCZ",
    description: "Just For Fun!",
  },
  nav_router: [
    { name: "Home", href: "/", icon: HomeIcon },
    { name: "Toys", href: "/toys", icon: ToysIcon },
    { name: "Links", href: "/link", icon: LinkIcon },
    { name: "About", href: "/about", icon: AboutIcon },
  ],
  social_link: [
    {
      name: "GitHub",
      href: "https://github.com/CottonCandyZ",
      icon: GithubIcon,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/cotton_candyZG",
      icon: TwitterIcon,
    },
    {
      name: "Bangumi",
      href: "https://bgm.tv/user/cotton_candyz",
      icon: BgmIcon,
    },
  ],
  toy_cards: [
    {
      title: "深度学习",
      project_list: [
        {
          title: "LFSA: CLIP Based Text-Image Person Search",
          description:
            "利用 CLIP 做文本行人重识别，换上重新设计的 loss 和 sampler",
          href: "https://github.com/CottonCandyZ/LFSA",
          img_alt: "Describe how loss and sampler work",
          img_src: "/toyImages/LFSA.webp",
        },
      ],
    },
  ],
  friend_link: [
    {
      name: "占位！",
      description: "等待第一个友链",
      href: "https://google.com",
      avatar_src: "/linkAvatar/AvatarSample.webp",
    },
  ],
  footer_info: { name: "CottonCandyZ" },
};
export default BASE;
