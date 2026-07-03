import { Mail, Code, Briefcase } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20 py-8 text-gray-400 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          © {year} <span className="text-white font-semibold">Arpit Deshmukh</span>. Built with React &amp; Tailwind CSS.
        </p>

        <div className="flex items-center gap-5">
          <a href="https://github.com/arpit-deshmukh" target="_blank" rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors">
            <Code size={20} />
          </a>
          <a href="https://www.linkedin.com/in/arpit-deshmukh-08877227a/" target="_blank" rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-400 transition-colors">
            <Briefcase size={20} />
          </a>
          <a href="mailto:arpit.deshmukh@email.com"
            className="text-gray-500 hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
