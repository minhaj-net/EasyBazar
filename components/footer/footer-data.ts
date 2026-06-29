export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  label: string;
  href: string;
  svgPath: string;
  viewBox?: string;
  filled?: boolean;
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Information",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "Company Information", href: "/company" },
      { label: "EasyBazar Stories", href: "/stories" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Shop By",
    links: [
      { label: "Oil & Ghee", href: "/category/oil-ghee" },
      { label: "Honey & Sweeteners", href: "/category/honey" },
      { label: "Dates", href: "/category/dates" },
      { label: "Spices", href: "/category/spices" },
      { label: "Nuts & Seeds", href: "/category/nuts" },
      { label: "Beverages", href: "/category/beverages" },
      { label: "Functional Foods", href: "/category/functional" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Support Center", href: "/support" },
      { label: "How to Order", href: "/how-to-order" },
      { label: "Order Tracking", href: "/track-order" },
      { label: "Payment", href: "/payment" },
      { label: "Shipping", href: "/shipping" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Consumer Policy",
    links: [
      { label: "Happy Return", href: "/return" },
      { label: "Refund Policy", href: "/refund" },
      { label: "Exchange", href: "/exchange" },
      { label: "Cancellation", href: "/cancellation" },
      { label: "Pre-Order", href: "/pre-order" },
      { label: "Extra Discount", href: "/discount" },
    ],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    svgPath: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
    filled: false,
  },
  {
    label: "X (Twitter)",
    href: "https://twitter.com",
    viewBox: "0 0 24 24",
    svgPath: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63Zm-1.161 17.52h1.833L7.084 4.126H5.117z",
    filled: true,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    svgPath: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zm1.5-4.87h.01M7.5 3.5h9a4 4 0 0 1 4 4v9a4 4 0 0 1-4 4h-9a4 4 0 0 1-4-4v-9a4 4 0 0 1 4-4z",
    filled: false,
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    svgPath: "M22.54 6.42a2.78 2.78 0 0 0-1.95-1.95C18.88 4 12 4 12 4s-6.88 0-8.59.47a2.78 2.78 0 0 0-1.95 1.95A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z",
    filled: true,
  },
];

/* Payment method SVG icon names used for display */
export const PAYMENT_METHODS = [
  { name: "Visa", src: "/payment/visa.svg" },
  { name: "Mastercard", src: "/payment/mastercard.svg" },
  { name: "American Express", src: "/payment/amex.svg" },
  { name: "bKash", src: "/payment/bkash.svg" },
  { name: "Nagad", src: "/payment/nagad.svg" },
  { name: "Rocket", src: "/payment/rocket.svg" },
  { name: "Dutch-Bangla", src: "/payment/dbbl.svg" },
  { name: "City Bank", src: "/payment/citybank.svg" },
  { name: "Cash on Delivery", src: "/payment/cod.svg" },
];
