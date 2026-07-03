import { motion } from 'framer-motion';
import { ImageIcon } from 'lucide-react';

const GALLERY_ITEMS = [
  // {
  //   src: "/AD/moment-captured.jpg",
  //   caption: "A moment captured",
  //   span: "col-span-1 row-span-2",
  // },
  {
    src: "/AD/life-beyond-code.jpg",
    caption: "Life beyond code",
    span: "col-span-1",
  },
  {
    src: "/AD/classic.png",
    caption: "Classic",
    span: "col-span-1",
  },
  {
    src: "/AD/itesa-events.jpg",
    caption: "ITESA Events",
    span: "col-span-2",
  },
  // {
  //   src: "/AD/debate-cummins.jpg",
  //   caption: "Debate — Cummins College",
  //   span: "col-span-1",
  // },
  {
    src: "/AD/image1.jpg",
    caption: "Memories",
    span: "col-span-1",
  },
  {
    src: "/AD/image2.jpg",
    caption: "Moments",
    span: "col-span-1",
  },
  {
    src: "/AD/image3.jpg",
    caption: "Snapshots",
    span: "col-span-1",
  },
  {
    src: "/AD/image4.jpg",
    caption: "Adventures",
    span: "col-span-1",
  },
  // {
  //   src: "/AD/image5.jpg",
  //   caption: "Throwback",
  //   span: "col-span-2",
  // },
  {
    src: "/AD/image6.jpg",
    caption: "Highlights",
    span: "col-span-1",
  },
  {
    src: "/AD/image7.jpeg",
    caption: "Connections",
    span: "col-span-1",
  },
  {
    src: "/AD/image8.jpeg",
    caption: "Frames",
    span: "col-span-1",
  },
  {
    src: "/AD/image9.jpeg",
    caption: "Experiences",
    span: "col-span-1",
  },
  {
    src: "/AD/image10.jpg",
    caption: "Journeys",
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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[250px]">
          {GALLERY_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={`relative overflow-hidden rounded-2xl ${item.span} group cursor-pointer bg-zinc-900/40 border border-zinc-800`}
            >
              <img
                src={item.src}
                alt={item.caption}
                className="w-full h-full object-contain transition-all duration-500 group-hover:scale-105 group-hover:opacity-90"
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
