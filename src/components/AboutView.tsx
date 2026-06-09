/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { CORE_VALUES } from '../data';
import { Mail, Heart, Sparkles, Scale, Users, ShieldAlert, Globe, Compass, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Help map standard Lucide Icons for Values
const ValueIcon = ({ name, className }: { name: string; className?: string }) => {
  switch (name) {
    case 'Heart': return <Heart className={className} />;
    case 'ShieldAlert': return <ShieldAlert className={className} />;
    case 'Scale': return <Scale className={className} />;
    case 'Users': return <Users className={className} />;
    case 'Sparkles': return <Sparkles className={className} />;
    case 'TrendingUp': return <TrendingUp className={className} />;
    case 'Compass': return <Compass className={className} />;
    case 'Globe': return <Globe className={className} />;
    default: return <Sparkles className={className} />;
  }
};

interface ApproachSegment {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export default function AboutView() {
  const [activeSegment, setActiveSegment] = useState<string>('confidence');

  const approachSegments: ApproachSegment[] = [
    {
      id: 'physical',
      title: 'Physical Wellbeing',
      description: 'Strengthening organic health. We coordinate group fitness walks, cardiovascular exercise loops, maternal clinical advice, and supply essential sanitary utilities.',
      icon: '🏋️‍♀️'
    },
    {
      id: 'mental',
      title: 'Mental Health',
      description: 'Fostering inner safety. We facilitate peer-to-peer counselling support groups and connect women with licensed clinical therapists.',
      icon: '🧠'
    },
    {
      id: 'confidence',
      title: 'Confidence & Advocacy',
      description: 'Building speaking and public representation power. We prepare women to stand tall in local courts, governance discussions, and family decisions.',
      icon: '✨'
    },
    {
      id: 'community',
      title: 'Community Support',
      description: 'Creating sisterhood structures. Collective saving pools ensure no woman passes through crises or food shortages isolated.',
      icon: '🤝'
    },
    {
      id: 'tools',
      title: 'Access to Tools',
      description: 'Bridging technical gaps. We supply workspace hardware, high-speed WiFi connections, and modern licensing so she is fully equipped.',
      icon: '💻'
    }
  ];

  return (
    <div id="about-view" className="flex flex-col min-h-screen">
      
      {/* 1. PAGE HERO */}
      <section id="about-hero" className="bg-light-blush py-16 border-b border-light-blush/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <nav className="text-xs font-bold text-primary-pink/80 uppercase tracking-widest">
            NGO Identity
          </nav>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-dark-navy tracking-tight">
            Who We Are
          </h1>
          <div className="w-24 h-1.5 bg-primary-pink mx-auto rounded-full" />
          <p className="max-w-2xl mx-auto text-dark-navy/70 text-sm sm:text-base leading-relaxed pt-2">
            Disrupting generational limits and nurturing self-reliance across Sub-Saharan Africa and metropolitan UK.
          </p>
        </div>
      </section>

      {/* 2. FOUNDING STORY (Two Column Layout) */}
      <section id="about-story" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Text Details */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-primary-pink font-bold text-xs uppercase tracking-widest block">
                Founding Story
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-dark-navy tracking-tight">
                Born out of sisterhood, designed for structural autonomy.
              </h2>
              <p className="text-dark-navy/80 text-[15px] leading-relaxed">
                HerDream Nation began as a collective response to systemic gender gaps. Observing how young girls were disproportionately locked out of high-value career training and financial assistance, our founders united in Lagos to start local microdevelopment circles.
              </p>
              <p className="text-dark-navy/70 text-sm leading-relaxed">
                As our members relocated to the United Kingdom, they discovered immigrant women faced unique mental wellness, integration, and workspace challenges. This led to our second international hub, enabling a powerful cross-border alliance of mutual funding, advocacy, and collaborative growth.
              </p>

              {/* Achievements stats inline */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-light-blush">
                <div className="flex items-start space-x-2.5">
                  <CheckCircle className="w-5 h-5 text-primary-pink mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-dark-navy">Africa Hub</h4>
                    <p className="text-xs text-dark-navy/60">Lagos head office with extensions in regional cooperatives</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2.5">
                  <CheckCircle className="w-5 h-5 text-primary-pink mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-dark-navy">United Kingdom Hub</h4>
                    <p className="text-xs text-dark-navy/60">London resource support structures for immigrant women</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Custom generated image */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-primary-pink/15 to-deep-purple/15 blur-lg" />
              <img
                src="/src/assets/images/about_story_1780994563322.png"
                alt="HerDream Nation founding workshop"
                className="relative rounded-2xl w-full object-cover shadow-xl border border-light-blush"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION Side-by-Side (Mission/Vision cards with pink left border) */}
      <section id="about-mission-vision" className="py-16 bg-light-blush/40 border-t border-b border-light-blush">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission Card */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-sm border-l-4 border-primary-pink flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                <span className="text-xs font-bold text-primary-pink uppercase tracking-widest block">
                  Driving Focus
                </span>
                <h3 className="font-heading text-2xl font-extrabold text-dark-navy tracking-tight">
                  Our Mission
                </h3>
                <p className="text-dark-navy/80 text-sm leading-relaxed">
                  To provide women with full scale financial literacy, digital/vocational training, comprehensive wellbeing networks, and local advocacy tools to step out of inequality and drive sustainable home and national transformation.
                </p>
              </div>
              <p className="text-xs text-dark-navy/50 italic pt-4 border-t border-light-blush">
                "Uplifting Her capability to transform her immediate world."
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-sm border-l-4 border-deep-purple flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                <span className="text-xs font-bold text-deep-purple uppercase tracking-widest block">
                  Ultimate Dream
                </span>
                <h3 className="font-heading text-2xl font-extrabold text-dark-navy tracking-tight">
                  Our Vision
                </h3>
                <p className="text-dark-navy/80 text-sm leading-relaxed">
                  An inclusive, borders-free nation of self-reliant, highly capable women leaders driving the financial, digital, and social health landscapes of Africa and the global UK communities forward.
                </p>
              </div>
              <p className="text-xs text-dark-navy/50 italic pt-4 border-t border-light-blush">
                "A world where no geographic or gender limit stops her dream."
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. WHERE WE WORK (Map graphical highlight + text blocks) */}
      <section id="about-where-we-work" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-primary-pink font-bold text-xs uppercase tracking-widest block">
              Global Bridges
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-dark-navy tracking-tight">
              Where We Work
            </h2>
            <div className="w-12 h-1 bg-primary-pink mx-auto rounded" />
            <p className="text-dark-navy/70 text-sm sm:text-base leading-relaxed">
              We leverage resources and networks directly across both Africa and the UK to amplify impact.
            </p>
          </div>

          {/* Interactive CSS / SVG Map */}
          <div className="bg-dark-navy text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl border border-white/5">
            {/* Background grids */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] opacity-60" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Graphic container */}
              <div className="lg:col-span-6 flex justify-center items-center py-8">
                <svg viewBox="0 0 400 320" className="w-full max-w-sm h-auto filter drop-shadow-[0_4px_12px_rgba(232,0,111,0.25)]">
                  {/* Dotted lines representation of connections */}
                  <path d="M 180 60 C 130 160, 220 180, 205 240" fill="none" stroke="#E8006F" strokeWidth="2.5" strokeDasharray="5,5" className="animate-pulse" />
                  
                  {/* United Kingdom Anchor */}
                  <circle cx="180" cy="60" r="10" fill="#E8006F" fillOpacity="0.2" className="animate-ping" />
                  <circle cx="180" cy="60" r="5" fill="#E8006F" />
                  <text x="180" y="40" textAnchor="middle" fill="#FFFFFF" className="font-heading font-bold text-[11px] uppercase tracking-wider">United Kingdom (London Hub)</text>

                  {/* African Continental general silhouette placeholder shapes */}
                  <path d="M 150 180 Q 200 130 250 160 Q 300 190 280 230 Q 250 280 210 300 Q 180 260 150 220 Z" fill="#7B3FA0" fillOpacity="0.15" stroke="#7B3FA0" strokeWidth="1" />

                  {/* Africa: Lagos, Nigeria Anchor */}
                  <circle cx="205" cy="240" r="12" fill="#7B3FA0" fillOpacity="0.25" className="animate-ping" />
                  <circle cx="205" cy="240" r="6" fill="#7B3FA0" />
                  <text x="215" y="260" textAnchor="start" fill="#FFFFFF" className="font-heading font-extrabold text-[12px] uppercase tracking-wider">Lagos, Nigeria Hub</text>

                  {/* Subtitle details */}
                  <text x="200" y="315" textAnchor="middle" fill="#FFFFFF" fillOpacity="0.6" className="text-[10px] italic">Borders-free Collaborative Support Corridor</text>
                </svg>
              </div>

              {/* Text Blocks Below map details */}
              <div className="lg:col-span-6 space-y-6">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary-pink" />
                    <h3 className="font-heading font-extrabold text-base text-white">United Kingdom support office</h3>
                  </div>
                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                    Based in metropolitan London, we operate integration training, computer licensing pools, job transition assistance workshops, and run support networks assisting immigrant, Black-British, and vulnerable local women.
                  </p>
                </div>

                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-deep-purple" />
                    <h3 className="font-heading font-extrabold text-base text-white">Africa West headquarters</h3>
                  </div>
                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                    Operating out of Ikoyi-Lagos, we coordinate direct educational scholarships, trade micro-lending cooperatives, girls' empowerment centers, and run physical health and peer-counseling safe circles across rural and low-income locales.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 5. HOLISTIC APPROACH SECTION (Animated Pie/Wheel Diagram) */}
      <section id="about-holistic-approach" className="py-20 bg-light-blush/60 border-t border-b border-light-blush">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-deep-purple font-extrabold uppercase tracking-widest text-xs block">
              Multi-Dimensional Evolution
            </span>
            <h2 className="font-heading text-3xl font-black text-dark-navy tracking-tight">
              Our Holistic Approach
            </h2>
            <p className="text-dark-navy/70 text-sm leading-relaxed">
              We understand true self-reliance goes beyond static skill training. Our model develops five layers of her everyday health, mental clarity, and accessibility.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Interactive Pie Selection Segment List */}
            <div className="lg:col-span-5 space-y-3">
              {approachSegments.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSegment(item.id)}
                  onMouseEnter={() => setActiveSegment(item.id)}
                  className={`w-full p-4 rounded-xl text-left border transition-all flex items-center space-x-4 cursor-pointer focus:outline-none ${
                    activeSegment === item.id
                      ? 'bg-white border-primary-pink shadow-md text-primary-pink translate-x-3'
                      : 'bg-white/40 border-transparent text-dark-navy hover:bg-white/80'
                  }`}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div className="flex-1">
                    <h4 className="font-bold text-sm sm:text-base">{item.title}</h4>
                  </div>
                  <ArrowRight className={`w-4 h-4 text-primary-pink/80 transition-transform ${
                    activeSegment === item.id ? 'translate-x-1 opacity-100' : 'opacity-0'
                  }`} />
                </button>
              ))}
            </div>

            {/* Display Segment Canvas panel with animation */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-light-blush shadow-xl min-h-[320px] sm:min-h-[280px] flex flex-col justify-between relative overflow-hidden">
              
              {/* Radial backdrop graphic */}
              <div className="absolute right-0 bottom-0 w-48 h-48 rounded-full bg-primary-pink/[0.03] translate-x-8 translate-y-8" />
              
              <AnimatePresence mode="wait">
                {approachSegments.map((item) => {
                  if (item.id !== activeSegment) return null;
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6 h-full flex flex-col justify-center"
                    >
                      <div className="flex items-center space-x-4">
                        <span className="w-14 h-14 rounded-2xl bg-light-blush text-primary-pink flex items-center justify-center text-3xl shadow-sm">
                          {item.icon}
                        </span>
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-primary-pink">Active Segment Focus</span>
                          <h3 className="font-heading font-black text-xl sm:text-2xl text-dark-navy">{item.title}</h3>
                        </div>
                      </div>

                      <p className="text-dark-navy/80 text-sm sm:text-base leading-relaxed">
                        {item.description}
                      </p>

                      <div className="pt-2">
                        <span className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full text-xs font-semibold text-deep-purple bg-deep-purple/5">
                          <CheckCircle className="w-3.5 h-3.5 text-deep-purple" />
                          <span>Fully integrated into UK-Africa curriculum</span>
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      {/* 6. CORE VALUES (8 values icon layout grid with fine animation) */}
      <section id="about-values" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-primary-pink font-bold text-xs uppercase tracking-widest block">
              Ethical Pillars
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-dark-navy tracking-tight">
              Our Core Values
            </h2>
            <p className="text-dark-navy/70 text-sm leading-relaxed">
              These eight foundational principles anchor every local project we launch, every loan we seed, and every peer circle we organize.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val, idx) => (
              <div
                key={idx}
                id={`value-card-${idx}`}
                className="bg-white p-6 rounded-2xl border border-light-blush shadow-sm hover:shadow-lg hover:shadow-primary-pink/[0.06] hover:border-primary-pink/30 hover:-translate-y-1.5 transition-all duration-300 flex flex-col space-y-4"
              >
                <div className="w-11 h-11 rounded-xl bg-light-blush text-primary-pink flex items-center justify-center">
                  <ValueIcon name={val.iconName} className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-heading font-extrabold text-[16px] text-dark-navy">{val.title}</h3>
                  <p className="text-dark-navy/70 text-xs leading-relaxed">{val.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
