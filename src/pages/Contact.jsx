import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Clock, MessageSquare, 
  Send, CheckCircle2, ShieldCheck, HelpCircle, ArrowRight 
} from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { businessConfig } from '../data/businessInfo';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    enquiryType: 'Fly Ash Bricks Supply',
    projectLocation: '',
    quantity: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.phone.trim() || formData.phone.length < 10) errs.phone = 'Valid 10-digit phone number is required';
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Valid email address is required';
    if (!formData.message.trim()) errs.message = 'Please provide details of your requirement';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Samruddhi Enterprises,\n\nI have an inquiry regarding Fly Ash Bricks:\n` +
      `• Name: ${formData.name || 'Inquirer'}\n` +
      `• Phone: ${formData.phone || 'Not provided'}\n` +
      `• Enquiry Type: ${formData.enquiryType}\n` +
      `• Site Location: ${formData.projectLocation || 'Maharashtra'}\n` +
      `• Quantity: ${formData.quantity || 'To be decided'} bricks\n` +
      `• Requirement: ${formData.message || 'Please send pricing and dispatch schedule'}\n\n` +
      `Looking forward to your prompt response.`
    );
    window.open(`https://wa.me/${businessConfig.contact.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="overflow-hidden">
      {/* 1. HERO */}
      <PageHero
        kicker="Commercial Inquiries"
        title="Contact Samruddhi Enterprises"
        subtitle="Get in touch with our factory dispatch and technical sales desk for bulk pricing, test certificates, and scheduled jobsite deliveries across India."
        breadcrumb={[{ label: 'Contact Us' }]}
        highlightWord="Contact"
        bgImage="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=80"
      />

      {/* 2. CONTACT DETAILS + INQUIRY FORM */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* LEFT COLUMN: CONTACT CARDS & INFO */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-brand-goldInk font-bold block mb-1">
                  Plant & Headquarters
                </span>
                <h2 className="text-3xl font-extrabold text-brand-navy font-display leading-tight">
                  Reach Our Dispatch & Sales Desk<span className="dot">.</span>
                </h2>
                <p className="text-sm text-brand-text leading-relaxed font-light mt-3">
                  Whether you are planning a high-rise residential complex, a commercial park, or an individual home foundation, our team is available to assist with volume quotes and logistics planning.
                </p>
              </div>

              {/* Contact Information Cards */}
              <div className="space-y-4 pt-2">
                {/* Phone */}
                <div className="p-5 rounded-2xl bg-brand-lightBg border border-brand-line flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-goldTint text-brand-gold flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-brand-goldInk" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-brand-muted block">Direct Plant Phone</span>
                    <a
                      href={`tel:${businessConfig.contact.phonePrimary}`}
                      className="text-base font-bold text-brand-navy hover:text-brand-gold transition-colors font-mono"
                    >
                      {businessConfig.contact.phonePrimary}
                    </a>
                    <span className="block text-xs text-brand-muted mt-0.5">
                      Mon–Sat: 8:00 AM – 7:00 PM (IST)
                    </span>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-emerald-800 block">Instant WhatsApp Chat</span>
                    <button
                      onClick={handleDirectWhatsApp}
                      className="text-base font-bold text-emerald-900 hover:underline transition-colors font-mono text-left"
                    >
                      {businessConfig.contact.whatsappDisplay}
                    </button>
                    <span className="block text-xs text-emerald-700 mt-0.5">
                      Fast response for price per brick & truckload availability
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="p-5 rounded-2xl bg-brand-lightBg border border-brand-line flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-goldTint text-brand-gold flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-brand-goldInk" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-brand-muted block">Email Inquiries</span>
                    <a
                      href={`mailto:${businessConfig.contact.email}`}
                      className="text-base font-bold text-brand-navy hover:text-brand-gold transition-colors"
                    >
                      {businessConfig.contact.email}
                    </a>
                    <span className="block text-xs text-brand-muted mt-0.5">
                      Send RFQs, tender drawings, and test spec requirements
                    </span>
                  </div>
                </div>

                {/* Address */}
                <div className="p-5 rounded-2xl bg-brand-lightBg border border-brand-line flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-goldTint text-brand-gold flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-brand-goldInk" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-brand-muted block">Factory & Yard Location</span>
                    <p className="text-sm font-semibold text-brand-navy">
                      {businessConfig.contact.addressFull}
                    </p>
                    <span className="block text-xs text-brand-muted mt-0.5 font-mono">
                      {businessConfig.contact.gstinNote}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: VALIDATED INQUIRY FORM */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-brand-line shadow-card">
                <div className="mb-6">
                  <span className="text-xs font-mono uppercase tracking-widest text-brand-goldInk font-bold">
                    Online Submission
                  </span>
                  <h3 className="text-2xl font-bold font-display text-brand-navy mt-1">
                    Send an Official Inquiry<span className="dot">.</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-muted mt-1 font-light">
                    Complete the form below to receive a formal quotation and delivery confirmation.
                  </p>
                </div>

                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h4 className="text-2xl font-bold text-brand-navy font-display">Inquiry Received</h4>
                    <p className="text-sm text-brand-text max-w-md mx-auto leading-relaxed font-light">
                      Thank you, <strong className="text-brand-navy">{formData.name}</strong>. Your inquiry has been registered. Our commercial dispatch desk will reach out to you at <strong className="text-brand-navy">{formData.phone}</strong>.
                    </p>
                    <div className="p-4 rounded-xl bg-brand-lightBg border border-brand-line max-w-md mx-auto text-xs text-brand-muted text-left">
                      <p><strong>Integration Readiness Note:</strong> This form includes full client-side validation. When connected to your backend mailer or CRM (e.g. EmailJS or webhook), submissions will route instantly.</p>
                    </div>
                    <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                      <button
                        onClick={handleDirectWhatsApp}
                        className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Send Details on WhatsApp</span>
                      </button>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: '',
                            phone: '',
                            email: '',
                            enquiryType: 'Fly Ash Bricks Supply',
                            projectLocation: '',
                            quantity: '',
                            message: ''
                          });
                        }}
                        className="px-6 py-3 rounded-xl border border-brand-line text-brand-navy font-semibold text-sm hover:bg-slate-50 transition-all"
                      >
                        Submit Another Inquiry
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
                          className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none ${
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
                          className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none ${
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
                          placeholder="contact@company.com"
                          className="w-full px-4 py-3 rounded-xl border border-brand-line text-sm focus:border-brand-gold focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-brand-slate mb-1">
                          Enquiry Nature
                        </label>
                        <select
                          value={formData.enquiryType}
                          onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-brand-line text-sm bg-white focus:border-brand-gold focus:outline-none"
                        >
                          <option>Fly Ash Bricks Supply</option>
                          <option>Bulk Developer Contract</option>
                          <option>Test Certificate & Lab Specifications</option>
                          <option>Material Dealership / Distribution</option>
                          <option>General Business Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-brand-slate mb-1">
                          Project Site Location
                        </label>
                        <input
                          type="text"
                          value={formData.projectLocation}
                          onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                          placeholder="e.g. Pune, Beed, Chhatrapati Sambhajinagar"
                          className="w-full px-4 py-3 rounded-xl border border-brand-line text-sm focus:border-brand-gold focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-brand-slate mb-1">
                          Estimated Quantity (Bricks)
                        </label>
                        <input
                          type="number"
                          value={formData.quantity}
                          onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                          placeholder="e.g. 10000"
                          min="500"
                          step="500"
                          className="w-full px-4 py-3 rounded-xl border border-brand-line text-sm font-mono focus:border-brand-gold focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-brand-slate mb-1">
                        Requirement Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please state brick size preference (e.g. 9x4x3 standard), delivery timeline, unloading site conditions, or special requirements..."
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none resize-none ${
                          errors.message ? 'border-red-400 bg-red-50/50' : 'border-brand-line focus:border-brand-gold'
                        }`}
                      />
                      {errors.message && <p className="text-[11px] text-red-500 mt-1">{errors.message}</p>}
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row gap-4">
                      <button
                        type="submit"
                        className="flex-1 py-3.5 px-6 rounded-xl bg-brand-navy hover:bg-brand-navyCard text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4 text-brand-gold" />
                        <span>Submit Inward Inquiry</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleDirectWhatsApp}
                        className="py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Direct WhatsApp</span>
                      </button>
                    </div>

                    <p className="text-[11px] text-center text-brand-muted mt-2">
                      🔒 Your commercial requirements remain strictly confidential.
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. GOOGLE MAPS PLACEHOLDER LOCATION SECTION */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden border border-brand-line shadow-card bg-brand-lightBg">
            <div className="p-6 bg-brand-navy text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase text-brand-gold">Industrial Facility</span>
                <h4 className="text-lg font-bold font-display">Factory Plant & Material Yard Location</h4>
              </div>
              <span className="text-xs font-mono text-slate-300">
                Maharashtra, India • Calibrated Weighbridge On-Site
              </span>
            </div>

            {/* Google Maps Embed / Interactive Map Container */}
            <div className="w-full h-80 sm:h-96 relative bg-slate-200">
              <iframe
                title="Samruddhi Enterprises Factory Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.914110!3d18.562744!2m3!1f0!2f0!3f0!3m2!1i1024!2f768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMzJzQ1LjkiTiA3M8KwNTQnNTAuOCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}