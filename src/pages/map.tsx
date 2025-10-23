import type { ReactNode } from 'react'
import Layout from '@theme/Layout'
import Heading from '@theme/Heading'
import styles from './map.module.css'

export default function Map(): ReactNode {
  return (
    <Layout title="Network Map" description="Interactive map of MeshEnvy network coverage across Nevada">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--12">
            <Heading as="h1" className="text--center margin-bottom--lg">
              Nevada Mesh Network Coverage
            </Heading>
            <p className="text--center margin-bottom--xl">
              Explore our growing network of Meshtastic devices across Nevada. 
              Click on markers to see device details and coverage areas.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.mapSection}>
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/d/u/2/embed?mid=1NeR5ZkjhBe52yZZR6evZiNjL8wTySwU&ehbc=2E312F&noprof=1"
            width="100%"
            height="600"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="MeshEnvy Network Map"
          />
        </div>
      </div>
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--12">
            <div className="text--center">
              <p>
                Want to add your device to the map? Join our{' '}
                <a href="https://discord.gg/gRWAccbEWN" target="_blank" rel="noopener noreferrer">
                  Discord community
                </a>{' '}
                and share your location!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
