import { useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { TECH_LINKS } from './navLinks';

export function TechDropdown({ open, setOpen, scrollTo }) {
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [setOpen]);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors duration-200 font-medium"
      >
        Tech
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 rounded-2xl bg-zinc-900/95 backdrop-blur-xl border border-zinc-800 shadow-2xl shadow-black/60 overflow-hidden">
          <div className="p-1.5">
            {TECH_LINKS.map(({ name, href, icon: Icon, desc }) => (
              <a
                key={name}
                href={href}
                onClick={(e) => scrollTo(e, href)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                  <Icon size={15} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white leading-none mb-1">{name}</p>
                  <p className="text-xs text-gray-500">{desc}</p>
                </div>
              </a>
            ))}
          </div>
          <div className="h-px bg-zinc-800 mx-3" />
          <div className="px-3 py-2">
            <p className="text-[10px] text-gray-600 uppercase tracking-widest font-mono px-2 py-1">
              Technical sections
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
