
import React from 'react';
import { SERVICES } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&q=80&w=800" 
                alt="Local Guide" 
                className="w-full h-auto"
              />
            </div>
            {/* Decorative background blocks */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-100 rounded-full -z-0 opacity-50"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-slate-100 rounded-full -z-0 opacity-50"></div>
            
            <div className="absolute bottom-10 left-10 glass-card p-6 rounded-2xl shadow-xl z-20 animate-float">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white">
                  <span className="font-bold">10</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">本地运营</p>
                  <p className="text-lg font-bold text-slate-900">十年地接经验</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-amber-600 font-bold mb-2 tracking-widest uppercase">Why Choose Us</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">
              来自新疆本地的温度<br />
              <span className="text-amber-600">不仅是导游，更是朋友</span>
            </h3>
            <p className="text-slate-600 mb-10 text-lg leading-relaxed">
              我们坚持“深度、自由、地道”的旅行理念。没有套路的购物店，只有不为人知的私藏美景。我们的车队遍布南北疆，我们的领队精通双语，熟悉每一寸土地的脉络。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SERVICES.map((service, index) => (
                <div key={index} className="flex gap-4">
                  <div className="shrink-0 w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{service.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
