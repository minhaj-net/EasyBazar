"use client";

import { useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useCategories } from "@/lib/hooks/useHeroData";

/* ─── Skeleton card ─── */
function CategorySkeleton() {
  return (
    <div className="flex flex-col items-center gap-2 flex-shrink-0 w-[90px] sm:w-[100px]">
      <div className="w-[72px] h-[72px] sm:w-20 sm:h-20 rounded-full bg-[#e8f0e9] dark:bg-[#1a3d2e] animate-pulse" />
      <div className="h-3 w-14 rounded bg-[#e8f0e9] dark:bg-[#1a3d2e] animate-pulse" />
    </div>
  );
}

/* ─── Single category card ─── */
function CategoryCard({
  id,
  label,
  image,
  href,
  productCount,
}: {
  id: string;
  label: string;
  image: string;
  href: string;
  productCount: number;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.18 }}
      className="flex flex-col items-center gap-2 flex-shrink-0 w-[90px] sm:w-[100px] cursor-pointer"
    >
      <Link
        href={href}
        className="flex flex-col items-center gap-2 w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D6A4F] rounded-full"
        aria-label={`Browse ${label} — ${productCount} products`}
      >
        {/* Circle image */}
        <div className="w-[72px] h-[72px] sm:w-20 sm:h-20 rounded-full overflow-hidden flex-shrink-0 bg-[#F0FAF4] dark:bg-[#1a3d2e] border-2 border-[#d4e8d8] dark:border-[#2a4a30] shadow-sm hover:border-[#2D6A4F] hover:shadow-[0_4px_16px_rgba(45,106,79,0.2)] transition-all duration-200 flex items-center justify-center">
          <Image
            src={image}
            alt={label}
            width={80}
            height={80}
            className="object-contain p-2 w-full h-full"
            sizes="80px"
          />
        </div>

        {/* Label */}
        <span className="
          text-[12px] sm:text-[13px] font-semibold text-center leading-tight
          text-[#2C3E2D] dark:text-[#c8e6c9]
          hover:text-[#2D6A4F] dark:hover:text-white
          transition-colors duration-150
          line-clamp-2
        ">
          {label}
        </span>
      </Link>
    </motion.div>
  );
}

/* ─── Main section ─── */
export default function FeaturedCategories() {
  const { data: categories, isLoading } = useCategories();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback((dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -280 : 280,
      behavior: "smooth",
    });
  }, []);

  return (
    <section aria-labelledby="categories-heading" className="w-full">
      {/* Section header */}
      <div className="flex items-center justify-between mb-4">
        <h2
          id="categories-heading"
          className="text-lg sm:text-xl font-bold text-[#2C3E2D] dark:text-white"
        >
          Featured Categories
        </h2>
        <Link
          href="/categories"
          className="text-sm font-semibold text-[#2D6A4F] dark:text-[#D4A574] hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-[#2D6A4F] rounded"
        >
          See All →
        </Link>
      </div>

      {/* Carousel wrapper */}
      <div className="relative">
        {/* Left arrow */}
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll categories left"
          className="
            absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10
            w-8 h-8 rounded-full shadow-md
            bg-white dark:bg-[#1a3d2e]
            border border-[#d4e8d8] dark:border-[#2a4a30]
            text-[#2D6A4F] dark:text-[#7aab80]
            hover:bg-[#2D6A4F] hover:text-white hover:border-[#2D6A4F]
            dark:hover:bg-[#2D6A4F] dark:hover:text-white
            flex items-center justify-center
            transition-all duration-200
            focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D6A4F]
            hidden sm:flex
          "
        >
          <ChevronLeft size={16} />
        </button>

        {/* Scrollable strip */}
        <div
          ref={scrollRef}
          className="
            flex items-start gap-4 sm:gap-5
            overflow-x-auto scrollbar-hide
            px-1 py-3
          "
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          role="list"
          aria-label="Product categories"
        >
          {isLoading
            ? Array.from({ length: 8 }).map((_, i) => (
                <CategorySkeleton key={i} />
              ))
            : categories?.map((cat) => (
                <div key={cat.id} role="listitem">
                  <CategoryCard {...cat} />
                </div>
              ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={() => scroll("right")}
          aria-label="Scroll categories right"
          className="
            absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10
            w-8 h-8 rounded-full shadow-md
            bg-white dark:bg-[#1a3d2e]
            border border-[#d4e8d8] dark:border-[#2a4a30]
            text-[#2D6A4F] dark:text-[#7aab80]
            hover:bg-[#2D6A4F] hover:text-white hover:border-[#2D6A4F]
            dark:hover:bg-[#2D6A4F] dark:hover:text-white
            flex items-center justify-center
            transition-all duration-200
            focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D6A4F]
            hidden sm:flex
          "
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </section>
  );
}
