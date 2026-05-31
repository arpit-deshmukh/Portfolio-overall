import { motion } from 'framer-motion';

const activities = [
  {
    title: 'ITESA — IT Engineering Students Association',
    description: 'Actively contributed to departmental events, peer-learning circles, and student-led initiatives. Participated in and conducted workshops focused on technology, collaboration, and problem-solving.',
    image: 'https://raw.githubusercontent.com/arpit-deshmukh/Portfolio-Arpit-Deshmukh-v2/main/client/public/activities/arpit_1.png',
  },
  {
    title: 'Tarkashastra — Debate & Communication Club',
    description: 'Participated in debates, group discussions, MUNs, and public-speaking sessions. Developed articulation, negotiation, and diplomatic skills through consistent practice.',
    image: 'https://raw.githubusercontent.com/arpit-deshmukh/Portfolio-Arpit-Deshmukh-v2/main/client/public/activities/t2.png',
  },
];

export function Activities() {
  return (
    <section id="activities" className="pt-28 pb-20 px-6 max-w-6xl mx-auto text-white scroll-mt-20">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p className="section-label">Beyond the code</p>
        <h2 className="section-heading mb-10">Activities</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {activities.map((activity, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="card card-hover group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                  onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/30 to-transparent" />
              </div>
              <div className="p-7">
                <h3 className="text-lg font-bold text-white mb-3 leading-tight">{activity.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{activity.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
