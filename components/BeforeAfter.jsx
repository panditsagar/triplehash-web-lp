"use client";

import { motion } from "motion/react";
import { XCircle, CheckCircle2, ArrowRight } from "lucide-react";

const beforePoints = [
  "You chase your team for updates",
  "Leads are followed up manually",
  "Important information sits across WhatsApp, sheets and inboxes",
  "Approvals wait for you",
  "Reports have to be requested",
  "Problems reach you before anyone else can solve them",
];

const afterPoints = [
  "Follow-ups happen automatically",
  "Your team knows what happens next",
  "Key information is visible in one place",
  "Repetitive work moves without reminders",
  "You get visibility without chasing",
  "You spend more time on growth, strategy and decisions that actually need you",
];

// Generate dense pixel grid matrix matching PainPoints banner (14 rows x 220 columns = 3,080 squares)
const gridRows = 15;
const gridCols = 221;
const stepX = 5.2;
const stepY = 5.8;

const pixelGrid = [];
for (let r = 0; r < gridRows; r++) {
  for (let c = 0; c < gridCols; c++) {
    const val = (r * 19 + c * 37 + (r % 4) * 9 + (c % 7) * 17) % 100;
    
    let opacity = "0.15";
    let fill = "#cbd5e1";
    
    if (val > 72) {
      opacity = "0.50";
      fill = "#94a3b8";
    } else if (val > 35) {
      opacity = "0.30";
      fill = "#cbd5e1";
    }

    pixelGrid.push({
      x: (3 + c * stepX).toFixed(1),
      y: (3 + r * stepY).toFixed(1),
      fill,
      opacity,
    });
  }
}

function SquareGridBanner() {
  return (
    <div className="w-full bg-[#f4f3ec] border-t border-b border-neutral-300">
      <div className="w-full max-w-6xl mx-auto border-l border-r border-neutral-300 h-[80px] relative overflow-hidden flex items-center justify-center">
        <svg className="w-full h-full pointer-events-none" viewBox="0 0 1152 88" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          {pixelGrid.map((sq, idx) => (
            <rect
              key={idx}
              x={sq.x}
              y={sq.y}
              width="2.2"
              height="2.2"
              fill={sq.fill}
              opacity={sq.opacity}
            />
          ))}
        </svg>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Top Square Pixel Grid Banner */}
      <SquareGridBanner />

      <section className="relative w-full bg-[#f4f3ec] text-slate-900 overflow-hidden">
        {/* Outer Framed Container: Left & Right Vertical Screen Borders Aligning with PainPoints & Hero */}
        <div className="relative py-14 pb-16 z-10 w-full max-w-6xl mx-auto border-l border-r border-neutral-300 px-4 sm:px-8 flex flex-col items-center">
          
          {/* Section Header */}
          <div className="max-w-3xl text-center flex flex-col items-center mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="headline text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight"
            >
              What Changes When The Right <br className="hidden sm:inline" />
              <span className="text-[#0a6c42]">Systems Are In Place?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 text-base sm:text-lg text-[#70707b] font-medium max-w-2xl leading-tight"
            >
              Your business may still need you. <br className="hidden sm:inline" />
              <span className="text-[#0a6c42] font-semibold">
                But it shouldn’t need you for everything.
              </span>
            </motion.p>
          </div>

          {/* Before vs After Split Comparison Wall */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full mb-16 border-l border-t border-neutral-300">
            
            {/* BEFORE COLUMN */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 sm:p-10 bg-[#f2f2ed] border-r border-b border-neutral-300 flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-red-100/80 border border-red-200 text-red-800 text-xs font-mono font-bold tracking-widest uppercase mb-6 rounded-none">
                  <span>BEFORE</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 leading-snug">
                  Manual Friction & Constant Chasing
                </h3>

                <ul className="flex flex-col gap-4">
                  {beforePoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-slate-700 leading-snug font-medium">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* AFTER COLUMN */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 sm:p-10 bg-white border-r border-b border-neutral-300 flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-100/90 border border-emerald-300 text-[#0a6c42] text-xs font-mono font-bold tracking-widest uppercase mb-6 rounded-none">
                  <span>AFTER</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 leading-snug">
                  Automated Clarity & Systemised Ownership
                </h3>

                <ul className="flex flex-col gap-4">
                  {afterPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#0a6c42] shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-slate-900 leading-snug font-semibold">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

          </div>

          {/* Bottom Takeaway Callout Box */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-4xl rounded-none p-8 sm:p-10   border border-neutral-300 text-center relative overflow-hidden"
          >
            <div className="relative z-10 flex flex-col items-center">
              <h4 className="text-sm sm:text-base font-bold text-[#0a6c42] uppercase tracking-widest mb-3">
                The Goal Is Simple:
              </h4>
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight max-w-3xl">
                More Control Over The Business. <br className="hidden sm:inline" />
                <span className="text-[#0a6c42]">
                  Less Dependence On You.
                </span>
              </p>
              <div className="mt-8">
                <a
                  href="#book-call"
                  className="group/btn inline-flex items-center justify-center rounded-[2px] typo-blockquote cursor-pointer whitespace-nowrap transition-colors h-[48px] px-8 py-[12px] text-white bg-primary shadow-[0px_0px_0px_1px_#3a8363,0px_1px_2px_0px_rgba(0,0,0,0.64)] relative overflow-hidden font-bold tracking-wider uppercase text-sm"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span>BOOK YOUR 1:1 CALL NOW</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                  <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(74.61%_74.61%_at_50.39%_0%,rgba(255,255,255,0.32)_0%,rgba(191,191,191,0.24)_25%,rgba(128,128,128,0.16)_50%,rgba(0,0,0,0)_100%)] transition-opacity" />
                  <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(74.61%_74.61%_at_50.39%_0%,rgba(0,0,0,0)_0%,rgba(128,128,128,0.1)_50%,rgba(255,255,255,0.2)_100%)] opacity-0 group-active/btn:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 pointer-events-none bg-[rgba(0,0,0,0.06)] opacity-0 group-hover/btn:opacity-100 group-active/btn:opacity-0 transition-opacity" />
                  <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_1px_1px_0.25px_0px_rgba(255,255,255,0.12),inset_-1px_1px_0.25px_0px_rgba(255,255,255,0.12)]" />
                  <div className="absolute pointer-events-none bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.4)] rounded-full size-[4px] left-[3px] top-[3px]" />
                  <div className="absolute pointer-events-none bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.4)] rounded-full size-[4px] right-[3px] top-[3px]" />
                  <div className="absolute pointer-events-none bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.4)] rounded-full size-[4px] left-[3px] bottom-[3px]" />
                  <div className="absolute pointer-events-none bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.4)] rounded-full size-[4px] right-[3px] bottom-[3px]" />
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Bottom Square Pixel Grid Banner */}
      <SquareGridBanner />
    </div>
  );
}
