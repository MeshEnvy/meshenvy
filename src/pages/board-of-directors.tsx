import type { ReactNode } from 'react'
import Layout from '@theme/Layout'
import PageHeader from '@site/src/components/PageHeader'
import BenAvatar from './IMG_8245.jpeg'
import styles from './board-of-directors.module.css'

const IconAvatar = (): ReactNode => (
  <span className={styles.iconAvatar} aria-hidden="true">
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 1024 1024" role="img">
      <path
        fill="currentColor"
        d="M628.736 528.896A416 416 0 0 1 928 928H96a415.87 415.87 0 0 1 299.264-399.104L512 704zM720 304a208 208 0 1 1-416 0a208 208 0 0 1 416 0"
      />
    </svg>
  </span>
)

export default function BoardOfDirectorsPage(): ReactNode {
  return (
    <Layout title="Board of Directors" description="Meet the MeshEnvy NCC board of directors">
      <div className={styles.page}>
        <div className="container">
          <PageHeader
            title="Board of Directors"
            description="MeshEnvy NCC is guided by a board that blends hands-on technical experience with nonprofit stewardship. Meet the directors who keep the mission on track."
          />

          <div className={styles.directors}>
            <div className={styles.directorCard}>
              <img src={BenAvatar} alt="Ben Allfree" className={styles.avatar} />
              <div className={styles.directorContent}>
                <h2>Ben Allfree, Founder</h2>
                <p>
                  Ben draws on a career spanning software engineering, embedded and realtime systems, and networked
                  communications. He has helped hundreds of founders take ideas from concept to launch and now dedicates
                  that energy to building Nevada&apos;s mesh. Ben earned a BS in Computer Science and a BA in Music from
                  UNR, plus an MBA focused on entrepreneurship from St. Francis University.
                </p>
              </div>
            </div>

            <div className={styles.directorCard}>
              <IconAvatar />
              <div className={styles.directorContent}>
                <h2>Edward Mitchell, Director</h2>
                <p>
                  Edward provides governance and operational guidance to ensure the organization scales responsibly while
                  staying true to its community roots.
                </p>
              </div>
            </div>

            <div className={styles.directorCard}>
              <IconAvatar />
              <div className={styles.directorContent}>
                <h2>Leslie Allfree, Director</h2>
                <p>
                  Leslie supports board oversight with a focus on stakeholder alignment and transparent decision-making
                  as the network expands statewide.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.openSeats}>
            <h2>Open Board Seats</h2>
            <p>
              MeshEnvy NCC is recruiting two directors who bring strengths in public land stewardship, nonprofit
              governance, state or local policy, and community outreach. If you can help bridge those worlds with
              Nevada&apos;s mesh community, please contact us.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

