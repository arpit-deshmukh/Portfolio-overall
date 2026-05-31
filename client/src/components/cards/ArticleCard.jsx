import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function ArticleCard({ article, index }) {
  return (
    <motion.a
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="card card-hover-soft group flex flex-col md:flex-row justify-between md:items-center gap-4 p-6"
    >
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-mono text-gray-500">{article.date}</span>
          <span className="text-xs text-gray-600">·</span>
          <span className="text-xs font-mono text-gray-500">{article.readTime}</span>
        </div>
        <h3 className="text-base font-semibold text-white mb-1.5 group-hover:text-blue-400 transition-colors leading-snug">
          {article.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{article.excerpt}</p>
      </div>
      <ArrowUpRight
        size={20}
        className="text-gray-600 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0"
      />
    </motion.a>
  );
}
