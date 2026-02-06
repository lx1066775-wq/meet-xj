
import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '首页', href: '#' },
    { name: '热门目的地', href: '#destinations' },
    { name: '精选路线', href: '#itineraries' },
    { name: '关于我们', href: '#about' },
  ];

  const handleConsult = () => {
    if ((window as any).openChat) (window as any).openChat();
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl">新</div>
          <span className={`text-2xl font-bold ${isScrolled ? 'text-slate-900' : 'text-white'}`}>遇见新疆</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`font-medium transition-colors ${isScrolled ? 'text-slate-600 hover:text-amber-600' : 'text-white/90 hover:text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={handleConsult}
            className="bg-amber-600 text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-amber-700 transition-colors"
          >
            <PhoneCall size={18} />
            立即咨询
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`md:hidden p-2 ${isScrolled ? 'text-slate-900' : 'text-white'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl py-4 flex flex-col items-center gap-4 animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className="text-slate-800 font-medium py-2 w-full text-center hover:bg-slate-50"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => { setIsMenuOpen(false); handleConsult(); }}
            className="bg-amber-600 text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 mt-2"
          >
            <PhoneCall size={18} />
            联系客服
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
