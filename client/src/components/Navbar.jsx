import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { TechDropdown } from './navbar/TechDropdown';
import { MobileMenu } from './navbar/MobileMenu';

function useScrollTo() {
  return (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
  };
}

function useDarkMode() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
}

function NavLogo({ onClick }) {
  return (
    <a href="#home" onClick={onClick} className="text-xl font-semibold text-gray-900 dark:text-white tracking-wide">
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
        className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
      >
        Home
      </a>

      <TechDropdown open={techOpen} setOpen={setTechOpen} scrollTo={scrollTo} />

      {links.slice(1).map(({ name, href }) => (
        <a
          key={name}
          href={href}
          onClick={(e) => scrollTo(e, href)}
          className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
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
  const [darkMode, setDarkMode]     = useDarkMode();
  const scrollTo = useScrollTo();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/70 dark:bg-black/40 border-b border-gray-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <NavLogo onClick={(e) => scrollTo(e, '#home')} />

        <div className="flex items-center gap-6">
          <DesktopNav
            scrollTo={scrollTo}
            techOpen={techOpen}
            setTechOpen={setTechOpen}
          />

          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            className="md:hidden text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
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