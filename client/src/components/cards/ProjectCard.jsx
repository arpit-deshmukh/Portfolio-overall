import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';

export function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card card-hover group flex flex-col h-full"
    >
      <div className="relative h-40 overflow-hidden flex-shrink-0">
        <img
          src={project.image || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800'}
          alt={project.title}
          className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-base font-bold text-white leading-tight">{project.title}</h3>
          <div className="flex gap-2 flex-shrink-0 ml-3">
            {project.github && project.github !== '#' && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-400 transition-colors">
                <Code size={16} />
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-400 transition-colors">
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
        <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tags.map(tag => (
            <span key={tag} className="tech-tag" style={{ fontSize: '0.65rem', padding: '0.2rem 0.5rem' }}>{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
