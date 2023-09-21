import { ICard, IFooterLink, NavItem } from "@/interfaces/homePage";
import { MenCategory, FemaleCategory, KidsCategory } from "@/assets/index";

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Men",
    children: [
      {
        label: "Jeans",
        href: "/men/jeans",
      },
      {
        label: "Shirt",
        href: "/men/shirt",
      },
    ],
  },
  {
    label: "Women",
    children: [
      {
        label: "Top",
        href: "/women/top",
      },
      {
        label: "Jeans",
        href: "/women/jeans",
      },
    ],
  },
  {
    label: "New Arrival",
    href: "/new-arrival",
  },
  {
    label: "Top Selling",
    href: "/top-selling",
  },
];

export const Cards: ICard[] = [
  {
    img: MenCategory,
    text: "Men's",
    id: 1,
    link: "/men",
  },
  {
    img: FemaleCategory,
    text: "Women's",
    id: 2,
    link: "/female",
  },
  {
    img: KidsCategory,
    text: "Kids's",
    id: 3,
    link: "/kids",
  },
];

export const HelpItems :IFooterLink[] = [
  {
    label: "Delivery & Return",
    link: "/",
    id:1
  },
  {
    label: "FAQ",
    link: "/faq",
    id:2
  },
  {
    label: "Track Order",
    link: "/track-order",
    id:3
  },
  {
    label: "Contacts",
    link: "/contacts",
    id:4
  },
  {
    label: "Blog",
    link: "/blog",
    id:5
  },

];

export const ShopItems :IFooterLink[] = [
  {
    label: "New Arrivals",
    id:1,
    link: "/new-arrivals",
  },
  {
    label: "Trending Now",
    id:2,
    link: "/trending-now",
  },
  {
    label: "Sales",
    id:3,
    link: "/sales",
  },
  {
    label: "Brands",
    id:4,
    link: "/brands",
  },
  {
    label: "Blog",
    id:5,
    link: "/blog",
  },

];
