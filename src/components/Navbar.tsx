/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { ActiveView } from '../types';
import { LOGO_URL } from '../data';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentView: ActiveView;
  setCurrentView: (view: ActiveView) => void;
}

export default function Navbar({ currentView, setCurrentView }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const leftLinks: { label: string; view: ActiveView }[] = [
    { label: 'Home', view: 'home' },
    { label: 'About', view: 'about' },
    { label: 'What We Do', view: 'what-we-do' }
  ];

  const rightLinks: { label: string; view: ActiveView }[] = [
    { label: 'SDGs', view: 'sdgs' },
    { label: 'Contact', view: 'contact' }
  ];

  const handleNavClick = (view: ActiveView) => {
    setCurrentView(view);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header id="app-header" className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-sm border-b border-light-blush transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:grid md:grid-cols-3">
          
          {/* DESKTOP Left Links */}
          <nav id="desktop-nav-left" className="hidden md:flex space-x-8 items-center justify-start">
            {leftLinks.map((item) => {
              const isActive = currentView === item.view;
              return (
                <button
                  key={item.view}
                  id={`nav-link-${item.view}`}
                  onClick={() => handleNavClick(item.view)}
                  className="relative py-2 text-[15px] font-medium tracking-wide transition-colors cursor-pointer group"
                  style={{ color: isActive ? '#E8006F' : '#1A1A2E' }}
                >
                  <span className="group-hover:text-primary-pink transition-colors">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-pink rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Logo (Centered on Desktop, Left on Mobile) */}
          <div className="flex justify-start md:justify-center items-center flex-1 md:flex-none">
            <button
              id="navbar-logo-btn"
              onClick={() => handleNavClick('home')}
              className="flex items-center space-x-3 cursor-pointer select-none group focus:outline-none"
            >
              <img
                src={LOGO_URL}
                alt="HerDream Nation Logo"
                className="h-14 w-auto object-contain rounded-md group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <span className="font-heading font-extrabold text-sm sm:text-base leading-tight tracking-tight text-dark-navy md:hidden xl:block">
                HerDream <span className="text-primary-pink">Nation</span>
              </span>
            </button>
          </div>

          {/* DESKTOP Right Links + CTA Right */}
          <div className="hidden md:flex justify-end items-center space-x-8">
            <nav id="desktop-nav-right" className="flex space-x-8 items-center">
              {rightLinks.map((item) => {
                const isActive = currentView === item.view;
                return (
                  <button
                    key={item.view}
                    id={`nav-link-${item.view}`}
                    onClick={() => handleNavClick(item.view)}
                    className="relative py-2 text-[15px] font-medium tracking-wide transition-colors cursor-pointer group"
                    style={{ color: isActive ? '#E8006F' : '#1A1A2E' }}
                  >
                    <span className="group-hover:text-primary-pink transition-colors">{item.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeUnderline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-pink rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Donate CTA Button (Pill shape) */}
            <button
              id="nav-donate-btn"
              onClick={() => handleNavClick('donate')}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-full font-semibold text-sm tracking-wide shadow-md cursor-pointer transition-all duration-300 scale-100 hover:scale-105 active:scale-95 ${
                currentView === 'donate'
                  ? 'bg-deep-purple text-white shadow-deep-purple/20'
                  : 'bg-primary-pink text-white hover:bg-deep-purple shadow-primary-pink/20'
              }`}
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Donate</span>
            </button>
          </div>

          {/* MOBILE TOGGLE BUTTON */}
          <div className="md:hidden flex items-center">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-dark-navy hover:text-primary-pink transition-colors rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-white border-t border-light-blush shadow-inner"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col items-stretch">
              {[...leftLinks, ...rightLinks].map((item) => {
                const isActive = currentView === item.view;
                return (
                  <button
                    key={item.view}
                    id={`mobile-nav-link-${item.view}`}
                    onClick={() => handleNavClick(item.view)}
                    className={`px-4 py-3 rounded-xl text-left text-base font-semibold tracking-wide transition-all ${
                      isActive
                        ? 'bg-light-blush text-primary-pink pl-6'
                        : 'text-dark-navy hover:bg-accent-gray'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              
              <button
                id="mobile-nav-donate-btn"
                onClick={() => handleNavClick('donate')}
                className={`flex items-center justify-center space-x-2 w-full mt-4 py-3.5 rounded-full font-bold text-base shadow-lg transition-all ${
                  currentView === 'donate'
                    ? 'bg-deep-purple text-white'
                    : 'bg-primary-pink text-white hover:bg-deep-purple'
                }`}
              >
                <Heart className="w-5 h-5 fill-white" />
                <span>Donate to HerDream</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
