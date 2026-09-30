"use client";

import { motion } from "motion/react";
import { Cpu, ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#022515]/70 backdrop-blur-md border-b border-emerald-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-300 p-0.5 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
            <div className="w-full h-full bg-[#022515] rounded-[10px] flex items-center justify-center">
              <Cpu className="w-5 h-5 text-emerald-400" />
            </div>
          </div>
          <span className="text-xl font-bold tracking-tight text-white headline">
            TRIPLE<span className="text-emerald-400">HASH</span>
          </span>
        </div>

        {/* Action Button */}
        <a
          href="#book-call"
          className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm font-semibold transition-all duration-200"
        >
          <span>Book Call</span>
          <ArrowRight className="w-4 h-4" />
        </a>

      </div>
    </header>
  );
}
