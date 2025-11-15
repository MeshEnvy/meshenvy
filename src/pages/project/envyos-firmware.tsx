import type { ReactNode } from 'react'
import ProjectDetail from '@site/src/components/ProjectDetail'
import { projectsData } from '@site/src/data/projects'

export default function EnvyOSFirmwareProject(): ReactNode {
  const project = projectsData.find((p) => p.id === 'envyos-firmware')
  if (!project) {
    return <div>Project not found</div>
  }
  return <ProjectDetail project={project} />
}


