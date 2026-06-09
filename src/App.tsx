/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import WhatWeDoView from './components/WhatWeDoView';
import SDGsView from './components/SDGsView';
import ContactView from './components/ContactView';
import DonateView from './components/DonateView';
import { ActiveView } from './types';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentView, setCurrentView] = useState<ActiveView>('home');

  // Sync hash routing on mount and change
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      const validViews: ActiveView[] = ['home', 'about', 'what-we-do', 'sdgs', 'contact', 'donate'];
      if (validViews.includes(hash as ActiveView)) {
        setCurrentView(hash as ActiveView);
      } else if (!hash) {
        setCurrentView('home');
      }
    };

    // Run initial parse
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleSetCurrentView = (view: ActiveView) => {
    setCurrentView(view);
    window.location.hash = `#/${view}`;
  };

  const renderActiveView = () => {
    switch (currentView) {
      case 'home':
        return <HomeView setCurrentView={handleSetCurrentView} />;
      case 'about':
        return <AboutView />;
      case 'what-we-do':
        return <WhatWeDoView setCurrentView={handleSetCurrentView} />;
      case 'sdgs':
        return <SDGsView />;
      case 'contact':
        return <ContactView />;
      case 'donate':
        return <DonateView />;
      default:
        return <HomeView setCurrentView={handleSetCurrentView} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans antialiased text-dark-navy selection:bg-primary-pink/10 selection:text-primary-pink overflow-x-hidden">
      
      {/* Sticky centered Logo Navbar */}
      <Navbar currentView={currentView} setCurrentView={handleSetCurrentView} />

      {/* Main Dynamic View Area with smooth entry transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Structured Dark Footer */}
      <Footer setCurrentView={handleSetCurrentView} />

    </div>
  );
}
