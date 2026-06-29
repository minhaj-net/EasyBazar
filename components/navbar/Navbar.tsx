"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import TopHeader from "./TopHeader";
import CategoryNav from "./CategoryNav";
import MobileDrawer from "./MobileDrawer";
import { CATEGORIES } from "./data";
import { NavbarProps } from "./types";

export default function Navbar({ cartCount = 3 }: NavbarProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openDrawer = useCallback(() => setIsDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setIsDrawerOpen(false), []);

  return (
    <>
      <motion.header
        role="banner"
        animate={{
          boxShadow: isScrolled
            ? "0 4px 20px rgba(0,0,0,0.18)"
            : "0 2px 0 rgba(0,0,0,0.08)",
        }}
        transition={{ duration: 0.3 }}
        style={{
          backdropFilter: isScrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(12px)" : "none",
        }}
        className="sticky top-0 z-40 w-full"
      >
        {/* Top header — always primary green bg */}
        <TopHeader cartCount={cartCount} onDrawerOpen={openDrawer} />
        {/* Category bar — light section bg */}
        <CategoryNav categories={CATEGORIES} />
      </motion.header>

      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={closeDrawer}
        categories={CATEGORIES}
      />
    </>
  );
}
