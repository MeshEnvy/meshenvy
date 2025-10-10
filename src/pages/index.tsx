import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import GoFundMe from '@site/src/components/GoFundMe';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/equipment">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
            </svg>
            Get Started with Recommended Equipment
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://discord.gg/gRWAccbEWN">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            Join us on Discord
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://meshenvy.kit.com/9a76ddcad8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            Get Notified about MeshEnvy Events
          </Link>
        </div>
      </div>
    </header>
  );
}

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
                  <li>Network usage privileges</li>
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

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Join ${siteConfig.title}`}
      description="Building Meshtastic across Nevada">
      <HomepageHeader />
      <main>
        <FundraiserSection />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
