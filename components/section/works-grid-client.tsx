'use client';

import type { WorkProject } from '@/lib/types';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function WorksGridClient({ works }: { works: WorkProject[] }) {
  const itemVariants = (direction: 'left' | 'right') => ({
    hidden: {
      x: direction === 'left' ? -100 : 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 20,
      },
    },
  });

  if (!works || works.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-white/80">制作物はまだありません。</p>
      </div>
    );
  }

  return (
    <div className="space-y-16 md:space-y-24">
      {works.map((work, index) => {
        const isOdd = index % 2 !== 0;
        const direction = isOdd ? 'right' : 'left';

        return (
          <motion.div
            key={work._id}
            className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 group`}
            variants={itemVariants(direction)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="w-full md:w-1/2 lg:w-2/5 relative aspect-video overflow-hidden rounded-lg shadow-lg shadow-black/30 border border-white/10 group-hover:border-yellow-300/50 transition-colors duration-300">
              {work.image ? (
                <Image
                  src={work.image.src}
                  alt={work.image.altText || work.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-white/5 flex items-center justify-center text-white/30">
                  No Image
                </div>
              )}
            </div>

            <div className="w-full md:w-1/2 lg:w-3/5">
              <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-yellow-300 transition-colors">
                {work.title}
              </h3>
              <p className="text-white/70 text-base mb-4">
                {work.description}
              </p>
              {work.categoryName && (
                <span className="text-sm font-medium text-white/80 bg-white/10 px-3 py-1 rounded-full inline-block">
                  {work.categoryName}
                </span>
              )}
              {/* {work.url && (
                <a href={work.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-yellow-300 hover:text-yellow-100 transition-colors">
                  View Project →
                </a>
              )} */}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
