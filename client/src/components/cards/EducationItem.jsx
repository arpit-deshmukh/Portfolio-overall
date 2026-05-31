import { motion } from 'framer-motion';

export function EducationItem({ edu, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative pl-16"
    >
      <div className="absolute left-[18px] top-5 w-4 h-4 rounded-full bg-blue-500 border-2 border-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.5)]" />

      <div className="card card-hover-soft p-7">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
          <div>
            <h3 className="text-lg font-bold text-white leading-tight">{edu.degree}</h3>
            <p className="text-blue-400 text-sm font-medium mt-1">{edu.institute}</p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-1 flex-shrink-0">
            <span className="text-xs font-mono text-gray-500 bg-zinc-800 px-3 py-1 rounded-full">{edu.year}</span>
            <span className="text-xs font-semibold text-green-400">{edu.score}</span>
          </div>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed">{edu.description}</p>
      </div>
    </motion.div>
  );
}
