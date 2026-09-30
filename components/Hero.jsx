"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Play, Calendar, ArrowRight, Volume2 } from "lucide-react";

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      className="relative min-h-screen w-full flex flex-col items-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at center, #004421 0%, #042717 100%)",
      }}
    >
      {/* 100% Full Screen Width Top Navbar Horizontal Divider Border */}
      <div className="w-full bg-[#042717] border-b border-white/10 h-16  ">
        <div className="w-full max-w-6xl mx-auto border-l border-r border-white/10 h-full px-4 sm:px-8 flex items-center justify-center">
          {/* Targeted Audience Text in Navbar */}
          <div className="flex flex-wrap items-center justify-center gap-2   text-xs sm:text-sm font-extrabold tracking-wider uppercase">
            <div>
              <span className="text-emerald-400">₹1 CRORE+</span>{" "}
              <span className="text-white">REVENUE?</span>
            </div>

            <div>
              <span className="text-emerald-400">5+ PEOPLE</span>{" "}
              <span className="text-white">ON YOUR TEAM?</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Hero Content Box with Left & Right Vertical Screen Borders */}
      <div className="relative z-10 w-full max-w-6xl mx-auto border-l border-r border-white/10 flex-1 px-4 sm:px-8 py-10  flex flex-col items-center text-center">
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="headline text-4xl sm:text-6xl   font-medium text-white tracking-tight leading-[1.1] max-w-4xl"
        >
          But Still Involved <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-emerald-200 via-emerald-400 to-teal-200 bg-clip-text text-transparent drop-shadow-sm">
            In Every Decision?
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mt-6 text-lg sm:text-xl md:text-2xl text-[#FFFFFF80] max-w-3xl font-light "
        >
          Build the systems that{" "}
          <strong className="text-white font-medium">
            give you back your time
          </strong>{" "}
          with AI, automation and a{" "}
          <strong className="text-emerald-300 font-semibold underline decoration-emerald-500/50 underline-offset-4">
            real engineering team
          </strong>{" "}
          behind your business.
        </motion.p>

        {/* Call To Action Buttons (Above Video) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="mt-8 mb-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-2xl"
        >
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

          <button
            onClick={() => setIsPlaying(true)}
            className="group/btn inline-flex items-center justify-center gap-2 rounded-[2px] cursor-pointer whitespace-nowrap transition-all h-[48px] px-8 py-[12px] text-white border border-[#FFFFFFB3] hover:bg-[#FFFFFF0F] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.64)] relative overflow-hidden font-bold tracking-wider text-sm"
          >
            <Play className="w-4 h-4 text-white fill-white" />
            <span className="relative z-10">Watch 2 min vsl video</span>
          </button>
        </motion.div>

        {/* VSL Video Section (Below Button) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="w-full max-w-4xl group"
        >
          <div className="relative rounded-2xl p-1 bg-gradient-to-b from-emerald-400/30 via-emerald-600/20 to-emerald-900/40 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(16,185,129,0.2)]">
            <div className="relative aspect-video rounded-xl bg-emerald-950/90 overflow-hidden border border-emerald-500/20 flex flex-col items-center justify-center">
              {!isPlaying ? (
                <>
                  {/* Video Thumbnail Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 z-10" />

                  {/* Mock Video Graphic / Visual background */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#054a25_0%,#021b10_100%)] opacity-80" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-10">
                    <div className="w-[500px] h-[500px] rounded-full border border-emerald-400 border-dashed animate-[spin_60s_linear_infinite]" />
                  </div>

                  {/* Top Video Pill Tag */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs text-emerald-300">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span>Exclusive Strategy Breakdown (7 Min)</span>
                  </div>

                  {/* Unmute/Sound Hint */}
                  <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs text-white/80">
                    <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Sound On</span>
                  </div>

                  {/* Center Play Button */}
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="relative z-20 group/btn flex flex-col items-center gap-4 cursor-pointer focus:outline-none"
                    aria-label="Play VSL Video"
                  >
                    <div className="relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-emerald-500 to-emerald-400 text-slate-950 shadow-[0_0_40px_rgba(16,185,129,0.6)] group-hover/btn:scale-110 transition-transform duration-300 ease-out">
                      <div className="absolute -inset-2 rounded-full border border-emerald-400/40 animate-ping pointer-events-none" />
                      <Play className="w-9 h-9 sm:w-11 sm:h-11 fill-slate-950 ml-1" />
                    </div>
                    <span className="text-white text-sm sm:text-base font-medium tracking-wide drop-shadow bg-black/40 px-4 py-1.5 rounded-full border border-white/10">
                      Watch Video to See How It Works
                    </span>
                  </button>

                  {/* Bottom Video Caption */}
                  <div className="absolute bottom-4 left-4 right-4 z-20 text-center text-xs sm:text-sm text-emerald-200/70 font-light">
                    "How Founders Transition From 70-Hour Bottlenecks to
                    Scalable Systems"
                  </div>
                </>
              ) : (
                /* Embedded Video Player (e.g. YouTube / Loom / Custom Player) */
                <iframe
                  className="w-full h-full z-20"
                  src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="VSL Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
