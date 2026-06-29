"use client";

import { useEffect, useCallback } from "react";
import { X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Category } from "./types";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  categories: Category[];
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const drawerVariants = {
  hidden: { x: "-100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
  exit: {
    x: "-100%",
    opacity: 0,
    transition: { duration: 0.25, ease: "easeIn" as const },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.03, duration: 0.2 },
  }),
};

export default function MobileDrawer({ isOpen, onClose, categories }: MobileDrawerProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const quickLinks = [
    { label: "Track Order", href: "/track-order" },
    { label: "Sign In / Register", href: "/auth/signin" },
    { label: "My Wishlist", href: "/wishlist" },
    { label: "My Orders", href: "/orders" },
    { label: "Help & Support", href: "/support" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            aria-hidden="true"
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          />

          {/* Drawer panel */}
          <motion.aside
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="
              fixed top-0 left-0 bottom-0 z-50
              w-[min(320px,85vw)]
              bg-[#FAFCF9] dark:bg-[#0d1f12]
              shadow-2xl flex flex-col overflow-hidden
            "
          >
            {/* Header */}
            <div className="
              flex items-center justify-between
              px-5 py-4
              border-b border-[#d4e8d8] dark:border-[#1e3d22]
              bg-[#F0FAF4] dark:bg-[#2D6A4F]/15
            ">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#2D6A4F] flex items-center justify-center">
                  <span className="text-white font-bold text-sm">E</span>
                </div>
                <span className="text-[#2C3E2D] dark:text-white font-bold text-lg">
                  EasyBazar
                </span>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                aria-label="Close navigation menu"
                className="
                  w-8 h-8 rounded-full flex items-center justify-center
                  text-[#5a7a5e] dark:text-[#7aab80]
                  hover:bg-white dark:hover:bg-[#1e3d22]
                  hover:text-[#2C3E2D] dark:hover:text-white
                  transition-all duration-200
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D6A4F]
                "
              >
                <X size={18} />
              </motion.button>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto">
              {/* Quick Links */}
              <div className="px-4 pt-4 pb-2">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#5a7a5e] dark:text-[#5a7a5e] px-2 mb-2">
                  Quick Links
                </p>
                <ul className="space-y-0.5">
                  {quickLinks.map((link, i) => (
                    <motion.li
                      key={link.href}
                      custom={i}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className="
                          flex items-center justify-between
                          px-3 py-2.5 rounded-xl
                          text-sm font-medium
                          text-[#2C3E2D] dark:text-[#c8e6c9]
                          hover:bg-[#F0FAF4] dark:hover:bg-[#2D6A4F]/20
                          hover:text-[#2D6A4F] dark:hover:text-[#81c784]
                          transition-all duration-200
                          focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D6A4F] focus-visible:ring-inset
                        "
                      >
                        {link.label}
                        <ChevronRight size={14} className="text-[#5a7a5e]" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="mx-4 my-2 border-t border-[#d4e8d8] dark:border-[#1e3d22]" />

              {/* Categories */}
              <div className="px-4 pb-6">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#5a7a5e] dark:text-[#5a7a5e] px-2 mb-2">
                  Categories
                </p>
                <ul className="space-y-0.5">
                  {categories.map((cat, i) => (
                    <motion.li
                      key={cat.id}
                      custom={quickLinks.length + i}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <Link
                        href={`/category/${cat.id}`}
                        onClick={onClose}
                        className="
                          flex items-center justify-between
                          px-3 py-2.5 rounded-xl
                          text-sm font-medium
                          text-[#2C3E2D] dark:text-[#c8e6c9]
                          hover:bg-[#F0FAF4] dark:hover:bg-[#2D6A4F]/20
                          hover:text-[#2D6A4F] dark:hover:text-[#81c784]
                          transition-all duration-200
                          focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D6A4F] focus-visible:ring-inset
                        "
                      >
                        {cat.label}
                        <ChevronRight size={14} className="text-[#5a7a5e]" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
