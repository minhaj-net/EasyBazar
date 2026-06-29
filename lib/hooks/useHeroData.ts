import { useQuery } from "@tanstack/react-query";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface Banner {
  id: string;
  image: string;
  alt: string;
  href: string;
  badge?: string;
}

export interface Category {
  id: string;
  label: string;
  image: string;
  href: string;
  productCount: number;
}

export interface Product {
  id: string;
  name: string;
  namebn: string;
  category: string;
  price: number;
  originalPrice: number;
  discount: number;
  unit: string;
  rating: number;
  reviewCount: number;
  image: string;
  badge: string | null;
  inStock: boolean;
  isNew: boolean;
  isFeatured: boolean;
  description: string;
}

// ─── Fetchers ────────────────────────────────────────────────────────────────
// Use window.location.origin to build absolute URL — works in all environments

function absoluteUrl(path: string): string {
  if (typeof window !== "undefined") {
    return `${window.location.origin}${path}`;
  }
  // Fallback for SSR context (shouldn't be called server-side with these hooks)
  return path;
}

async function fetchBanners(): Promise<Banner[]> {
  const res = await fetch(absoluteUrl("/data/banners.json"));
  if (!res.ok) throw new Error("Failed to load banners");
  return res.json();
}

async function fetchCategories(): Promise<Category[]> {
  const res = await fetch(absoluteUrl("/data/categories.json"));
  if (!res.ok) throw new Error("Failed to load categories");
  return res.json();
}

async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(absoluteUrl("/data/products.json"));
  if (!res.ok) throw new Error("Failed to load products");
  return res.json();
}

// ─── Hooks ───────────────────────────────────────────────────────────────────

export function useBanners() {
  return useQuery<Banner[]>({
    queryKey: ["banners"],
    queryFn: fetchBanners,
  });
}

export function useCategories() {
  return useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
}

export function useProducts() {
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
}

export function useFeaturedProducts() {
  return useQuery<Product[]>({
    queryKey: ["products", "featured"],
    queryFn: async () => {
      const all = await fetchProducts();
      return all.filter((p) => p.isFeatured);
    },
  });
}

export function useProductsByCategory(categoryId: string) {
  return useQuery<Product[]>({
    queryKey: ["products", "category", categoryId],
    queryFn: async () => {
      const all = await fetchProducts();
      return categoryId === "all"
        ? all
        : all.filter((p) => p.category === categoryId);
    },
    enabled: !!categoryId,
  });
}
