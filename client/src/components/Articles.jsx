import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen } from 'lucide-react';

const ARTICLES = [
  {
    id: 1,
    title: "The Liberty of Mill: The Cost of Letting Others Be Free",
    excerpt: "John Stuart Mill's On Liberty raises urgent questions about free speech, cancel culture, and the limits of individual freedom that feel strangely contemporary.",
    date: "May 1, 2026",
    link: "https://medium.com/@arpitdeshmukh21/the-liberty-of-mill-the-cost-of-letting-others-be-free-b58d2e9771b9",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "Bhagat Singh: The Icon to Look Up",
    excerpt: "A 23-year-old executed for challenging one of the most powerful empires in history. Why does a revolutionary from the 1920s still raise urgent questions for youth today?",
    date: "Mar 22, 2026",
    link: "https://medium.com/@arpitdeshmukh21/bhagat-singh-the-icon-to-look-up-36e158985acb",
    readTime: "10 min read",
  },
  {
    id: 3,
    title: "Markets, Morality, and the Invisible Hand of Adam Smith",
    excerpt: "The invisible hand is endlessly quoted and frequently abused. Smith's idea was neither blind praise nor reckless faith — it was a conditional, cautious observation.",
    date: "Feb 28, 2026",
    link: "https://medium.com/@arpitdeshmukh21/markets-morality-and-the-invisible-hand-of-adam-smith-e695104fa237",
    readTime: "9 min read",
  },
  {
    id: 4,
    title: "In Search of the Citizen",
    excerpt: "Citizenship is not a fixed label. It is something we do, not just something we have. Are we citizens — or just consumers of the state?",
    date: "Feb 4, 2026",
    link: "https://medium.com/@arpitdeshmukh21/in-search-of-the-citizen-426927933780",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "Kropotkin's Question for a World of Abundance",
    excerpt: "If society can produce abundance, why does basic security remain out of reach for so many? Kropotkin's ideas refuse to go away.",
    date: "Jan 12, 2026",
    link: "https://medium.com/@arpitdeshmukh21/kropotkins-question-for-a-world-of-abundance-ca5683234424",
    readTime: "8 min read",
  },
  {
    id: 6,
    title: "Social Contract: The Quiet Agreement That Holds a Nation Together",
    excerpt: "A country is not held together by borders alone. It survives on something far more fragile — trust.",
    date: "Dec 25, 2025",
    link: "https://medium.com/@arpitdeshmukh21/social-contract-the-quiet-agreement-that-holds-a-nation-together-b54b424156c1",
    readTime: "7 min read",
  },
];

export function Articles() {
  return (
    <section id="articles" className="pt-28 pb-20 px-6 max-w-6xl mx-auto text-white scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">My writing on Medium</p>
        <div className="flex items-center justify-between mb-10">
          <h2 className="section-heading">Articles</h2>
          <a
            href="https://medium.com/@arpitdeshmukh21"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-400 transition-colors font-medium"
          >
            <BookOpen size={16} />
            View all on Medium
            <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="flex flex-col gap-4">
          {ARTICLES.map((article, i) => (
            <motion.a
              key={article.id}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
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
          ))}
        </div>
      </motion.div>
    </section>
  );
}
