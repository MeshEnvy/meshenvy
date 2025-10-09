import type { ReactNode } from 'react'
import Layout from '@theme/Layout'
import Heading from '@theme/Heading'
import Link from '@docusaurus/Link'
import type { Project } from '@site/src/data/projects'
import styles from './ProjectDetail.module.css'

interface ProjectDetailProps {
  project: Project
}

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

function getDifficultyColor(difficulty: string): string {
  switch (difficulty) {
    case 'easy':
      return 'var(--ifm-color-success)'
    case 'medium':
      return 'var(--ifm-color-warning)'
    case 'hard':
      return 'var(--ifm-color-danger)'
    default:
      return 'var(--ifm-color-secondary)'
  }
}

export default function ProjectDetail({ project }: ProjectDetailProps): ReactNode {
  const sortedUpdates = [...project.updates].sort((a, b) => b.date.getTime() - a.date.getTime())

  return (
    <Layout title={project.title} description={project.description}>
      <div className={styles.projectDetailPage}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link to="/projects">← Back to Projects</Link>
          </div>

          <div className={styles.projectHeader}>
            <div>
              <Heading as="h1" className={styles.projectTitle}>
                {project.title}
              </Heading>
              <span className={styles.projectStatus} style={{ backgroundColor: getStatusColor(project.status) }}>
                {getStatusLabel(project.status)}
              </span>
            </div>
            <div className={styles.projectMeta}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span>Started {project.startDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
            </div>
          </div>

          <p className={styles.projectDescription}>{project.description}</p>

          <div className={styles.contentGrid}>
            <div className={styles.mainColumn}>
              <div className={styles.section}>
                <Heading as="h2" className={styles.sectionTitle}>
                  Project Updates
                </Heading>

                <div className={styles.timeline}>
                  {sortedUpdates.map((update, index) => (
                    <div key={`${update.date.toISOString()}-${index}`} className={styles.timelineItem}>
                      <div className={styles.timelineDot}></div>
                      <div className={styles.timelineContent}>
                        <div className={styles.updateHeader}>
                          <h3 className={styles.updateTitle}>{update.title}</h3>
                          <span className={styles.updateDate}>
                            {update.date.toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </span>
                        </div>
                        <p className={styles.updateDescription}>{update.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.sidebar}>
              {project.checklist && (
                <div className={styles.section}>
                  <Heading as="h3" className={styles.sectionTitle}>
                    Project Checklist
                  </Heading>

                  <div className={styles.progressSummary}>
                    <div className={styles.progressBar}>
                      <div
                        className={styles.progressFill}
                        style={{
                          width: `${(project.checklist.filter((item) => item.completed).length / project.checklist.length) * 100}%`,
                        }}
                      ></div>
                    </div>
                    <span className={styles.progressText}>
                      {project.checklist.filter((item) => item.completed).length} of {project.checklist.length}{' '}
                      completed
                    </span>
                  </div>

                  <div className={styles.checklist}>
                    {project.checklist.map((item, index) => (
                      <div key={index} className={styles.checklistItem}>
                        <div className={styles.checklistHeader}>
                          <div className={styles.checklistCheckbox}>
                            {item.completed ? (
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <polyline points="20 6 9 17 4 12" strokeWidth="2"></polyline>
                              </svg>
                            ) : (
                              <div className={styles.uncheckedBox}></div>
                            )}
                          </div>
                          <div className={styles.checklistContent}>
                            <h4 className={styles.checklistTitle}>{item.title}</h4>
                            {item.description && <p className={styles.checklistDescription}>{item.description}</p>}
                          </div>
                        </div>
                        <span
                          className={styles.difficultyBadge}
                          style={{ backgroundColor: getDifficultyColor(item.difficulty) }}
                        >
                          {item.difficulty}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

