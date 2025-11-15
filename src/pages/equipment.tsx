import type { ReactNode } from 'react'
import Layout from '@theme/Layout'
import styles from './equipment.module.css'
import { equipmentData } from '../data/equipment'
import PageHeader from '@site/src/components/PageHeader'

export default function Equipment(): ReactNode {
  return (
    <Layout title="Equipment" description="Recommended equipment for MeshEnvy">
      <div className={styles.equipmentPage}>
        <div className="container">
          <PageHeader
            title="Equipment"
            description="Getting started with Meshtastic is incredibly easy! For your personal device, we recommend the SenseCAP Card Tracker T1000-E for Meshtastic. For your off-grid needs, or to support the network, we recommend the WisMesh Repeater Mini. Want a full keyboard handheld? Check out the LILYGO T-Deck."
          />

         

          <div className={styles.productsGrid}>
            {equipmentData.map((product) => (
              <div key={product.id} className={styles.productCard}>
                <div className={styles.productDetails}>
                  <h2 className={styles.productTitle}>
                    {product.title}
                  </h2>
                  <div className={styles.productImage}>
                    <img src={product.image} alt={product.imageAlt} />
                  </div>
                  <p className={styles.productDescription}>{product.description}</p>
                  {product.tip && (
                    <div className={styles.productTip}>
                      <strong>💡 Tip:</strong> {product.tip}
                    </div>
                  )}
                  <div className={styles.productActions}>
                    <a
                      href={product.buyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button button--primary button--lg"
                    >
                      Buy ({product.price})
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

