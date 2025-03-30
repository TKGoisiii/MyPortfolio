// This is now a Server Component

import { getWorkProjects } from '@/lib/newt';
import type { WorkProject } from '@/lib/types';
import { WorksGridClient } from './works-grid-client'; // Import the Client Component

// Server Component for data fetching and structure
export async function WorksGrid() {
  // Fetch data on the server
  const works: WorkProject[] = await getWorkProjects(6);

  // Handle case where there are no works
  if (!works || works.length === 0) {
    return (
      <section id="works" className="py-20 bg-gradient-to-b from-black/10 to-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-100 to-yellow-400">
              My Works
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              これまでに制作したプロジェクトの一覧です
            </p>
          </div>
          <div className="text-center py-10">
            <p className="text-white/80">制作物はまだありません。</p>
          </div>
        </div>
      </section>
    );
  }

  // Render the section structure and pass data to the Client Component
  return (
    <section id="works" className="py-20 bg-gradient-to-b from-black/10 to-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-100 to-yellow-400">
            My Works
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            これまでに制作したプロジェクトの一覧です
          </p>
        </div>
        {/* Render Client Component with fetched data */}
        <WorksGridClient works={works} />
      </div>
    </section>
  );
}
