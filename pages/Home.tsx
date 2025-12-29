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
import { Sparkles, ArrowRight, Zap, ShieldCheck, ArrowDown } from 'lucide-react';

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
    <div className="container mx-auto px-6 py-12 md:py-24">
      {selectedImage && (
        <ImageModal src={selectedImage} onClose={() => setSelectedImage(null)} />
      )}

      {/* Unique High-Concept Editorial Hero */}
      <div className="relative mb-60">
        <div className="absolute -top-40 -left-60 w-[900px] h-[900px] bg-brand-600/5 rounded-full blur-[200px] pointer-events-none"></div>
        
        <div className="grid lg:grid-cols-12 gap-16 items-center relative z-10">
          <div className="lg:col-span-9">
            <div className="flex items-center gap-6 mb-16">
              <div className="w-20 h-[1px] bg-brand-600"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.8em] text-brand-500">The Obsidian Collective // 2026</span>
            </div>
            <h1 className="text-[15vw] lg:text-[12rem] font-black leading-[0.7] tracking-tighter text-white mb-16 uppercase italic">
              Future <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-rose-400 not-italic uppercase">Elegance.</span>
            </h1>
            <p className="text-2xl md:text-5xl text-slate-400 font-extralight max-w-4xl leading-[1.1] mb-24 italic">
              Empowering the modern woman with architectural wellness and <span className="text-white font-medium not-italic">autonomous financial engines.</span>
            </p>
            <div className="flex flex-wrap gap-12">
               <button onClick={() => scrollToSection('affiliates-portal')} className="group relative bg-brand-600 text-white px-20 py-8 rounded-full font-black text-xs tracking-[0.3em] overflow-hidden transition-all hover:scale-105 shadow-[0_40px_80px_rgba(225,29,72,0.3)] uppercase">
                 <span className="relative z-10">Enter Grid</span>
                 <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
               </button>
               <button onClick={() => scrollToSection('reports')} className="group flex items-center gap-6 text-slate-300 hover:text-white font-black text-xs tracking-[0.3em] transition-all py-8 uppercase">
                 View Investigations <ArrowDown size={20} className="group-hover:translate-y-3 transition-transform" />
               </button>
            </div>
          </div>
          <div className="lg:col-span-3 relative group hidden lg:block">
             <div className="aspect-[4/6] rounded-[6rem] overflow-hidden glass-card p-4 shadow-2xl transform rotate-6 hover:rotate-0 transition-all duration-1000">
                <img src="https://images.unsplash.com/photo-1596462502278-27bfac4033c8?w=800" className="w-full h-full object-cover rounded-[4.5rem] grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Cabadokas Luxury" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 to-transparent"></div>
             </div>
             <div className="absolute -bottom-16 -left-20 glass-card px-10 py-8 rounded-[2.5rem] shadow-2xl animate-float">
                <p className="text-[10px] font-black uppercase tracking-widest text-brand-500 mb-2">Hub Status</p>
                <p className="text-2xl font-black text-white">ENCRYPTED // ONLINE</p>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
        <div className="lg:col-span-8 space-y-48">
          
          <div id="affiliates-portal" className="scroll-mt-32">
             <GlobalPartnersGrid />
          </div>

          <div className="space-y-20">
             <div className="flex items-center gap-10">
                <h3 className="text-[11px] font-black uppercase tracking-[0.6em] text-slate-500 whitespace-nowrap">Global Syndication</h3>
                <div className="h-[1px] flex-1 bg-slate-800"></div>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {AFFILIATE_PROGRAMS.slice(0, 4).map((prog, i) => (
                   <AffiliateLinkPreview key={i} url={prog.url} title={prog.name} />
                ))}
             </div>
          </div>

          <div className="scroll-mt-32">
             <AffiliateProductSpotlight product={FEATURED_PRODUCT} onImageClick={setSelectedImage} />
          </div>

          <div id="reports" className="space-y-60 pb-32">
            <div className="text-center mb-24">
               <h2 className="text-[8vw] lg:text-9xl font-black tracking-tighter uppercase leading-none mb-6">Latest <span className="text-brand-600">Feed</span></h2>
               <div className="w-40 h-1 bg-brand-600 mx-auto rounded-full"></div>
            </div>
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="group">
                <div className="grid md:grid-cols-2 gap-24 items-center">
                  <div className={`relative overflow-hidden rounded-[5rem] aspect-[4/5] glass-card p-4 shadow-2xl ${post.id % 2 === 0 ? 'md:order-2' : ''}`}>
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover rounded-[3.8rem] group-hover:scale-110 transition-transform duration-[3s] cursor-zoom-in" onClick={() => setSelectedImage(post.image)} />
                    <div className="absolute inset-0 bg-brand-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className={post.id % 2 === 0 ? 'md:order-1' : ''}>
                    <span className="text-brand-500 font-black uppercase tracking-[0.5em] text-[10px] mb-10 block">Investigation File // {post.category}</span>
                    <h3 className="text-7xl lg:text-8xl font-black leading-[0.8] tracking-tighter text-white mb-12 group-hover:text-brand-500 transition-colors uppercase italic">{post.title}</h3>
                    <p className="text-2xl text-slate-400 font-extralight mb-16 leading-relaxed tracking-tight">{post.excerpt}</p>
                    <button className="flex items-center gap-6 font-black text-xs uppercase tracking-[0.5em] text-white group-hover:gap-10 transition-all">
                      Access Protocol <ArrowRight size={22} className="text-brand-600" />
                    </button>
                    <div className="mt-24 pt-12 border-t border-slate-800/50">
                       <ShareWidget url={window.location.href} title={post.title} />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Modular Sidebar - The System Rack */}
        <div className="lg:col-span-4 space-y-20">
          <div className="sticky top-28 space-y-20">
            <div className="p-14 glass-card rounded-[4rem] shadow-2xl relative overflow-hidden border border-white/5">
               <div className="absolute -top-16 -right-16 w-48 h-48 bg-brand-600/10 rounded-full blur-[60px]"></div>
               <h4 className="text-[11px] font-black uppercase tracking-[0.6em] mb-14 text-slate-500">System Monitoring</h4>
               <div className="space-y-10">
                  <LiveTraffic />
                  <MusicPlayer />
               </div>
            </div>
            
            <MagneticSearch />
            <KeywordSearchTool />
            <BulkSocialPublisher />

            <div className="p-16 bg-white rounded-[5rem] text-slate-900 text-center shadow-[0_60px_120px_rgba(0,0,0,0.6)] relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/15 rounded-full blur-[60px]"></div>
               <h4 className="text-6xl font-black mb-8 tracking-tighter uppercase italic">Registry</h4>
               <p className="text-[10px] text-slate-400 font-black mb-14 uppercase tracking-[0.6em] leading-loose">Secure Global Access</p>
               <form onSubmit={handleSubscribe} className="space-y-6">
                 <input type="email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} required placeholder="SECURE_ADDRESS" className="w-full p-8 rounded-[2.5rem] bg-slate-100 border-none text-slate-900 placeholder-slate-400 font-black text-[11px] tracking-widest outline-none focus:bg-slate-200 transition-all" />
                 <button type="submit" className="w-full bg-slate-950 text-white py-8 rounded-[2.5rem] font-black text-xs shadow-2xl hover:bg-brand-600 transition-all uppercase tracking-[0.4em]">Initialize Registry</button>
               </form>
            </div>

            <div className="flex flex-col items-center gap-8 py-20 opacity-40">
               <ShieldCheck className="text-brand-600" size={48} />
               <p className="text-[10px] font-black uppercase tracking-[0.7em] text-slate-500 text-center leading-relaxed">Verified Hub Protocol <br /> 4096-bit encryption</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;