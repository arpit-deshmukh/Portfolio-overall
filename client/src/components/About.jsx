import { ABOUT_DATA } from '../data';
import { motion } from 'framer-motion';

const SKILL_GROUPS = [
  { label: 'Languages', items: ['JavaScript', 'C++', 'Java'] },
  { label: 'Frontend', items: ['React', 'Tailwind CSS', 'HTML5', 'CSS3'] },
  { label: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs'] },
  { label: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Linux'] },
];

export function About() {
  return (
    <section id="about" className="pt-28 pb-20 px-6 max-w-6xl mx-auto text-white scroll-mt-20">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p className="section-label">Get to know me</p>
        <h2 className="section-heading mb-10">About Me</h2>

        <div className="grid md:grid-cols-2 gap-10 mb-14">
          <div className="card p-8">
            <p className="text-gray-400 leading-relaxed text-base">{ABOUT_DATA.bio}</p>
            <div className="section-divider mt-8 mb-6" />
            <div className="flex flex-wrap gap-2">
              {ABOUT_DATA.traits.map(t => (
                <span key={t} className="text-xs font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-full">{t}</span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {SKILL_GROUPS.map(({ label, items }) => (
              <div key={label} className="card p-5 card-hover-soft">
                <h3 className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">{label}</h3>
                <ul className="space-y-1.5">
                  {items.map(item => (
                    <li key={item} className="text-sm text-gray-400 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-blue-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
