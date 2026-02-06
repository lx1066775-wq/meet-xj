
import React from 'react';
import { ITINERARIES } from '../constants';
import { Calendar, MapPin, Star } from 'lucide-react';

const Itineraries: React.FC = () => {
  return (
    <section id="itineraries" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-amber-600 font-bold mb-2 tracking-widest uppercase">Best Tours</h2>
          <h3 className="text-4xl font-bold text-slate-900">精选路线</h3>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            我们为您规划了最经典、最具深度的新疆行程。每一条路线都经过实地考察，确保极致的旅行体验。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {ITINERARIES.map((item) => (
            <div key={item.id} className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-slate-100 flex flex-col hover:shadow-2xl transition-shadow">
              <div className="relative h-64">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-amber-600 font-bold text-sm">
                  {item.days}天
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs text-slate-400 ml-2">4.9/5 (120+ 评价)</span>
                </div>
                
                <h4 className="text-xl font-bold text-slate-900 mb-4 line-clamp-1">{item.title}</h4>
                
                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-slate-400 mt-1 shrink-0" />
                    <p className="text-sm text-slate-600">
                      {item.route.join(' → ')}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar size={18} className="text-slate-400 mt-1 shrink-0" />
                    <ul className="text-sm text-slate-500 list-disc list-inside">
                      {item.highlights.slice(0, 3).map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-6 border-t border-slate-100">
                  <div>
                    <span className="text-slate-400 text-sm">起价</span>
                    <div className="text-2xl font-bold text-amber-600">¥{item.price}<span className="text-sm font-normal text-slate-500">/人</span></div>
                  </div>
                  <button className="bg-slate-900 text-white px-6 py-2 rounded-full font-bold hover:bg-amber-600 transition-colors">
                    查看详情
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Itineraries;
