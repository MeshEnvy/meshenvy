import type { ReactNode } from 'react'
import ProjectDetail from '@site/src/components/ProjectDetail'
import { projectsData } from '@site/src/data/projects'

export default function NonprofitFormationProject(): ReactNode {
  const project = projectsData.find((p) => p.id === 'nonprofit-formation')
  if (!project) {
    return <div>Project not found</div>
  }
  return <ProjectDetail project={project} />
}

