import { ICard, NavItem } from "@/interfaces/homePage";
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
    link:"/men"
  },
  {
    img: FemaleCategory,
    text: "Women's",
    id: 2,
    link:"/female"
  },
  {
    img: KidsCategory,
    text: "Kids's",
    id: 3,
    link:"/kids"
  },
];
