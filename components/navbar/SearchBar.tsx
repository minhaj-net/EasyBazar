"use client";

import { Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useCallback } from "react";

interface SearchBarProps {
  className?: string;
}

export default function SearchBar({ className = "" }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClear = useCallback(() => {
    setQuery("");
    inputRef.current?.focus();
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (query.trim()) {
        console.log("Search:", query);
      }
    },
    [query]
  );

  return (
    <motion.form
      onSubmit={handleSubmit}
      animate={{
        boxShadow: isFocused
          ? "0 0 0 3px rgba(45,106,79,0.18), 0 4px 20px rgba(45,106,79,0.1)"
          : "0 2px 8px rgba(0,0,0,0.05)",
      }}
      transition={{ duration: 0.25 }}
      className={`
        relative flex items-center
        bg-white dark:bg-[#132a18]
        border-2 rounded-full
        overflow-hidden
        transition-colors duration-300
        ${isFocused
          ? "border-[#2D6A4F]"
          : "border-[#d4e8d8] dark:border-[#2a4a30]"
        }
        ${className}
      `}
      role="search"
      aria-label="Product search"
    >
      <input
        ref={inputRef}
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Search for products..."
        aria-label="Search for products"
        autoComplete="off"
        spellCheck={false}
        className="
          flex-1 h-11 pl-5 pr-2
          bg-transparent
          text-[#2C3E2D] dark:text-white
          placeholder-[#7a9a7e] dark:placeholder-[#5a7a5e]
          text-sm font-medium
          outline-none
          min-w-0
        "
      />

      <AnimatePresence>
        {query.length > 0 && (
          <motion.button
            type="button"
            onClick={handleClear}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.15 }}
            aria-label="Clear search"
            className="
              flex-shrink-0 w-7 h-7 mr-1 rounded-full
              flex items-center justify-center
              text-[#5a7a5e] hover:text-[#2C3E2D]
              dark:text-[#5a7a5e] dark:hover:text-white
              hover:bg-[#F0FAF4] dark:hover:bg-[#1e3d22]
              transition-colors duration-200
              focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D6A4F]
            "
          >
            <X size={14} />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        aria-label="Submit search"
        className="
          flex-shrink-0 h-11 px-5
          bg-[#2D6A4F] hover:bg-[#1e4d38]
          text-white
          flex items-center gap-2
          text-sm font-semibold
          rounded-full
          transition-colors duration-200
          focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D6A4F] focus-visible:ring-offset-2
          m-0.5
        "
      >
        <Search size={16} />
        <span className="hidden sm:inline">Search</span>
      </motion.button>
    </motion.form>
  );
}
