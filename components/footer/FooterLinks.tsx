"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FOOTER_COLUMNS, type FooterColumn } from "./footer-data";

/* ─── Desktop column ─── */
function DesktopColumn({ column }: { column: FooterColumn }) {
  return (
    <div className="flex flex-col gap-3">
      {/* Heading */}
      <h3 className="text-[12.5px] font-extrabold uppercase tracking-[0.1em] text-[#2D6A4F] dark:text-[#D4A574]">
        {column.title}
      </h3>
      {/* Accent underline */}
      <div className="w-6 h-0.5 rounded-full bg-[#D4A574]/70" />
      {/* Links */}
      <ul className="flex flex-col gap-[9px] mt-1">
        {column.links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="
                text-[13px] text-[#4a6b4e] dark:text-[#8db88e]
                hover:text-[#2D6A4F] dark:hover:text-white
                hover:pl-1
                transition-all duration-150
                focus:outline-none focus-visible:ring-1 focus-visible:ring-[#2D6A4F] rounded
              "
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── Mobile accordion ─── */
function MobileAccordion({ column }: { column: FooterColumn }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#d0e8d2] dark:border-[#1e3d22] last:border-none">
      <button
        onClick={() => setOpen((p) => !p)}
        aria-expanded={open}
        className="
          flex items-center justify-between w-full py-3.5
          text-[13px] font-bold uppercase tracking-wider
          text-[#2C3E2D] dark:text-[#c8e6c9]
          focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D6A4F] rounded
        "
      >
        <span>{column.title}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-[#2D6A4F] dark:text-[#D4A574]"
        >
          <ChevronDown size={16} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="overflow-hidden flex flex-col gap-2.5 pb-4 pl-1"
          >
            {column.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="
                    text-[13px] text-[#4a6b4e] dark:text-[#8db88e]
                    hover:text-[#2D6A4F] dark:hover:text-white
                    transition-colors duration-150
                    focus:outline-none focus-visible:ring-1 focus-visible:ring-[#2D6A4F] rounded
                  "
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FooterLinks() {
  return (
    <>
      {/* ── Desktop & tablet (sm+): 2-col → 4-col grid ── */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {FOOTER_COLUMNS.map((col) => (
          <DesktopColumn key={col.title} column={col} />
        ))}
      </div>

      {/* ── Mobile: accordion ── */}
      <div className="sm:hidden flex flex-col border-t border-[#d0e8d2] dark:border-[#1e3d22]">
        {FOOTER_COLUMNS.map((col) => (
          <MobileAccordion key={col.title} column={col} />
        ))}
      </div>
    </>
  );
}
