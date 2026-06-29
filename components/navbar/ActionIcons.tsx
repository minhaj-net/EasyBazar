"use client";

import {
  Package,
  User,
  Heart,
  ShoppingCart,
  MoreHorizontal,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ActionIconsProps {
  cartCount?: number;
  onMoreClick?: () => void;
}

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  href?: string;
  onClick?: () => void;
  badge?: number;
  ariaLabel: string;
}

function ActionButton({
  icon,
  label,
  href,
  onClick,
  badge,
  ariaLabel,
}: ActionButtonProps) {
  const content = (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group relative flex flex-col items-center gap-0.5 cursor-pointer"
    >
      <div className="relative">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
          className="
            w-9 h-9 rounded-xl flex items-center justify-center
            text-white/75
            group-hover:text-white
            group-hover:bg-white/15
            transition-all duration-300
          "
        >
          {icon}
        </motion.div>

        {badge !== undefined && badge > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="
              absolute -top-1.5 -right-1.5
              min-w-[18px] h-[18px] px-1
              bg-[#D4A574] text-white
              text-[10px] font-bold leading-none
              rounded-full flex items-center justify-center
              shadow-sm
            "
            aria-label={`${badge} items in cart`}
          >
            {badge > 99 ? "99+" : badge}
          </motion.span>
        )}
      </div>

      <span className="
        text-[11px] font-medium leading-none whitespace-nowrap
        text-white/65
        group-hover:text-white
        transition-colors duration-300
      ">
        {label}
      </span>
    </motion.div>
  );

  if (href) {
    return (
      <Link
        href={href}
        aria-label={ariaLabel}
        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A574] focus-visible:ring-offset-1 focus-visible:ring-offset-[#2D6A4F] rounded-xl"
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A574] focus-visible:ring-offset-1 focus-visible:ring-offset-[#2D6A4F] rounded-xl"
    >
      {content}
    </button>
  );
}

export default function ActionIcons({ cartCount = 0, onMoreClick }: ActionIconsProps) {
  return (
    <nav aria-label="Account and utility navigation">
      <ul className="flex items-center gap-1 sm:gap-2 list-none p-0 m-0">
        <li>
          <ActionButton
            icon={<Package size={20} />}
            label="Track Order"
            href="/track-order"
            ariaLabel="Track your order"
          />
        </li>
        <li>
          <ActionButton
            icon={<User size={20} />}
            label="Sign In"
            href="/auth/signin"
            ariaLabel="Sign in to your account"
          />
        </li>
        <li>
          <ActionButton
            icon={<Heart size={20} />}
            label="Wishlist"
            href="/wishlist"
            ariaLabel="View your wishlist"
          />
        </li>
        <li>
          <ActionButton
            icon={<ShoppingCart size={20} />}
            label="Cart"
            href="/cart"
            badge={cartCount}
            ariaLabel={`Shopping cart with ${cartCount} items`}
          />
        </li>
        <li>
          <ActionButton
            icon={<MoreHorizontal size={20} />}
            label="More"
            onClick={onMoreClick}
            ariaLabel="More options"
          />
        </li>
      </ul>
    </nav>
  );
}
