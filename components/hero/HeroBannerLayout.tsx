"use client";

import Image from "next/image";
import Link from "next/link";
import { useBanners } from "@/lib/hooks/useHeroData";
import HeroBannerSlider from "./HeroBannerSlider";

function SideBannerSkeleton() {
  return (
    <div className="w-full rounded-2xl bg-[#e8f0e9] dark:bg-[#1a3d2e] animate-pulse h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px]" />
  );
}

export default function HeroBannerLayout() {
  const { data: banners, isLoading } = useBanners();
  const sideBanner = banners?.[1] ?? null;

  return (
    <section aria-label="Featured banners" className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_360px] gap-3">

        {/* ── Main slider ── */}
        <div className="min-w-0">
          <HeroBannerSlider />
        </div>

        {/* ── Side banner — desktop only, same fixed height as slider ── */}
        <div className="hidden lg:block flex-shrink-0">
          {isLoading ? (
            <SideBannerSkeleton />
          ) : sideBanner ? (
            <Link
              href={sideBanner.href}
              className="relative block w-full rounded-2xl overflow-hidden shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A574] h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px]"
            >
              <Image
                src="/images/banners/side-banner-1.svg"
                alt={sideBanner.alt}
                fill
                className="object-cover"
                sizes="360px"
              />
              {sideBanner.badge && (
                <span className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full text-xs font-bold bg-[#5AAF20] text-white shadow">
                  {sideBanner.badge}
                </span>
              )}
            </Link>
          ) : null}
        </div>

      </div>
    </section>
  );
}
