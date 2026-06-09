/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SDGS_DATA } from '../data';
import { motion } from 'motion/react';

export default function SDGsView() {
  return (
    <div id="sdgs-view" className="flex flex-col min-h-screen">
      
      {/* 1. PAGE HERO */}
      <section id="sdgs-hero" className="bg-light-blush py-16 border-b border-light-blush/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold text-primary-pink uppercase tracking-widest">
            International Alignment
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-dark-navy tracking-tight">
            Our Commitment to the Sustainable Development Goals
          </h1>
          <div className="w-24 h-1.5 bg-primary-pink mx-auto rounded-full" />
        </div>
      </section>

      {/* 2. INTRODUCTION CARD & GRID */}
      <section id="sdgs-content" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Intro paragraph in a blush card */}
          <div className="bg-light-blush/50 p-8 sm:p-10 rounded-2xl border border-light-blush max-w-4xl mx-auto space-y-4">
            <h3 className="font-heading font-extrabold text-base uppercase tracking-wider text-primary-pink">
              Why the UN Global Goals Matter to Us
            </h3>
            <p className="text-dark-navy/80 text-sm sm:text-base leading-relaxed">
              We recognize true sustainable development can only take work when centered on gender balance. By embedding the United Nations 2030 Agenda inside all of our grassroots training hubs and immigrant programs, we target systemic multipliers. Each initiative is strategically integrated to fulfill specific UN targets, transforming women's empowerment from a dream into measurable civil and global progress.
            </p>
          </div>

          {/* Grid of SDG cards (3 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
            {SDGS_DATA.map((sdg) => (
              <div
                key={sdg.number}
                id={`sdg-card-${sdg.number}`}
                style={{ borderColor: `${sdg.color}25` }}
                className="group bg-white p-8 rounded-2xl border hover:border-transparent shadow-sm hover:scale-[1.03] hover:shadow-xl hover:shadow-primary-pink/[0.05] transition-all duration-300 flex flex-col justify-between space-y-6 cursor-default"
              >
                <div className="space-y-4">
                  
                  {/* Badge & Title */}
                  <div className="flex items-center space-x-4">
                    <span
                      style={{ backgroundColor: sdg.color }}
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-heading font-black text-xl"
                    >
                      {sdg.number}
                    </span>
                    <h3 className="font-heading font-black text-[17px] text-dark-navy tracking-tight leading-snug">
                      SDG {sdg.number}: <br />
                      <span className="font-extrabold" style={{ color: sdg.color }}>
                        {sdg.name}
                      </span>
                    </h3>
                  </div>

                  <p className="text-dark-navy/75 text-[13.5px] leading-relaxed">
                    {sdg.contribution}
                  </p>

                </div>

                <div className="pt-4 border-t border-light-blush/60 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-dark-navy/40 uppercase tracking-widest">
                    Target Area
                  </span>
                  <span
                    style={{ color: sdg.color, backgroundColor: `${sdg.color}10` }}
                    className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                  >
                    Direct Impact
                  </span>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
