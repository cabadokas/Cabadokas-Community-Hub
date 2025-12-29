
import React, { useState } from 'react';
import { BLOG_POSTS, FEATURED_PRODUCT, USER_LINK_POSTS, EMAILS, AFFILIATE_PROGRAMS } from '../constants';
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
import { ShoppingBag, ArrowRight, Zap, Target } from 'lucide-react';

const Home: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [emailInput, setEmailInput] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput) {
      window.location.href = `mailto:${EMAILS.subscription}?subject=New Subscription Request&body=Visitor Email: ${emailInput}`;
      setEmailInput('');
    }
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {selectedImage && (
        <ImageModal src={selectedImage} onClose={() => setSelectedImage(null)} />
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-16">
          <section className="bg-white dark:bg-gray-800 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden shadow-sm border border-gray-50 dark:border-gray-700">
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-brand-50 dark:bg-brand-900/30 px-5 py-2 rounded-full mb-8">
                <div className="w-2 h-2 bg-brand-600 rounded-full animate-pulse"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-600 dark:text-brand-400">Official Portal Active</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
                Magnetic <span className="text-brand-600">Beauty</span> & Financial <span className="text-brand-600">Freedom</span>.
              </h1>
              <p className="text-2xl text-gray-400 font-medium mb-12">The global ecosystem for modern wellness and independence.</p>
              <div className="flex flex-wrap gap-4">
                 <button onClick={() => scrollToSection('affiliates')} className="bg-black text-white px-10 py-5 rounded-3xl font-black text-lg shadow-2xl hover:scale-105 transition-transform uppercase">Partner grid</button>
                 <button onClick={() => scrollToSection('featured')} className="bg-slate-100 dark:bg-gray-700 text-gray-900 dark:text-white px-10 py-5 rounded-3xl font-black text-lg hover:bg-slate-200 transition-colors uppercase">Top deals</button>
              </div>
            </div>
          </section>

          <div id="affiliates" className="scroll-mt-32">
             <GlobalPartnersGrid />
          </div>

          <div className="space-y-10">
             <div className="flex items-center gap-4 px-4">
                <Target className="text-brand-500" />
                <h3 className="text-xl font-black uppercase tracking-tighter text-gray-900 dark:text-white">Auto-Image Affiliate Feed</h3>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {AFFILIATE_PROGRAMS.slice(0, 4).map((prog, i) => (
                   <AffiliateLinkPreview key={i} url={prog.url} title={prog.name} />
                ))}
             </div>
          </div>

          <div id="featured" className="scroll-mt-32">
             <AffiliateProductSpotlight product={FEATURED_PRODUCT} onImageClick={setSelectedImage} />
          </div>

          <div className="space-y-20">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="group">
                <div className="relative h-[30rem] lg:h-[40rem] rounded-[3rem] overflow-hidden mb-10 cursor-zoom-in shadow-2xl" onClick={() => setSelectedImage(post.image)}>
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-12 left-12 right-12 text-white">
                    <span className="bg-brand-600 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest mb-6 inline-block">{post.category}</span>
                    <h3 className="text-4xl font-black leading-tight tracking-tighter mb-4">{post.title}</h3>
                  </div>
                </div>
                <ShareWidget url={window.location.href} title={post.title} />
              </article>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 space-y-10">
          <div className="sticky top-24 space-y-10">
            <MagneticSearch />
            <KeywordSearchTool />
            <BulkSocialPublisher />
            <LiveTraffic />
            <MusicPlayer />
            <div className="p-8 lg:p-12 bg-brand-600 rounded-[3rem] text-white text-center shadow-2xl relative overflow-hidden">
               <h4 className="text-2xl font-black mb-8 leading-tight uppercase tracking-tighter">Cabadokas Newsletter</h4>
               <form onSubmit={handleSubscribe} className="space-y-4">
                 <input type="email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} required placeholder="Email Address..." className="w-full p-5 rounded-2xl bg-white/20 border border-white/30 text-white placeholder-white/60 font-bold" />
                 <button type="submit" className="w-full bg-white text-brand-600 py-5 rounded-2xl font-black text-sm shadow-xl hover:bg-slate-100 transition-colors uppercase tracking-widest">SUBSCRIBE NOW</button>
               </form>
               <p className="mt-6 text-[10px] font-bold text-white/50 uppercase tracking-widest">Routing: {EMAILS.subscription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
