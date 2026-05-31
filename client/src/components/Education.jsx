import { motion } from 'framer-motion';

const EDUCATION = [
  {
    degree: 'Bachelor of Engineering (Information Technology)',
    institute: 'D. Y. Patil College of Engineering (DYPCOE), Akurdi, Pune',
    year: '2023 – 2027',
    description: 'Pursuing Bachelor of Engineering in Information Technology, focusing on software development, system fundamentals, and building real-world projects using modern technologies.',
    score: 'CGPA: 8.7',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institute: 'Brijlal Biyani College of Science and Technology, Amravati',
    year: '2021 – 2023',
    description: 'Studied core science subjects including Physics, Chemistry, and Mathematics, building strong analytical and problem-solving skills.',
    score: 'Score: 81.83%',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institute: 'New English High School, Amravati',
    year: '2020 – 2021',
    description: 'Completed secondary education with distinction, laying a strong academic foundation.',
    score: 'Score: 95.20%',
  },
];

export function Education() {
  return (
    <section id="education" className="pt-28 pb-20 px-6 max-w-6xl mx-auto text-white scroll-mt-20">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p className="section-label">My academic background</p>
        <h2 className="section-heading mb-10">Education</h2>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-zinc-800" />

          <div className="space-y-8">
            {EDUCATION.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
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
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
