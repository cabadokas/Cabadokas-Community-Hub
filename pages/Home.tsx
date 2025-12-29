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
import { ArrowRight, ArrowDown, Zap, ShieldCheck, Sparkles } from 'lucide-react';

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
    <div className="container mx-auto px-6 py-12 lg:py-24 relative overflow-visible">
      {selectedImage && (
        <ImageModal src={selectedImage} onClose={() => setSelectedImage(null)} />
      )}

      {/* Decorative Background Elements */}
      <div className="fixed top-0 right-0 w-[80vw] h-[80vw] bg-brand-600/5 rounded-full blur-[200px] -z-10 pointer-events-none animate-pulse-slow"></div>
      <div className="fixed bottom-0 left-0 w-[50vw] h-[50vw] bg-indigo-600/5 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

      {/* Luxury Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center mb-32 lg:mb-64">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-[2px] bg-brand-600"></div>
          <span className="text-[10px] font-black uppercase tracking-[1em] text-brand-500">Obsidian Noir MMXXVI</span>
        </div>
        
        <div className="relative">
          <h1 className="text-[22vw] lg:text-[16rem] font-black leading-[0.75] tracking-tighter text-white mb-16 uppercase italic relative z-10">
            High <br />
            <span className="text-reveal not-italic uppercase">Elite.</span>
          </h1>
          <div className="absolute -top-10 -left-10 text-[30rem] font-black text-white/5 -z-10 select-none hidden lg:block uppercase italic">C</div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-end mt-12">
          <div className="lg:col-span-8">
            <p className="text-2xl md:text-5xl text-slate-400 font-extralight leading-[1.2] italic max-w-4xl tracking-tight">
              Where architectural wellness meets <span className="text-white font-medium not-italic border-b-2 border-brand-600 pb-1">autonomous wealth generation.</span> A curated sanctuary for the modern visionary.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-6">
            <button 
              onClick={() => scrollToSection('portal')} 
              className="w-full bg-brand-600 text-white py-8 rounded-full font-black text-[11px] tracking-[0.4em] uppercase transition-all hover:scale-[1.02] active:scale-95 shadow-[0_30px_90px_rgba(225,29,72,0.3)] flex items-center justify-center gap-4"
            >
              Initialize Hub <Sparkles size={16} />
            </button>
            <button 
              onClick={() => scrollToSection('intelligence')} 
              className="w-full border border-slate-800 text-slate-400 py-8 rounded-full font-black text-[11px] tracking-[0.4em] uppercase transition-all hover:border-white hover:text-white flex items-center justify-center gap-4 group"
            >
              Explore Feed <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-32">
        <div className="lg:col-span-8 space-y-32 lg:space-y-64">
          
          <div id="portal" className="scroll-mt-32">
             <GlobalPartnersGrid />
          </div>

          {/* Featured Product: High Fashion Display */}
          <div className="relative">
            <div className="absolute -inset-10 bg-brand-600/5 rounded-[5rem] blur-3xl -z-10"></div>
            <AffiliateProductSpotlight product={FEATURED_PRODUCT} onImageClick={setSelectedImage} />
          </div>

          {/* Intelligence Feed */}
          <div id="intelligence" className="space-y-32 lg:space-y-48 pb-32">
            <div className="flex flex-col items-center mb-16 lg:mb-32">
               <h2 className="text-[14vw] lg:text-[12rem] font-black tracking-tighter uppercase leading-none mb-6 opacity-5 italic select-none">Intelligence</h2>
               <div className="w-32 h-[1px] bg-brand-600/50"></div>
            </div>

            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="group relative">
                <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
                  <div className={`relative overflow-hidden rounded-[4rem] aspect-[4/5] obsidian-panel p-3 shadow-2xl transition-transform duration-1000 group-hover:scale-[1.02] ${post.id % 2 === 0 ? 'md:order-2' : ''}`}>
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover rounded-[3.8rem] grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[4s] cursor-zoom-in" 
                      onClick={() => setSelectedImage(post.image)} 
                    />
                    <div className="absolute top-8 left-8 obsidian-panel px-6 py-3 rounded-full border border-white/10 backdrop-blur-md">
                       <span className="text-[10px] font-black uppercase tracking-widest text-white">Report 00{post.id}</span>
                    </div>
                  </div>
                  <div className={post.id % 2 === 0 ? 'md:order-1' : ''}>
                    <div className="flex items-center gap-3 mb-8">
                       <Zap size={14} className="text-brand-600 fill-brand-600 animate-pulse" />
                       <span className="text-brand-500 font-black uppercase tracking-[0.5em] text-[10px] block">Global Intel // {post.category}</span>
                    </div>
                    <h3 className="text-5xl lg:text-7xl font-black leading-[0.9] tracking-tighter text-white mb-10 group-hover:text-brand-500 transition-colors uppercase italic">{post.title}</h3>
                    <p className="text-xl text-slate-400 font-extralight mb-12 leading-relaxed tracking-tight max-w-xl">{post.excerpt}</p>
                    <button className="flex items-center gap-6 font-black text-[11px] uppercase tracking-[0.6em] text-white hover:gap-10 transition-all group/btn">
                      Access Briefing <ArrowRight size={22} className="text-brand-600 group-hover/btn:translate-x-2 transition-transform" />
                    </button>
                    <div className="mt-16 pt-10 border-t border-white/5">
                       <ShareWidget url={window.location.href} title={post.title} />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Sidebar: Control Deck */}
        <aside className="lg:col-span-4 space-y-16">
          <div className="sticky top-28 space-y-12">
            <div className="p-10 obsidian-panel rounded-[4rem] shadow-2xl relative overflow-hidden group border border-white/5">
               <div className="absolute -top-10 -right-10 w-48 h-48 bg-brand-600/10 rounded-full blur-[80px]"></div>
               <h4 className="text-[10px] font-black uppercase tracking-[1em] mb-12 text-slate-600">Sync Control</h4>
               <div className="space-y-10">
                  <LiveTraffic />
                  <MusicPlayer />
               </div>
            </div>
            
            <MagneticSearch />
            <KeywordSearchTool />
            <BulkSocialPublisher />

            {/* Premium Newsletter Box */}
            <div className="p-12 bg-white rounded-[4rem] text-slate-900 shadow-[0_50px_100px_rgba(0,0,0,0.6)] relative overflow-hidden transition-transform hover:-translate-y-2 duration-700">
               <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/10 rounded-full blur-[60px]"></div>
               <h4 className="text-5xl lg:text-6xl font-black mb-4 tracking-tighter uppercase italic">Registry</h4>
               <p className="text-[10px] text-slate-400 font-black mb-10 uppercase tracking-[0.6em] leading-loose">Elite Access Protocol</p>
               <form onSubmit={handleSubscribe} className="space-y-5">
                 <input 
                   type="email" 
                   value={emailInput} 
                   onChange={(e) => setEmailInput(e.target.value)} 
                   required 
                   placeholder="ADDR_PROTOCOL" 
                   className="w-full px-8 py-5 rounded-full bg-slate-50 border-none text-slate-900 placeholder-slate-400 font-black text-[11px] tracking-widest outline-none shadow-inner focus:ring-2 focus:ring-brand-500 transition-all uppercase" 
                 />
                 <button type="submit" className="w-full bg-slate-900 text-white py-6 rounded-full font-black text-[11px] transition-all uppercase tracking-[0.4em] hover:bg-brand-600 shadow-xl active:scale-95">Verify Registry</button>
               </form>
            </div>

            <div className="flex flex-col items-center gap-10 py-16 opacity-20">
               <ShieldCheck className="text-brand-600" size={56} />
               <p className="text-[10px] font-black uppercase tracking-[1em] text-slate-600 text-center leading-relaxed">Encrypted Hub <br /> Verified Data Stream</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Home;