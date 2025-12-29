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
import { ArrowRight, ShieldCheck, ArrowDown, Sparkles, Zap } from 'lucide-react';

const Home: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [emailInput, setEmailInput] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput) {
      window.location.href = `mailto:${EMAILS.subscription}?subject=Elite Registry Request&body=Email: ${emailInput}`;
      setEmailInput('');
    }
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="container mx-auto px-6 py-12 md:py-24 relative">
      {selectedImage && (
        <ImageModal src={selectedImage} onClose={() => setSelectedImage(null)} />
      )}

      {/* Obsidian Hero: High-Fashion Aesthetic */}
      <div className="relative mb-64">
        <div className="absolute -top-60 -left-60 w-[1000px] h-[1000px] bg-brand-600/5 rounded-full blur-[250px] pointer-events-none animate-pulse-slow"></div>
        
        <div className="grid lg:grid-cols-12 gap-16 items-start relative z-10">
          <div className="lg:col-span-9">
            <div className="flex items-center gap-6 mb-16">
              <div className="w-24 h-[1px] bg-brand-600"></div>
              <span className="text-[11px] font-black uppercase tracking-[1em] text-brand-500">The Obsidian Collective // MMXXVI</span>
            </div>
            
            <h1 className="text-[16vw] lg:text-[13rem] font-black leading-[0.65] tracking-tighter text-white mb-16 uppercase italic">
              Future <br />
              <span className="text-reveal not-italic uppercase">Elite.</span>
            </h1>

            <div className="grid lg:grid-cols-2 gap-24 items-end">
              <p className="text-2xl md:text-5xl text-slate-400 font-extralight leading-[1.05] italic">
                Defined by architectural wellness and <span className="text-white font-medium not-italic underline decoration-brand-600 underline-offset-[16px]">autonomous wealth architecture.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-10">
                <button onClick={() => scrollToSection('affiliates-portal')} className="group relative bg-brand-600 text-white px-20 py-8 rounded-full font-black text-xs tracking-[0.4em] overflow-hidden transition-all hover:scale-105 shadow-[0_40px_80px_rgba(225,29,72,0.4)] uppercase">
                  <span className="relative z-10">Access Hub</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                </button>
                <button onClick={() => scrollToSection('feed')} className="group flex items-center gap-6 text-slate-400 hover:text-white font-black text-xs tracking-[0.4em] transition-all py-8 uppercase">
                  Investigations <ArrowDown size={20} className="group-hover:translate-y-3 transition-transform text-brand-500" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 hidden lg:block relative pt-20">
             <div className="aspect-[4/6] rounded-[6rem] obsidian-panel p-4 rotate-12 hover:rotate-0 transition-all duration-[1.5s] shadow-2xl overflow-hidden group">
                <img src="https://images.unsplash.com/photo-1596462502278-27bfac4033c8?w=800" className="w-full h-full object-cover rounded-[5rem] grayscale group-hover:grayscale-0 transition-all duration-[1.5s]" alt="Cabadokas Luxury" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 to-transparent opacity-60 group-hover:opacity-20 transition-opacity"></div>
             </div>
             <div className="absolute -bottom-16 -left-16 obsidian-panel px-10 py-8 rounded-[3rem] shadow-2xl animate-float">
                <p className="text-[10px] font-black uppercase tracking-widest text-brand-500 mb-2">Encrypted Node</p>
                <p className="text-2xl font-black text-white whitespace-nowrap">STATUS: ONLINE</p>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-32">
        <div className="lg:col-span-8 space-y-64">
          
          <div id="affiliates-portal" className="scroll-mt-32">
             <GlobalPartnersGrid />
          </div>

          <div className="space-y-24">
             <div className="flex items-center gap-12">
                <h3 className="text-[12px] font-black uppercase tracking-[0.8em] text-slate-600 whitespace-nowrap">Global Syndication Networks</h3>
                <div className="h-[1px] flex-1 bg-slate-800/50"></div>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {AFFILIATE_PROGRAMS.slice(0, 4).map((prog, i) => (
                   <AffiliateLinkPreview key={i} url={prog.url} title={prog.name} />
                ))}
             </div>
          </div>

          <div className="scroll-mt-32 relative">
             <div className="absolute -inset-20 bg-brand-600/5 rounded-full blur-[100px] pointer-events-none"></div>
             <AffiliateProductSpotlight product={FEATURED_PRODUCT} onImageClick={setSelectedImage} />
          </div>

          <div id="feed" className="space-y-72 pb-32">
            <div className="flex flex-col items-center mb-32">
               <h2 className="text-[12vw] lg:text-[11rem] font-black tracking-tighter uppercase leading-none mb-6 opacity-20 italic">Intelligence</h2>
               <div className="w-32 h-[2px] bg-brand-600"></div>
            </div>

            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="group relative">
                <div className="grid md:grid-cols-2 gap-24 items-center">
                  <div className={`relative overflow-hidden rounded-[7rem] aspect-[4/5] obsidian-panel p-4 shadow-2xl ${post.id % 2 === 0 ? 'md:order-2' : ''}`}>
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover rounded-[6rem] group-hover:scale-110 transition-transform duration-[4s] cursor-zoom-in" onClick={() => setSelectedImage(post.image)} />
                  </div>
                  <div className={post.id % 2 === 0 ? 'md:order-1' : ''}>
                    <div className="flex items-center gap-4 mb-10">
                       <Zap size={14} className="text-brand-600 fill-brand-600" />
                       <span className="text-brand-500 font-black uppercase tracking-[0.6em] text-[11px] block">Investigation // {post.category}</span>
                    </div>
                    <h3 className="text-7xl lg:text-9xl font-black leading-[0.8] tracking-tighter text-white mb-12 group-hover:text-brand-500 transition-colors uppercase italic">{post.title}</h3>
                    <p className="text-2xl text-slate-400 font-extralight mb-16 leading-relaxed tracking-tight max-w-xl">{post.excerpt}</p>
                    <button className="flex items-center gap-8 font-black text-xs uppercase tracking-[0.6em] text-white hover:gap-12 transition-all">
                      Access Data <ArrowRight size={24} className="text-brand-600" />
                    </button>
                    <div className="mt-24 pt-12 border-t border-white/5">
                       <ShareWidget url={window.location.href} title={post.title} />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Sidebar: System Controls */}
        <div className="lg:col-span-4 space-y-24">
          <div className="sticky top-28 space-y-24">
            <div className="p-16 obsidian-panel rounded-[5rem] shadow-2xl relative overflow-hidden group">
               <div className="absolute -top-20 -right-20 w-56 h-56 bg-brand-600/10 rounded-full blur-[70px] group-hover:scale-150 transition-transform duration-[2s]"></div>
               <h4 className="text-[12px] font-black uppercase tracking-[0.8em] mb-16 text-slate-600">Performance Monitor</h4>
               <div className="space-y-12">
                  <LiveTraffic />
                  <MusicPlayer />
               </div>
            </div>
            
            <MagneticSearch />
            <KeywordSearchTool />
            <BulkSocialPublisher />

            <div className="p-20 bg-white rounded-[6rem] text-slate-900 text-center shadow-[0_60px_120px_rgba(0,0,0,0.8)] relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/20 rounded-full blur-[80px]"></div>
               <h4 className="text-7xl font-black mb-10 tracking-tighter uppercase italic">Registry</h4>
               <p className="text-[11px] text-slate-400 font-black mb-16 uppercase tracking-[0.8em] leading-loose">Secure Subscriber Protocol</p>
               <form onSubmit={handleSubscribe} className="space-y-8">
                 <input type="email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} required placeholder="ADDR_PROTOCOL" className="w-full p-10 rounded-[3rem] bg-slate-50 border-none text-slate-900 placeholder-slate-400 font-black text-[12px] tracking-widest outline-none shadow-inner focus:bg-slate-100 transition-all" />
                 <button type="submit" className="w-full bg-slate-950 text-white py-10 rounded-[3rem] font-black text-xs shadow-2xl hover:bg-brand-600 transition-all uppercase tracking-[0.5em] hover:scale-105">Initialize Registry</button>
               </form>
            </div>

            <div className="flex flex-col items-center gap-12 py-24 opacity-30">
               <ShieldCheck className="text-brand-600" size={64} />
               <p className="text-[11px] font-black uppercase tracking-[0.9em] text-slate-600 text-center leading-relaxed">Verified Hub Operations <br /> 4096-bit Secure Routing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;