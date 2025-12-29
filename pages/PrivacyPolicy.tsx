import React from 'react';
import { DISCLOSURE_CONTENT, SOCIAL_LINKS, AFFILIATE_PROGRAMS, EMAILS } from '../constants';
import { ShieldCheck, Globe, ShoppingBag, Mail, UserPlus, MessageCircle } from 'lucide-react';
import { GlobalIconMap } from '../components/Layout';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-[3rem] shadow-2xl p-8 md:p-16 border border-gray-100 dark:border-gray-700">
        <div className="flex items-center gap-4 mb-8">
           <ShieldCheck className="text-brand-600" size={48} />
           <div>
             <h1 className="text-4xl font-black text-gray-900 dark:text-white tracking-tighter uppercase">Disclosure & Privacy</h1>
             <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mt-1">Cabadokas Official Standards</p>
           </div>
        </div>
        
        <div className="prose prose-lg dark:prose-invert max-w-none whitespace-pre-wrap text-gray-700 dark:text-gray-300 leading-relaxed font-medium mb-20 border-t pt-10">
          <div className="flex flex-col gap-4 mb-10 bg-slate-50 dark:bg-white/5 p-6 rounded-2xl border border-gray-100 dark:border-white/5">
             <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Official Contact Routes:</p>
             <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-500 rounded-lg text-white"><UserPlus size={16}/></div>
                <div className="flex flex-col">
                  <a href={`mailto:${EMAILS.subscription}`} className="text-lg font-black text-brand-600 hover:underline">{EMAILS.subscription}</a>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">New Subscribers & Newsletter</span>
                </div>
             </div>
             <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-800 rounded-lg text-white"><MessageCircle size={16}/></div>
                <div className="flex flex-col">
                  <a href={`mailto:${EMAILS.support}`} className="text-lg font-black text-gray-700 dark:text-gray-300 hover:underline">{EMAILS.support}</a>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Support & Partnerships</span>
                </div>
             </div>
          </div>
          {DISCLOSURE_CONTENT}
        </div>

        <div className="mt-20 pt-16 border-t-4 border-slate-50 dark:border-gray-900">
          <h2 className="text-3xl font-black text-center mb-16 uppercase tracking-tighter underline decoration-brand-500 decoration-4 underline-offset-8">Global Icon Directory</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <div>
                <h3 className="text-xl font-black mb-8 flex items-center gap-3 uppercase tracking-widest text-brand-600">
                  <Globe size={20} /> Social Network Icons
                </h3>
                <div className="grid grid-cols-6 gap-3">
                  {SOCIAL_LINKS.map(link => {
                    const IconComponent = GlobalIconMap[link.icon] || Globe;
                    return (
                      <a key={link.platform} href={link.url} target="_blank" className="aspect-square bg-slate-50 dark:bg-gray-900 rounded-2xl flex items-center justify-center text-gray-400 hover:text-brand-500 hover:bg-white shadow-sm transition-all border border-transparent hover:border-brand-100" title={link.platform}>
                        <IconComponent size={24} />
                      </a>
                    );
                  })}
                </div>
             </div>

             <div>
                <h3 className="text-xl font-black mb-8 flex items-center gap-3 uppercase tracking-widest text-brand-600">
                  <ShoppingBag size={20} /> Partner Network Logos
                </h3>
                <div className="grid grid-cols-6 gap-3">
                  {AFFILIATE_PROGRAMS.map((prog, i) => {
                    const domain = new URL(prog.url).hostname;
                    return (
                      <a key={i} href={prog.url} target="_blank" className="aspect-square bg-slate-50 dark:bg-gray-900 rounded-2xl flex items-center justify-center p-3 hover:bg-white shadow-sm transition-all border border-transparent hover:border-brand-500" title={prog.name}>
                         <img src={`https://www.google.com/s2/favicons?sz=64&domain=${domain}`} className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all" alt={prog.name} />
                      </a>
                    )
                  })}
                </div>
             </div>
          </div>

          <div className="mt-20 p-10 bg-brand-600 rounded-[3rem] text-white text-center shadow-2xl">
             <Mail className="mx-auto mb-6" size={48} />
             <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter">Verified Routing Center</h3>
             <div className="flex flex-col md:row gap-4 justify-center mt-10">
                <a href={`mailto:${EMAILS.subscription}`} className="bg-white text-brand-600 px-10 py-5 rounded-2xl font-black uppercase text-sm shadow-xl">Join Newsletter</a>
                <a href={`mailto:${EMAILS.support}`} className="bg-white/10 text-white border border-white/20 px-10 py-5 rounded-2xl font-black uppercase text-sm">Open Support Ticket</a>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;