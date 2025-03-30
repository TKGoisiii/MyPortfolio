import { HeroSection } from '@/components/section/Hero'
import { WorksGrid } from '@/components/section/Works'
import { SkillsSection } from '@/components/section/Skills'
import { BlogsSection } from '@/components/section/Blogs'
import { ZennBlogsSection } from '@/components/section/ZennBlogs'
import Profile from '@/components/section/Profile';

export default async function Home() {
  return (
    <>
      <HeroSection />
      <Profile />
      <SkillsSection />
      <WorksGrid />
      <ZennBlogsSection />
      <BlogsSection />
    </>
  )
}
