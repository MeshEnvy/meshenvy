import type { ReactNode } from 'react'
import Layout from '@theme/Layout'
import Heading from '@theme/Heading'
import styles from './equipment.module.css'

export default function Equipment(): ReactNode {
  return (
    <Layout title="Equipment" description="Recommended equipment for MeshEnvy">
      <div className={styles.equipmentPage}>
        <div className="container">
          <Heading as="h1" className={styles.pageTitle}>
            Equipment
          </Heading>

          <div className={styles.introSection}>
            <p>
              Getting started with Meshtastic is incredibly easy! Just grab one of these development boards, flash
              the firmware, and you're ready to join the mesh network. The antenna is optional but highly recommended
              for the best range and signal strength.
            </p>
          </div>

          <div className={styles.supportNote}>
            <p>
              <strong>Support MeshEnvy:</strong> Purchasing equipment through our Amazon links helps support our
              community events and educational content!
            </p>
          </div>

          <div className={styles.productsGrid}>
            <div className={styles.productCard}>
              <div className={styles.productImage}>
                <img src="/heltec.jpg" alt="ESP32 LoRa V3 Development Board" />
              </div>
              <div className={styles.productDetails}>
                <h2 className={styles.productTitle}>ESP32 LoRa V3 Development Board</h2>
                <p className={styles.productDescription}>
                  Perfect starter kit for Meshtastic - includes everything you need to get started with LoRa
                  communication.
                </p>
                <div className={styles.productTip}>
                  <strong>💡 Tip:</strong> Buy 2 units so you can test basic communication without needing anyone else
                  around!
                </div>
                <div className={styles.productActions}>
                  <a
                    href="https://amzn.to/4oh53uB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button--primary button--lg"
                  >
                    Buy on Amazon
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.productCard}>
              <div className={styles.productImage}>
                <img src="/antenna.jpg" alt="High-Gain LoRa Antenna" />
              </div>
              <div className={styles.productDetails}>
                <h2 className={styles.productTitle}>High-Gain LoRa Antenna</h2>
                <p className={styles.productDescription}>
                  Boost your range significantly - this antenna can dramatically improve your Meshtastic signal
                  strength and coverage area.
                </p>
                <div className={styles.productActions}>
                  <a
                    href="https://amzn.to/48oElvg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button--primary button--lg"
                  >
                    Buy on Amazon
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

