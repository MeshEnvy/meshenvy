import type { ReactNode } from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import Heading from '@theme/Heading'

import styles from './fundraiser.module.css'

function FundraiserSection() {
  return (
    <section className={styles.fundraiserSection}>
      <div className="container">
        <div className={styles.fundraiserContent}>
          <Heading as="h2" className={styles.fundraiserTitle}>
            MeshEnvy Fundraiser
          </Heading>
          <div className={styles.fundraiserText}>
            <p>
              MeshEnvy is building Nevada's first statewide off-grid communication network using Meshtastic technology.
              As a nonprofit organization, we rely on community support to create a resilient, decentralized mesh
              network that connects communities across the Silver State, from the desert to the mountains.
            </p>
            <p>
              <strong>Your donation makes this possible.</strong> Every contribution helps us purchase equipment,
              organize community events, and build the infrastructure needed to launch this vital communication network
              that serves all Nevadans.
            </p>
          </div>

          <div className={styles.pricingTable}>
            <div className={styles.pricingCard}>
              <div className={styles.pricingHeader}>
                <h3 className={styles.pricingTitle}>Supporter</h3>
                <div className={styles.pricingPrice}>
                  <span className={styles.pricingAmount}>$10</span>
                  <span className={styles.pricingPeriod}>donation</span>
                </div>
              </div>
              <div className={styles.pricingBody}>
                <ul className={styles.pricingFeatures}>
                  <li>Official MeshEnvy sticker</li>
                  <li>Public Discord access</li>
                  <li>Monthly community newsletter</li>
                </ul>
                <p className={styles.pricingNote}>Get started supporting Nevada's mesh network</p>
                <Link className={styles.donateButton} to="https://gofund.me/1dcbcde94">
                  Donate Now
                </Link>
              </div>
            </div>

            <div className={styles.pricingCard}>
              <div className={styles.pricingHeader}>
                <h3 className={styles.pricingTitle}>Contributor</h3>
                <div className={styles.pricingPrice}>
                  <span className={styles.pricingAmount}>$25</span>
                  <span className={styles.pricingPeriod}>donation</span>
                </div>
              </div>
              <div className={styles.pricingBody}>
                <ul className={styles.pricingFeatures}>
                  <li>Official MeshEnvy mug or poster (your choice)</li>
                  <li>All supporter benefits</li>
                  <li>Access to all MeshEnvy community events</li>
                  <li>Member recognition on our website</li>
                </ul>
                <p className={styles.pricingNote}>Help us spread the word about mesh networking</p>
                <Link className={styles.donateButton} to="https://gofund.me/1dcbcde94">
                  Donate Now
                </Link>
              </div>
            </div>

            <div className={styles.pricingCard}>
              <div className={styles.pricingHeader}>
                <h3 className={styles.pricingTitle}>Advocate</h3>
                <div className={styles.pricingPrice}>
                  <span className={styles.pricingAmount}>$50</span>
                  <span className={styles.pricingPeriod}>donation</span>
                </div>
              </div>
              <div className={styles.pricingBody}>
                <ul className={styles.pricingFeatures}>
                  <li>Official MeshEnvy tee</li>
                  <li>Official MeshEnvy sticker</li>
                  <li>All contributor benefits</li>
                  <li>Priority event registration</li>
                  <li>Special member newsletter updates</li>
                </ul>
                <p className={styles.pricingNote}>Wear your support for mesh networking</p>
                <Link className={styles.donateButton} to="https://gofund.me/1dcbcde94">
                  Donate Now
                </Link>
              </div>
            </div>

            <div className={clsx(styles.pricingCard, styles.pricingCardFeatured)}>
              <div className={styles.pricingBadge}>Founding Member</div>
              <div className={styles.pricingHeader}>
                <h3 className={styles.pricingTitle}>Founding Member</h3>
                <div className={styles.pricingPrice}>
                  <span className={styles.pricingAmount}>$100</span>
                  <span className={styles.pricingPeriod}>donation</span>
                </div>
              </div>
              <div className={styles.pricingBody}>
                <ul className={styles.pricingFeatures}>
                  <li>
                    <strong>Official MeshEnvy sweatshirt or tee</strong>
                  </li>
                  <li>
                    <strong>Official MeshEnvy mug</strong>
                  </li>
                  <li>
                    <strong>Official MeshEnvy sticker</strong>
                  </li>
                  <li>All advocate benefits</li>
                  <li>Recognition on our founding members page</li>
                  <li>Invitation to special founding member events</li>
                </ul>
                <p className={styles.pricingNote}>
                  Become a founding member of Nevada's mesh network
                </p>
                <Link className={styles.donateButton} to="https://gofund.me/1dcbcde94">
                  Donate Now
                </Link>
              </div>
            </div>

            <div className={styles.pricingCard}>
              <div className={styles.pricingHeader}>
                <h3 className={styles.pricingTitle}>Node Sponsor</h3>
                <div className={styles.pricingPrice}>
                  <span className={styles.pricingAmount}>$500</span>
                  <span className={styles.pricingPeriod}>donation</span>
                </div>
              </div>
              <div className={styles.pricingBody}>
                <ul className={styles.pricingFeatures}>
                  <li>
                    <strong>Naming rights to a mesh node</strong>
                  </li>
                  <li>
                    <strong>Dedicated solar base unit deployed</strong>
                  </li>
                  <li>All founding member benefits and merch</li>
                  <li>GPS coordinates and photo of your named node</li>
                  <li>Custom certificate of network contribution</li>
                  <li>Node sponsor listing on our website</li>
                </ul>
                <p className={styles.pricingNote}>
                  Your named node will connect Nevada for years to come
                </p>
                <Link className={styles.donateButton} to="https://gofund.me/1dcbcde94">
                  Donate Now
                </Link>
              </div>
            </div>

            <div className={styles.pricingCard}>
              <div className={styles.pricingHeader}>
                <h3 className={styles.pricingTitle}>Peak Sponsor</h3>
                <div className={styles.pricingPrice}>
                  <span className={styles.pricingAmount}>$1,000</span>
                  <span className={styles.pricingPeriod}>donation</span>
                </div>
              </div>
              <div className={styles.pricingBody}>
                <ul className={styles.pricingFeatures}>
                  <li>
                    <strong>Naming rights to a mountain peak router</strong>
                  </li>
                  <li>
                    <strong>Peak sponsor listing with logo</strong>
                  </li>
                  <li>All node sponsor benefits and merch</li>
                  <li>Prominent recognition at all events</li>
                  <li>Quarterly impact reports on your contribution</li>
                  <li>VIP access to network installations</li>
                </ul>
                <p className={styles.pricingNote}>
                  Critical high-elevation infrastructure connecting mountain ranges
                </p>
                <Link className={styles.donateButton} to="https://gofund.me/1dcbcde94">
                  Donate Now
                </Link>
              </div>
            </div>

            <div className={styles.pricingCard}>
              <div className={styles.pricingHeader}>
                <h3 className={styles.pricingTitle}>Regional Sponsor</h3>
                <div className={styles.pricingPrice}>
                  <span className={styles.pricingAmount}>$2,500</span>
                  <span className={styles.pricingPeriod}>donation</span>
                </div>
              </div>
              <div className={styles.pricingBody}>
                <ul className={styles.pricingFeatures}>
                  <li>
                    <strong>Naming rights to a regional network hub</strong>
                  </li>
                  <li>
                    <strong>Regional sponsor listing with prominent logo</strong>
                  </li>
                  <li>All peak sponsor benefits and merch</li>
                  <li>Featured in our annual report</li>
                  <li>Dedicated page on our website</li>
                  <li>Speaking opportunity at our launch event</li>
                </ul>
                <p className={styles.pricingNote}>
                  Enable connectivity for entire regions of Nevada
                </p>
                <Link className={styles.donateButton} to="https://gofund.me/1dcbcde94">
                  Donate Now
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.customDonationCta}>
            <Heading as="h3" className={styles.customDonationTitle}>
              Every Contribution Matters
            </Heading>
            <p className={styles.customDonationText}>
              Want to support MeshEnvy with a custom amount? Every donation, large or small, helps us build Nevada's
              mesh network. No perks or rewards necessary—just our sincere gratitude for supporting this vital
              community infrastructure.
            </p>
            <Link className={styles.customDonationButton} to="https://gofund.me/1dcbcde94">
              Donate Any Amount
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Fundraiser(): ReactNode {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout title={`Support ${siteConfig.title}`} description="Support Nevada's mesh network">
      <main>
        <FundraiserSection />
      </main>
    </Layout>
  )
}

