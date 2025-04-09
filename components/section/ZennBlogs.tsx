// This is now a Server Component
import Link from 'next/link';
import Image from 'next/image';
import { getZennArticles } from '@/lib/zenn';
import type { ZennArticle } from '@/lib/zenn';
import { ZennBlogsListClient } from './zenn-blogs-list-client';

interface ZennBlogsSectionProps {
  limit?: number;
}

export async function ZennBlogsSection({ limit = 3 }: ZennBlogsSectionProps) {
  const articles: ZennArticle[] = await getZennArticles(limit);

  if (!articles || articles.length === 0) {
    return (
      <section id="zenn-blog" className="py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4 inline-flex items-center justify-center gap-2">
            <Image
              src="https://zenn.dev/images/logo-transparent.png"
              alt="Zenn"
              width={24}
              height={24}
            />
            Zenn Articles
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">Zennに投稿した技術記事</p>
        </div>
          <p className="text-white/80 text-center py-10">記事はまだありません。</p>
        </div>
      </section>
    );
  }

  return (
    <section id="zenn-blog" className="py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4 inline-flex items-center justify-center gap-2">
            <Image
              src="https://zenn.dev/images/logo-transparent.png"
              alt="Zenn"
              width={24}
              height={24}
            />
            Zenn Articles
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">Zennに投稿した技術記事</p>
        </div>
        
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
