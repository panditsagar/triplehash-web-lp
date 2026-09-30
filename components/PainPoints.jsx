"use client";

import { motion } from "motion/react";
import {
  GitFork,
  Activity,
  AlertTriangle,
  Layers,
  UserX,
  SmartphoneNfc,
} from "lucide-react";

const painPointsData = [
  {
    problemNumber: "PROBLEM 1",
    icon: GitFork,
    title: "Every Important Decision Comes Back To You",
    description:
      "Your team can execute, but they still need you to approve, clarify or decide what happens next.",
  },
  {
    problemNumber: "PROBLEM 2",
    icon: Activity,
    title: "You’re Constantly Chasing Updates",
    description:
      "Tasks are moving, but you don’t have one clear view of what’s done, delayed or blocked.",
  },
  {
    problemNumber: "PROBLEM 3",
    icon: AlertTriangle,
    title: "Leads Depend On Manual Follow-Up",
    description:
      "Someone forgets to call, reply or follow up — and revenue quietly slips through the cracks.",
  },
  {
    problemNumber: "PROBLEM 4",
    icon: Layers,
    title: "Information Is Scattered Everywhere",
    description:
      "WhatsApp, spreadsheets, CRMs, emails and team conversations all hold different pieces of the business.",
  },
  {
    problemNumber: "PROBLEM 5",
    icon: UserX,
    title: "Your Team Knows The Process — Until Someone Leaves",
    description:
      "Important knowledge lives inside people instead of inside reliable systems.",
  },
  {
    problemNumber: "PROBLEM 6",
    icon: SmartphoneNfc,
    title: "You Can Step Away Physically. But Not Mentally.",
    description:
      "Even when you’re not at work, you’re still checking messages, solving problems and making decisions.",
  },
];

export default function PainPoints() {
  return (
    <section className="relative w-full bg-[#f4f3ec]  text-slate-900 overflow-hidden   border-b border-slate-200">
      {/* Outer Framed Container: Left & Right Vertical Screen Borders Aligning with Hero & Logo Marquee */}
      <div className="relative py-16 z-10 w-full max-w-6xl mx-auto border-l border-r border-slate-300 px-4 sm:px-8 flex flex-col items-center">
        {/* Section Header */}
        <div className="max-w-3xl text-center flex flex-col items-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="headline text-3xl sm:text-4xl font-semibold  text-slate-900 leading-tight"
          >
            More Revenue Shouldn’t Mean <br className="hidden sm:inline" />
            <span className="text-[#0a6c42]">More Things Waiting On You.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-base sm:text-lg text-[#70707b] font-medium max-w-2xl leading-tight"
          >
            As the business grows, the owner often becomes the invisible system
            holding everything together.
          </motion.p>
        </div>

        {/* 6 Pain Point Cards Grid - Seamless Gap-0 Grid Wall */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 w-full mb-16 border-l border-t border-neutral-300">
          {painPointsData.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative p-6 sm:p-8 rounded-none bg-[#f2f2ed] border-r border-b border-neutral-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-none bg-white border border-neutral-300 flex items-center justify-center mb-4 text-[#0a6c42]">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Takeaway Callout Box */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-4xl rounded-none p-8 sm:p-10 bg-white border-2 border-[#0a6c42]/30 text-center relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col items-center">
            <h4 className="text-sm sm:text-base font-bold text-[#0a6c42] uppercase tracking-widest mb-3">
              The Goal Isn’t To Remove You From The Business.
            </h4>
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight max-w-3xl">
              It’s To Stop The Business From <br className="hidden sm:inline" />
              <span className="text-[#0a6c42]">
                Needing You For Everything.
              </span>
            </p>
            <div className="mt-8">
              <a
                href="#book-call"
                className="group/btn inline-flex items-center justify-center rounded-[2px] typo-blockquote cursor-pointer whitespace-nowrap transition-colors h-[48px] px-8 py-[12px] text-white bg-primary shadow-[0px_0px_0px_1px_#3a8363,0px_1px_2px_0px_rgba(0,0,0,0.64)] relative overflow-hidden font-bold tracking-wider uppercase text-sm"
              >
                <span className="relative z-10">BOOK YOUR 1:1 CALL NOW</span>
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
  );
}
