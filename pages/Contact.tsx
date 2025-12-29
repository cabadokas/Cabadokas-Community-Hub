import React from 'react';
import { ContactForm, LiveTraffic } from '../components/Widgets';
import { EMAILS, SOCIAL_LINKS } from '../constants';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { GlobalIconMap } from '../components/Layout';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-50 dark:bg-brand-900/30 px-5 py-2 rounded-full mb-6">
            <Mail className="text-brand-600" size={16} />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-600">Connect With Cabadokas</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-gray-900 dark:text-white tracking-tighter uppercase mb-6">Contact Our Team</h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-medium">Have a question about our health tips or interested in an affiliate partnership? We're here to help.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white dark:bg-gray-800 p-10 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl">
               <h3 className="text-xl font-black uppercase tracking-tighter mb-8 border-b pb-4">Direct Channels</h3>
               <div className="space-y-6">
                  <div className="flex items-start gap-4">
                     <div className="w-12 h-12 bg-brand-50 dark:bg-brand-900/20 rounded-xl flex items-center justify-center text-brand-600 shrink-0">
                        <Mail size={24} />
                     </div>
                     <div>
                        <p className="text-[10px] font-black uppercase text-gray-400 mb-1">New Subscribers</p>
                        <a href={`mailto:${EMAILS.subscription}`} className="text-lg font-bold text-gray-800 dark:text-white hover:text-brand-600 transition-colors">{EMAILS.subscription}</a>
                     </div>
                  </div>
                  <div className="flex items-start gap-4">
                     <div className="w-12 h-12 bg-brand-50 dark:bg-brand-900/20 rounded-xl flex items-center justify-center text-brand-600 shrink-0">
                        <Mail size={24} />
                     </div>
                     <div>
                        <p className="text-[10px] font-black uppercase text-gray-400 mb-1">Support & Partnerships</p>
                        <a href={`mailto:${EMAILS.support}`} className="text-lg font-bold text-gray-800 dark:text-white hover:text-brand-600 transition-colors">{EMAILS.support}</a>
                     </div>
                  </div>
               </div>
            </div>

            <div className="bg-gray-900 p-10 rounded-[2.5rem] text-white shadow-2xl">
               <h3 className="text-xl font-black uppercase tracking-tighter mb-8 flex items-center gap-3">
                  <Globe className="text-brand-500" /> Social Network
               </h3>
               <div className="grid grid-cols-6 gap-3">
                  {SOCIAL_LINKS.map(link => {
                    const IconComp = GlobalIconMap[link.icon] || Globe;
                    return (
                      <a key={link.platform} href={link.url} target="_blank" className="aspect-square bg-white/5 rounded-xl flex items-center justify-center hover:bg-brand-600 transition-all text-white/50 hover:text-white" title={link.platform}>
                         <IconComp size={20} />
                      </a>
                    );
                  })}
               </div>
            </div>

            <LiveTraffic />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
