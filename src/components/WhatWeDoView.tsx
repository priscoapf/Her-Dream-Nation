/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PROGRAMMES } from '../data';
import { ActiveView } from '../types';
import { Check, Mail, ExternalLink, Heart, Award, Users, HeartPulse, Briefcase } from 'lucide-react';
import { motion } from 'motion/react';

// Maps string name to appropriate Lucide Icon
const IconMapper = ({ name, className }: { name: string; className?: string }) => {
  switch (name) {
    case 'Briefcase': return <Briefcase className={className} />;
    case 'Award': return <Award className={className} />;
    case 'Heart': return <HeartPulse className={className} />;
    case 'Users': return <Users className={className} />;
    default: return <Briefcase className={className} />;
  }
};

interface WhatWeDoViewProps {
  setCurrentView: (view: ActiveView) => void;
}

export default function WhatWeDoView({ setCurrentView }: WhatWeDoViewProps) {
  return (
    <div id="what-we-do-view" className="flex flex-col min-h-screen">
      
      {/* 1. PAGE HERO */}
      <section id="program-hero" className="relative bg-gradient-to-r from-primary-pink to-deep-purple text-white py-20 px-4 text-center overflow-hidden">
        
        {/* Subtle decorative circles */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/5 -translate-x-12 -translate-y-12" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-white/5 translate-x-12 translate-y-12" />

        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="text-white/80 font-bold uppercase tracking-widest text-xs inline-flex items-center px-3.5 py-1 rounded bg-white/10">
            Our Core Activities
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight">
            Our Strategic Impact Programmes
          </h1>
          <div className="w-16 h-1 bg-white mx-auto rounded-full" />
          <p className="max-w-2xl mx-auto text-white/90 text-sm sm:text-base font-light leading-relaxed">
            Delivering robust pathways to independence, digital competence, organic wellbeing, and civil legal protections for grassroots women.
          </p>
        </div>
      </section>

      {/* 2. ALTERNATING PROGRAM SECTIONS */}
      <section id="programs-alternating-list" className="flex flex-col">
        {PROGRAMMES.map((prog, idx) => {
          const isEven = idx % 2 === 0;
          const bgStyle = isEven ? 'bg-white' : 'bg-light-blush/60';
          
          return (
            <div
              key={prog.id}
              id={prog.id}
              className={`py-20 border-b border-light-blush/80 last:border-b-0 ${bgStyle}`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Left or Right Image (Alternating) */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'} relative`}>
                    <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-primary-pink/10 to-deep-purple/10 blur-xl opacity-80" />
                    <img
                      src={prog.imageUrl}
                      alt={prog.title}
                      className="relative rounded-2xl w-full h-[360px] object-cover shadow-lg border border-light-blush"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Text Details */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'} space-y-6`}>
                    
                    <div className="flex items-center space-x-3.5">
                      <div className="w-10 h-10 rounded-xl bg-primary-pink/10 text-primary-pink flex items-center justify-center">
                        <IconMapper name={prog.iconName} className="w-5 h-5" />
                      </div>
                      <span className="text-primary-pink font-bold text-xs uppercase tracking-widest">
                        Core Program area {idx + 1}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-dark-navy tracking-tight leading-tight">
                        {prog.title}
                      </h2>
                      <div className="w-16 h-1 bg-primary-pink rounded-full" />
                    </div>

                    <p className="text-dark-navy/80 text-[15px] leading-relaxed">
                      {prog.fullDescription}
                    </p>

                    {/* Bullet characteristics list */}
                    <div className="space-y-2.5 pt-2">
                      {prog.bullets.map((bullet, bulletIdx) => (
                        <div key={bulletIdx} className="flex items-start space-x-3">
                          <div className="w-5 h-5 rounded-full bg-primary-pink/15 text-primary-pink flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-dark-navy/80 text-sm leading-relaxed">
                            {bullet}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 flex flex-wrap gap-4">
                      <button
                        onClick={() => setCurrentView('contact')}
                        className="px-5 py-2.5 bg-primary-pink hover:bg-deep-purple text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-colors"
                      >
                        Enquire About Enrollment
                      </button>
                      <button
                        onClick={() => setCurrentView('donate')}
                        className="px-5 py-2.5 bg-transparent border border-light-blush text-dark-navy hover:text-primary-pink text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-white transition-colors flex items-center space-x-1"
                      >
                        <Heart className="w-3.5 h-3.5 fill-current text-primary-pink border-0" />
                        <span>Support This Initiative</span>
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* 3. BOTTOM CTA STRIP */}
      <section id="what-we-do-cta" className="py-20 bg-primary-pink text-white text-center relative overflow-hidden">
        
        {/* Abstract background graphics */}
        <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-deep-purple/20 blur-3xl" />
        <div className="absolute left-0 bottom-0 w-96 h-96 rounded-full bg-white/10 blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight">
            Want to partner with us or support our work?
          </h2>
          <p className="max-w-2xl mx-auto text-white/80 text-sm sm:text-base leading-relaxed font-light">
            We are always looking for corporate partners, vocational coaches, health specialists, and volunteers to connect into our Lagos and London hub services.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => {
                setCurrentView('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-light-blush text-primary-pink hover:text-deep-purple font-bold text-sm uppercase tracking-wide rounded-full shadow-lg shadow-black/15 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
              Become a Partner / Reach Out
            </button>
            <button
              onClick={() => {
                setCurrentView('donate');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent border-2 border-white/40 hover:border-white text-white hover:bg-white/5 font-bold text-sm uppercase tracking-wide rounded-full transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
              Direct Financial Support
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
