
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Itineraries from './components/Itineraries';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Destinations />
      <Itineraries />
      <About />
      
      {/* Contact CTA Section */}
      <section className="py-20 bg-amber-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            准备好开启您的新疆之旅了吗？
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-white text-amber-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-colors shadow-xl">
              获取免费定制方案
            </button>
            <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
              查看更多游记
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
