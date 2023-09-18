import {NavItem } from "@/interfaces/navigation";

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
