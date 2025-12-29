import React, { useState } from 'react';
import { BLOG_POSTS, FEATURED_PRODUCT, EMAILS, AFFILIATE_PROGRAMS } from '../constants';
import { 
  MusicPlayer, 
  LiveTraffic, 
  MagneticSearch, 
  GlobalPartnersGrid,
  AffiliateProductSpotlight,
  BulkSocialPublisher,
  ImageModal,
  ShareWidget,
  KeywordSearchTool,
  AffiliateLinkPreview
} from '../components/Widgets';
import { ArrowRight, ArrowDown, Zap, ShieldCheck } from 'lucide-react';

const Home: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [emailInput, setEmailInput] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput) {
      window.location.href = `mailto:${EMAILS.subscription}?subject=Registry Access Request&body=Email: ${emailInput}`;
      setEmailInput('');
    }
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="container mx-auto px-6 py-12 lg:py-32">
      {selectedImage && (
        <ImageModal src={selectedImage} onClose={() => setSelectedImage(null)} />
      )}

      {/* Hero: Luxury Magazine Style */}
      <div className="relative mb-64">
        <div className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-brand-600/5 rounded-full blur-[200px] pointer-events-none"></div>
        
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-9 z-10">
            <div className="flex items-center gap-6 mb-12">
              <div className="w-16 h-[1px] bg-brand-600"></div>
              <span className="text-[10px] font-black uppercase tracking-[1em] text-brand-500">Cabadokas Obsidian // 2026</span>
            </div>
            
            <h1 className="text-[14vw] lg:text-[12rem] font-black leading-[0.7] tracking-tighter text-white mb-16 uppercase italic">
              Health <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-600 not-italic uppercase">Wealth.</span>
            </h1>

            <div className="grid lg:grid-cols-2 gap-20">
              <p className="text-xl md:text-4xl text-slate-400 font-extralight leading-tight italic">
                A curated ecosystem for the modern woman. Architectural wellness and <span className="text-white font-medium not-italic underline decoration-brand-600 underline-offset-8">autonomous financial mastery.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <button onClick={() => scrollToSection('grid')} className="bg-brand-600 text-white px-12 py-6 rounded-full font-black text-xs tracking-widest hover:scale-105 transition-all shadow-[0_20px_60px_rgba(225,29,72,0.3)] uppercase">
                  Initialize Hub
                </button>
                <button onClick={() => scrollToSection('intelligence')} className="flex items-center gap-4 text-slate-400 hover:text-white font-black text-xs tracking-widest transition-all uppercase border-b border-slate-800 pb-2">
                  Investigations <ArrowDown size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
        <div className="lg:col-span-8 space-y-48">
          
          <div id="grid" className="scroll-mt-32">
             <GlobalPartnersGrid />
          </div>

          <div className="space-y-12">
             <div className="flex items-center gap-6">
                <h3 className="text-[11px] font-black uppercase tracking-[0.6em] text-slate-500">Direct Syndication</h3>
                <div className="h-[1px] flex-1 bg-slate-800/50"></div>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {AFFILIATE_PROGRAMS.slice(0, 4).map((prog, i) => (
                   <AffiliateLinkPreview key={i} url={prog.url} title={prog.name} />
                ))}
             </div>
          </div>

          <div className="scroll-mt-32">
             <AffiliateProductSpotlight product={FEATURED_PRODUCT} onImageClick={setSelectedImage} />
          </div>

          <div id="intelligence" className="space-y-48">
            <h2 className="text-7xl lg:text-9xl font-black tracking-tighter uppercase leading-none opacity-10">The Reports</h2>

            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="group relative border-t border-slate-800/50 pt-24">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                  <div className={`relative overflow-hidden rounded-[4rem] aspect-[4/5] obsidian-glass p-3 shadow-2xl ${post.id % 2 === 0 ? 'md:order-2' : ''}`}>
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover rounded-[3.5rem] grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2s] cursor-zoom-in" onClick={() => setSelectedImage(post.image)} />
                  </div>
                  <div className={post.id % 2 === 0 ? 'md:order-1' : ''}>
                    <span className="text-brand-500 font-black uppercase tracking-[0.5em] text-[10px] mb-8 block">{post.category} // 0{post.id}</span>
                    <h3 className="text-5xl lg:text-7xl font-black leading-[0.9] tracking-tighter text-white mb-8 group-hover:text-brand-500 transition-colors uppercase italic">{post.title}</h3>
                    <p className="text-xl text-slate-400 font-extralight mb-12 leading-relaxed tracking-tight">{post.excerpt}</p>
                    <button className="flex items-center gap-6 font-black text-xs uppercase tracking-widest text-white hover:gap-10 transition-all group/btn">
                      Access Intelligence <ArrowRight size={20} className="text-brand-600 group-hover/btn:translate-x-2 transition-transform" />
                    </button>
                    <div className="mt-16 pt-8 border-t border-slate-800/30">
                       <ShareWidget url={window.location.href} title={post.title} />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4">
          <div className="sticky top-28 space-y-12">
            <div className="p-12 obsidian-glass rounded-[4rem] shadow-2xl relative overflow-hidden group">
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-600/10 rounded-full blur-[60px]"></div>
               <h4 className="text-[10px] font-black uppercase tracking-[0.6em] mb-12 text-slate-500">Live Telemetry</h4>
               <div className="space-y-8">
                  <LiveTraffic />
                  <MusicPlayer />
               </div>
            </div>
            
            <MagneticSearch />
            <KeywordSearchTool />
            <BulkSocialPublisher />

            <div className="p-12 bg-white rounded-[4rem] text-slate-950 shadow-[0_40px_100px_rgba(0,0,0,0.8)] relative overflow-hidden group">
               <h4 className="text-5xl font-black mb-6 tracking-tighter uppercase italic">Registry</h4>
               <p className="text-[10px] text-slate-400 font-black mb-10 uppercase tracking-widest leading-loose">Secure Global Subscription</p>
               <form onSubmit={handleSubscribe} className="space-y-6">
                 <input type="email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} required placeholder="ADDR_PROTOCOL" className="w-full px-8 py-5 rounded-full bg-slate-50 border-none text-slate-950 placeholder-slate-300 font-black text-xs tracking-widest outline-none shadow-inner" />
                 <button type="submit" className="w-full bg-slate-950 text-white py-5 rounded-full font-black text-xs transition-all uppercase tracking-widest hover:bg-brand-600">Sync Address</button>
               </form>
            </div>

            <div className="flex flex-col items-center gap-8 py-12 opacity-20">
               <ShieldCheck className="text-brand-600" size={48} />
               <p className="text-[10px] font-black uppercase tracking-[0.8em] text-slate-500 text-center leading-relaxed">Verified Routing <br /> AES-4096 Security</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;