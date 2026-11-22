import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calculator, Send, CheckCircle2, Phone, MessageSquare, AlertCircle } from 'lucide-react';
import { businessConfig } from '../data/businessInfo';

export default function QuoteModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('quote'); // 'quote' | 'calculator'
  
  // Calculator State
  const [wallArea, setWallArea] = useState(500); // sq ft
  const [wallType, setWallType] = useState('4inch'); // '4inch' | '9inch'
  const [wastageRate, setWastageRate] = useState(5); // %

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    quantity: '5000',
    projectType: 'Residential Construction',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Calculation Logic:
  // Standard Fly Ash Brick (9" x 4" x 3")
  // Face area in 4" wall = (9" + mortar) x (3" + mortar) ≈ 0.22 sq ft -> ~4.5 bricks/sq ft
  // In 9" wall = 2 x 4" thickness -> ~9.2 bricks/sq ft
  const baseBricksPerSqFt = wallType === '4inch' ? 4.6 : 9.2;
  const estimatedBricks = Math.round(wallArea * baseBricksPerSqFt * (1 + wastageRate / 100));

  const handleCalculateApply = () => {
    setFormData(prev => ({
      ...prev,
      quantity: String(estimatedBricks),
      message: `Calculated for ${wallArea} sq.ft (${wallType === '4inch' ? '4-inch partition wall' : '9-inch main wall'}) with ${wastageRate}% wastage.`
    }));
    setActiveTab('quote');
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your full name';
    if (!formData.phone.trim() || formData.phone.length < 10) errs.phone = 'Valid 10-digit phone number is required';
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Valid email is required';
    if (!formData.location.trim()) errs.location = 'Please specify project or delivery site';
    if (!formData.quantity || parseInt(formData.quantity) <= 0) errs.quantity = 'Please enter required brick quantity';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const handleWhatsAppQuote = () => {
    if (!formData.phone.trim()) {
      setErrors(prev => ({ ...prev, phone: 'Please provide your phone number first' }));
      return;
    }
    const text = encodeURIComponent(
      `Hello Samruddhi Enterprises,\n\nI would like to request an official quotation for Fly Ash Bricks:\n` +
      `• Name: ${formData.name || 'Not provided'}\n` +
      `• Phone: ${formData.phone}\n` +
      `• Delivery Location: ${formData.location || 'Maharashtra'}\n` +
      `• Quantity: ${formData.quantity} bricks\n` +
      `• Project Type: ${formData.projectType}\n` +
      `• Additional Notes: ${formData.message || 'Please send rate per brick and transport availability'}\n\n` +
      `Kindly provide availability and estimated delivery schedule.`
    );
    window.open(`https://wa.me/${businessConfig.contact.whatsappNumber}?text=${text}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-brand-navyDeep/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-brand-line overflow-hidden z-10 my-8"
        >
          {/* Header */}
          <div className="bg-brand-navy text-white px-6 py-5 flex items-center justify-between border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-gold uppercase tracking-wider mb-1">
                <span>Samruddhi Enterprises</span>
                <span>•</span>
                <span>Commercial Desk</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                Request a Quick Quotation<span className="dot">.</span>
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close quote modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-brand-line bg-brand-lightBg px-6 pt-3 gap-4">
            <button
              onClick={() => setActiveTab('quote')}
              className={`pb-3 text-sm font-semibold border-b-2 transition-all flex items-center gap-2 ${
                activeTab === 'quote'
                  ? 'border-brand-gold text-brand-navy font-bold'
                  : 'border-transparent text-brand-muted hover:text-brand-navy'
              }`}
            >
              <Send className="w-4 h-4" />
              Direct Quote Request
            </button>
            <button
              onClick={() => setActiveTab('calculator')}
              className={`pb-3 text-sm font-semibold border-b-2 transition-all flex items-center gap-2 ${
                activeTab === 'calculator'
                  ? 'border-brand-gold text-brand-navy font-bold'
                  : 'border-transparent text-brand-muted hover:text-brand-navy'
              }`}
            >
              <Calculator className="w-4 h-4" />
              Brick Estimator Calculator
            </button>
          </div>

          <div className="p-6 max-h-[75vh] overflow-y-auto">
            {/* CALCULATOR TAB */}
            {activeTab === 'calculator' && (
              <div className="space-y-6">
                <div className="bg-amber-50/60 p-4 rounded-xl border border-brand-gold/30 text-xs text-brand-goldInk flex items-start gap-3">
                  <Calculator className="w-5 h-5 flex-shrink-0 text-brand-gold mt-0.5" />
                  <div>
                    <p className="font-semibold text-brand-navy mb-1">Wall Masonry Quantity Estimator</p>
                    <p>Calculates required standard modular Fly Ash Bricks (9" × 4" × 3") accounting for joint mortar bed and on-site cuts.</p>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold text-brand-navy">Total Wall Area (Square Feet):</label>
                    <span className="text-base font-bold text-brand-gold font-mono">{wallArea} sq.ft</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="10000"
                    step="50"
                    value={wallArea}
                    onChange={(e) => setWallArea(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-gold"
                  />
                  <div className="flex justify-between text-xs text-brand-muted mt-1">
                    <span>100 sq.ft (Single Room)</span>
                    <span>5,000 sq.ft</span>
                    <span>10,000 sq.ft (Building)</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-brand-navy mb-2">Wall Thickness:</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setWallType('4inch')}
                        className={`p-3 rounded-lg border text-xs font-semibold text-center transition-all ${
                          wallType === '4inch'
                            ? 'border-brand-gold bg-brand-goldTint text-brand-navy font-bold ring-1 ring-brand-gold'
                            : 'border-brand-line bg-white text-brand-muted hover:border-slate-300'
                        }`}
                      >
                        4" Partition Wall
                        <span className="block font-normal text-[10px] text-slate-500 mt-0.5">~4.6 bricks / sq.ft</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setWallType('9inch')}
                        className={`p-3 rounded-lg border text-xs font-semibold text-center transition-all ${
                          wallType === '9inch'
                            ? 'border-brand-gold bg-brand-goldTint text-brand-navy font-bold ring-1 ring-brand-gold'
                            : 'border-brand-line bg-white text-brand-muted hover:border-slate-300'
                        }`}
                      >
                        9" Main / Outer Wall
                        <span className="block font-normal text-[10px] text-slate-500 mt-0.5">~9.2 bricks / sq.ft</span>
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-brand-navy mb-2">Wastage / Cutting Allowance:</label>
                    <select
                      value={wastageRate}
                      onChange={(e) => setWastageRate(Number(e.target.value))}
                      className="w-full px-3 py-2.5 rounded-lg border border-brand-line bg-white text-sm focus:border-brand-gold focus:outline-none"
                    >
                      <option value={3}>3% (Precise handling)</option>
                      <option value={5}>5% (Recommended standard)</option>
                      <option value={8}>8% (Complex corners & cuts)</option>
                    </select>
                  </div>
                </div>

                {/* Estimate Result Box */}
                <div className="bg-brand-navy text-white p-5 rounded-xl border border-brand-gold/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <span className="text-xs uppercase font-mono tracking-wider text-brand-gold">Estimated Requirement</span>
                    <div className="text-3xl font-extrabold font-display text-white mt-1">
                      {estimatedBricks.toLocaleString()} <span className="text-sm font-normal text-slate-300">Bricks</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      Based on standard 9" × 4" × 3" Fly Ash Bricks with 10 mm mortar joints.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleCalculateApply}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-brand-gold hover:bg-brand-goldHover text-brand-navy font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 flex-shrink-0"
                  >
                    <span>Apply to Quotation</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* DIRECT QUOTE REQUEST TAB */}
            {activeTab === 'quote' && (
              <>
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h4 className="text-2xl font-bold text-brand-navy font-display mb-2">Quotation Request Logged!</h4>
                    <p className="text-brand-muted max-w-md mx-auto text-sm leading-relaxed mb-6">
                      Thank you, <strong className="text-brand-navy">{formData.name}</strong>. Your requirement for{' '}
                      <strong className="text-brand-navy">{parseInt(formData.quantity).toLocaleString()} bricks</strong> at{' '}
                      <strong className="text-brand-navy">{formData.location}</strong> has been received by our commercial team.
                    </p>
                    <div className="bg-brand-lightBg p-4 rounded-xl border border-brand-line text-xs text-brand-text max-w-md mx-auto text-left mb-6 space-y-1">
                      <p><strong>Note:</strong> Planned production capacity is 30,000 bricks/day.</p>
                      <p>Our sales representative will reach you at <strong>{formData.phone}</strong> with current factory pricing and transit schedule.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <button
                        onClick={handleWhatsAppQuote}
                        className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                      >
                        <MessageSquare className="w-4 h-4" />
                        Chat on WhatsApp Now
                      </button>
                      <button
                        onClick={() => { setSubmitted(false); onClose(); }}
                        className="px-6 py-3 rounded-xl border border-brand-line hover:bg-slate-100 text-brand-navy font-semibold text-sm transition-all"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-brand-slate mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Ramesh Patil / BuildCon Infra"
                          className={`w-full px-3.5 py-2.5 rounded-lg border text-sm transition-colors focus:outline-none ${
                            errors.name ? 'border-red-400 bg-red-50/50' : 'border-brand-line focus:border-brand-gold'
                          }`}
                        />
                        {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-brand-slate mb-1">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="10-digit mobile number"
                          className={`w-full px-3.5 py-2.5 rounded-lg border text-sm transition-colors focus:outline-none ${
                            errors.phone ? 'border-red-400 bg-red-50/50' : 'border-brand-line focus:border-brand-gold'
                          }`}
                        />
                        {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-brand-slate mb-1">
                          Email Address (Optional)
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your.email@domain.com"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-brand-line text-sm focus:border-brand-gold focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-brand-slate mb-1">
                          Delivery Site / City <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="e.g. Pune, Beed, Chhatrapati Sambhajinagar"
                          className={`w-full px-3.5 py-2.5 rounded-lg border text-sm transition-colors focus:outline-none ${
                            errors.location ? 'border-red-400 bg-red-50/50' : 'border-brand-line focus:border-brand-gold'
                          }`}
                        />
                        {errors.location && <p className="text-[11px] text-red-500 mt-1">{errors.location}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-brand-slate mb-1">
                          Quantity Required (Bricks) <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="number"
                          value={formData.quantity}
                          onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                          placeholder="Minimum 1,000"
                          min="500"
                          step="500"
                          className={`w-full px-3.5 py-2.5 rounded-lg border text-sm font-mono transition-colors focus:outline-none ${
                            errors.quantity ? 'border-red-400 bg-red-50/50' : 'border-brand-line focus:border-brand-gold'
                          }`}
                        />
                        {errors.quantity && <p className="text-[11px] text-red-500 mt-1">{errors.quantity}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-brand-slate mb-1">
                          Project Classification
                        </label>
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-brand-line text-sm bg-white focus:border-brand-gold focus:outline-none"
                        >
                          <option>Residential Construction</option>
                          <option>Commercial Complex / IT Park</option>
                          <option>Industrial Shed & Warehousing</option>
                          <option>Boundary & Perimeter Wall</option>
                          <option>Government / Infrastructure Project</option>
                          <option>Building Material Dealership / Wholesale</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-brand-slate mb-1">
                        Specific Project Details or Site Notes
                      </label>
                      <textarea
                        rows={2}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Mention preferred delivery timeline, site unloading access, or custom size requirement..."
                        className="w-full px-3.5 py-2.5 rounded-lg border border-brand-line text-sm focus:border-brand-gold focus:outline-none resize-none"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row gap-3">
                      <button
                        type="submit"
                        className="flex-1 py-3 px-6 rounded-xl bg-brand-navy hover:bg-brand-navyCard text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4 text-brand-gold" />
                        <span>Submit Quote Request</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleWhatsAppQuote}
                        className="py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Instant WhatsApp Quote</span>
                      </button>
                    </div>

                    <p className="text-[11px] text-center text-brand-muted mt-2">
                      🔒 Your commercial inquiry is safe. Pricing quotes are configured based on verified delivery distance and order volume.
                    </p>
                  </form>
                )}
              </>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}