'use client';

import Link from 'next/link';
import type { BlogArticle } from '@/lib/types';
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

export function BlogsListClient({ blogs }: { blogs: BlogArticle[] }) {
  if (!blogs || blogs.length === 0) {
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
      {blogs.map((blog) => (
        <motion.div key={blog._id} variants={itemVariants}>
          <Link href={`/blog/${blog.slug}`} legacyBehavior>
            <a className="block group border-b border-white/10 pb-8 p-4 transition-colors duration-200 cursor-pointer mb-4 hover:bg-white/5 rounded-md">
              <span className="text-sm text-white/60">{formatDate(blog._sys.updatedAt)}</span>
              <h3 className="text-xl font-bold text-white mt-2 mb-3 group-hover:text-yellow-300 transition-colors">
                {blog.title}
              </h3>
              {blog.categoryName && (
                <span className="inline-block text-xs font-medium text-white/90 bg-white/10 px-3 py-1 rounded-full">
                  {blog.categoryName}
                </span>
              )}
            </a>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
