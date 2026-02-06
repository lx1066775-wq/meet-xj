
import React from 'react';
import { Phone, Mail, Instagram, Facebook, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-lg">新</div>
              <span className="text-2xl font-bold text-white">遇见新疆</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              新疆不仅仅是一个地理概念，更是一种生活态度。我们深耕新疆旅游十年，致力于为每一位踏上这片土地的旅人提供最纯正的西域体验。
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-600 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-600 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-600 transition-colors"><Globe size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">快捷导航</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#destinations" className="hover:text-amber-500 transition-colors">热门目的地</a></li>
              <li><a href="#itineraries" className="hover:text-amber-500 transition-colors">精选路线</a></li>
              <li><a href="#about" className="hover:text-amber-500 transition-colors">关于我们</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">旅行保险</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">热门路线</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">北疆阿勒泰全景之旅</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">南疆人文历史大环线</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">独库公路·英雄之路自驾</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">伊犁花海浪漫定制</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">联系我们</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-amber-500 mt-1" />
                <span>小杨: +8617690889057<br /><span className="text-xs text-slate-500">(24小时咨询服务)</span></span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-amber-500 mt-1" />
                <span>tangren898@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>© 2024 遇见新疆. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
