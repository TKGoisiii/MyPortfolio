import { getWorkProjects } from '@/lib/newt';
import type { WorkProject } from '@/lib/types';
import { WorksGridClient } from './works-grid-client';

export async function WorksGrid() {
  const works: WorkProject[] = await getWorkProjects(6);

  if (!works || works.length === 0) {
    return (
      <section id="Works" className="py-20 bg-gradient-to-b from-black/10 to-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
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

  return (
    <section id="works" className="py-20 bg-gradient-to-b from-black/10 to-transparent">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            My Works
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            これまでに制作したプロジェクトの一覧です
          </p>
        </div>
        <WorksGridClient works={works} />
      </div>
    </section>
  );
}
