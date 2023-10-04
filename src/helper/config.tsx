import React from "react";
import {
  ICard,
  IFeatureList,
  IFooterLink,
  IProductCategoryProps,
  IProductProps,
  NavItem,
} from "@/interfaces/homePage";
import {
  MenCategory,
  FemaleCategory,
  KidsCategory,
  ProductOne,
  ProductTwo,
  ProductThree,
} from "@/assets/index";
import { BusFront, PhoneCall, ShieldPlus, WalletCards } from "lucide-react";



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

export const HelpItems: IFooterLink[] = [
  {
    label: "Delivery & Return",
    link: "/",
    id: 1,
  },
  {
    label: "FAQ",
    link: "/faq",
    id: 2,
  },
  {
    label: "Track Order",
    link: "/track-order",
    id: 3,
  },
  {
    label: "Contacts",
    link: "/contacts",
    id: 4,
  },
  {
    label: "Blog",
    link: "/blog",
    id: 5,
  },
];

export const ShopItems: IFooterLink[] = [
  {
    label: "New Arrivals",
    id: 1,
    link: "/new-arrivals",
  },
  {
    label: "Trending Now",
    id: 2,
    link: "/trending-now",
  },
  {
    label: "Sales",
    id: 3,
    link: "/sales",
  },
  {
    label: "Brands",
    id: 4,
    link: "/brands",
  },
  {
    label: "Blog",
    id: 5,
    link: "/blog",
  },
];

export const Products: IProductProps[] = [
  {
    id: 1,
    totalRating: 4,
    price: "20.50$",
    productImage: ProductOne,
    productName: "Green baby romper",
  },
  {
    id: 2,
    totalRating: 3,
    price: "10.50$",
    productImage: ProductTwo,
    productName: "Fit jeans",
  },
  {
    id: 3,
    totalRating: 5,
    price: "10.50$",
    productImage: ProductThree,
    productName: "Baby shoes with laces",
  },
  {
    id: 4,
    totalRating: 3.3,
    price: "1.50$",
    productImage: ProductTwo,
    productName: "Baby shoes",
  },
  {
    id: 5,
    totalRating: 4,
    price: "20.50$",
    productImage: ProductOne,
    productName: "Green baby romper",
  },
  {
    id: 6,
    totalRating: 3,
    price: "10.50$",
    productImage: ProductTwo,
    productName: "Fit jeans",
  },
  {
    id: 7,
    totalRating: 5,
    price: "10.50$",
    productImage: ProductThree,
    productName: "Baby shoes with laces",
  },
  {
    id: 8,
    totalRating: 3.3,
    price: "1.50$",
    productImage: ProductTwo,
    productName: "Baby shoes",
  },
];

export const ProductCategoryList: IProductCategoryProps[] = [
  {
    id: 1,
    prodImage: ProductOne,
    prodTitle: "T-shirts",
  },
  {
    id: 2,
    prodImage: ProductTwo,
    prodTitle: "Jeans",
  },
  {
    id: 3,
    prodImage: ProductThree,
    prodTitle: "Shoes",
  },
];

export const FeatureCardList:IFeatureList[] = [
  {
    text: "Fast Worldwide Shipping",
    description: "Get free shipping over $250",
    icon: <BusFront size={30} color="green" />  ,
  },
  {
    text: "24/7 Customer Support",
    description: "Friendly 24/7 customer support",
    icon: <PhoneCall  size={30} color="green" />  ,
  },
  {
    text: "Money Back Guarantee",
    description: "We return money within 30 days",
    icon: <ShieldPlus size={30} color="green" />  ,
  },
  {
    text: "Secure Online Payment",
    description: "Accept all major credit cards",
    icon: <WalletCards size={30} color="green" />  ,
  },
];
