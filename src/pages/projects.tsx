import type { ReactNode } from 'react'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import { projectsData } from '@site/src/data/projects'
import styles from './projects.module.css'
import PageHeader from '@site/src/components/PageHeader'

function getStatusColor(status: string): string {
  switch (status) {
    case 'active':
      return 'var(--ifm-color-success)'
    case 'planning':
      return 'var(--ifm-color-info)'
    case 'completed':
      return 'var(--ifm-color-primary)'
    case 'on-hold':
      return 'var(--ifm-color-warning)'
    default:
      return 'var(--ifm-color-secondary)'
  }
}

function getStatusLabel(status: string): string {
  switch (status) {
    case 'active':
      return 'Active'
    case 'planning':
      return 'Planning'
    case 'completed':
      return 'Completed'
    case 'on-hold':
      return 'On Hold'
    default:
      return status
  }
}

export default function Projects(): ReactNode {
  // Sort projects: active first, then by latest update date
  const sortedProjects = [...projectsData].sort((a, b) => {
    // Active projects come first
    if (a.status === 'active' && b.status !== 'active') return -1
    if (a.status !== 'active' && b.status === 'active') return 1

    // Within same status, sort by latest update
    const aLatest = a.updates.length > 0 ? a.updates[a.updates.length - 1].date : a.startDate
    const bLatest = b.updates.length > 0 ? b.updates[b.updates.length - 1].date : b.startDate
    return bLatest.getTime() - aLatest.getTime()
  })

  return (
    <Layout title="Projects" description="MeshEnvy's ongoing projects to build Nevada's mesh network">
      <div className={styles.projectsPage}>
        <div className="container">
          <PageHeader
            title="Our Projects"
            description="We're building Nevada's mesh network through concrete projects that expand coverage, improve infrastructure, and connect communities across the state. Track our progress and get involved!"
          />

          <div className={styles.projectsList}>
            {sortedProjects.map((project) => (
              <div key={project.id} className={styles.projectCard}>
                <div className={styles.projectHeader}>
                  <div>
                    <h2 className={styles.projectTitle}>
                      <Link to={`/project/${project.id}`} className={styles.projectLink}>
                        {project.title}
                      </Link>
                    </h2>
                    <span className={styles.projectStatus} style={{ backgroundColor: getStatusColor(project.status) }}>
                      {getStatusLabel(project.status)}
                    </span>
                  </div>
                  <div className={styles.projectMeta}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span>Started {project.startDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                  </div>
                </div>

                <p className={styles.projectDescription}>{project.description}</p>

                {project.checklist && (
                  <div className={styles.projectProgress}>
                    <div className={styles.progressBar}>
                      <div
                        className={styles.progressFill}
                        style={{
                          width: `${(project.checklist.filter((item) => item.completed).length / project.checklist.length) * 100}%`,
                        }}
                      ></div>
                    </div>
                    <span className={styles.progressText}>
                      {project.checklist.filter((item) => item.completed).length} of {project.checklist.length} tasks
                      completed
                    </span>
                  </div>
                )}

                <div className={styles.projectFooter}>
                  <span className={styles.updatesCount}>
                    {project.updates.length} {project.updates.length === 1 ? 'update' : 'updates'}
                  </span>
                  <Link to={`/project/${project.id}`} className={styles.viewProjectLink}>
                    View Project →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

