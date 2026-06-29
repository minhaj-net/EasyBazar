"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "./footer-data";

export default function FooterBrand() {
  return (
    <div className="flex flex-col gap-5">

      {/* Logo + Brand name */}
      <Link
        href="/"
        aria-label="EasyBazar home"
        className="inline-flex items-center gap-3 w-fit rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A574] focus-visible:ring-offset-2"
      >
        {/* Icon box */}
        <div className="
          w-[42px] h-[42px] rounded-xl flex-shrink-0
          bg-[#2D6A4F] border-2 border-[#D4A574]/60
          flex items-center justify-center
          shadow-[0_3px_10px_rgba(45,106,79,0.25)]
        ">
          <span className="text-white font-extrabold text-lg leading-none">E</span>
        </div>
        {/* Text */}
        <div className="flex flex-col leading-none gap-1">
          <span className="font-extrabold text-[18px] tracking-tight text-[#2C3E2D] dark:text-white">
            Easy<span className="text-[#2D6A4F] dark:text-[#D4A574]">Bazar</span>
          </span>
          <span className="text-[11px] font-medium text-[#5a7a5e] dark:text-[#7aab80] tracking-wide">
            Fresh &amp; Fast Delivery
          </span>
        </div>
      </Link>

      {/* Description */}
      <p className="text-[13.5px] leading-relaxed text-[#4a6b4e] dark:text-[#8db88e] max-w-[260px]">
        EasyBazar is an e-commerce platform dedicated to providing safe and
        reliable food to every home.
      </p>

      {/* Contact */}
      <ul className="flex flex-col gap-2.5">
        {([
          { Icon: MapPin, label: "Rampura, Dhaka, Bangladesh" },
          { Icon: Phone,  label: "+880 964-2922922" },
          { Icon: Mail,   label: "contact@easybazar.com" },
        ] as const).map(({ Icon, label }) => (
          <li key={label} className="flex items-start gap-2.5">
            <Icon size={13} className="mt-[2px] flex-shrink-0 text-[#2D6A4F] dark:text-[#D4A574]" />
            <span className="text-[13px] text-[#4a6b4e] dark:text-[#8db88e]">{label}</span>
          </li>
        ))}
      </ul>

      {/* Social icons */}
      <div className="flex items-center gap-2">
        {SOCIAL_LINKS.map(({ label, href, svgPath, viewBox, filled }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.93 }}
            transition={{ duration: 0.15 }}
            className="
              w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0
              bg-[#eaf4eb] dark:bg-[#1a3d2e]
              text-[#2D6A4F] dark:text-[#7aab80]
              border border-[#c5ddc7] dark:border-[#2a4a30]
              hover:bg-[#2D6A4F] hover:text-white hover:border-[#2D6A4F]
              dark:hover:bg-[#2D6A4F] dark:hover:text-white dark:hover:border-[#2D6A4F]
              transition-all duration-200
              focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D6A4F]
            "
          >
            <svg
              viewBox={viewBox ?? "0 0 24 24"}
              className="w-[15px] h-[15px]"
              fill={filled ? "currentColor" : "none"}
              stroke={filled ? "none" : "currentColor"}
              strokeWidth={filled ? undefined : "2"}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d={svgPath} />
            </svg>
          </motion.a>
        ))}
      </div>

      {/* App download */}
      <div className="flex flex-col gap-2.5">
        <p className="text-[12px] font-semibold text-[#2C3E2D] dark:text-[#c8e6c9]">
          Download App on Mobile:
        </p>
        <div className="flex flex-wrap gap-2">

          {/* Google Play */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            aria-label="Get it on Google Play"
            className="
              inline-flex items-center gap-2.5 px-3 py-2 rounded-xl
              bg-[#1a2e1c] dark:bg-[#132a18]
              border border-[#2D6A4F]/50
              hover:bg-[#2D6A4F]
              transition-colors duration-200
              focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A574]
            "
          >
            {/* Play Store icon */}
            <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="none" aria-hidden="true">
              <path d="M3.5 2.8v18.4L13.4 12 3.5 2.8z" fill="#34A853"/>
              <path d="M16.6 8.7l-3.2-1.8L3.5 2.8l9.9 9.2 3.2-3.3z" fill="#4285F4"/>
              <path d="M3.5 21.2l9.9-5.9 3.2-3.3-3.2-1.8-9.9 11z" fill="#EA4335"/>
              <path d="M16.6 8.7l2.4 1.4c.7.4.7 1.4 0 1.8l-2.4 1.4-3.2-3.3 3.2-1.3z" fill="#FBBC05"/>
            </svg>
            <div className="flex flex-col leading-none">
              <span className="text-[9px] text-white/50 uppercase tracking-wider">Get it on</span>
              <span className="text-[12px] font-bold text-white mt-0.5">Google Play</span>
            </div>
          </motion.a>

          {/* App Store */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            aria-label="Download on the App Store"
            className="
              inline-flex items-center gap-2.5 px-3 py-2 rounded-xl
              bg-[#1a2e1c] dark:bg-[#132a18]
              border border-[#2D6A4F]/50
              hover:bg-[#2D6A4F]
              transition-colors duration-200
              focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A574]
            "
          >
            {/* Apple icon */}
            <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="white" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div className="flex flex-col leading-none">
              <span className="text-[9px] text-white/50 uppercase tracking-wider">Download on the</span>
              <span className="text-[12px] font-bold text-white mt-0.5">App Store</span>
            </div>
          </motion.a>

        </div>
      </div>

    </div>
  );
}
