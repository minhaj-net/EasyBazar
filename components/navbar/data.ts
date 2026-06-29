import { Category } from "./types";

export const CATEGORIES: Category[] = [
  {
    id: "combos",
    label: "Combos",
    hasDropdown: true,
    subCategories: [
      { id: "daily-combo", label: "Daily Essentials Combo", href: "/combos/daily" },
      { id: "party-combo", label: "Party Pack Combo", href: "/combos/party" },
      { id: "health-combo", label: "Health & Wellness Combo", href: "/combos/health" },
      { id: "breakfast-combo", label: "Breakfast Combo", href: "/combos/breakfast" },
    ],
  },
  {
    id: "offer-zone",
    label: "Offer Zone",
    hasDropdown: true,
    subCategories: [
      { id: "flash-sale", label: "Flash Sale", href: "/offers/flash", badge: "HOT" },
      { id: "bundle-deals", label: "Bundle Deals", href: "/offers/bundles" },
      { id: "clearance", label: "Clearance Sale", href: "/offers/clearance" },
    ],
  },
  {
    id: "fruits",
    label: "Fruits",
    hasDropdown: true,
    subCategories: [
      { id: "fresh-fruits", label: "Fresh Fruits", href: "/fruits/fresh" },
      { id: "exotic-fruits", label: "Exotic Fruits", href: "/fruits/exotic" },
      { id: "seasonal", label: "Seasonal Fruits", href: "/fruits/seasonal" },
      { id: "dried-fruits", label: "Dried Fruits", href: "/fruits/dried" },
    ],
  },
  {
    id: "vegetables",
    label: "Vegetables",
    hasDropdown: true,
    subCategories: [
      { id: "leafy-greens", label: "Leafy Greens", href: "/vegetables/leafy" },
      { id: "root-veggies", label: "Root Vegetables", href: "/vegetables/root" },
      { id: "herbs", label: "Herbs & Spices", href: "/vegetables/herbs" },
      { id: "frozen-veggies", label: "Frozen Vegetables", href: "/vegetables/frozen" },
    ],
  },
  {
    id: "fish",
    label: "Fish",
    hasDropdown: false,
  },
  {
    id: "meat",
    label: "Meat",
    hasDropdown: true,
    subCategories: [
      { id: "chicken", label: "Chicken", href: "/meat/chicken" },
      { id: "beef", label: "Beef", href: "/meat/beef" },
      { id: "mutton", label: "Mutton", href: "/meat/mutton" },
      { id: "processed", label: "Processed Meats", href: "/meat/processed" },
    ],
  },
  {
    id: "rice",
    label: "Rice",
    hasDropdown: false,
  },
  {
    id: "oil-ghee",
    label: "Oil & Ghee",
    hasDropdown: false,
  },
  {
    id: "spices",
    label: "Spices",
    hasDropdown: true,
    subCategories: [
      { id: "whole-spices", label: "Whole Spices", href: "/spices/whole" },
      { id: "ground-spices", label: "Ground Spices", href: "/spices/ground" },
      { id: "masala-blends", label: "Masala Blends", href: "/spices/masala" },
    ],
  },
  {
    id: "beverages",
    label: "Beverages",
    hasDropdown: true,
    subCategories: [
      { id: "soft-drinks", label: "Soft Drinks", href: "/beverages/soft" },
      { id: "juices", label: "Juices & Nectars", href: "/beverages/juices" },
      { id: "tea-coffee", label: "Tea & Coffee", href: "/beverages/tea-coffee" },
      { id: "energy-drinks", label: "Energy Drinks", href: "/beverages/energy" },
      { id: "water", label: "Mineral Water", href: "/beverages/water" },
    ],
  },
  {
    id: "bakery",
    label: "Bakery",
    hasDropdown: false,
  },
  {
    id: "dairy",
    label: "Dairy",
    hasDropdown: true,
    subCategories: [
      { id: "milk", label: "Milk", href: "/dairy/milk" },
      { id: "cheese", label: "Cheese", href: "/dairy/cheese" },
      { id: "yogurt", label: "Yogurt", href: "/dairy/yogurt" },
      { id: "butter", label: "Butter & Cream", href: "/dairy/butter" },
    ],
  },
  {
    id: "frozen",
    label: "Frozen Foods",
    hasDropdown: false,
  },
  {
    id: "snacks",
    label: "Snacks",
    hasDropdown: true,
    subCategories: [
      { id: "chips", label: "Chips & Crisps", href: "/snacks/chips" },
      { id: "biscuits", label: "Biscuits & Cookies", href: "/snacks/biscuits" },
      { id: "nuts", label: "Nuts & Seeds", href: "/snacks/nuts" },
      { id: "candy", label: "Candy & Chocolate", href: "/snacks/candy" },
    ],
  },
  {
    id: "household",
    label: "Household",
    hasDropdown: true,
    subCategories: [
      { id: "cleaning", label: "Cleaning Supplies", href: "/household/cleaning" },
      { id: "kitchen", label: "Kitchen Essentials", href: "/household/kitchen" },
      { id: "laundry", label: "Laundry & Fabric Care", href: "/household/laundry" },
    ],
  },
  {
    id: "personal-care",
    label: "Personal Care",
    hasDropdown: true,
    subCategories: [
      { id: "skin-care", label: "Skin Care", href: "/personal-care/skin" },
      { id: "hair-care", label: "Hair Care", href: "/personal-care/hair" },
      { id: "oral-care", label: "Oral Care", href: "/personal-care/oral" },
      { id: "body-care", label: "Body Care", href: "/personal-care/body" },
    ],
  },
];
