import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="pt-28 pb-20 px-6 max-w-6xl mx-auto text-white scroll-mt-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.6 }}
      >
        <div className="card p-8 md:p-10 mb-14 border border-zinc-800/50 bg-[#111113]">
          <p className="text-gray-300 leading-relaxed text-base font-medium">
            I believe technology holds the key to solving some of the world's most complex challenges and rising problems. By leveraging our skills in coding, problem-solving, and innovation, we should aim to create solutions that not only drive growth but also make a <span className="text-blue-400">positive impact on society</span>.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
