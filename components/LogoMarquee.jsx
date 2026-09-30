"use client";

import { motion } from "motion/react";

const row1Logos = [
  { name: "MALABAR", subtitle: "GOLD & DIAMONDS", icon: "M" },
  { name: "EMERALD", subtitle: "JEWELRY", icon: "◆" },
  { name: "VOLVO", subtitle: "AUTOMOTIVE", icon: "≡" },
  { name: "Mercedes-Benz", subtitle: "LUXURY", icon: "✪" },
  { name: "TATA MOTORS", subtitle: "MOTORS", icon: "T" },
  { name: "vBuy.com", subtitle: "ECOMMERCE", icon: "v" },
];

const row2Logos = [
  { name: "pantaloons", subtitle: "FRESH FASHION", icon: "p" },
  { name: "akbartravels.com", subtitle: "TRAVEL PARTNER", icon: "✈" },
  { name: "Dentzz", subtitle: "DENTAL CARE", icon: "❖" },
  { name: "ēthos", subtitle: "WATCH BOUTIQUES", icon: "ē" },
  { name: "GRT", subtitle: "JEWELLERS", icon: "G" },
  { name: "everydayware", subtitle: "LIFESTYLE", icon: "w" },
];

const row3Logos = [
  { name: "Spardha", subtitle: "SCHOOL OF MUSIC", icon: "S" },
  { name: "AngelOne", subtitle: "FINANCE", icon: "▲" },
  { name: "CoinDCX", subtitle: "CRYPTO", icon: "C" },
  { name: "upGrad", subtitle: "EDUCATION", icon: "u" },
  { name: "makeMyTrip", subtitle: "TRAVEL", icon: "m" },
  { name: "Nirvana", subtitle: "REALTY", icon: "N" },
];

function LogoTile({ logo }) {
  return (
    <div className="flex-shrink-0 w-48 sm:w-56 h-20 sm:h-24 bg-white text-slate-900 border-r border-b border-t border-slate-200 flex items-center justify-center px-4 py-2 hover:bg-slate-50 transition-colors">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded bg-emerald-900 text-emerald-300 font-bold flex items-center justify-center text-sm shadow-inner shrink-0">
          {logo.icon}
        </div>
        <div className="flex flex-col text-left">
          <span className="font-extrabold text-sm sm:text-base tracking-tight leading-none text-slate-900">
            {logo.name}
          </span>
          <span className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-widest mt-1">
            {logo.subtitle}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <section className="relative w-full bg-white   overflow-hidden border-t   border-slate-200">
      {/* Container framing with left & right vertical borders */}
      <div className="w-full max-w-6xl mx-auto border-l border-r border-slate-200 flex flex-col items-center py-14">
        
        {/* Title */}
        <p className="text-xs sm:text-sm font-mono   tracking-[0.1em] text-neutral-500 mb-10 text-center font-semibold px-4">
          Trusted by thousands of global businesses
        </p>

        {/* Marquee Rows Container - No Gap Grid */}
        <div className="w-full flex flex-col gap-0 overflow-hidden">
          
          {/* Row 1 - Left Marquee */}
          <div className="flex w-full overflow-hidden  ">
            <div className="flex shrink-0 animate-[marquee-left_30s_linear_infinite] hover:[animation-play-state:paused]">
              {row1Logos.concat(row1Logos).map((logo, idx) => (
                <LogoTile key={`r1-1-${idx}`} logo={logo} />
              ))}
            </div>
            <div className="flex shrink-0 animate-[marquee-left_30s_linear_infinite] hover:[animation-play-state:paused]">
              {row1Logos.concat(row1Logos).map((logo, idx) => (
                <LogoTile key={`r1-2-${idx}`} logo={logo} />
              ))}
            </div>
          </div>

          {/* Row 2 - Right Marquee */}
          <div className="flex w-full overflow-hidden  ">
            <div className="flex shrink-0 animate-[marquee-right_35s_linear_infinite] hover:[animation-play-state:paused]">
              {row2Logos.concat(row2Logos).map((logo, idx) => (
                <LogoTile key={`r2-1-${idx}`} logo={logo} />
              ))}
            </div>
            <div className="flex shrink-0 animate-[marquee-right_35s_linear_infinite] hover:[animation-play-state:paused]">
              {row2Logos.concat(row2Logos).map((logo, idx) => (
                <LogoTile key={`r2-2-${idx}`} logo={logo} />
              ))}
            </div>
          </div>

          {/* Row 3 - Left Marquee */}
          <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex shrink-0 animate-[marquee-left_28s_linear_infinite] hover:[animation-play-state:paused]">
              {row3Logos.concat(row3Logos).map((logo, idx) => (
                <LogoTile key={`r3-1-${idx}`} logo={logo} />
              ))}
            </div>
            <div className="flex shrink-0 animate-[marquee-left_28s_linear_infinite] hover:[animation-play-state:paused]">
              {row3Logos.concat(row3Logos).map((logo, idx) => (
                <LogoTile key={`r3-2-${idx}`} logo={logo} />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
