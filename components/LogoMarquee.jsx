"use client";

import Image from "next/image";

const row1Logos = [
  { id: 1, src: "/logo/1.png", alt: "Client Logo 1" },
  { id: 2, src: "/logo/2.png", alt: "Client Logo 2" },
  { id: 3, src: "/logo/3.png", alt: "Client Logo 3" },
  { id: 4, src: "/logo/4.png", alt: "Client Logo 4" },
  { id: 5, src: "/logo/5.png", alt: "Client Logo 5" },
];

const row2Logos = [
  { id: 9, src: "/logo/9.png", alt: "Client Logo 9" },
  { id: 11, src: "/logo/11.png", alt: "Client Logo 11" },
  { id: 12, src: "/logo/12.png", alt: "Client Logo 12" },
  { id: 13, src: "/logo/13.png", alt: "Client Logo 13" },
  { id: 14, src: "/logo/14.png", alt: "Client Logo 14 " },
];

function LogoTile({ logo }) {
  return (
    <div className="flex-shrink-0 w-48 sm:w-56 h-20 sm:h-24 bg-white text-slate-900 border-r border-b border-t border-slate-200 flex items-center justify-center p-4 hover:bg-slate-50 transition-colors">
      <img
        src={logo.src}
        alt={logo.alt}
        className="max-h-10 sm:max-h-22 w-auto max-w-[140px] sm:max-w-[140px] object-contain"
      />
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <section className="relative w-full bg-white overflow-hidden border-t border-slate-200">
      {/* Container framing with left & right vertical borders */}
      <div className="w-full max-w-6xl mx-auto border-l border-r border-slate-200 flex flex-col items-center py-14">
        {/* Title */}
        <p className="text-xs sm:text-sm font-mono tracking-[0.1em] text-neutral-500 mb-10 text-center font-semibold px-4">
          Trusted by thousands of global businesses
        </p>

        {/* Marquee Rows Container - No Gap Grid */}
        <div className="w-full flex flex-col gap-0 overflow-hidden">
          {/* Row 1 - Left Marquee */}
          <div className="flex w-full overflow-hidden">
            <div className="flex shrink-0 animate-[marquee-left_30s_linear_infinite] hover:[animation-play-state:paused]">
              {row1Logos
                .concat(row1Logos)
                .concat(row1Logos)
                .map((logo, idx) => (
                  <LogoTile key={`r1-1-${idx}`} logo={logo} />
                ))}
            </div>
            <div className="flex shrink-0 animate-[marquee-left_30s_linear_infinite] hover:[animation-play-state:paused]">
              {row1Logos
                .concat(row1Logos)
                .concat(row1Logos)
                .map((logo, idx) => (
                  <LogoTile key={`r1-2-${idx}`} logo={logo} />
                ))}
            </div>
          </div>

          {/* Row 2 - Right Marquee */}
          <div className="flex w-full overflow-hidden">
            <div className="flex shrink-0 animate-[marquee-right_35s_linear_infinite] hover:[animation-play-state:paused]">
              {row2Logos
                .concat(row2Logos)
                .concat(row2Logos)
                .map((logo, idx) => (
                  <LogoTile key={`r2-1-${idx}`} logo={logo} />
                ))}
            </div>
            <div className="flex shrink-0 animate-[marquee-right_35s_linear_infinite] hover:[animation-play-state:paused]">
              {row2Logos
                .concat(row2Logos)
                .concat(row2Logos)
                .map((logo, idx) => (
                  <LogoTile key={`r2-2-${idx}`} logo={logo} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
