// This is now a Server Component
import Link from 'next/link';
import Image from 'next/image';
import { getZennArticles } from '@/lib/zenn';
import type { ZennArticle } from '@/lib/zenn'; // Import type for clarity
import { ZennBlogsListClient } from './zenn-blogs-list-client'; // Import the Client Component

interface ZennBlogsSectionProps {
  limit?: number;
}

export async function ZennBlogsSection({ limit = 3 }: ZennBlogsSectionProps) {
  const articles: ZennArticle[] = await getZennArticles(limit);

  // Handle case where there are no articles
  if (!articles || articles.length === 0) {
    return (
      <section id="zenn-blog" className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white flex items-center gap-2">
              <Image
                src="https://zenn.dev/images/logo-transparent.png"
                alt="Zenn"
                width={24}
                height={24}
                className="mr-2"
              />
              Zenn Articles
            </h2>
            <p className="text-white/80">Zennに投稿した技術記事</p>
          </div>
          <p className="text-white/80 text-center py-10">記事はまだありません。</p>
        </div>
      </section>
    );
  }

  // Render the section structure and pass data to the Client Component
  return (
    <section id="zenn-blog" className="py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white flex items-center gap-2">
            <Image
              src="https://zenn.dev/images/logo-transparent.png"
              alt="Zenn"
              width={24}
              height={24}
              className="mr-2"
            />
            Zenn Articles
          </h2>
          <p className="text-white/80">Zennに投稿した技術記事</p>
        </div>

        {/* Render Client Component with fetched data */}
        <ZennBlogsListClient articles={articles} />

        <div className="mt-12 text-center">
          <Link
            href="https://zenn.dev/tkay"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 text-white font-medium bg-white/10 hover:bg-white/20 rounded-md transition-colors"
          >
            Zennで全て見る
          </Link>
        </div>
      </div>
    </section>
  )
}
