"use client";

/* ─── Individual payment badge wrapper ─── */
function Badge({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div
      role="img"
      aria-label={label}
      title={label}
      className="
        inline-flex items-center justify-center
        h-8 px-2.5 rounded-md flex-shrink-0
        bg-white dark:bg-[#1a2e1c]
        border border-[#ddeede] dark:border-[#2a4a30]
        shadow-sm
      "
    >
      {children}
    </div>
  );
}

export default function FooterPayments() {
  return (
    <div className="flex flex-wrap items-center gap-1.5">

      {/* Visa */}
      <Badge label="Visa">
        <span className="font-black italic text-[15px] tracking-tighter leading-none text-[#1A1F71] select-none">
          VISA
        </span>
      </Badge>

      {/* Mastercard */}
      <Badge label="Mastercard">
        <svg viewBox="0 0 40 26" height="18" aria-hidden="true">
          <circle cx="14" cy="13" r="11" fill="#EB001B" />
          <circle cx="26" cy="13" r="11" fill="#F79E1B" />
          <path d="M20 4.8A11 11 0 0 1 23.6 13 11 11 0 0 1 20 21.2 11 11 0 0 1 16.4 13 11 11 0 0 1 20 4.8z" fill="#FF5F00" />
        </svg>
      </Badge>

      {/* Amex */}
      <Badge label="American Express">
        <span className="font-black text-[10px] tracking-wider leading-none text-white bg-[#2E77BC] px-1.5 py-0.5 rounded select-none">
          AMEX
        </span>
      </Badge>

      {/* bKash */}
      <Badge label="bKash">
        <span className="font-black text-[11px] leading-none text-white bg-[#E2136E] px-1.5 py-0.5 rounded select-none">
          bKash
        </span>
      </Badge>

      {/* Nagad */}
      <Badge label="Nagad">
        <span className="font-black text-[11px] leading-none text-white bg-[#F6821F] px-1.5 py-0.5 rounded select-none">
          Nagad
        </span>
      </Badge>

      {/* Rocket */}
      <Badge label="Rocket">
        <span className="font-black text-[10px] leading-none text-white bg-[#8C3494] px-1.5 py-0.5 rounded select-none">
          Rocket
        </span>
      </Badge>

      {/* Dutch-Bangla */}
      <Badge label="Dutch-Bangla Bank">
        <span className="font-black text-[10px] leading-none text-white bg-[#005B99] px-1.5 py-0.5 rounded select-none">
          DBBL
        </span>
      </Badge>

      {/* Cash on Delivery */}
      <Badge label="Cash on Delivery">
        <div className="flex items-center gap-1">
          <svg viewBox="0 0 20 20" height="14" fill="#2D6A4F" aria-hidden="true">
            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
            <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
          </svg>
          <span className="font-bold text-[10px] text-[#2C3E2D] dark:text-[#c8e6c9] leading-none select-none whitespace-nowrap">
            COD
          </span>
        </div>
      </Badge>

      {/* SSL Secured */}
      <div
        role="img"
        aria-label="SSL Secured"
        title="SSL Secured"
        className="
          inline-flex items-center gap-1.5 h-8 px-2.5 rounded-md flex-shrink-0
          bg-[#2D6A4F]
        "
      >
        <svg viewBox="0 0 20 20" height="13" fill="white" aria-hidden="true">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
        </svg>
        <span className="text-[10px] font-extrabold text-white tracking-wider leading-none select-none">
          SECURE
        </span>
      </div>

    </div>
  );
}
