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
import { Sparkles, ArrowDown, Zap, ShieldCheck } from 'lucide-react';

const Home: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [emailInput, setEmailInput] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput) {
      window.location.href = `mailto:${EMAILS.subscription}?subject=Global Subscription Request&body=Email: ${emailInput}`;
      setEmailInput('');
    }
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      {selectedImage && (
        <ImageModal src={selectedImage} onClose={() => setSelectedImage(null)} />
      )}

      {/* Hero Section - Redesigned for Uniqueness */}
      <div className="relative mb-32 group">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-brand-200/40 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute top-40 -right-20 w-80 h-80 bg-rose-200/30 rounded-full blur-[80px]"></div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-white/50 dark:bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-brand-100 dark:border-white/10 mb-8 shadow-sm">
              <Sparkles size={14} className="text-brand-500 animate-spin-slow" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-700 dark:text-brand-300">A World of Beauty & Wealth</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter leading-[0.85] italic">
              Empower <br />
              <span className="text-brand-600 not-italic">Your Brand.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-medium mb-12 max-w-lg leading-tight">
              Merging high-performance beauty with automated financial systems for the modern independent woman.
            </p>
            <div className="flex flex-wrap gap-6">
               <button onClick={() => scrollToSection('affiliates')} className="bg-brand-600 text-white px-12 py-5 rounded-2xl font-black text-lg shadow-[0_20px_40px_rgba(225,29,72,0.3)] hover:translate-y-[-4px] transition-all uppercase tracking-tighter">Enter The Grid</button>
               <button onClick={() => scrollToSection('featured')} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-2 border-slate-100 dark:border-slate-800 px-12 py-5 rounded-2xl font-black text-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all uppercase tracking-tighter flex items-center gap-2">Featured <ArrowDown size={20} /></button>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative h-[500px] md:h-[600px] rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-900 transform lg:rotate-2 hover:rotate-0 transition-transform duration-700">
            <img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=1000&auto=format&fit=crop" alt="Hero" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 to-transparent"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-24">
          
          <div id="affiliates" className="scroll-mt-32">
             <GlobalPartnersGrid />
          </div>

          <div className="space-y-12">
             <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
                <h3 className="text-sm font-black uppercase tracking-[0.4em] text-slate-400">Live Global Feed</h3>
                <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {AFFILIATE_PROGRAMS.slice(0, 4).map((prog, i) => (
                   <AffiliateLinkPreview key={i} url={prog.url} title={prog.name} />
                ))}
             </div>
          </div>

          <div id="featured" className="scroll-mt-32">
             <AffiliateProductSpotlight product={FEATURED_PRODUCT} onImageClick={setSelectedImage} />
          </div>

          <div className="space-y-32 pb-20">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="group relative">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                  <div className="w-full md:w-1/2 aspect-[4/5] rounded-[3rem] overflow-hidden cursor-zoom-in shadow-xl bg-slate-100" onClick={() => setSelectedImage(post.image)}>
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
                  </div>
                  <div className="w-full md:w-1/2">
                    <span className="text-brand-600 font-black uppercase tracking-widest text-xs mb-6 block">{post.category}</span>
                    <h3 className="text-5xl font-black leading-[0.9] tracking-tighter mb-8 group-hover:text-brand-600 transition-colors uppercase">{post.title}</h3>
                    <p className="text-xl text-slate-500 font-medium mb-10 leading-relaxed">{post.excerpt}</p>
                    <button className="flex items-center gap-2 font-black text-sm uppercase tracking-widest text-slate-900 dark:text-white group-hover:translate-x-4 transition-transform">
                      Read Investigation <Zap size={16} className="text-brand-500" />
                    </button>
                  </div>
                </div>
                <ShareWidget url={window.location.href} title={post.title} />
              </article>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-10">
          <div className="sticky top-28 space-y-10">
            <div className="p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm">
               <h4 className="text-sm font-black uppercase tracking-widest mb-6">Digital Ecosystem</h4>
               <div className="space-y-4">
                  <LiveTraffic />
                  <MusicPlayer />
               </div>
            </div>
            
            <MagneticSearch />
            <KeywordSearchTool />
            <BulkSocialPublisher />

            <div className="p-10 bg-slate-900 rounded-[3rem] text-white text-center shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-brand-600 rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
               <h4 className="text-2xl font-black mb-4 leading-tight uppercase tracking-tighter">Elite Registry</h4>
               <p className="text-xs text-slate-400 font-bold mb-8 uppercase tracking-widest">Join 15,000+ modern women.</p>
               <form onSubmit={handleSubscribe} className="space-y-4">
                 <input type="email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} required placeholder="Email Address..." className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/40 font-bold focus:bg-white/10 outline-none transition-all" />
                 <button type="submit" className="w-full bg-white text-slate-900 py-5 rounded-2xl font-black text-sm shadow-xl hover:scale-105 transition-transform uppercase tracking-widest">Secure Access</button>
               </form>
            </div>

            <div className="flex items-center justify-center gap-4 p-8">
               <ShieldCheck className="text-slate-300" size={32} />
               <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Verified Global Hub <br />SSL Encrypted Protocol</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;