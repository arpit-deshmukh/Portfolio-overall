import { useState } from 'react';
import { X, ChevronDown } from 'lucide-react';
import { TECH_LINKS } from './navLinks';

function MobileTechMenu({ scrollTo }) {
  const [techOpen, setTechOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setTechOpen(!techOpen)}
        className="flex items-center justify-between px-4 py-3 text-base text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all font-medium w-full text-left"
      >
        Tech
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${techOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {techOpen && (
        <div className="ml-4 flex flex-col gap-1 border-l border-zinc-800 pl-4">
          {TECH_LINKS.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              onClick={(e) => scrollTo(e, href)}
              className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all"
            >
              <Icon size={14} className="text-blue-400" />
              {name}
            </a>
          ))}
        </div>
      )}
    </>
  );
}

export function MobileMenu({ scrollTo, onClose }) {
  const SIMPLE_LINKS = [
    { name: 'Home',     href: '#home'     },
    { name: 'Gallery',  href: '#gallery'  },
    { name: 'Articles', href: '#articles' },
  ];

  return (
    <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10 px-4 py-4 flex flex-col gap-1">
      {SIMPLE_LINKS.map(({ name, href }) => (
        <a
          key={name}
          href={href}
          onClick={(e) => { scrollTo(e, href); onClose(); }}
          className="px-4 py-3 text-base text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all font-medium"
        >
          {name}
        </a>
      ))}

      <MobileTechMenu scrollTo={scrollTo} />

      <a
        href="#contact"
        onClick={(e) => { scrollTo(e, '#contact'); onClose(); }}
        className="px-4 py-3 text-base text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all font-medium text-center mt-2"
      >
        Contact
      </a>
    </div>
  );
}
