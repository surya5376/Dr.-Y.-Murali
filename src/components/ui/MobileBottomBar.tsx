import React from "react";
import Link from "next/link";

export const MobileBottomBar: React.FC = () => {
  return (
    <aside
      aria-label="Quick Actions"
      className="fixed bottom-0 left-0 right-0 z-40 block md:hidden border-t border-[#E2E8F0] bg-white/95 backdrop-blur-md px-4 py-2.5 shadow-lg"
    >
      <div className="flex items-center gap-3 max-w-md mx-auto">
        <a
          href="tel:1234567890"
          className="flex-1 inline-flex items-center justify-center gap-2 h-11 rounded-lg border border-[#163447]/20 bg-[#F5F7FA] text-sm font-semibold text-[#163447] active:bg-[#E2E8F0] transition-colors"
        >
          <svg className="h-4 w-4 text-[#2D9C9C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call
        </a>

        <Link
          href="/book-appointment"
          className="flex-1 inline-flex items-center justify-center h-11 rounded-lg bg-[#FF6B35] text-sm font-semibold text-white shadow-sm hover:bg-[#e85924] active:scale-[0.99] transition-all"
        >
          Book Consultation
        </Link>
      </div>
    </aside>
  );
};

export default MobileBottomBar;
