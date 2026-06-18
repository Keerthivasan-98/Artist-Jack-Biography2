import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, FileText, CheckCircle2, ShieldAlert, Link as LinkIcon } from 'lucide-react';

interface TermsConditionsProps {
  setCurrentPage: (page: 'home' | 'privacy' | 'terms') => void;
}

export default function TermsConditions({ setCurrentPage }: TermsConditionsProps) {
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
            <FileText className="text-[#D4AF37]" size={32} />
          </div>
          <div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">Terms & Conditions</h1>
            <p className="text-sm font-mono text-[#D4AF37] mt-2 tracking-widest uppercase">Actor Jack Prabhu Official</p>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-[#D4AF37]/30 via-white/5 to-transparent mb-10" />

        <div className="space-y-10 text-gray-400 font-sans leading-relaxed text-sm md:text-base relative z-10">
          
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <CheckCircle2 size={18} className="text-[#D4AF37]" />
              1. Agreement to Terms
            </h2>
            <p>
              By accessing and using this official portfolio website representing Actor Jack Prabhu, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, please refrain from using our digital platform. This portfolio is designed to showcase professional cinematic works and facilitate legitimate collaboration inquiries.
            </p>
          </section>

          <section className="bg-black/30 p-6 rounded-2xl border border-white/5">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <ShieldAlert size={18} className="text-[#D4AF37]" />
              2. Intellectual Property Rights
            </h2>
            <p className="mb-4">
              All content published on this website is protected by international copyright laws. This includes:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 bg-white/5 p-3 rounded-lg"><span className="text-[#D4AF37]">•</span> <strong>Visual Media:</strong> High-resolution photographs, movie posters, and behind-the-scenes gallery images.</li>
              <li className="flex items-start gap-2 bg-white/5 p-3 rounded-lg"><span className="text-[#D4AF37]">•</span> <strong>Video Assets:</strong> Showreels, embedded trailers, and local video playback assets.</li>
              <li className="flex items-start gap-2 bg-white/5 p-3 rounded-lg"><span className="text-[#D4AF37]">•</span> <strong>Branding:</strong> Logos, typographic designs, and the custom "Neon Noir" website aesthetic.</li>
            </ul>
            <p className="mt-4 text-xs text-[#D4AF37]">
              * You may not reproduce, distribute, or create derivative works from this content without explicit written permission from Jack Prabhu's management.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <FileText size={18} className="text-[#D4AF37]" />
              3. Professional Inquiries
            </h2>
            <p>
              The contact form provided on this website is exclusively intended for legitimate professional inquiries, including feature film casting, digital web series roles, brand endorsements, and other business deals. Spam, harassment, or unauthorized promotional material submitted through these channels is strictly prohibited and will be ignored.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <LinkIcon size={18} className="text-[#D4AF37]" />
              4. Third-Party Links & Integrations
            </h2>
            <p>
              This website contains links to external platforms such as YouTube, Instagram, and WhatsApp. We are not responsible for the content, privacy policies, or practices of any third-party websites or services. Your interaction with these external platforms is governed by their respective terms of service.
            </p>
          </section>

          <div className="mt-12 p-6 bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-2xl text-center">
            <p className="text-sm text-gray-300">
              We reserve the right to revise these Terms and Conditions at any time. Continued use of this site constitutes acceptance of those changes.
            </p>
            <p className="text-xs font-mono text-gray-500 mt-4">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

