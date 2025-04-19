import { ReactNode } from 'react';

export interface CardProps {
  icon: string | ReactNode;
  title: string;
  description: string;
}

export interface SectionProps {
  id: string;
  title: string;
  description: string;
  children?: ReactNode;
}

export interface NavItem {
  label: string;
  href: string;
  onClick?: () => void;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  ariaLabel: string;
}

export interface Service {
  icon: string | ReactNode;
  title: string;
  description: string;
}

export interface Product {
  icon: string | ReactNode;
  title: string;
  description: string;
} 