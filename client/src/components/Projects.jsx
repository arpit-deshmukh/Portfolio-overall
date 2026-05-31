import { motion } from 'framer-motion';
import { PROJECTS_DATA } from '../data';
import { ProjectCard } from './cards/ProjectCard';

export function Projects() {
  return (
    <section id="projects" className="pt-28 pb-20 px-6 max-w-6xl mx-auto text-white scroll-mt-20">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p className="section-label">What I've built</p>
        <h2 className="section-heading mb-10">Portfolio</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS_DATA.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
