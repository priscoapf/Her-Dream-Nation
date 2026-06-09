/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Instagram, Facebook, Twitter, Linkedin, Heart, Mail, MapPin } from 'lucide-react';
import { ActiveView } from '../types';
import { LOGO_URL } from '../data';

interface FooterProps {
  setCurrentView: (view: ActiveView) => void;
}

export default function Footer({ setCurrentView }: FooterProps) {
  const handleNavClick = (view: ActiveView) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="app-footer" className="bg-dark-navy text-white pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          
          {/* COLUMN 1: Brand & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src={LOGO_URL}
                alt="HerDream Nation Logo"
                className="h-12 w-auto object-contain rounded bg-white p-1"
                referrerPolicy="no-referrer"
              />
              <span className="font-heading font-extrabold text-lg tracking-tight">
                HerDream <span className="text-primary-pink">Nation</span>
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              Empowering Her Today. Transforming Nations Tomorrow. A women-led social impact NGO operating across Africa and the United Kingdom.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
              <a
                href="https://instagram.com/herdreamnation"
                target="_blank"
                rel="noreferrer"
                id="social-ig"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 text-primary-pink hover:bg-primary-pink hover:text-white transition-all transform hover:-translate-y-1"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/herdreamnation"
                target="_blank"
                rel="noreferrer"
                id="social-fb"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 text-primary-pink hover:bg-primary-pink hover:text-white transition-all transform hover:-translate-y-1"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/herdreamnation"
                target="_blank"
                rel="noreferrer"
                id="social-x"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 text-primary-pink hover:bg-primary-pink hover:text-white transition-all transform hover:-translate-y-1"
                aria-label="X / Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/company/herdreamnation"
                target="_blank"
                rel="noreferrer"
                id="social-li"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 text-primary-pink hover:bg-primary-pink hover:text-white transition-all transform hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* COLUMN 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-base tracking-wide uppercase text-primary-pink">
              Quick Navigation
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {[
                { label: 'Home', view: 'home' as ActiveView },
                { label: 'About Us', view: 'about' as ActiveView },
                { label: 'What We Do', view: 'what-we-do' as ActiveView },
                { label: 'Our SDGs', view: 'sdgs' as ActiveView },
                { label: 'Contact Us', view: 'contact' as ActiveView },
                { label: 'Support & Donate', view: 'donate' as ActiveView },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleNavClick(item.view)}
                    className="text-white/75 text-sm hover:text-primary-pink transition-colors text-left focus:outline-none cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Contact Info */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-base tracking-wide uppercase text-primary-pink">
              Contact Info
            </h3>
            <div className="space-y-3.5">
              <div className="flex items-start space-x-3 text-sm text-white/75">
                <Mail className="w-4 h-4 text-primary-pink mt-0.5 flex-shrink-0" />
                <a href="mailto:herdreamnation@gmail.com" className="hover:text-primary-pink transition-colors break-all">
                  herdreamnation@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3 text-sm text-white/75">
                <MapPin className="w-4 h-4 text-primary-pink mt-0.5 flex-shrink-0" />
                <p className="leading-relaxed">
                  134b Association Road, Dolphin Estate, Ikoyi, Lagos State, Nigeria
                </p>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => handleNavClick('donate')}
                  className="inline-flex items-center space-x-2 bg-primary-pink hover:bg-deep-purple transition-all duration-300 text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full shadow-lg shadow-primary-pink/10"
                >
                  <Heart className="w-3 h-3 fill-white" />
                  <span>Sponsor a Girl Today</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-xs text-white/50 space-y-4 sm:space-y-0 text-center">
          <p>© 2026 HerDream Nation Women Empowerment. All rights reserved.</p>
          <div className="flex space-x-6">
            <span className="hover:text-primary-pink transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-primary-pink transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-primary-pink transition-colors cursor-pointer">Registered NGO</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
