'use client';

import Link from 'next/link';
import type { ZennArticle } from '@/lib/zenn';
import { format, parseISO, isValid } from 'date-fns';
import { motion } from 'framer-motion';

const formatDate = (dateString: string | undefined | null): string => {
  if (!dateString) {
    console.warn("formatDate received undefined or null dateString");
    return "Date unavailable";
  }

  try {
    const date = parseISO(dateString);
    if (!isValid(date)) {
      console.warn(`formatDate received invalid date string: "${dateString}"`);
      return "Invalid Date";
    }
    return format(date, 'yyyy-MM-dd');
  } catch (error) {
    console.error(`Error formatting date: "${dateString}"`, error);
    return dateString;
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

export function ZennBlogsListClient({ articles }: { articles: ZennArticle[] }) {
  if (!articles || articles.length === 0) {
    return <p className="text-white/80 text-center py-10">記事はまだありません。</p>;
  }

  return (
    <motion.div
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {articles.map((article) => (
        <motion.div key={`zenn-${article.id}`} variants={itemVariants}>
          <Link
            href={`https://zenn.dev${article.path}`}
            target="_blank"
            rel="noopener noreferrer"
            legacyBehavior
          >
            <a className="block group border-b border-white/10 pb-8 p-4 cursor-pointer mb-4 hover:bg-white/5 rounded-md">
              <span className="text-sm text-white/60">{formatDate(article.published_at)}</span>
              <h3 className="text-xl font-bold text-white mt-2 mb-1 group-hover:text-yellow-300 transition-colors">
                {article.title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-white/60 mb-3">
                {article.emoji && <span>{article.emoji}</span>}
                <span>{article.body_letters_count}文字</span>
              </div>
            </a>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
