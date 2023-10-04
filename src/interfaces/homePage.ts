import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

export interface CarouselProps {
  images: string;
  link?: string;
  secondaryButton: string;
  primaryButton: string;
  headingText: string;
  topText: string;
}

export interface ButtonProps {
  primary?: string;
  secondary?: string;
  classAppiled?: string;
}

export interface NavItem {
  label: string;
  children?: Array<NavItem>;
  href?: string;
}

export interface ICard {
  img: string;
  text: string;
  id: number;
  link: string;
}

export interface ICategoryCard {
  img: string;
  text: string;
  link: string;
}

export interface IFooterLink {
  label: string;
  link: string;
  id: number;
}

export interface IFooterProps {
  text: string;
  items: IFooterLink[];
}

export interface IProductProps {
  id?: number;
  productName: string;
  price: string | number;
  totalRating: number;
  productImage: string;
}

export interface IProductCategoryProps {
  id?: number;
  prodTitle: string;
  prodImage: string;
}

export interface IBannerProps {
  heading: string;
  subHeading: string;
  btnText: string;
  btnClassApplied?: string;
  subHeadingClass?: string;
}

export interface IFeatureList {
  text: string;
  description: string;
  icon: ReactJSXElement;
}
