"use client";

import { useState, useRef, useCallback, useId } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Category } from "./types";
import CategoryDropdown from "./CategoryDropdown";

interface CategoryItemProps {
  category: Category;
}

function CategoryItem({ category }: CategoryItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  // anchorRef points to the <li> so we can get its bounding rect for portal positioning
  const anchorRef = useRef<HTMLLIElement>(null);
  const dropdownId = useId();

  const openMenu = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    timerRef.current = setTimeout(() => setIsOpen(false), 120);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsOpen((prev) => !prev);
    }
    if (e.key === "Escape") setIsOpen(false);
  }, []);

  const hasDropdown =
    category.hasDropdown && (category.subCategories?.length ?? 0) > 0;

  return (
    <li
      ref={anchorRef}
      className="relative flex-shrink-0"
      onMouseEnter={hasDropdown ? openMenu : undefined}
      onMouseLeave={hasDropdown ? closeMenu : undefined}
    >
      <motion.button
        whileHover={{ y: -1 }}
        transition={{ duration: 0.15 }}
        onKeyDown={handleKeyDown}
        aria-haspopup={hasDropdown ? "true" : undefined}
        aria-expanded={hasDropdown ? isOpen : undefined}
        aria-controls={hasDropdown ? dropdownId : undefined}
        onClick={hasDropdown ? () => setIsOpen((prev) => !prev) : undefined}
        className="
          group flex items-center gap-1 px-3 py-1.5
          text-sm font-medium whitespace-nowrap
          text-[#2C3E2D] dark:text-[#c8e6c9]
          hover:text-[#2D6A4F] dark:hover:text-[#81c784]
          rounded-lg
          hover:bg-[#F0FAF4] dark:hover:bg-[#2D6A4F]/20
          transition-all duration-200
          focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D6A4F]
        "
      >
        <span>{category.label}</span>
        {hasDropdown && (
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="
              text-[#5a7a5e] dark:text-[#5a7a5e]
              group-hover:text-[#2D6A4F] dark:group-hover:text-[#81c784]
              transition-colors
            "
          >
            <ChevronDown size={13} />
          </motion.span>
        )}
      </motion.button>

      {/* Dropdown is rendered into document.body via portal — never clipped */}
      {hasDropdown && category.subCategories && (
        <CategoryDropdown
          isOpen={isOpen}
          anchorRef={anchorRef}
          subCategories={category.subCategories}
          categoryLabel={category.label}
          dropdownId={dropdownId}
        />
      )}
    </li>
  );
}

interface CategoryNavProps {
  categories: Category[];
}

export default function CategoryNav({ categories }: CategoryNavProps) {
  return (
    <nav
      aria-label="Product category navigation"
      className="w-full bg-[#F0FAF4] dark:bg-[#0d1f12] border-b border-[#d4e8d8] dark:border-[#1e3d22]"
    >
      <div className="max-w-screen-xl mx-auto px-4">
        {/*
         * overflow-x-auto lives only on this wrapper, NOT on the ul.
         * The portal-based dropdown bypasses this overflow context entirely.
         */}
        <div
          className="overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <ul className="flex items-center gap-0.5 py-1.5 list-none m-0 p-0 w-max">
            {categories.map((cat) => (
              <CategoryItem key={cat.id} category={cat} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
