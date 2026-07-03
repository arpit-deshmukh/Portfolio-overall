import { HERO_DATA } from '../data';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none" />
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center"
        >
          <p className="section-label">Welcome to my portfolio</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-4">
            Hi, I'm <span className="text-blue-400">{HERO_DATA.firstName}</span>
          </h1>
          <p className="text-lg text-gray-300 font-medium mb-3">{HERO_DATA.title}</p>
          <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-md">
            {HERO_DATA.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <button onClick={() => scrollTo('#projects')} className="btn-primary">
              View Projects <ArrowRight size={18} />
            </button>
            <button onClick={() => scrollTo('#about')} className="btn-ghost">
              About Me
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative flex justify-center md:justify-end pr-0 md:pr-10"
        >
          <div className="gradient-border rounded-2xl p-[1px] bg-gradient-to-br from-blue-500/40 to-transparent">
            <div className="bg-[#0a0a0a] rounded-2xl overflow-hidden">
              <img
                src="https://raw.githubusercontent.com/arpit-deshmukh/Portfolio-Arpit-Deshmukh-v2/main/client/public/core/logo/logo_3.png"
                alt="Arpit Deshmukh"
                className="w-64 md:w-72 h-[340px] md:h-[400px] object-cover opacity-90"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://ui-avatars.com/api/?name=Arpit+Deshmukh&size=400&background=1e3a5f&color=60a5fa&bold=true&font-size=0.33';
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
