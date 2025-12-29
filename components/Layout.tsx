import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Menu, X, Sun, Moon, Globe, ShoppingBag, Twitter, Instagram, Facebook, 
  Youtube, Phone, Linkedin, Dribbble, Pin, Twitch, Send, Link as LinkIcon, 
  HelpCircle, AtSign, Music2, Gamepad2, Ghost, ImageIcon, ShieldCheck,
  Home, Mail, MessageCircle, ChevronDown, ExternalLink, UserPlus
} from 'lucide-react';
import { ThemeContext } from '../App';
import { SOCIAL_LINKS, AFFILIATE_PROGRAMS, EMAILS } from '../constants';

// Type augmentation for Google Translate
declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

export const GlobalIconMap: Record<string, any> = {
  Twitter: Twitter,
  Instagram: Instagram,
  Facebook: Facebook,
  Youtube: Youtube,
  Phone: Phone,
  Linkedin: Linkedin,
  Dribbble: Dribbble,
  Pin: Pin,
  Twitch: Twitch,
  Send: Send,
  Link: LinkIcon,
  HelpCircle: HelpCircle,
  AtSign: AtSign,
  Music2: Music2,
  Gamepad2: Gamepad2,
  Ghost: Ghost,
  Image: ImageIcon,
  Globe: Globe,
  Shield: ShieldCheck,
  Home: Home,
  Mail: Mail,
  Message: MessageCircle,
  UserPlus: UserPlus
};

export const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAffiliateOpen, setIsAffiliateOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const initTranslate = () => {
      const container = document.getElementById('google_translate_element');
      if (container && window.google?.translate?.TranslateElement) {
        container.innerHTML = '';
        new window.google.translate.TranslateElement(
          { pageLanguage: 'en', layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE, autoDisplay: false },
          'google_translate_element'
        );
      }
    };
    window.googleTranslateElementInit = initTranslate;
    const SCRIPT_ID = 'google-translate-script';
    if (!document.getElementById(SCRIPT_ID)) {
      const script = document.createElement('script');
      script.id = SCRIPT_ID;
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    } else { initTranslate(); }
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Global Partners', path: '/#affiliates', icon: ShoppingBag },
    { name: 'Privacy', path: '/privacy', icon: ShieldCheck },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur shadow-sm border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-500 to-brand-700 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-105 transition-transform">C</div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl tracking-tight text-gray-800 dark:text-white leading-none">Cabadokas<span className="text-brand-500">.</span></span>
                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Community Hub</span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-4">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.path.startsWith('/#') ? '/' : link.path} className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-black uppercase tracking-tighter transition-all ${location.pathname === (link.path.startsWith('/#') ? '/' : link.path) ? 'text-brand-600 bg-brand-50' : 'text-gray-500 hover:text-brand-500'}`}>
                  <link.icon size={14} /> {link.name}
                </Link>
              ))}
              <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 mx-2"></div>
              <div className="flex items-center bg-gray-50 dark:bg-gray-800 rounded-lg px-2 h-10"><div id="google_translate_element" className="scale-90 origin-left"></div></div>
              <button onClick={toggleTheme} className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 transition-colors ml-2">
                {theme === 'dark' ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-gray-600" />}
              </button>
            </div>
            <button className="lg:hidden p-2 text-gray-600 dark:text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      <div className="bg-gray-950 text-white py-2 border-b border-white/5 relative z-40">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <div className="relative">
              <button onClick={() => setIsAffiliateOpen(!isAffiliateOpen)} className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all">
                <ShoppingBag size={12} className="text-brand-500" /> Select Global Partner <ChevronDown size={12} className={isAffiliateOpen ? 'rotate-180' : ''} />
              </button>
              {isAffiliateOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900 border border-white/10 rounded-xl shadow-2xl py-2 max-h-80 overflow-y-auto z-50">
                  {AFFILIATE_PROGRAMS.map((prog, i) => (
                    <a key={i} href={prog.url} target="_blank" className="flex items-center gap-3 px-4 py-2.5 hover:bg-brand-600 text-[10px] font-bold uppercase transition-colors">
                      <img src={`https://www.google.com/s2/favicons?sz=32&domain=${new URL(prog.url).hostname}`} className="w-4 h-4 rounded-sm" alt="" />
                      {prog.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <div className="hidden md:flex items-center gap-4 border-l border-white/10 pl-6">
               <Link to="/" className="text-[10px] font-black uppercase hover:text-brand-400">Home</Link>
               <Link to="/privacy" className="text-[10px] font-black uppercase hover:text-brand-400">Privacy Policy</Link>
               <Link to="/contact" className="text-[10px] font-black uppercase hover:text-brand-400">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 py-20 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-white mb-6">Cabadokas<span className="text-brand-500">.</span></h2>
            <p className="text-gray-500 max-w-sm text-sm mb-8">Empowering women worldwide with beauty, health, and financial independence tools.</p>
            <div className="flex flex-wrap gap-2">
              {SOCIAL_LINKS.map((link) => {
                const Icon = GlobalIconMap[link.icon] || Globe;
                return (
                  <a key={link.platform} href={link.url} target="_blank" className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-brand-600 rounded-xl transition-all border border-white/5">
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
          <div>
            <h3 className="text-white font-black uppercase tracking-widest text-xs mb-8">Navigation Hub</h3>
            <ul className="space-y-4 text-xs font-black uppercase tracking-widest">
              <li><Link to="/" className="hover:text-brand-500">Home</Link></li>
              <li><Link to="/#affiliates" className="hover:text-brand-500">Global Partners</Link></li>
              <li><Link to="/privacy" className="hover:text-brand-500">Privacy Policy</Link></li>
              <li><Link to="/contact" className="hover:text-brand-500">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-black uppercase tracking-widest text-xs mb-8">Support & Subscription</h3>
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <p className="text-[10px] uppercase font-black text-gray-500 mb-1">General Support</p>
                <a href={`mailto:${EMAILS.support}`} className="text-xs font-bold text-brand-400 break-all">{EMAILS.support}</a>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <p className="text-[10px] uppercase font-black text-gray-500 mb-1">New Subscribers</p>
                <a href={`mailto:${EMAILS.subscription}`} className="text-xs font-bold text-brand-400 break-all">{EMAILS.subscription}</a>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 text-center text-[10px] font-black uppercase tracking-[0.3em] text-gray-600">
          © 2026 Cabadokas Community Hub. All intellectual property rights reserved.
        </div>
      </div>
    </footer>
  );
};