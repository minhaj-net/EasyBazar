"use client";

import Link from "next/link";
import { ShoppingCart, Menu } from "lucide-react";
import { motion } from "framer-motion";
import SearchBar from "./SearchBar";
import ActionIcons from "./ActionIcons";
import ThemeToggle from "./ThemeToggle";

interface TopHeaderProps {
  cartCount: number;
  onDrawerOpen: () => void;
}

export default function TopHeader({ cartCount, onDrawerOpen }: TopHeaderProps) {
  return (
    /* Primary green header — same in both light and dark mode */
    <div className="w-full bg-[#2D6A4F] dark:bg-[#1a3d2e]">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center gap-4 h-[68px]">

          {/* ── Logo ── */}
          <Link
            href="/"
            aria-label="EasyBazar home"
            className="flex-shrink-0 flex items-center gap-2.5 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A574] focus-visible:ring-offset-1 focus-visible:ring-offset-[#2D6A4F]"
          >
            {/* Logo mark */}
            <motion.div
              whileHover={{ scale: 1.06, rotate: -3 }}
              transition={{ duration: 0.2 }}
              className="w-[44px] h-[44px] rounded-xl flex-shrink-0 bg-white/15 border-2 border-[#D4A574]/60 flex items-center justify-center shadow-lg"
            >
              <span className="text-white font-extrabold text-xl leading-none">E</span>
            </motion.div>

            {/* Brand name */}
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-white font-extrabold text-[18px] tracking-tight leading-none">
                Easy<span className="text-[#D4A574]">Bazar</span>
              </span>
              <span className="text-white/60 text-[10px] font-medium tracking-wide mt-0.5">
                Fresh &amp; Fast Delivery
              </span>
            </div>
          </Link>

          {/* ── Search Bar — desktop & tablet ── */}
          <div className="hidden md:flex flex-1 justify-center">
            <SearchBar className="w-full max-w-[600px]" />
          </div>

          {/* ── Right Side ── */}
          <div className="ml-auto flex items-center gap-1.5">
            {/* Theme toggle */}
            <ThemeToggle />

            {/* Divider */}
            <div className="hidden md:block w-px h-8 bg-white/20 mx-1" />

            {/* Action icons — desktop */}
            <div className="hidden md:flex">
              <ActionIcons cartCount={cartCount} />
            </div>

            {/* Mobile: Cart + Hamburger */}
            <div className="flex items-center gap-1 md:hidden">
              <Link
                href="/cart"
                aria-label={`Shopping cart, ${cartCount} items`}
                className="relative flex items-center justify-center w-9 h-9 rounded-xl text-white/80 hover:bg-white/15 hover:text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A574]"
              >
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-[16px] h-[16px] px-1 bg-[#D4A574] text-white text-[9px] font-bold leading-none rounded-full flex items-center justify-center shadow-sm">
                    {cartCount > 99 ? "99+" : cartCount}
                  </span>
                )}
              </Link>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onDrawerOpen}
                aria-label="Open navigation menu"
                aria-expanded={false}
                className="flex items-center justify-center w-9 h-9 rounded-xl text-white/80 hover:bg-white/15 hover:text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A574]"
              >
                <Menu size={22} />
              </motion.button>
            </div>
          </div>

        </div>

        {/* ── Mobile Search Bar ── */}
        <div className="md:hidden pb-3">
          <SearchBar className="w-full" />
        </div>
      </div>
    </div>
  );
}
