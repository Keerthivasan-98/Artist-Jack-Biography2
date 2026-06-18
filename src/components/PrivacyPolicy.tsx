import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Shield, Lock, Eye, Database } from 'lucide-react';

interface PrivacyPolicyProps {
  setCurrentPage: (page: 'home' | 'privacy' | 'terms') => void;
}

export default function PrivacyPolicy({ setCurrentPage }: PrivacyPolicyProps) {
  const handleBackClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto min-h-screen text-left relative z-20">
      <button 
        type="button"
        onClick={handleBackClick}
        className="group flex items-center gap-2 text-gray-400 hover:text-[#D4AF37] transition-all font-mono text-sm mb-12 cursor-pointer bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/5 hover:border-[#D4AF37]/30"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        Return to Portfolio
      </button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#121212]/50 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="flex items-center gap-4 mb-8 relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-transparent border border-[#D4AF37]/30 flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(212,175,55,0.15)]">
            <Shield className="text-[#D4AF37]" size={32} />
          </div>
          <div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">Privacy Policy</h1>
            <p className="text-sm font-mono text-[#D4AF37] mt-2 tracking-widest uppercase">Actor Jack Prabhu Official</p>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-[#D4AF37]/30 via-white/5 to-transparent mb-10" />

        <div className="space-y-10 text-gray-400 font-sans leading-relaxed text-sm md:text-base relative z-10">
          
          <section className="bg-black/30 p-6 rounded-2xl border border-white/5">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Eye size={18} className="text-[#D4AF37]" />
              1. Information Collection
            </h2>
            <p className="mb-4">
              When you interact with the Contact section of this portfolio to submit professional collaboration inquiries, we collect necessary professional data to respond to your requests accurately.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
              <li className="flex items-start gap-2 bg-white/5 p-3 rounded-lg"><span className="text-[#D4AF37]">•</span> <strong>Identity Data:</strong> Full Name & Organization</li>
              <li className="flex items-start gap-2 bg-white/5 p-3 rounded-lg"><span className="text-[#D4AF37]">•</span> <strong>Contact Data:</strong> Email Address & Phone Number</li>
              <li className="flex items-start gap-2 bg-white/5 p-3 rounded-lg"><span className="text-[#D4AF37]">•</span> <strong>Project Details:</strong> Inquiry Type & Messages</li>
              <li className="flex items-start gap-2 bg-white/5 p-3 rounded-lg"><span className="text-[#D4AF37]">•</span> <strong>Technical Data:</strong> Browser Type & IP Address</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Database size={18} className="text-[#D4AF37]" />
              2. Data Usage & Processing
            </h2>
            <p>
              Your personal information is strictly used to evaluate professional opportunities such as casting calls, brand endorsements, or media collaborations. We do not use this data for marketing newsletters without your explicit consent, nor do we sell or rent your information to third-party data brokers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Lock size={18} className="text-[#D4AF37]" />
              3. Security Measures
            </h2>
            <p>
              We implement industry-standard security measures to protect your data. Submissions are securely routed to Actor Jack Prabhu's authorized management team. While we strive to use commercially acceptable means to protect your Personal Information, we remind users that no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Cookies & Local Storage</h2>
            <p>
              This website uses essential browser local storage to preserve your preferences (such as selected themes or temporary form inputs) to improve your browsing experience. We do not deploy intrusive third-party advertising trackers.
            </p>
          </section>

          <div className="mt-12 p-6 bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-2xl text-center">
            <p className="text-sm text-gray-300">
              For any concerns regarding this privacy policy, please contact management via the portfolio's main contact form.
            </p>
            <p className="text-xs font-mono text-gray-500 mt-4">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

