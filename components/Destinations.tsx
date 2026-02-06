
import React from 'react';
import { DESTINATIONS } from '../constants';
import { ArrowRight } from 'lucide-react';

const Destinations: React.FC = () => {
  return (
    <section id="destinations" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-amber-600 font-bold mb-2 tracking-widest uppercase">Popular Places</h2>
            <h3 className="text-4xl font-bold text-slate-900">热门目的地</h3>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-amber-600 font-bold hover:gap-3 transition-all">
            查看全部 <ArrowRight size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DESTINATIONS.map((dest) => (
            <div key={dest.id} className="group relative rounded-3xl overflow-hidden aspect-[3/4] cursor-pointer shadow-lg hover:-translate-y-2 transition-all duration-500">
              <img 
                src={dest.image} 
                alt={dest.name} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <div className="absolute top-4 left-4">
                <span className="bg-amber-600/90 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                  {dest.tag}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-sm text-white/80 mb-1">{dest.location}</p>
                <h4 className="text-2xl font-bold mb-2">{dest.name}</h4>
                <p className="text-sm text-white/70 opacity-0 group-hover:opacity-100 transition-opacity line-clamp-2">
                  {dest.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
