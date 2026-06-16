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

  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [success, setSuccess] = useState(false);
  const [showInbox, setShowInbox] = useState(false);
  const [errorText, setErrorText] = useState('');

  // Load submissions from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('artist_jack_messages');
    if (stored) {
      try {
        setSubmissions(JSON.parse(stored));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value} = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrorText('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorText('Please fill out all mandatory fields (Name, Email, Message).');
      return;
    }

    const newSubmission: ContactSubmission = {
      ...formData,
      id: 'sub_' + Math.random().toString(36).substr(2, 9),
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      status: 'new',
    };

    const updatedSubmissions = [newSubmission, ...submissions];
    setSubmissions(updatedSubmissions);
    localStorage.setItem('artist_jack_messages', JSON.stringify(updatedSubmissions));

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

  const deleteSubmission = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const filtered = submissions.filter((item) => item.id !== id);
    setSubmissions(filtered);
    localStorage.setItem('artist_jack_messages', JSON.stringify(filtered));
  };

  const clearAllSubmissions = () => {
    if (window.confirm('Clear all messages from Artist Jack Inbox?')) {
      setSubmissions([]);
      localStorage.removeItem('artist_jack_messages');
    }
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
        <div className="text-center md:text-left mb-16">
          <p className="text-xs font-mono font-medium tracking-[0.3em] text-[#D4AF37] uppercase mb-3">{t('contact.subtitle')}</p>
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-white tracking-tight leading-none">
            {t('contact.title')}<span className="text-[#D4AF37]">.</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#D4AF37] mt-6 mx-auto md:mx-0" />
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
                      {t('contact.join_channel') || 'Join Official Channel'}
                    </a>
                    <ExternalLink size={12} />
                  </p>
                </div>
              </div>
            </div>

            {/* Admin Inbox Toggler Button */}
            <div className="border-t border-white/5 pt-8">
              <button
                id="toggle-inbox-btn"
                type="button"
                onClick={() => setShowInbox(!showInbox)}
                className={`w-full flex items-center justify-between p-4 border rounded-xl text-left transition-all ${
                  showInbox
                    ? 'border-yellow-500/30 bg-[#D4AF37]/5 text-[#D4AF37]'
                    : 'border-white/5 bg-[#121212]/20 hover:border-white/10 text-gray-400'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Inbox size={18} className={showInbox ? 'text-[#D4AF37]' : 'text-gray-500'} />
                  <div>
                    <p className="text-xs font-mono font-medium tracking-wide">Developer Tools Panel</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">View real-time messages inbox ({submissions.length})</p>
                  </div>
                </div>
                <span className="text-xs font-mono bg-black/40 border border-white/5 px-2.5 py-1 rounded">
                  {showInbox ? 'CLOSE' : 'OPEN'}
                </span>
              </button>
            </div>
          </div>

          {/* Right Side: Interactive submissions display or form */}
          <div className="lg:col-span-7 bg-[#121212]/30 border border-white/5 rounded-2xl p-8 backdrop-blur-sm shadow-2xl relative">
            <AnimatePresence mode="wait">
              {showInbox ? (
                /* INBOX VIEW */
                <motion.div
                  key="inbox-panel"
                  id="admin-inbox-view"
                  className="space-y-6 text-left"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <div>
                      <span className="text-[9px] font-mono tracking-widest text-[#D4AF37] block uppercase">Live Inbox</span>
                      <h4 className="text-lg font-serif font-black text-white">Artist Jack received queries</h4>
                    </div>
                    {submissions.length > 0 && (
                      <button
                        id="clear-all-inbox"
                        onClick={clearAllSubmissions}
                        className="px-3 py-1.5 border border-red-500/20 bg-red-500/5 hover:bg-red-500/10 text-red-400 text-[10px] font-mono tracking-wider rounded uppercase transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <Trash2 size={11} />
                        Clear All
                      </button>
                    )}
                  </div>

                  <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                    {submissions.map((submission) => (
                      <div
                        key={submission.id}
                        id={`submission-${submission.id}`}
                        className="p-5 bg-black/40 border border-white/5 rounded-xl hover:border-yellow-500/10 transition-all relative group text-left"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <span className="px-2.5 py-0.5 bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[9px] font-mono text-[#D4AF37] rounded">
                            {submission.projectType}
                          </span>
                          <span className="text-[9px] font-mono text-gray-500">
                            {submission.timestamp}
                          </span>
                        </div>

                        <h5 className="text-sm font-semibold text-white flex items-center gap-1 text-left">
                          {submission.name}
                          <span className="text-gray-500 font-normal text-xs">({submission.email})</span>
                        </h5>
                        
                        {submission.phone && (
                          <p className="text-[11px] font-mono text-gray-400 mt-1 text-left">Phone: {submission.phone}</p>
                        )}
                        
                        <p className="text-xs text-gray-300 mt-3 bg-white/[0.02] p-3 rounded border border-white/5 leading-relaxed font-sans text-left">
                          {submission.message}
                        </p>

                        <button
                          id={`delete-message-btn-${submission.id}`}
                          onClick={(e) => deleteSubmission(submission.id, e)}
                          className="absolute right-4 top-4 p-1.5 opacity-0 group-hover:opacity-100 hover:bg-white/5 text-gray-500 hover:text-red-400 border border-transparent hover:border-white/5 rounded-md transition-all cursor-pointer"
                          aria-label="Delete message"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    ))}

                    {submissions.length === 0 && (
                      <div className="text-center py-16">
                        <Inbox className="mx-auto text-gray-600 mb-2 animate-bounce" style={{ animationDuration: '3s' }} size={32} />
                        <p className="text-xs font-mono text-gray-500">Artist Jack received inbox database is empty.</p>
                        <p className="text-[10px] text-gray-600 mt-2 font-sans">Submit a query using the form panel to see it populate here instantly.</p>
                      </div>
                    )}
                  </div>

                  <div className="bg-[#D4AF37]/5 border border-yellow-500/10 p-4 rounded-xl flex gap-3 items-start">
                    <ShieldCheck size={16} className="text-[#D4AF37] shrink-0 mt-0.5" />
                    <p className="text-[10px] text-gray-400 leading-normal font-sans text-left">
                      <strong>Client Database Simulation:</strong> This inbox parses queries directly from localStorage so you can verify form actions locally in real-time. No private data is ever sent to production servers.
                    </p>
                  </div>
                </motion.div>
              ) : (
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
                        <p className="text-[10px] text-green-400/90 font-sans mt-0.5">Your pitch has been stored persistently. Click the Developer Tools Panel on the left to review your submission in real-time.</p>
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
                          <option value="Acoustic Song recording">Acoustic Song recording</option>
                          <option value="Live performance / Concert">Live performance / Concert</option>
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
                        placeholder="Detail out character outline, studio budget, musical requirements, scene location, or timeline coordinates here..."
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
                      className="w-full md:w-auto px-6 py-3 bg-yellow-500 hover:bg-[#D4AF37] text-black font-semibold text-xs tracking-wider rounded-md uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_15px_rgba(212,175,55,0.2)] hover:shadow-[0_4px_25px_rgba(212,175,55,0.35)]"
                    >
                      <Send size={13} />
                      {t('contact.btn_transmit')}
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Dynamic AEO, SEO, GEO Support */}
        <AeoSeoGeoSectionCard sectionId="contact" />

      </div>
    </section>
  );
}
