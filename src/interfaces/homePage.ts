export interface CarouselProps {
  images: string;
  link?: string;
  secondaryButton: string;
  primaryButton: string;
  headingText: string;
  topText: string;
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
