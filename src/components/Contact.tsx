import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Inbox, Trash2, MessageSquare, MessageCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { ContactFormInput, ContactSubmission } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { AeoSeoGeoSectionCard } from './AeoSeoGeoOptimizer';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<ContactFormInput>({
    name: '',
    email: '',
    phone: '',
    projectType: 'Feature Film Casting',
    message: '',
  });

  const [success, setSuccess] = useState(false);
  const [errorText, setErrorText] = useState('');


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrorText('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorText('Please fill out all mandatory fields (Name, Email, Message).');
      return;
    }

    setSuccess(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: 'Feature Film Casting',
      message: '',
    });

    // Reset success animation after some seconds
    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-[#0A0A0A] border-t border-white/5 overflow-hidden"
    >
      {/* Background glow circle */}
      <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-yellow-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-left mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/20 bg-yellow-500/5 mb-4"
          >
            <MessageSquare size={14} className="text-[#D4AF37]" />
            <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-semibold">
              {t('contact.get_in_touch') || t('contact.subtitle')}
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white mb-6 text-left"
          >
            {t('contact.title')}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-gray-400 font-sans leading-relaxed text-left max-w-3xl"
          >
            {t('contact.desc')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Side: Contact details */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <h3 className="text-xl md:text-2xl font-serif text-white font-medium text-left leading-snug">
              {t('contact.heading')}
            </h3>
            <p className="text-gray-400 leading-relaxed text-xs md:text-sm text-left">
              {t('contact.desc')}
            </p>

            {/* Direct Communication Info Lists */}
            <div className="space-y-6 pt-4">
              <div className="flex gap-4 items-center">
                <div className="w-11 h-11 rounded-lg bg-yellow-500/5 border border-yellow-500/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-[#D4AF37]" size={18} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{t('contact.residence')}</p>
                  <p className="text-sm font-semibold text-white mt-0.5">Chennai, Tamil Nadu, India</p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="w-11 h-11 rounded-lg bg-yellow-500/5 border border-yellow-500/10 flex items-center justify-center shrink-0">
                  <Mail className="text-[#D4AF37]" size={18} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{t('contact.agency_email') || 'Agency Representation Email'}</p>
                  <p className="text-sm font-semibold text-white mt-0.5 hover:text-[#D4AF37] transition-colors">
                    <a href="mailto:jack@actorjack.com">jack@actorjack.com</a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="w-11 h-11 rounded-lg bg-yellow-500/5 border border-yellow-500/10 flex items-center justify-center shrink-0">
                  <MessageCircle className="text-[#D4AF37]" size={18} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{t('contact.whatsapp_connect') || 'Instant WhatsApp Connect'}</p>
                  <p className="text-sm font-semibold text-[#D4AF37] mt-0.5 flex items-center gap-1 hover:underline">
                    <a href="https://whatsapp.com/channel/0029Vaj18oXDJ6Gyp2Kaev18" target="_blank" rel="noopener noreferrer">
                      {t('contact.join_channel') || 'Join Official Whatsapp Channel'}
                    </a>
                    <ExternalLink size={12} />
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side: Interactive submissions display or form */}
          <div className="lg:col-span-7 bg-[#121212]/30 border border-white/5 rounded-2xl p-8 backdrop-blur-sm shadow-2xl relative">
                /* CONTACT FORM VIEW */
                <motion.div
                  key="form-panel"
                  id="contact-form-elements"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-left mb-6">
                    <span className="text-[9px] font-mono tracking-widest text-[#D4AF37] block uppercase">{t('contact.form_inquiry_title') || 'Direct Inquiry Form'}</span>
                    <h4 className="text-lg font-serif font-black text-white">{t('contact.form_send_title') || 'Send Collaboration Query'}</h4>
                  </div>

                  {success && (
                    <motion.div
                      id="form-success-banner"
                      className="p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-xl flex items-center gap-3 text-left mb-6"
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                    >
                      <CheckCircle2 size={18} className="shrink-0 text-green-400" />
                      <div className="text-left">
                        <p className="text-xs font-bold font-mono">Message Transmitted Successfully!</p>
                        <p className="text-[10px] text-green-400/90 font-sans mt-0.5">Your message has been sent successfully. We will get back to you soon.</p>
                      </div>
                    </motion.div>
                  )}

                  <form id="artist-contact-form" onSubmit={handleFormSubmit} className="space-y-4 text-left">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div>
                        <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-wider mb-1.5" htmlFor="name">
                          {t('contact.lbl_name')} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Cast director or organizer name"
                          className="w-full bg-black/60 border border-white/5 focus:border-[#D4AF37]/50 rounded-lg p-3 text-xs md:text-sm text-white focus:outline-none focus:ring-0 transition-colors"
                        />
                      </div>

                      {/* Email input */}
                      <div>
                        <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-wider mb-1.5" htmlFor="email">
                          {t('contact.lbl_email')} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="e.g. director@studio.com"
                          className="w-full bg-black/60 border border-white/5 focus:border-[#D4AF37]/50 rounded-lg p-3 text-xs md:text-sm text-white focus:outline-none focus:ring-0 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Phone Input */}
                      <div>
                        <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-wider mb-1.5" htmlFor="phone">
                          {t('contact.lbl_phone')}
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="e.g. +91 98765 43210"
                          className="w-full bg-black/60 border border-white/5 focus:border-[#D4AF37]/50 rounded-lg p-3 text-xs md:text-sm text-white focus:outline-none focus:ring-0 transition-colors"
                        />
                      </div>

                      {/* Project selector dropdown */}
                      <div>
                        <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-wider mb-1.5" htmlFor="projectType">
                          {t('contact.lbl_inquiry_type') || 'Inquiry Type / Section'}
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className="w-full bg-black/60 border border-white/5 focus:border-[#D4AF37]/50 rounded-lg p-3 text-xs md:text-sm text-white focus:outline-none focus:ring-0 transition-colors cursor-pointer"
                        >
                          <option value="Feature Film Casting">Feature Film Casting</option>
                          <option value="Digital Web Series">Digital Web Series</option>
                          <option value="Television Serial / Show">Television Serial / Show</option>
                          <option value="Brand Endorsement">Brand Endorsement</option>
                          <option value="Other Business Deals">Other Business Deals</option>
                        </select>
                      </div>
                    </div>

                    {/* Message textarea */}
                    <div>
                      <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-wider mb-1.5" htmlFor="message">
                        {t('contact.lbl_message')} <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder="Detail out character outline, studio budget, scene location, or timeline coordinates here..."
                        className="w-full bg-black/60 border border-white/5 focus:border-[#D4AF37]/50 rounded-lg p-3 text-xs md:text-sm text-white focus:outline-none focus:ring-0 transition-colors resize-none leading-relaxed"
                      />
                    </div>

                    {errorText && (
                      <p className="text-red-400 text-xs font-mono tracking-wide">{errorText}</p>
                    )}

                    {/* Submit Button */}
                    <button
                      id="artist-contact-submit"
                      type="submit"
                      className="w-full md:w-auto px-8 py-3.5 bg-yellow-500 hover:bg-[#D4AF37] text-black font-bold text-sm tracking-widest rounded-lg uppercase transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer shadow-[0_4px_15px_rgba(212,175,55,0.2)] hover:shadow-[0_4px_25px_rgba(212,175,55,0.35)]"
                    >
                      <Send size={16} />
                      {t('contact.btn_transmit') || 'Send Message'}
                    </button>
                  </form>
                </motion.div>
          </div>

        </div>

        {/* Dynamic AEO, SEO, GEO Support */}
        <AeoSeoGeoSectionCard sectionId="contact" />

      </div>
    </section>
  );
}
