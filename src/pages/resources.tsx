import type { ReactNode } from 'react'
import Layout from '@theme/Layout'
import Heading from '@theme/Heading'
import { resourcesData } from '@site/src/data/resources'
import styles from './resources.module.css'
import PageHeader from '@site/src/components/PageHeader'

export default function Resources(): ReactNode {
  return (
    <Layout title="Resources" description="Curated list of Meshtastic resources, tools, and community links">
      <div className={styles.resourcesPage}>
        <div className="container">
          <PageHeader
            title="Meshtastic Resources"
            description="A curated collection of essential Meshtastic resources to help you learn, build, and connect with the community. Whether you're just getting started or looking to deepen your knowledge, you'll find valuable links here."
          />

          <div className={styles.categoriesContainer}>
            {resourcesData.map((category) => (
              <div key={category.category} className={styles.categorySection}>
                <Heading as="h2" className={styles.categoryTitle}>
                  {category.category}
                </Heading>
                {category.description && <p className={styles.categoryDescription}>{category.description}</p>}

                <div className={styles.resourcesList}>
                  {category.resources.map((resource) => (
                    <div key={resource.url} className={styles.resourceCard}>
                      <a href={resource.url} target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                        <h3 className={styles.resourceTitle}>{resource.title}</h3>
                        <p className={styles.resourceDescription}>{resource.description}</p>
                        <span className={styles.resourceUrl}>
                          {resource.url.startsWith('/') ? `meshenvy.org${resource.url}` : new URL(resource.url).hostname}
                        </span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

