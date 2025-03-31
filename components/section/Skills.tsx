'use client'

import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';

const skills = [
  'Next.js', 'TypeScript', 'React', 'Vue.js', 'Nuxt.js', 'Tailwind CSS', 'JavaScript',
  'HTML5', 'CSS3', 'Node.js', 'Express', 'WordPress', 'Sitecore', 'C#', 
  'Git', 'Supabase', 'REST API', 'GraphQL'
];

// 球体上の座標を計算するヘルパー関数
const computePosition = (index: number, total: number, radius: number) => {
  const phi = Math.acos(-1 + (2 * index) / total);
  const theta = Math.sqrt(total * Math.PI) * phi;

  const x = radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.sin(phi) * Math.sin(theta);
  const z = radius * Math.cos(phi);

  return { x, y, z };
};

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const controls = useAnimation();
  const [tagPositions, setTagPositions] = useState<{ x: number; y: number; z: number }[]>([]);
  const radius = 150; // 球体の半径 (px) - ビューポートに応じて調整可能

  useEffect(() => {
    const positions = skills.map((_, index) => computePosition(index, skills.length, radius));
    setTagPositions(positions);
  }, []); // コンポーネントマウント時に一度だけ計算

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, scale: 1 });
    }
  }, [isInView, controls]);

  return (
    <section ref={ref} className="py-20 overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            My Skills
          </h2>
        </div>

        <motion.div
          className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]" // Container size
          style={{ perspective: '1000px' }} // Enable 3D perspective
          initial={{ opacity: 0, scale: 0.8 }}
          animate={controls}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="absolute w-full h-full"
            style={{ transformStyle: 'preserve-3d' }}
            animate={{ rotateY: 360 }} // Continuous rotation
            transition={{ duration: 25, ease: 'linear', repeat: Infinity }}
          >
            {tagPositions.map((pos, index) => (
              <motion.span
                key={skills[index]}
                className="absolute top-1/2 left-1/2 text-white text-sm sm:text-base font-medium cursor-default hover:text-yellow-300 transition-colors duration-200"
                style={{
                  // 初期位置を中心に設定し、計算された3D座標でオフセット
                  x: '-50%', // translateX(-50%)
                  y: '-50%', // translateY(-50%)
                  // transform は motion コンポーネントが管理
                }}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  // 3D空間での位置を設定
                  transform: `translate3d(${pos.x}px, ${pos.y}px, ${pos.z}px) translateX(-50%) translateY(-50%)`,
                }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
              >
                {skills[index]}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
