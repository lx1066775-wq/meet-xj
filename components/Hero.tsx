
import React from 'react';
import { Search } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToDestinations = () => {
    const el = document.getElementById('destinations');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=2000" 
          alt="Xinjiang Scenery" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg tracking-tight">
          在这片土地，<span className="text-amber-400">遇见</span>最美的自己
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-2xl mx-auto drop-shadow-md">
          大漠孤烟直，长河落日圆。走进大美新疆，开启一段触及灵魂的探索之旅。
        </p>

        <div className="max-w-3xl mx-auto glass-card p-2 rounded-2xl md:rounded-full flex flex-col md:flex-row gap-2 shadow-2xl">
          <div className="flex-1 px-6 py-3 flex items-center gap-3">
            <Search className="text-amber-600" size={24} />
            <input 
              type="text" 
              placeholder="想去哪？喀纳斯、喀什、那拉提..." 
              className="bg-transparent w-full outline-none text-slate-800 placeholder-slate-500 font-medium"
            />
          </div>
          <button 
            onClick={scrollToDestinations}
            className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-xl md:rounded-full font-bold text-lg transition-all shadow-lg active:scale-95"
          >
            探索目的地
          </button>
        </div>

        <div className="mt-12 flex justify-center gap-8 md:gap-16 opacity-80">
          <div className="text-center">
            <div className="text-3xl font-bold">10+</div>
            <div className="text-sm">本地年限</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">100+</div>
            <div className="text-sm">定制路线</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">99%</div>
            <div className="text-sm">好评率</div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollToDestinations}>
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
