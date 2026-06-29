import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer
      aria-label="Site footer"
      className="w-full bg-[#FAFCF9] dark:bg-[#0d1f12] border-t border-[#d4e8d8] dark:border-[#1e3d22]"
    >
      {/* ── Main footer content ── */}
      <div className="max-w-screen-xl mx-auto px-4 py-10 sm:py-12">
        <div className="
          grid grid-cols-1 gap-10
          lg:grid-cols-[280px_1fr]
          xl:grid-cols-[300px_1fr]
        ">
          {/* Brand column */}
          <FooterBrand />

          {/* Links columns */}
          <FooterLinks />
        </div>
      </div>

      {/* ── Bottom bar: copyright + payment methods ── */}
      <FooterBottom />
    </footer>
  );
}

