"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Heart, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import type { Product } from "@/lib/hooks/useHeroData";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [wishlisted, setWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 1800);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    setWishlisted((p) => !p);
  };

  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(45,106,79,0.12)" }}
      transition={{ duration: 0.2 }}
      className="
        group relative flex flex-col
        bg-white dark:bg-[#132a18]
        rounded-2xl overflow-hidden
        border border-[#e8f0e9] dark:border-[#2a4a30]
        shadow-sm
        h-full
      "
    >
      {/* Image area */}
      <Link
        href={`/products/${product.id}`}
        aria-label={product.name}
        className="relative block bg-[#F0FAF4] dark:bg-[#1a3d2e] overflow-hidden"
      >
        <div className="w-full aspect-square flex items-center justify-center p-4">
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
            className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          />
        </div>

        {/* Discount badge */}
        {product.discount > 0 && (
          <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full text-[11px] font-bold bg-[#2D6A4F] text-white">
            -{product.discount}%
          </span>
        )}

        {/* Custom badge */}
        {product.badge && (
          <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#D4A574] text-white">
            {product.badge}
          </span>
        )}

        {/* Out of stock overlay */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-white/60 dark:bg-black/60 flex items-center justify-center">
            <span className="text-xs font-bold text-[#5a7a5e] dark:text-[#7aab80] bg-white dark:bg-[#0d1f12] px-3 py-1 rounded-full border border-[#d4e8d8]">
              Out of Stock
            </span>
          </div>
        )}

        {/* Wishlist button */}
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={handleWishlist}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          className="
            absolute bottom-2.5 right-2.5
            w-8 h-8 rounded-full
            bg-white dark:bg-[#132a18]
            border border-[#e8f0e9] dark:border-[#2a4a30]
            flex items-center justify-center
            opacity-0 group-hover:opacity-100
            transition-all duration-200
            shadow-sm
            focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D6A4F]
          "
        >
          <Heart
            size={14}
            className={
              wishlisted
                ? "fill-[#E8500A] text-[#E8500A]"
                : "text-[#5a7a5e] dark:text-[#7aab80]"
            }
          />
        </motion.button>
      </Link>

      {/* Info area */}
      <div className="flex flex-col gap-1.5 p-3 flex-1">
        {/* Name */}
        <Link href={`/products/${product.id}`}>
          <h3 className="
            text-[13px] sm:text-[13.5px] font-semibold leading-snug
            text-[#2C3E2D] dark:text-[#c8e6c9]
            hover:text-[#2D6A4F] dark:hover:text-white
            transition-colors duration-150
            line-clamp-2
          ">
            {product.name}
          </h3>
        </Link>

        {/* Unit */}
        <span className="text-[11.5px] text-[#5a7a5e] dark:text-[#7aab80]">
          {product.unit}
        </span>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <Star size={11} className="fill-[#D4A574] text-[#D4A574]" />
          <span className="text-[11.5px] font-semibold text-[#2C3E2D] dark:text-[#c8e6c9]">
            {product.rating}
          </span>
          <span className="text-[11px] text-[#5a7a5e] dark:text-[#7aab80]">
            ({product.reviewCount})
          </span>
        </div>

        {/* Price row */}
        <div className="flex items-center gap-2 mt-auto pt-1">
          <span className="text-[15px] font-extrabold text-[#2D6A4F] dark:text-[#D4A574]">
            ৳{product.price}
          </span>
          {product.originalPrice > product.price && (
            <span className="text-[12px] line-through text-[#5a7a5e] dark:text-[#5a7a5e]">
              ৳{product.originalPrice}
            </span>
          )}
        </div>

        {/* Add to cart */}
        <motion.button
          onClick={handleAddToCart}
          disabled={!product.inStock || addedToCart}
          whileTap={{ scale: 0.96 }}
          className={`
            w-full mt-1.5 py-2 rounded-xl
            flex items-center justify-center gap-1.5
            text-[12.5px] font-bold
            transition-all duration-200
            focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D6A4F]
            ${
              !product.inStock
                ? "bg-[#e8f0e9] dark:bg-[#1a3d2e] text-[#5a7a5e] cursor-not-allowed"
                : addedToCart
                ? "bg-[#2D6A4F] text-white"
                : "bg-[#F0FAF4] dark:bg-[#1a3d2e] text-[#2D6A4F] dark:text-[#7aab80] hover:bg-[#2D6A4F] hover:text-white dark:hover:bg-[#2D6A4F] dark:hover:text-white border border-[#d4e8d8] dark:border-[#2a4a30] hover:border-[#2D6A4F]"
            }
          `}
          aria-label={addedToCart ? "Added to cart" : "Add to cart"}
        >
          <ShoppingCart size={13} />
          {addedToCart ? "Added!" : "Add to Cart"}
        </motion.button>
      </div>
    </motion.div>
  );
}
