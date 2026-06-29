import Link from "next/link";
import FooterPayments from "./FooterPayments";

export default function FooterBottom() {
  const year = new Date().getFullYear();

  return (
    <div className="w-full bg-[#eaf4ec] dark:bg-[#091a0d]">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4">

        {/* Mobile: stacked center | md+: two-column row */}
        <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:justify-between">

          {/* Copyright */}
          <p className="text-[12.5px] text-[#5a7a5e] dark:text-[#7aab80] text-center md:text-left whitespace-nowrap">
            Copyright &copy; {year}{" "}
            <Link
              href="/"
              className="font-semibold text-[#2D6A4F] dark:text-[#D4A574] hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-[#2D6A4F] rounded"
            >
              EasyBazar
            </Link>
            . All rights reserved.
          </p>

          {/* Payment methods */}
          <div className="flex flex-col items-center md:items-end gap-1.5">
            <span className="text-[10.5px] font-extrabold uppercase tracking-widest text-[#2D6A4F] dark:text-[#D4A574]">
              Pay With
            </span>
            <FooterPayments />
          </div>

        </div>
      </div>
    </div>
  );
}
