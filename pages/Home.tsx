import React, { useState } from 'react';
import { BLOG_POSTS, FEATURED_PRODUCT, EMAILS } from '../constants';
import { 
  MusicPlayer, 
  LiveTraffic, 
  MagneticSearch, 
  GlobalPartnersGrid,
  AffiliateProductSpotlight,
  BulkSocialPublisher,
  ImageModal,
  ShareWidget,
  KeywordSearchTool
} from '../components/Widgets';
import { ArrowRight, ArrowDown, Zap, ShieldCheck, Sparkles, Gem } from 'lucide-react';

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
    <div className="container mx-auto px-6 py-12 lg:py-24 relative overflow-visible selection:bg-brand-600 selection:text-white">
      {selectedImage && (
        <ImageModal src={selectedImage} onClose={() => setSelectedImage(null)} />
      )}

      {/* Background Ambience */}
      <div className="fixed top-[-10%] right-[-10%] w-[70vw] h-[70vw] bg-brand-900/10 rounded-full blur-[200px] -z-10 pointer-events-none animate-pulse-slow"></div>
      <div className="fixed bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-900/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

      {/* Hero: The Statement */}
      <section className="relative min-h-[85vh] flex flex-col justify-center mb-40 lg:mb-72">
        <div className="flex items-center gap-6 mb-12 animate-in fade-in slide-in-from-left duration-1000">
          <div className="w-16 h-[1px] bg-brand-600"></div>
          <span className="text-[11px] font-black uppercase tracking-[1.2em] text-brand-500/80">Hyper-Noir // MMXXVI</span>
        </div>
        
        <div className="relative group">
          <h1 className="text-[18vw] lg:text-[15rem] font-black leading-[0.7] tracking-tighter text-white mb-16 uppercase italic relative z-10 transition-transform duration-700 group-hover:scale-[1.01]">
            Global <br />
            <span className="text-reveal not-italic uppercase drop-shadow-[0_0_30px_rgba(225,29,72,0.3)]">Elite.</span>
          </h1>
          <div className="absolute -top-20 -left-20 text-[25rem] font-black text-white/[0.02] -z-10 select-none hidden xl:block uppercase">CB</div>
        </div>

        <div className="grid lg:grid-cols-12 gap-20 items-end mt-16">
          <div className="lg:col-span-7">
            <p className="text-2xl md:text-5xl text-slate-400 font-extralight leading-[1.1] italic max-w-4xl tracking-tight">
              An architectural framework where <span className="text-white font-medium not-italic border-b border-brand-500 pb-2">luxury wellness</span> merges with high-frequency wealth generation.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-6">
            <button 
              onClick={() => scrollToSection('portal')} 
              className="btn-luxury w-full text-white py-10 rounded-2xl text-[12px] tracking-[0.5em] shadow-2xl flex items-center justify-center gap-4"
            >
              Access Network <Gem size={18} />
            </button>
            <div className="flex gap-4">
               <button 
                onClick={() => scrollToSection('intelligence')} 
                className="flex-1 glass-panel text-slate-400 py-6 rounded-2xl font-black text-[10px] tracking-[0.4em] uppercase transition-all hover:text-white flex items-center justify-center gap-3"
              >
                Intelligence <ArrowDown size={14} />
              </button>
              <button 
                className="w-20 glass-panel text-brand-500 rounded-2xl flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all"
              >
                <Sparkles size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-40">
        <div className="lg:col-span-8 space-y-40 lg:space-y-80">
          
          <div id="portal" className="scroll-mt-32">
             <div className="mb-12 flex justify-between items-end">
                <div>
                   <h2 className="text-4xl font-black uppercase tracking-tighter mb-2">Partner Ecosystem</h2>
                   <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Global Affiliate Routing Active</p>
                </div>
                <div className="h-[1px] flex-grow mx-8 bg-slate-800 hidden md:block"></div>
             </div>
             <GlobalPartnersGrid />
          </div>

          {/* Featured Spotlight */}
          <div className="relative">
            <div className="absolute -inset-20 bg-brand-600/5 rounded-full blur-[120px] -z-10 opacity-50"></div>
            <AffiliateProductSpotlight product={FEATURED_PRODUCT} onImageClick={setSelectedImage} />
          </div>

          {/* Intelligence Feed */}
          <div id="intelligence" className="space-y-40 lg:space-y-64 pb-32">
            <div className="flex flex-col items-center mb-24">
               <h2 className="text-[12vw] lg:text-[10rem] font-black tracking-tighter uppercase leading-none mb-6 opacity-5 italic select-none">Intelligence</h2>
               <div className="w-24 h-[2px] bg-brand-600 shadow-[0_0_10px_#e11d48]"></div>
            </div>

            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="group relative">
                <div className="grid md:grid-cols-2 gap-16 lg:gap-32 items-center">
                  <div className={`relative overflow-hidden rounded-[3rem] aspect-[4/5] glass-panel p-2 shadow-2xl transition-all duration-700 group-hover:shadow-brand-500/10 ${post.id % 2 === 0 ? 'md:order-2' : ''}`}>
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover rounded-[2.8rem] grayscale transition-all duration-[5s] group-hover:grayscale-0 group-hover:scale-105 cursor-zoom-in" 
                      onClick={() => setSelectedImage(post.image)} 
                    />
                    <div className="absolute top-8 left-8 glass-panel px-6 py-3 rounded-full border border-white/5">
                       <span className="text-[10px] font-black uppercase tracking-widest text-white/80">Intel_ID_00{post.id}</span>
                    </div>
                  </div>
                  <div className={post.id % 2 === 0 ? 'md:order-1' : ''}>
                    <div className="flex items-center gap-4 mb-10">
                       <div className="w-3 h-3 rounded-full bg-brand-600 animate-pulse shadow-[0_0_15px_#e11d48]"></div>
                       <span className="text-brand-500 font-black uppercase tracking-[0.6em] text-[10px]">Security Clearing // {post.category}</span>
                    </div>
                    <h3 className="text-5xl lg:text-7xl font-black leading-[0.9] tracking-tighter text-white mb-10 group-hover:text-brand-400 transition-colors uppercase italic">{post.title}</h3>
                    <p className="text-xl text-slate-500 font-extralight mb-12 leading-relaxed tracking-tight max-w-xl">{post.excerpt}</p>
                    <button className="flex items-center gap-8 font-black text-[11px] uppercase tracking-[0.8em] text-white/50 hover:text-white hover:gap-12 transition-all">
                      Decipher Intel <ArrowRight size={20} className="text-brand-600" />
                    </button>
                    <div className="mt-20 pt-10 border-t border-white/5">
                       <ShareWidget url={window.location.href} title={post.title} />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Sidebar: Command Center */}
        <aside className="lg:col-span-4 space-y-12">
          <div className="sticky top-28 space-y-10">
            <div className="p-10 glass-panel rounded-[3rem] shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-600 to-transparent opacity-50 animate-scan"></div>
               <h4 className="text-[10px] font-black uppercase tracking-[1em] mb-12 text-slate-700">System_Diagnostics</h4>
               <div className="space-y-8">
                  <LiveTraffic />
                  <MusicPlayer />
               </div>
            </div>
            
            <div className="space-y-6">
              <MagneticSearch />
              <KeywordSearchTool />
              <BulkSocialPublisher />
            </div>

            {/* Registry: Premium Capture */}
            <div className="p-12 bg-white rounded-[3.5rem] text-slate-900 shadow-[0_40px_80px_rgba(0,0,0,0.6)] group transition-all duration-500 hover:scale-[1.01]">
               <div className="flex justify-between items-start mb-10">
                  <h4 className="text-5xl font-black tracking-tighter uppercase italic leading-none">The<br/>Registry</h4>
                  <ShieldCheck className="text-brand-600" size={32} />
               </div>
               <p className="text-[10px] text-slate-400 font-black mb-12 uppercase tracking-[0.5em] leading-relaxed">Secure Node Subscriber Protocol</p>
               <form onSubmit={handleSubscribe} className="space-y-6">
                 <div className="relative">
                   <input 
                     type="email" 
                     value={emailInput} 
                     onChange={(e) => setEmailInput(e.target.value)} 
                     required 
                     placeholder="ENCRYPTED_ADDRESS" 
                     className="w-full px-8 py-6 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-brand-500/20 text-slate-900 placeholder:text-slate-300 font-black text-[11px] tracking-[0.2em] outline-none transition-all uppercase" 
                   />
                 </div>
                 <button type="submit" className="w-full bg-slate-900 text-white py-7 rounded-2xl font-black text-[11px] transition-all uppercase tracking-[0.4em] hover:bg-brand-600 shadow-xl active:scale-[0.98]">Authorize Connection</button>
               </form>
            </div>

            <div className="py-20 flex flex-col items-center text-center">
               <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-6">
                  <div className="w-2 h-2 rounded-full bg-brand-600 shadow-[0_0_10px_#e11d48] animate-pulse"></div>
               </div>
               <p className="text-[9px] font-black uppercase tracking-[1em] text-slate-700 leading-loose">End-to-End <br/> AES-4096 Security</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Home;