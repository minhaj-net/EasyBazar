import HeroBannerSlider from "./HeroBannerSlider";

/**
 * HeroSection — শুধু banner section
 * FeaturedCategories এবং TopSellingProducts আলাদাভাবে page.tsx এ আছে
 */
export default function HeroSection() {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
      <HeroBannerSlider />
    </div>
  );
}
