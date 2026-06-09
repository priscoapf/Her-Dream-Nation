/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { Mail, MapPin, Send, CheckCircle, PhoneCall, Globe, HelpingHand } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitted(false);
      }, 5000);
    }
  };

  return (
    <div id="contact-view" className="flex flex-col min-h-screen">
      
      {/* 1. PAGE HERO */}
      <section id="contact-hero" className="bg-light-blush py-16 border-b border-light-blush/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold text-primary-pink uppercase tracking-widest">
            Support Sisterhood
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-dark-navy tracking-tight">
            Get in Touch
          </h1>
          <div className="w-24 h-1.5 bg-primary-pink mx-auto rounded-full" />
        </div>
      </section>

      {/* 2. TWO COLUMN LAYOUT */}
      <section id="contact-content" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left side: Contact details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-primary-pink font-bold text-xs uppercase tracking-widest block">
                  Connect Directly
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-dark-navy tracking-tight">
                  Reach out to our global hubs
                </h2>
                <p className="text-dark-navy/70 text-sm leading-relaxed">
                  We answer operational enquiries, volunteer requests, press communications, and donor connections. Our administrative sisterhood responds within 48 business hours.
                </p>
              </div>

              {/* Informational Cards */}
              <div className="space-y-6">
                
                {/* Email Address */}
                <div className="flex items-start space-x-4 bg-light-blush/30 p-5 rounded-2xl border border-light-blush border-dashed">
                  <div className="w-12 h-12 rounded-xl bg-primary-pink text-white flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 fill-white" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-heading font-extrabold text-sm text-dark-navy uppercase tracking-wider">Email Address</h4>
                    <a
                      href="mailto:herdreamnation@gmail.com"
                      className="text-primary-pink font-bold text-sm sm:text-base hover:underline break-all"
                    >
                      herdreamnation@gmail.com
                    </a>
                    <p className="text-xs text-dark-navy/50">Primary administrative inbox</p>
                  </div>
                </div>

                {/* Lagos Head Office */}
                <div className="flex items-start space-x-4 bg-light-blush/30 p-5 rounded-2xl border border-light-blush border-dashed">
                  <div className="w-12 h-12 rounded-xl bg-primary-pink text-white flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 fill-white text-primary-pink border-0" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-heading font-extrabold text-sm text-dark-navy uppercase tracking-wider">Lagos Head Office</h4>
                    <p className="text-dark-navy/80 text-sm font-semibold leading-relaxed">
                      134b Association Road, Dolphin Estate, <br />
                      Ikoyi, Lagos State, Nigeria
                    </p>
                    <p className="text-xs text-dark-navy/50">Primary Training & Development Facility</p>
                  </div>
                </div>

                {/* Additional Hub Connections */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-accent-gray rounded-xl border border-light-blush text-center space-y-1">
                    <PhoneCall className="w-4 h-4 text-primary-pink mx-auto" />
                    <h5 className="font-bold text-xs text-dark-navy">Nigeria Phone</h5>
                    <p className="text-xs text-dark-navy/70 font-medium">+234 (1) 882-9936</p>
                  </div>
                  <div className="p-4 bg-accent-gray rounded-xl border border-light-blush text-center space-y-1">
                    <Globe className="w-4 h-4 text-primary-pink mx-auto" />
                    <h5 className="font-bold text-xs text-dark-navy">UK Liaison</h5>
                    <p className="text-xs text-dark-navy/70 font-medium">London Metro Hub</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right side: Contact form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-light-blush shadow-xl relative overflow-hidden">
              
              {isSubmitted ? (
                <div id="contact-submit-success" className="h-full flex flex-col justify-center items-center text-center space-y-4 py-8">
                  <div className="w-16 h-16 rounded-full bg-light-blush text-primary-pink flex items-center justify-center animate-bounce shadow">
                    <CheckCircle className="w-8 h-8 fill-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-heading font-black text-2xl text-dark-navy">Message Received!</h3>
                    <p className="text-dark-navy/70 text-sm max-w-md">
                      Thank you for contacting HerDream Nation. One of our community coordinators in Lagos or London will reach out as soon as possible.
                    </p>
                  </div>
                  <div className="w-full h-1 bg-gradient-to-r from-primary-pink to-deep-purple rounded" />
                  <p className="text-xs text-primary-pink font-semibold uppercase tracking-widest">Empowering Her, Transforming Nations</p>
                </div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="space-y-2">
                    <h3 className="font-heading font-extrabold text-xl text-dark-navy">Send Us a Message</h3>
                    <p className="text-xs text-dark-navy/60">Fill in the fields below to trigger an admin request directly.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-xs font-bold text-dark-navy/80 uppercase tracking-wider">Your Name *</label>
                      <input
                        type="text"
                        id="contact-name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Grace Adebiyi"
                        className="w-full px-4 py-3 bg-accent-gray rounded-xl text-sm font-medium border border-transparent focus:border-primary-pink/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-pink/15 transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-xs font-bold text-dark-navy/80 uppercase tracking-wider">Email Address *</label>
                      <input
                        type="email"
                        id="contact-email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="grace@example.com"
                        className="w-full px-4 py-3 bg-accent-gray rounded-xl text-sm font-medium border border-transparent focus:border-primary-pink/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-pink/15 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="text-xs font-bold text-dark-navy/80 uppercase tracking-wider">Subject</label>
                    <input
                      type="text"
                      id="contact-subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Volunteer placement / Corporate partnership / Core Sponsor"
                      className="w-full px-4 py-3 bg-accent-gray rounded-xl text-sm font-medium border border-transparent focus:border-primary-pink/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-pink/15 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs font-bold text-dark-navy/80 uppercase tracking-wider"> Your Message *</label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How would you like to build with us or access our services?"
                      className="w-full px-4 py-3 bg-accent-gray rounded-xl text-sm font-medium border border-transparent focus:border-primary-pink/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-pink/15 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-primary-pink hover:bg-deep-purple text-white font-bold rounded-xl shadow-lg shadow-primary-pink/20 hover:shadow-deep-purple/20 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer transform active:scale-[0.98]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>

                </form>
              )}

            </div>

          </div>
        </div>
      </section>

      {/* 3. WIDE PINK TAGLINE BANNER BELOW FORM */}
      <section id="contact-banner" className="py-12 bg-primary-pink text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-pink to-deep-purple/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <h2 className="font-heading font-black text-xl sm:text-2xl text-white tracking-tight text-left">
            "Together, we can empower more women. <br className="hidden md:block" /> Reach out today."
          </h2>
          <div className="flex-shrink-0 flex items-center space-x-2 bg-white text-primary-pink px-6 py-3 rounded-full font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-black/10">
            <HelpingHand className="w-4 h-4 text-primary-pink animate-wiggle" />
            <span>Empowerment Partner</span>
          </div>
        </div>
      </section>

    </div>
  );
}
