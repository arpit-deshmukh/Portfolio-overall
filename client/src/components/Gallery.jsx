import { motion } from 'framer-motion';
import { ImageIcon } from 'lucide-react';

const GALLERY_ITEMS = [
  {
    src: "https://raw.githubusercontent.com/arpit-deshmukh/Portfolio-Arpit-Deshmukh-v2/main/client/public/AD/20241113_141044.jpg",
    caption: "A moment captured",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://raw.githubusercontent.com/arpit-deshmukh/Portfolio-Arpit-Deshmukh-v2/main/client/public/AD/IMG_20250909_102602823_HDR.jpg",
    caption: "Life beyond code",
    span: "col-span-1",
  },
  {
    src: "https://raw.githubusercontent.com/arpit-deshmukh/Portfolio-Arpit-Deshmukh-v2/main/client/public/AD/classic.png",
    caption: "Classic",
    span: "col-span-1",
  },
  {
    src: "https://raw.githubusercontent.com/arpit-deshmukh/Portfolio-Arpit-Deshmukh-v2/main/client/public/AD/itesa_1.jpg",
    caption: "ITESA Events",
    span: "col-span-2",
  },
  {
    src: "https://raw.githubusercontent.com/arpit-deshmukh/Portfolio-Arpit-Deshmukh-v2/main/client/public/AD/debate_grp_cummins.jpg",
    caption: "Debate — Cummins College",
    span: "col-span-1",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="pt-28 pb-20 px-6 max-w-6xl mx-auto text-white scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">A glimpse into my world</p>
        <div className="flex items-center justify-between mb-10">
          <h2 className="section-heading">Gallery</h2>
          <div className="flex items-center gap-2 text-xs text-gray-600 font-mono">
            <ImageIcon size={14} />
            {GALLERY_ITEMS.length} photos
          </div>
        </div>

        <div className="grid grid-cols-3 grid-rows-3 gap-3 h-[580px]">
          {GALLERY_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={`relative overflow-hidden rounded-2xl ${item.span} group cursor-pointer`}
            >
              <img
                src={item.src}
                alt={item.caption}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-90"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.parentElement.style.background = '#18181b';
                  e.target.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="absolute bottom-3 left-4 text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                {item.caption}
              </p>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-600 font-mono mt-4">
          More coming soon — life is being lived 📸
        </p>
      </motion.div>
    </section>
  );
}
