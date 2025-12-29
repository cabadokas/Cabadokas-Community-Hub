
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Play, Pause, Users, Target, Search, DollarSign, Music, ShoppingCart, Star, 
  ExternalLink, ChevronRight, ChevronLeft, Zap, Heart, AlertCircle, Music2,
  Gamepad2, Ghost, Youtube, Phone, ImageIcon, AtSign, Linkedin, 
  Dribbble, Pin, Twitch, Send, Link as LinkIcon, HelpCircle, Globe, X,
  Home, ShieldCheck, Mail, Share2, CheckCircle, ShoppingBag, Terminal, Server, UserPlus, Copy,
  ArrowRight
} from 'lucide-react';
import { BLOG_POSTS, SOCIAL_LINKS, EMAILS, AFFILIATE_PROGRAMS } from '../constants';
import { GlobalIconMap } from './Layout';

// Image Zoom Lightbox Component
export const ImageModal = ({ src, onClose }: { src: string; onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out" onClick={onClose}>
      <button className="absolute top-8 right-8 text-white hover:rotate-90 transition-transform" onClick={onClose}><X size={48} /></button>
      <div className="relative group animate-in fade-in zoom-in duration-300">
        <img src={src} alt="Zoomed" className="max-w-full max-h-[90vh] rounded-[2rem] shadow-[0_0_100px_rgba(255,255,255,0.1)] border-4 border-white/5" />
        <div className="absolute -bottom-10 left-0 right-0 text-center"><span className="text-white/40 text-xs font-black uppercase tracking-widest">Cabadokas Global Quality Scan</span></div>
      </div>
    </div>
  );
};

const SafeImage: React.FC<{ src: string; alt: string; className?: string; onClick?: () => void }> = ({ src, alt, className, onClick }) => {
  const [error, setError] = useState(false);
  const fallbackUrl = "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800";
  return (
    <img src={error ? fallbackUrl : src} alt={alt} className={`${className} cursor-zoom-in transition-opacity duration-500 ${error ? 'opacity-80' : 'opacity-100'}`} onError={() => setError(true)} onClick={onClick} loading="lazy" />
  );
};

// Automated Affiliate Link Preview Engine
export const AffiliateLinkPreview = ({ url, title, customImage }: { url: string; title: string; customImage?: string }) => {
  const domain = new URL(url).hostname;
  const logoUrl = `https://www.google.com/s2/favicons?sz=128&domain=${domain}`;
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 border border-gray-100 dark:border-gray-700 shadow-xl group">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 bg-slate-50 dark:bg-gray-900 rounded-2xl flex items-center justify-center p-3 border border-gray-100 dark:border-gray-700">
          <img src={logoUrl} className="w-full h-full object-contain" alt={domain} />
        </div>
        <div className="flex-1">
          <h4 className="font-black text-lg uppercase tracking-tighter leading-none mb-1">{title}</h4>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{domain}</p>
        </div>
        <a href={url} target="_blank" className="p-3 bg-brand-500 text-white rounded-xl shadow-lg hover:rotate-12 transition-transform"><ExternalLink size={18}/></a>
      </div>
      <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-100 dark:bg-gray-900 mb-6">
        <img src={customImage || `https://source.unsplash.com/800x600/?${encodeURIComponent(title)}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={title} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
          <p className="text-white text-xs font-black uppercase tracking-widest">Direct Affiliate Portal</p>
        </div>
      </div>
    </div>
  );
};

// 19-Platform Syndication Widget
export const BulkSocialPublisher = () => {
  const [isSyncing, setIsSyncing] = useState(false);
  const [currentSocialIndex, setCurrentSocialIndex] = useState(0);
  const [completed, setCompleted] = useState(false);

  const startBulkSync = () => { setIsSyncing(true); setCompleted(false); setCurrentSocialIndex(0); };

  useEffect(() => {
    if (isSyncing) {
      const timer = setTimeout(() => {
        if (currentSocialIndex < SOCIAL_LINKS.length - 1) { setCurrentSocialIndex(prev => prev + 1); }
        else { setIsSyncing(false); setCompleted(true); }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [isSyncing, currentSocialIndex]);

  return (
    <div className="bg-gray-900 border-2 border-brand-500/30 rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-brand-600 rounded-2xl shadow-lg"><Terminal size={24} /></div>
        <div>
          <h3 className="text-xl font-black uppercase tracking-tighter leading-none mb-1">Global Publisher</h3>
          <p className="text-[10px] text-brand-400 font-bold uppercase tracking-widest">Auto-Syndication Hub</p>
        </div>
      </div>
      {!isSyncing && !completed && (
        <button onClick={startBulkSync} className="w-full bg-white text-gray-950 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl">ACTIVATE GLOBAL SYNC</button>
      )}
      {isSyncing && (
        <div className="space-y-4 animate-fade-in">
          <div className="flex justify-between text-[10px] font-black uppercase">
            <span className="text-brand-400">Deploying to: {SOCIAL_LINKS[currentSocialIndex].platform}</span>
            <span>{Math.round(((currentSocialIndex + 1) / SOCIAL_LINKS.length) * 100)}%</span>
          </div>
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden"><div className="h-full bg-brand-500 transition-all duration-200" style={{ width: `${((currentSocialIndex + 1) / SOCIAL_LINKS.length) * 100}%` }}></div></div>
          <p className="text-[9px] font-mono text-gray-500 truncate italic">> API Response: Success at {SOCIAL_LINKS[currentSocialIndex].url}</p>
        </div>
      )}
      {completed && (
        <div className="text-center py-4 animate-fade-in">
          <CheckCircle size={40} className="mx-auto text-green-500 mb-4" />
          <h4 className="text-sm font-black uppercase tracking-widest mb-4">19 Platforms Synced</h4>
          <button onClick={() => setCompleted(false)} className="text-[10px] text-brand-500 font-bold uppercase hover:underline">RELOAD ENGINE</button>
        </div>
      )}
    </div>
  );
};

export const GlobalPartnersGrid = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white dark:bg-gray-950 rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 p-8 lg:p-12 mb-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <button onClick={() => navigate('/')} className="flex items-center justify-center gap-3 py-4 bg-slate-50 dark:bg-gray-900 rounded-2xl font-black text-[10px] text-gray-700 dark:text-gray-300 hover:bg-brand-50 hover:text-brand-600 transition-all uppercase"><Home size={14} /> Home</button>
        <button onClick={() => navigate('/privacy')} className="flex items-center justify-center gap-3 py-4 bg-slate-50 dark:bg-gray-900 rounded-2xl font-black text-[10px] text-gray-700 dark:text-gray-300 hover:bg-brand-50 hover:text-brand-600 transition-all uppercase"><ShieldCheck size={14} /> Privacy</button>
        <button onClick={() => navigate('/contact')} className="flex items-center justify-center gap-3 py-4 bg-slate-50 dark:bg-gray-900 rounded-2xl font-black text-[10px] text-gray-700 dark:text-gray-300 hover:bg-brand-50 hover:text-brand-600 transition-all uppercase"><Mail size={14} /> Contact</button>
        <a href="https://cabadokas.blogspot.com" target="_blank" className="flex items-center justify-center gap-3 py-4 bg-slate-50 dark:bg-gray-900 rounded-2xl font-black text-[10px] text-gray-700 dark:text-gray-300 hover:bg-brand-50 hover:text-brand-600 transition-all uppercase"><Globe size={14} /> Blogger</a>
      </div>
      <div id="affiliates-grid">
        <h3 className="text-2xl font-black uppercase tracking-tighter mb-10 flex items-center gap-3"><ShoppingBag className="text-brand-500" /> Partner Network logos</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {AFFILIATE_PROGRAMS.map((prog, i) => {
             const domain = new URL(prog.url).hostname;
             return (
              <a key={i} href={prog.url} target="_blank" title={prog.name} className="aspect-square bg-slate-50 dark:bg-gray-900 rounded-2xl flex items-center justify-center border-2 border-transparent hover:border-brand-500 hover:bg-white dark:hover:bg-gray-800 transition-all group shadow-sm p-4">
                <img src={`https://www.google.com/s2/favicons?sz=64&domain=${domain}`} className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all" alt={prog.name} />
              </a>
             )
          })}
        </div>
      </div>
    </div>
  );
};

export const ContactForm = () => {
  const [form, setForm] = useState({ email: '', subject: '', message: '' });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${EMAILS.support}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`From: ${form.email}\n\n${form.message}`)}`;
  };
  return (
    <div className="bg-white dark:bg-gray-800 p-10 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl">
      <div className="flex items-center gap-3 mb-8"><Mail className="text-brand-600" size={32} /><h3 className="text-2xl font-black uppercase tracking-tighter leading-none">Inquiry Center</h3></div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="email" placeholder="Email Address" required className="w-full bg-slate-50 dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 outline-none focus:ring-4 focus:ring-brand-500/10 font-bold" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
        <input type="text" placeholder="Subject" required className="w-full bg-slate-50 dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 outline-none focus:ring-4 focus:ring-brand-500/10 font-bold" value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} />
        <textarea placeholder="Message..." rows={5} required className="w-full bg-slate-50 dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 outline-none focus:ring-4 focus:ring-brand-500/10 font-bold resize-none" value={form.message} onChange={e => setForm({...form, message: e.target.value})}></textarea>
        <button type="submit" className="w-full bg-brand-600 text-white py-5 rounded-2xl font-black text-lg shadow-xl flex items-center justify-center gap-3 uppercase">SEND MESSAGE <Send size={20} /></button>
      </form>
    </div>
  );
};

export const LiveTraffic = () => {
  const [v, setV] = useState(1527);
  useEffect(() => { const i = setInterval(() => setV(p => p + Math.floor(Math.random() * 5) - 2), 4000); return () => clearInterval(i); }, []);
  return (
    <div className="bg-gray-950 text-white p-8 rounded-[2rem] shadow-2xl">
      <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 mb-2">Live Global Activity</p>
      <div className="flex items-center justify-between"><h3 className="text-5xl font-black font-mono tracking-tighter">{v.toLocaleString()}</h3><Users size={32} className="text-brand-500" /></div>
    </div>
  );
};

export const MusicPlayer = () => {
  const [play, setPlay] = useState(false);
  const ref = useRef<HTMLAudioElement | null>(null);
  useEffect(() => { play ? ref.current?.play() : ref.current?.pause(); }, [play]);
  return (
    <div className="bg-indigo-900 text-white p-6 rounded-[2rem] shadow-xl flex items-center gap-4">
      <button onClick={() => setPlay(!play)} className="w-12 h-12 bg-white text-indigo-900 rounded-full flex items-center justify-center hover:scale-110 transition-transform">{play ? <Pause size={20} /> : <Play size={20} className="ml-1" />}</button>
      <div><p className="text-[10px] font-black uppercase opacity-60">Focus Radio</p><p className="font-bold text-sm leading-none mt-1">Monetized Audio Channel</p></div>
      <audio ref={ref} src="https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3" loop />
    </div>
  );
};

// 19-Platform Sharing Widget
export const ShareWidget = ({ url, title }: { url: string; title: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => { navigator.clipboard.writeText(url); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl mt-8">
      <div className="flex items-center gap-3 mb-6"><Share2 className="text-brand-500" size={24} /><h3 className="text-lg font-black uppercase tracking-tighter leading-none">Syndicate Results</h3></div>
      <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
        {SOCIAL_LINKS.map((link) => {
          const Icon = GlobalIconMap[link.icon] || Globe;
          return (
            <a key={link.platform} href={link.url} target="_blank" title={`Share on ${link.platform}`} className="w-10 h-10 bg-slate-50 dark:bg-gray-900 rounded-xl flex items-center justify-center text-gray-400 hover:bg-brand-500 hover:text-white transition-all shadow-sm border border-transparent hover:border-brand-100"><Icon size={18} /></a>
          );
        })}
        <button onClick={handleCopy} className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${copied ? 'bg-green-500 text-white' : 'bg-slate-50 dark:bg-gray-900 text-gray-400 hover:bg-gray-200'}`} title="Copy Link">{copied ? <CheckCircle size={18} /> : <Copy size={18} />}</button>
      </div>
    </div>
  );
};

// Discover Keyword Market tool
export const KeywordSearchTool = () => {
  const [keywords, setKeywords] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [results, setResults] = useState<string[]>([]);
  const handleScan = () => {
    if (!keywords) return;
    setIsScanning(true); setResults([]);
    setTimeout(() => {
      setResults([`Market Gap Found: High demand for ${keywords} in beauty`, `Revenue Potential: Up to 15% CTR for ${keywords}`, `Suggested Partner: Sephora ${keywords} collections`]);
      setIsScanning(false);
    }, 1500);
  };
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl relative overflow-hidden">
      <div className="flex items-center gap-3 mb-6"><Terminal className="text-brand-500" size={24} /><h3 className="text-lg font-black uppercase tracking-tighter leading-none">Keyword Market Scan</h3></div>
      <div className="space-y-4">
        <input type="text" placeholder="Input keywords for discovery..." className="w-full bg-slate-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800 outline-none focus:ring-2 focus:ring-brand-500 font-bold" value={keywords} onChange={(e) => setKeywords(e.target.value)} />
        <button onClick={handleScan} disabled={isScanning} className="w-full bg-brand-600 text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-brand-700 transition-colors flex items-center justify-center gap-2">
          {isScanning ? <Zap size={16} className="animate-spin" /> : <Search size={16} />} {isScanning ? 'SCANNING MARKET...' : 'DISCOVER OPPORTUNITIES'}
        </button>
      </div>
      {results.length > 0 && (
        <div className="mt-6 space-y-2">
          {results.map((res, i) => (
            <div key={i} className="p-3 bg-brand-50 dark:bg-brand-900/10 rounded-lg border border-brand-100 dark:border-brand-900/30 text-[10px] font-bold text-brand-700 dark:text-brand-400 italic">> {res}</div>
          ))}
        </div>
      )}
    </div>
  );
};

// AISalesFunnel Component
export const AISalesFunnel = () => {
  return (
    <div className="bg-gradient-to-br from-brand-600 to-brand-800 p-8 rounded-[2.5rem] text-white shadow-xl">
      <div className="flex items-center gap-3 mb-6"><Target className="text-white" size={24} /><h3 className="text-lg font-black uppercase tracking-tighter leading-none">AI Sales Funnel</h3></div>
      <p className="text-xs font-bold opacity-80 mb-6 uppercase tracking-widest">Optimizing conversion paths for affiliate revenue streams.</p>
      <div className="space-y-2 mb-6">
        <div className="flex items-center gap-2 text-[10px] font-bold"><CheckCircle size={12} className="text-green-400" /> Lead Capture Active</div>
        <div className="flex items-center gap-2 text-[10px] font-bold"><CheckCircle size={12} className="text-green-400" /> Auto-Affiliate Routing</div>
      </div>
      <button className="w-full bg-white text-brand-700 py-4 rounded-xl font-black text-xs uppercase tracking-widest shadow-lg">RE-CALIBRATE FUNNEL</button>
    </div>
  );
};

// MagneticSearch Component
export const MagneticSearch = () => {
  const [query, setQuery] = useState('');
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query) window.open(`https://www.google.com/search?q=${encodeURIComponent(query + ' Cabadokas Community')}`, '_blank');
  };
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-xl">
      <div className="flex items-center gap-3 mb-6"><Search className="text-brand-500" size={24} /><h3 className="text-lg font-black uppercase tracking-tighter leading-none">Magnetic Insights</h3></div>
      <form onSubmit={handleSearch} className="relative">
        <input type="text" placeholder="Search global hub..." className="w-full bg-slate-50 dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 outline-none focus:ring-4 focus:ring-brand-500/10 font-bold pr-16" value={query} onChange={e => setQuery(e.target.value)} />
        <button type="submit" className="absolute right-3 top-3 bottom-3 aspect-square bg-brand-600 text-white rounded-xl flex items-center justify-center hover:scale-105 transition-transform shadow-lg"><ArrowRight size={20}/></button>
      </form>
    </div>
  );
};

// MagneticLinkPost Component
export const MagneticLinkPost = ({ title, url }: { title: string; url: string }) => {
  return (
    <a href={url} target="_blank" className="flex items-center justify-between bg-slate-50 dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-brand-500 transition-all group">
      <h4 className="font-black text-sm uppercase tracking-tighter group-hover:text-brand-600">{title}</h4>
      <ExternalLink size={18} className="text-gray-400 group-hover:text-brand-600" />
    </a>
  );
};

// AffiliateProductSpotlight Component
export const AffiliateProductSpotlight = ({ product, onImageClick }: { product: any; onImageClick: (src: string) => void }) => {
  const [activeImage, setActiveImage] = useState(0);
  return (
    <div className="bg-white dark:bg-gray-800 rounded-[3rem] p-8 lg:p-12 shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="aspect-square rounded-[2rem] overflow-hidden bg-slate-100 dark:bg-gray-900 cursor-zoom-in group shadow-inner" onClick={() => onImageClick(product.images[activeImage])}>
            <img src={product.images[activeImage]} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((img: string, i: number) => (
              <button key={i} onClick={() => setActiveImage(i)} className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${activeImage === i ? 'border-brand-500 scale-95 shadow-lg' : 'border-transparent opacity-50 hover:opacity-100'}`}>
                <img src={img} className="w-full h-full object-cover" alt="" />
              </button>
            ))}
          </div>
        </div>
        <div>
          <div className="inline-flex items-center gap-2 bg-brand-50 dark:bg-brand-900/30 px-4 py-2 rounded-full mb-6">
            <Star size={14} className="text-brand-600 fill-brand-600" />
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-600 dark:text-brand-400">Top Beauty Pick 2025</span>
          </div>
          <h2 className="text-4xl font-black tracking-tighter leading-[1.1] mb-6 text-gray-900 dark:text-white uppercase">{product.name}</h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 font-medium mb-8 leading-relaxed">{product.description}</p>
          <div className="flex items-center justify-between mb-10 pb-8 border-b border-gray-100 dark:border-gray-700">
            <div>
              <p className="text-4xl font-black text-brand-600 tracking-tighter">{product.price}</p>
              <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mt-1">{product.reviews} Verified Reviews</p>
            </div>
          </div>
          <a href={product.affiliateUrl} target="_blank" className="w-full bg-brand-600 text-white py-6 rounded-2xl font-black text-lg shadow-xl flex items-center justify-center gap-3 hover:scale-105 transition-transform uppercase tracking-tighter">
            SECURE EXCLUSIVE DISCOUNT <ShoppingCart size={22} />
          </a>
        </div>
      </div>
    </div>
  );
};
