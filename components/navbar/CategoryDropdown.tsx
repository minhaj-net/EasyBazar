"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { createPortal } from "react-dom";
import { SubCategory } from "./types";

interface CategoryDropdownProps {
  isOpen: boolean;
  anchorRef: React.RefObject<HTMLElement | null>;
  subCategories: SubCategory[];
  categoryLabel: string;
  dropdownId: string;
}

const dropdownVariants = {
  hidden: { opacity: 0, y: -6, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut" as const,
      staggerChildren: 0.04,
    },
  },
  exit: {
    opacity: 0,
    y: -4,
    scale: 0.97,
    transition: { duration: 0.15, ease: "easeIn" as const },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -6 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.15 } },
};

export default function CategoryDropdown({
  isOpen,
  anchorRef,
  subCategories,
  categoryLabel,
  dropdownId,
}: CategoryDropdownProps) {
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Recalculate position whenever it opens or on resize/scroll
  useEffect(() => {
    if (!isOpen || !anchorRef.current) return;

    const update = () => {
      const rect = anchorRef.current!.getBoundingClientRect();
      setCoords({
        top: rect.bottom + window.scrollY + 6,
        left: rect.left + window.scrollX,
      });
    };

    update();
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, true);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update, true);
    };
  }, [isOpen, anchorRef]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id={dropdownId}
          variants={dropdownVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          role="region"
          aria-label={`${categoryLabel} subcategories`}
          style={{
            position: "absolute",
            top: coords.top,
            left: coords.left,
            zIndex: 9999,
          }}
          className="
            min-w-[210px]
            bg-white dark:bg-[#132a18]
            rounded-2xl
            shadow-[0_8px_30px_rgba(45,106,79,0.15)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)]
            border border-[#d4e8d8] dark:border-[#2a4a30]
            overflow-hidden
            p-2
          "
        >
          {subCategories.map((sub) => (
            <motion.div key={sub.id} variants={itemVariants}>
              <Link
                href={sub.href}
                className="
                  group flex items-center justify-between
                  px-3 py-2.5 rounded-xl
                  text-sm font-medium
                  text-[#2C3E2D] dark:text-[#c8e6c9]
                  hover:bg-[#F0FAF4] dark:hover:bg-[#2D6A4F]/20
                  hover:text-[#2D6A4F] dark:hover:text-[#81c784]
                  transition-all duration-200
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D6A4F] focus-visible:ring-inset
                "
              >
                <span>{sub.label}</span>
                {sub.badge && (
                  <span className="
                    text-[10px] font-bold px-1.5 py-0.5 rounded-full
                    bg-[#fdf0e2] text-[#b07a40]
                    dark:bg-[#3d2a10] dark:text-[#D4A574]
                  ">
                    {sub.badge}
                  </span>
                )}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
