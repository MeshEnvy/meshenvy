import type { ReactNode } from 'react'
import Layout from '@theme/Layout'
import Heading from '@theme/Heading'
import { eventsData } from '@site/src/data/events'
import styles from './events.module.css'

function formatEventDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  })
}

export default function Events(): ReactNode {
  const now = new Date()
  const upcomingEvents = eventsData.filter((event) => event.date >= now).sort((a, b) => a.date.getTime() - b.date.getTime())
  const pastEvents = eventsData.filter((event) => event.date < now).sort((a, b) => b.date.getTime() - a.date.getTime())

  return (
    <Layout title="Events" description="Upcoming Meshtastic in-person events and meetups in Nevada">
      <div className={styles.eventsPage}>
        <div className="container">
          <Heading as="h1" className={styles.pageTitle}>
            Upcoming Events
          </Heading>

          <div className={styles.introSection}>
            <p>
              Join us at in-person events throughout Nevada to learn about Meshtastic, test equipment, and connect with
              fellow mesh networking enthusiasts. Everyone is welcome, from beginners to experts!
            </p>
          </div>

          <div className={styles.categoriesContainer}>
            {upcomingEvents.length > 0 && (
              <div className={styles.categorySection}>
                <Heading as="h2" className={styles.categoryTitle}>
                  Upcoming Events
                </Heading>
                <p className={styles.categoryDescription}>Join us at these upcoming in-person Meshtastic events</p>

                <div className={styles.eventsList}>
                  {upcomingEvents.map((event) => (
                    <div key={`${event.title}-${event.date.toISOString()}`} className={styles.eventCard}>
                      <div className={styles.eventContent}>
                        <h3 className={styles.eventTitle}>{event.title}</h3>
                        <div className={styles.eventMeta}>
                          <div className={styles.eventDate}>
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                              <line x1="16" y1="2" x2="16" y2="6"></line>
                              <line x1="8" y1="2" x2="8" y2="6"></line>
                              <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                            <span>{formatEventDate(event.date)}</span>
                          </div>
                          <div className={styles.eventLocation}>
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                              <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            <span>{event.location}</span>
                          </div>
                        </div>
                        <p className={styles.eventDescription}>{event.description}</p>
                        {event.url && (
                          <a href={event.url} target="_blank" rel="noopener noreferrer" className={styles.eventLink}>
                            Learn More →
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {pastEvents.length > 0 && (
              <div className={styles.categorySection}>
                <Heading as="h2" className={styles.categoryTitle}>
                  Past Events
                </Heading>
                <p className={styles.categoryDescription}>Community events we've held</p>

                <div className={styles.eventsList}>
                  {pastEvents.map((event) => (
                    <div key={`${event.title}-${event.date.toISOString()}`} className={styles.eventCard}>
                      <div className={styles.eventContent}>
                        <h3 className={styles.eventTitle}>{event.title}</h3>
                        <div className={styles.eventMeta}>
                          <div className={styles.eventDate}>
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                              <line x1="16" y1="2" x2="16" y2="6"></line>
                              <line x1="8" y1="2" x2="8" y2="6"></line>
                              <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                            <span>{formatEventDate(event.date)}</span>
                          </div>
                          <div className={styles.eventLocation}>
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                              <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            <span>{event.location}</span>
                          </div>
                        </div>
                        <p className={styles.eventDescription}>{event.description}</p>
                        {event.url && (
                          <a href={event.url} target="_blank" rel="noopener noreferrer" className={styles.eventLink}>
                            Learn More →
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

