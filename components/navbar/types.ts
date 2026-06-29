export interface Category {
  id: string;
  label: string;
  icon?: string;
  hasDropdown?: boolean;
  subCategories?: SubCategory[];
}

export interface SubCategory {
  id: string;
  label: string;
  href: string;
  badge?: string;
}

export interface ActionItem {
  id: string;
  label: string;
  href: string;
  ariaLabel: string;
}

export interface NavbarProps {
  cartCount?: number;
}
