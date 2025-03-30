import { BlogsSection } from '@/components/section/Blogs'

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <BlogsSection limit={10} />
    </div>
  )
}
