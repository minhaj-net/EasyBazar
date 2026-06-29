import HeroSection from "@/components/hero/HeroSection";
import FeaturedCategories from "@/components/hero/FeaturedCategories";
import TopSellingProducts from "@/components/hero/TopSellingProducts";

export default function Home() {
  return (
    <div className="w-full bg-[#FAFCF9] dark:bg-[#0d1f12]">

      {/* ── 1. Hero Banner ── */}
      <HeroSection />

      {/* ── 2. Featured Categories ── */}
      <section className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <FeaturedCategories />
      </section>

      {/* ── Divider ── */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-[#d4e8d8] dark:border-[#1e3d22]" />
      </div>

      {/* ── 3. Top Selling Products ── */}
      <section className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <TopSellingProducts />
      </section>

    </div>
  );
}
