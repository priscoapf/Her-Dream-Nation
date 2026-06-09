/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { DONATION_TIERS } from '../data';
import { Heart, Check, HelpCircle, ArrowRight, ShieldCheck, HeartHandshake, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function DonateView() {
  const [isMonthly, setIsMonthly] = useState(false);
  const [selectedTierId, setSelectedTierId] = useState<string>('tier-2');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form Details State
  const [donorDetails, setDonorDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: 'Nigeria',
    cardNumber: '4111 2222 3333 4444',
    cardExpiry: '12/28',
    cardCVV: '123'
  });

  const getActiveAmount = () => {
    if (selectedTierId === 'custom') {
      return Number(customAmount) || 10;
    }
    const found = DONATION_TIERS.find((t) => t.id === selectedTierId);
    return found ? found.amount : 0;
  };

  const handlesSubmit = (e: FormEvent) => {
    e.preventDefault();
    const finalAmount = getActiveAmount();
    if (finalAmount > 0 && donorDetails.email && donorDetails.firstName) {
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        setIsSuccess(true);
      }, 2500);
    }
  };

  const handleSelectTier = (tierId: string) => {
    setSelectedTierId(tierId);
    setCustomAmount('');
  };

  return (
    <div id="donate-view" className="flex flex-col min-h-screen">
      
      {/* 1. HERO BANNER */}
      <section id="donate-hero" className="bg-light-blush py-16 border-b border-light-blush/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold text-primary-pink uppercase tracking-widest">
            Make A Direct Change
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-dark-navy tracking-tight">
            Support HerDream Nation
          </h1>
          <div className="w-24 h-1.5 bg-primary-pink mx-auto rounded-full" />
          <p className="max-w-2xl mx-auto text-dark-navy/70 text-sm sm:text-base leading-relaxed pt-2">
            Your generous financial support translates directly into micro-grants for aspiring mothers and workspace training classes for younger women.
          </p>
        </div>
      </section>

      {/* 2. TRANSACTION SEGMENT CONTAINER */}
      <section id="donate-content" className="py-16 bg-white flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <AnimatePresence mode="wait">
            {isSuccess ? (
              
              /* SUCCESS CERTIFICATE WRAPPER */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mx-auto bg-white border border-light-blush p-8 sm:p-12 rounded-3xl shadow-xl text-center space-y-8 relative overflow-hidden"
              >
                {/* Decorative glow badge */}
                <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-primary-pink to-deep-purple" />
                <div className="absolute top-10 right-10 opacity-5">
                  <HeartHandshake className="w-48 h-48 text-primary-pink" />
                </div>

                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-full bg-light-blush text-primary-pink flex items-center justify-center mx-auto text-3xl">
                     🎉
                  </div>
                  <h2 className="font-heading text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-pink to-deep-purple">
                    Thank You for Your Support!
                  </h2>
                  <p className="text-dark-navy/70 text-sm sm:text-base font-medium max-w-lg mx-auto">
                    A payment of <span className="font-heading font-black text-black">£{getActiveAmount()}{isMonthly ? '/month' : ''}</span> was successfully approved. Your contribution will expand vital community services directly.
                  </p>
                </div>

                {/* Simulated Sponsorship Receipt Details */}
                <div className="bg-light-blush/40 p-6 rounded-2xl border border-light-blush text-left max-w-md mx-auto space-y-3 font-semibold text-xs sm:text-sm text-dark-navy/80">
                  <div className="flex justify-between border-b border-light-blush/60 pb-2">
                    <span className="text-dark-navy/55 font-normal">Sponsor Name:</span>
                    <span>{donorDetails.firstName} {donorDetails.lastName}</span>
                  </div>
                  <div className="flex justify-between border-b border-light-blush/60 pb-2">
                    <span className="text-dark-navy/55 font-normal">Sponsor Email:</span>
                    <span className="font-mono">{donorDetails.email}</span>
                  </div>
                  <div className="flex justify-between border-b border-light-blush/60 pb-2">
                    <span className="text-dark-navy/55 font-normal">Type:</span>
                    <span>{isMonthly ? 'Monthly Empowerment Sponsor' : 'One-off Support'}</span>
                  </div>
                  <div className="flex justify-between border-b border-light-blush/60 pb-2">
                    <span className="text-dark-navy/55 font-normal">Amount:</span>
                    <span className="text-primary-pink font-bold">£{getActiveAmount()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-dark-navy/55 font-normal">Status:</span>
                    <span className="text-emerald-600 font-bold uppercase tracking-wider text-xs inline-flex items-center space-x-1">
                      <ShieldCheck className="w-3.5 h-3.5 inline" />
                      <span>Approved SECURE</span>
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-xs text-dark-navy/50 max-w-md mx-auto italic leading-relaxed">
                    "Under international NGO protocols, a secure transaction reference and impact allocation report has been logged. We will contact you using your email details."
                  </p>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setSelectedTierId('tier-2');
                      setCustomAmount('');
                    }}
                    className="px-6 py-2.5 bg-primary-pink hover:bg-deep-purple text-white text-xs font-bold uppercase tracking-wider rounded-full transition-colors"
                  >
                    Contribute Again
                  </button>
                </div>
              </motion.div>

            ) : (
              
              /* BASE PAYMENT MODULE DESIGN */
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                {/* Left Side: Select Tiers & Options */}
                <div className="lg:col-span-7 space-y-8">
                  
                  {/* Select Interval Toggle (One-off / Monthly) */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 bg-light-blush/40 rounded-2xl border border-light-blush gap-4">
                    <div>
                      <h4 className="font-bold text-sm text-dark-navy">Sponsorship Interval</h4>
                      <p className="text-xs text-dark-navy/60">Choose between immediate support or monthly commitment.</p>
                    </div>
                    <div className="flex bg-white p-1 rounded-full border border-light-blush shadow-inner">
                      <button
                        type="button"
                        onClick={() => setIsMonthly(false)}
                        className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                          !isMonthly
                            ? 'bg-primary-pink text-white shadow'
                            : 'text-dark-navy/70 hover:text-primary-pink'
                        }`}
                      >
                        One-Off
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsMonthly(true)}
                        className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                          isMonthly
                            ? 'bg-primary-pink text-white shadow'
                            : 'text-dark-navy/70 hover:text-primary-pink'
                        }`}
                      >
                        Monthly
                      </button>
                    </div>
                  </div>

                  {/* Tiers List */}
                  <div className="space-y-4">
                    <h3 className="font-heading font-extrabold text-lg text-dark-navy pb-2 border-b border-light-blush/60">
                      Choose an Impact Level
                    </h3>

                    <div className="grid grid-cols-1 gap-4">
                      {DONATION_TIERS.map((tier) => {
                        const isSelected = selectedTierId === tier.id;
                        return (
                          <div
                            key={tier.id}
                            id={`tier-card-${tier.id}`}
                            onClick={() => handleSelectTier(tier.id)}
                            className={`p-5 rounded-2xl border transition-all cursor-pointer relative hover:-translate-y-0.5 ${
                              isSelected
                                ? 'bg-light-blush/40 border-primary-pink shadow-md'
                                : 'bg-white border-light-blush hover:border-primary-pink/40'
                            }`}
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex items-start space-x-3.5">
                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 mt-0.5 ${
                                  isSelected ? 'border-primary-pink bg-primary-pink text-white' : 'border-dark-navy/20'
                                }`}>
                                  {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                                </div>
                                <div className="space-y-1">
                                  <h4 className="font-heading font-extrabold text-sm sm:text-base text-dark-navy">
                                    {tier.title}
                                  </h4>
                                  <p className="text-xs text-dark-navy/70 leading-relaxed max-w-xl">
                                    {tier.description}
                                  </p>
                                </div>
                              </div>
                              <div className="text-right flex-shrink-0 pl-4">
                                <span className="font-heading font-black text-xl text-primary-pink">
                                  £{tier.amount}
                                </span>
                                <span className="text-dark-navy/50 text-[10px] uppercase font-bold tracking-wider block">
                                  {isMonthly ? '/month' : 'one-off'}
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      })}

                      {/* Custom Amount option */}
                      <div
                        id="tier-card-custom"
                        onClick={() => setSelectedTierId('custom')}
                        className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                          selectedTierId === 'custom'
                            ? 'bg-light-blush/40 border-primary-pink shadow-md'
                            : 'bg-white border-light-blush hover:border-primary-pink/40'
                        }`}
                      >
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                          <div className="flex items-center space-x-3.5">
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 ${
                              selectedTierId === 'custom' ? 'border-primary-pink bg-primary-pink text-white' : 'border-dark-navy/20'
                            }`}>
                              {selectedTierId === 'custom' && <Check className="w-3 h-3 stroke-[3]" />}
                            </div>
                            <div>
                              <h4 className="font-heading font-extrabold text-sm sm:text-base text-dark-navy">Custom Contribution</h4>
                              <p className="text-xs text-dark-navy/60">Input any personal amount in GBP sterling.</p>
                            </div>
                          </div>
                          
                          {selectedTierId === 'custom' && (
                            <div className="relative w-full sm:w-36 flex-shrink-0">
                              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-navy/60 font-black text-base">£</span>
                              <input
                                type="number"
                                required
                                min="5"
                                placeholder="Custom"
                                value={customAmount}
                                onChange={(e) => setCustomAmount(e.target.value)}
                                className="w-full pl-8 pr-3 py-2 bg-white rounded-xl text-sm font-black border border-primary-pink text-dark-navy focus:outline-none"
                              />
                            </div>
                          )}
                        </div>
                      </div>

                    </div>
                  </div>

                </div>

                {/* Right Side: Payment Details form */}
                <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-light-blush shadow-xl relative self-start">
                  
                  <form id="donation-payment-form" onSubmit={handlesSubmit} className="space-y-5">
                    <div className="space-y-1">
                      <h3 className="font-heading font-extrabold text-base text-dark-navy">Sponsor Information</h3>
                      <p className="text-[11px] text-dark-navy/50">Enter credentials securely to validate direct support.</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="don-first" className="text-[10px] font-bold text-dark-navy/70 uppercase">First Name *</label>
                        <input
                          type="text"
                          id="don-first"
                          required
                          value={donorDetails.firstName}
                          onChange={(e) => setDonorDetails({ ...donorDetails, firstName: e.target.value })}
                          placeholder="Arinola"
                          className="w-full px-3.5 py-2.5 bg-accent-gray rounded-xl text-xs sm:text-sm font-semibold border border-transparent focus:border-primary-pink/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-pink/15 transition-colors"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="don-last" className="text-[10px] font-bold text-dark-navy/70 uppercase">Last Name</label>
                        <input
                          type="text"
                          id="don-last"
                          value={donorDetails.lastName}
                          onChange={(e) => setDonorDetails({ ...donorDetails, lastName: e.target.value })}
                          placeholder="Cole"
                          className="w-full px-3.5 py-2.5 bg-accent-gray rounded-xl text-xs sm:text-sm font-semibold border border-transparent focus:border-primary-pink/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-pink/15 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="don-email" className="text-[10px] font-bold text-dark-navy/70 uppercase">Your Email Address *</label>
                      <input
                        type="email"
                        id="don-email"
                        required
                        value={donorDetails.email}
                        onChange={(e) => setDonorDetails({ ...donorDetails, email: e.target.value })}
                        placeholder="arinola@example.com"
                        className="w-full px-3.5 py-2.5 bg-accent-gray rounded-xl text-xs sm:text-sm font-semibold border border-transparent focus:border-primary-pink/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-pink/15 transition-colors"
                      />
                    </div>

                    <div className="pt-2 border-t border-light-blush/60 space-y-4">
                      <div className="space-y-1">
                        <h4 className="font-heading font-extrabold text-xs text-dark-navy uppercase tracking-wider">Simulated SECURE Billing Card</h4>
                        <p className="text-[10px] text-dark-navy/50">Simulated details. Feel free to use test values.</p>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-dark-navy/70 uppercase">Card Number</label>
                        <input
                          type="text"
                          required
                          value={donorDetails.cardNumber}
                          onChange={(e) => setDonorDetails({ ...donorDetails, cardNumber: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-accent-gray rounded-xl text-xs sm:text-sm font-mono border border-transparent focus:border-primary-pink/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-pink/15 transition-colors"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold text-dark-navy/70 uppercase">Expiry Date</label>
                          <input
                            type="text"
                            required
                            placeholder="MM/YY"
                            value={donorDetails.cardExpiry}
                            onChange={(e) => setDonorDetails({ ...donorDetails, cardExpiry: e.target.value })}
                            className="w-full px-3.5 py-2.5 bg-accent-gray rounded-xl text-xs sm:text-sm font-mono border border-transparent focus:border-primary-pink/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-pink/15"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold text-dark-navy/70 uppercase">CVV Security</label>
                          <input
                            type="password"
                            required
                            maxLength={3}
                            placeholder="123"
                            value={donorDetails.cardCVV}
                            onChange={(e) => setDonorDetails({ ...donorDetails, cardCVV: e.target.value })}
                            className="w-full px-3.5 py-2.5 bg-accent-gray rounded-xl text-xs sm:text-sm font-mono border border-transparent focus:border-primary-pink/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-pink/15"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Submit Support Button with Animated Processing indicator */}
                    <button
                      type="submit"
                      disabled={isProcessing}
                      className="w-full mt-4 py-3.5 bg-primary-pink hover:bg-deep-purple disabled:bg-primary-pink/50 text-white font-bold text-sm tracking-wide rounded-full shadow-lg shadow-primary-pink/20 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      {isProcessing ? (
                        <div className="flex items-center space-x-2">
                          <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          <span>Securing Connection...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <Heart className="w-4 h-4 fill-white" />
                          <span>Authorise £{getActiveAmount()}{isMonthly ? '/month' : ''}</span>
                        </div>
                      )}
                    </button>

                    <p className="text-[10px] text-dark-navy/40 text-center leading-normal">
                      By submitting, you authorize HerDream Nation to simulate processing. Secured via TLS block-encryption parameters. Thank you.
                    </p>

                  </form>

                </div>

              </div>
            )}
          </AnimatePresence>

        </div>
      </section>

    </div>
  );
}
