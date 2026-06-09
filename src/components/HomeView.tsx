/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { ActiveView } from '../types';
import { STATS, PROGRAMMES, SDGS_DATA, TESTIMONIALS } from '../data';
import { ArrowRight, Mail, Heart, Check, ChevronLeft, ChevronRight, Briefcase, Award, Heart as HeartIcon, Users } from 'lucide-react';
import { motion } from 'motion/react';

interface HomeViewProps {
  setCurrentView: (view: ActiveView) => void;
}

// Icon mapper for the dynamic Lucide icons
const IconMapper = ({ name, className }: { name: string; className?: string }) => {
  switch (name) {
    case 'Briefcase': return <Briefcase className={className} />;
    case 'Award': return <Award className={className} />;
    case 'Heart': return <HeartIcon className={className} />;
    case 'Users': return <Users className={className} />;
    default: return <Briefcase className={className} />;
  }
};

// Animated Counter component
function Counter({ value, suffix, duration = 1200 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [value, duration]);

  return (
    <span className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function HomeView({ setCurrentView }: HomeViewProps) {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsSubmitted, setNewsSubmitted] = useState(false);

  // Auto-slide testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsSubmitted(true);
      setTimeout(() => {
        setNewsletterEmail('');
        setNewsSubmitted(false);
      }, 4000);
    }
  };

  const handleProgramClick = (progId: string) => {
    setCurrentView('what-we-do');
    // Scroll to the specific program section ID after brief delay
    setTimeout(() => {
      const element = document.getElementById(progId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  return (
    <div id="home-view" className="flex flex-col min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section id="home-hero" className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden clip-diagonal bg-dark-navy py-20 pb-28">
        
        {/* Background custom image with pink/purple gradient overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_bg_1780994545251.png"
            alt="Diverse African and British women collaborating"
            className="w-full h-full object-cover opacity-35 filter scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-dark-navy via-dark-navy/90 to-primary-pink/50 mixing-blend-overlay" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-primary-pink text-white shadow-lg shadow-primary-pink/30">
              Women-Led Social Impact NGO
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto">
              Empowering Her Today. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-pink to-deep-purple">
                Transforming Nations
              </span> Tomorrow.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Nurturing a supportive community for women across Africa and the UK through economic empowerment, technical skill building, and mental physical wellness advocates.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4"
          >
            <button
              onClick={() => setCurrentView('about')}
              className="w-full sm:w-auto px-8 py-4 bg-primary-pink hover:bg-deep-purple text-white font-bold rounded-full shadow-lg shadow-primary-pink/30 hover:shadow-deep-purple/30 transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center justify-center space-x-2"
            >
              <span>Learn Who We Are</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrentView('donate')}
              className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/10 text-white font-extrabold rounded-full border-2 border-white/40 hover:border-white transition-all duration-300 inline-flex items-center justify-center space-x-2"
            >
              <Heart className="w-5 h-5 fill-white text-primary-pink border-0" />
              <span>Sponsor our Impact</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS SECTION (Counter stats section) */}
      <section id="home-stats" className="relative z-20 -mt-10 max-w-6xl mx-auto w-full px-4 sm:px-6">
        <div className="bg-white rounded-3xl shadow-xl border border-light-blush p-8 sm:p-12 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {STATS.map((stat, i) => (
            <div key={i} className="space-y-2 border-r last:border-0 border-light-blush/80 hidden-cols" id={`stat-col-${i}`}>
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-pink tracking-tight">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-dark-navy/70 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WHO WE ARE TEASER SECTION */}
      <section id="who-we-are-teaser" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-primary-pink font-extrabold uppercase tracking-widest text-sm block">
                Grassroots & Global Impact
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-dark-navy tracking-tight leading-tight">
                An NGO Committed to Uplifting African & UK Women at the Core.
              </h2>
              <div className="w-16 h-1 bg-primary-pink rounded" />
              <p className="text-dark-navy/80 text-[16px] leading-relaxed">
                Founded by enthusiastic African leaders, <strong>HerDream Nation</strong> bridges resource gaps across two continents. By operating support centers in both Western Africa and metropolitan areas in the United Kingdom, we tackle inequality head-on.
              </p>
              <p className="text-dark-navy/70 text-sm leading-relaxed">
                We believe when you empower Her, you cultivate the mental resilience, financial wisdom, and technical ability to lift whole lineages and transform developing communities into independent centers of wealth and education.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setCurrentView('about')}
                  className="px-6 py-3 bg-light-blush hover:bg-primary-pink hover:text-white text-primary-pink font-bold rounded-full transition-all duration-300 inline-flex items-center space-x-2 border border-primary-pink/20"
                >
                  <span>Our Vision & founding story</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-primary-pink/10 to-deep-purple/10 blur-xl" />
              <img
                src="/src/assets/images/about_story_1780994563322.png"
                alt="Women planning programs at Lagos center"
                className="relative rounded-2xl w-full object-cover shadow-xl border border-light-blush"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 4. WHAT WE DO (Core Cards Segment: lift elements with pink shadow) */}
      <section id="home-what-we-do" className="py-20 bg-light-blush/60 border-t border-b border-light-blush">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-deep-purple font-extrabold uppercase tracking-widest text-xs block">
              Programmes of Growth
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-black text-dark-navy tracking-tight">
              Our Four Foundations Of Empowerment
            </h2>
            <p className="text-dark-navy/75 text-sm sm:text-base leading-relaxed">
              Every woman possesses limitless potential. Our structured courses and community campaigns are crafted to secure health, resources, and leadership access.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROGRAMMES.map((prog) => (
              <div
                key={prog.id}
                id={`program-card-${prog.id}`}
                onClick={() => handleProgramClick(prog.id)}
                className="group relative bg-white border border-light-blush p-8 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-primary-pink/10 hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div className="space-y-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-light-blush text-primary-pink group-hover:bg-primary-pink group-hover:text-white transition-colors">
                    <IconMapper name={prog.iconName} className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-extrabold text-[17px] text-dark-navy group-hover:text-primary-pink transition-colors leading-tight">
                    {prog.title}
                  </h3>
                  <p className="text-dark-navy/70 text-[13px] leading-relaxed">
                    {prog.shortDescription}
                  </p>
                </div>
                <div className="pt-6 flex items-center text-primary-pink text-xs font-bold space-x-1 group-hover:translate-x-1.5 transition-transform">
                  <span>Explore Programme</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. SDG COMMITMENT STRIP (Horizontal Scrolling badges) */}
      <section id="home-sdgs-strip" className="py-16 bg-white overflow-hidden border-b border-light-blush">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-light-blush pb-6">
            <div>
              <span className="text-primary-pink font-bold uppercase tracking-wider text-xs">
                Global Standards Alignment
              </span>
              <h2 className="font-heading text-2xl font-extrabold text-dark-navy tracking-tight">
                Our Alignment to the United Nations SDGs
              </h2>
            </div>
            <button
              onClick={() => setCurrentView('sdgs')}
              className="px-5 py-2.5 bg-primary-pink/10 hover:bg-primary-pink text-primary-pink hover:text-white transition-colors duration-300 rounded-full text-xs font-bold uppercase tracking-wider"
            >
              See All Specific Contributions
            </button>
          </div>

          {/* Scrolling Badges Container */}
          <div className="relative w-full overflow-x-auto no-scrollbar py-4 -my-4 flex space-x-6">
            {SDGS_DATA.map((sdg) => (
              <div
                key={sdg.number}
                onClick={() => setCurrentView('sdgs')}
                style={{ borderColor: `${sdg.color}30` }}
                className="flex-shrink-0 w-64 p-5 bg-white rounded-2xl border hover:border shadow-sm hover:shadow-md hover:scale-[1.02] cursor-pointer transition-all flex flex-col justify-between space-y-4"
              >
                <div className="flex items-center space-x-3">
                  <span
                    style={{ backgroundColor: sdg.color }}
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-heading font-black text-lg"
                  >
                    {sdg.number}
                  </span>
                  <span className="font-heading font-extrabold text-sm text-dark-navy truncate">
                    {sdg.name}
                  </span>
                </div>
                <p className="text-[12px] text-dark-navy/70 line-clamp-3 leading-relaxed">
                  {sdg.contribution}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. TESTIMONIAL OR IMPACT QUOTE SECTION (Full-width pink backdrop with slider) */}
      <section id="home-testimonials" className="py-20 bg-primary-pink text-white relative overflow-hidden">
        
        {/* Floating background blobs for premium feel */}
        <div className="absolute -left-16 -top-16 w-64 h-64 rounded-full bg-deep-purple/30 opacity-60 blur-3xl" />
        <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-light-blush/20 opacity-40 blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <span className="text-white/80 uppercase font-black tracking-widest text-xs block">
            Real Voices, Real Sisterhood
          </span>

          <div className="min-h-[160px] sm:min-h-[140px] flex items-center justify-center">
            {TESTIMONIALS.map((t, index) => {
              if (index !== currentTestimonialIndex) return null;
              return (
                <div key={index} className="space-y-6">
                  <p className="font-heading font-light text-xl sm:text-2xl md:text-3xl italic leading-relaxed text-white">
                    "{t.quote}"
                  </p>
                  <div>
                    <h4 className="font-bold text-base tracking-wide text-white">{t.author}</h4>
                    <p className="text-xs text-white/70 font-semibold">{t.role} — {t.location}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots controller */}
          <div className="flex justify-center items-center space-x-3 pt-2">
            <button
              id="test-prev"
              onClick={() => setCurrentTestimonialIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))}
              className="p-1 rounded-full text-white/50 hover:text-white transition-colors hover:bg-white/10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonialIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === currentTestimonialIndex ? 'w-6 bg-white' : 'w-2.5 bg-white/40'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
            <button
              id="test-next"
              onClick={() => setCurrentTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length)}
              className="p-1 rounded-full text-white/50 hover:text-white transition-colors hover:bg-white/10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. NEWSLETTER SIGNUP BANNER */}
      <section id="home-newsletter" className="py-16 bg-light-blush border-b border-light-blush">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-light-blush shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-3">
              <span className="text-primary-pink font-bold text-xs uppercase tracking-widest block">
                Stay Empowered & Linked
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-dark-navy tracking-tight">
                Join our newsletter community
              </h3>
              <p className="text-dark-navy/70 text-xs sm:text-sm leading-relaxed">
                Receive quarterly reports, digital empowerment guides, updates on direct funding cycles, and testimonies straight to your inbox.
              </p>
            </div>

            <div className="lg:col-span-6">
              {newsSubmitted ? (
                <div id="newsletter-success" className="bg-light-blush/80 border border-primary-pink/20 text-primary-pink p-5 rounded-2xl flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-primary-pink text-white flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Thank You for Subscribed!</h4>
                    <p className="text-xs text-dark-navy/70">We are thrilled to welcome you along our impact journey.</p>
                  </div>
                </div>
              ) : (
                <form id="newsletter-form" onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-navy/40 w-5 h-5" />
                    <input
                      type="email"
                      required
                      placeholder="Your professional email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-accent-gray rounded-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary-pink/40 border border-light-blush"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3.5 bg-primary-pink hover:bg-deep-purple text-white font-bold text-sm tracking-wide rounded-full shadow-md shadow-primary-pink/10 hover:shadow-deep-purple/10 transition-colors cursor-pointer"
                  >
                    Subscribe Now
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
