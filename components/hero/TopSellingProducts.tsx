"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useProductsByCategory } from "@/lib/hooks/useHeroData";
import ProductCard from "./ProductCard";
import Link from "next/link";

/* ─── Skeleton grid ─── */
function ProductSkeleton() {
  return (
    <div className="rounded-2xl overflow-hidden border border-[#e8f0e9] dark:border-[#2a4a30] bg-white dark:bg-[#132a18] animate-pulse">
      <div className="aspect-square bg-[#e8f0e9] dark:bg-[#1a3d2e]" />
      <div className="p-3 flex flex-col gap-2">
        <div className="h-4 w-3/4 bg-[#e8f0e9] dark:bg-[#1a3d2e] rounded" />
        <div className="h-3 w-1/3 bg-[#e8f0e9] dark:bg-[#1a3d2e] rounded" />
        <div className="h-5 w-1/2 bg-[#e8f0e9] dark:bg-[#1a3d2e] rounded" />
        <div className="h-8 w-full bg-[#e8f0e9] dark:bg-[#1a3d2e] rounded-xl" />
      </div>
    </div>
  );
}

/* ─── Tab pill ─── */
function Tab({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      className={`
        relative px-4 py-1.5 rounded-full text-[13px] font-semibold
        transition-all duration-200
        focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D6A4F]
        ${
          active
            ? "bg-[#2D6A4F] text-white shadow-sm"
            : "text-[#5a7a5e] dark:text-[#7aab80] hover:bg-[#F0FAF4] dark:hover:bg-[#1a3d2e] hover:text-[#2D6A4F] dark:hover:text-white"
        }
      `}
      aria-pressed={active}
    >
      {label}
    </motion.button>
  );
}

const STATIC_TABS = [
  { id: "all", label: "All" },
  { id: "oil-ghee", label: "Oil & Ghee" },
  { id: "honey", label: "Honey" },
  { id: "dates", label: "Dates" },
  { id: "nuts", label: "Nuts" },
  { id: "spices", label: "Spices" },
];

export default function TopSellingProducts() {
  const [activeTab, setActiveTab] = useState("all");
  const { data: products, isLoading } = useProductsByCategory(activeTab);

  return (
    <section aria-labelledby="products-heading" className="w-full">
      {/* Header row */}
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <h2
          id="products-heading"
          className="text-lg sm:text-xl font-bold text-[#2C3E2D] dark:text-white"
        >
          Top Selling Products
        </h2>
        <Link
          href="/products"
          className="text-sm font-semibold text-[#2D6A4F] dark:text-[#D4A574] hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-[#2D6A4F] rounded"
        >
          View All →
        </Link>
      </div>

      {/* Tab filter bar */}
      <div
        className="flex items-center gap-1.5 overflow-x-auto scrollbar-hide pb-1 mb-5"
        style={{ scrollbarWidth: "none" }}
        role="tablist"
        aria-label="Filter products by category"
      >
        {STATIC_TABS.map((tab) => (
          <Tab
            key={tab.id}
            label={tab.label}
            active={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          />
        ))}
      </div>

      {/* Products grid */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 items-stretch"
      >
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => (
              <ProductSkeleton key={i} />
            ))
          : products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </motion.div>

      {/* Empty state */}
      {!isLoading && (!products || products.length === 0) && (
        <div className="py-12 text-center text-[#5a7a5e] dark:text-[#7aab80]">
          <p className="text-base font-medium">No products found in this category.</p>
        </div>
      )}
    </section>
  );
}
