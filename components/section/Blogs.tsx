// This is now a Server Component
import Link from 'next/link';
import { getBlogArticles } from '@/lib/newt';
import type { BlogArticle } from '@/lib/types';
import { BlogsListClient } from './blogs-list-client'; // Import the Client Component

interface BlogsSectionProps {
  limit?: number;
}

export async function BlogsSection({ limit = 3 }: BlogsSectionProps) {
  const blogs: BlogArticle[] = await getBlogArticles(limit);

  // Handle case where there are no blogs
  if (!blogs || blogs.length === 0) {
    return (
      <section id="blog" className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Blog Articles</h2>
            <p className="text-white/80">
              技術以外の、日常的なこととか(将来的に別サイトに移行予定)
            </p>
          </div>
          <p className="text-white/80 text-center py-10">記事はまだありません。</p>
        </div>
      </section>
    );
  }

  // Render the section structure and pass data to the Client Component
  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Blog Articles</h2>
          <p className="text-white/80">
            技術以外の、日常的なこととか(将来的に別サイトに移行予定)
          </p>
        </div>

        {/* Render Client Component with fetched data */}
        <BlogsListClient blogs={blogs} />

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-block px-6 py-3 text-white font-medium bg-white/10 hover:bg-white/20 rounded-md transition-colors"
          >
            もっと見る
          </Link>
        </div>
      </div>
    </section>
  );
}
