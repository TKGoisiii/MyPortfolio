import { getBlogArticleBySlug } from '@/lib/newt'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Tag } from '@/lib/types'
import '@/styles/BlogContent.css'; 

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const article = await getBlogArticleBySlug(params.slug)
  if (!article) {
    return notFound()
  }
  
  return {
    title: article?.title || '記事が見つかりません',
    description: article?.meta?.description || '',
  }
}

export default async function BlogDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const article = await getBlogArticleBySlug(params.slug);
  if (!article) {
    return notFound()
  }

  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <article className="bg-gray-900/50 rounded-xl p-6 md:p-8">
        {article.coverImage && (
          <div className="relative w-full h-80 md:h-96 mb-8 rounded-xl overflow-hidden">
            <Image
              src={article.coverImage.src}
              alt={article.coverImage.altText || article.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        )}

        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="text-sm text-white/80 mb-8 flex items-center gap-2">
            <span className="bg-white/10 px-2 py-1 rounded">
              {new Date(article._sys.updatedAt).toLocaleDateString('ja-JP', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>
        </header>

        <div 
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: article.body }}
        />

        {article.tags && article.tags.length > 0 && (
          <div className="mt-12 flex flex-wrap gap-3">
            {article.tags.map((tag: Tag) => (
              <span 
                key={tag.name}
                className="px-4 py-1.5 bg-white/10 text-white/90 rounded-full text-sm
                          hover:bg-white/20 transition-colors duration-200"
              >
                {tag.name}
              </span>
            ))}
          </div>
        )}
      </article>
    </div>
  )
}
