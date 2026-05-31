import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { TechDropdown } from './navbar/TechDropdown';
import { MobileMenu } from './navbar/MobileMenu';

function useScrollTo() {
  return (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
  };
}

function NavLogo({ onClick }) {
  return (
    <a href="#home" onClick={onClick} className="text-xl font-semibold text-white tracking-wide">
      <span className="text-blue-400">Arpit</span> Deshmukh
    </a>
  );
}

function DesktopNav({ scrollTo, techOpen, setTechOpen }) {
  const links = [
    { name: 'Home',    href: '#home'    },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Articles',href: '#articles'},
  ];

  return (
    <div className="hidden md:flex items-center gap-8">
      <a
        href="#home"
        onClick={(e) => scrollTo(e, '#home')}
        className="text-sm text-gray-400 hover:text-white transition-colors font-medium"
      >
        Home
      </a>

      <TechDropdown open={techOpen} setOpen={setTechOpen} scrollTo={scrollTo} />

      {links.slice(1).map(({ name, href }) => (
        <a
          key={name}
          href={href}
          onClick={(e) => scrollTo(e, href)}
          className="text-sm text-gray-400 hover:text-white transition-colors font-medium"
        >
          {name}
        </a>
      ))}

      <a
        href="#contact"
        onClick={(e) => scrollTo(e, '#contact')}
        className="text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 px-4 py-1.5 rounded-lg transition-colors"
      >
        Contact
      </a>
    </div>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [techOpen, setTechOpen]     = useState(false);
  const scrollTo = useScrollTo();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <NavLogo onClick={(e) => scrollTo(e, '#home')} />

        <DesktopNav
          scrollTo={scrollTo}
          techOpen={techOpen}
          setTechOpen={setTechOpen}
        />

        <button
          className="md:hidden text-gray-400 hover:text-white transition-colors p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <MobileMenu
          scrollTo={scrollTo}
          onClose={() => setMobileOpen(false)}
        />
      )}
    </nav>
  );
}
