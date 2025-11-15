import type { ReactNode } from 'react'
import Layout from '@theme/Layout'
import PageHeader from '@site/src/components/PageHeader'

export default function AboutPage(): ReactNode {
  return (
    <Layout title="About MeshEnvy" description="MeshEnvy NCC is a Nevada-based nonprofit dedicated to resilient communications.">
      <div style={{ padding: '2rem 0' }}>
        <div className="container" style={{ maxWidth: 800, margin: '0 auto' }}>
          <PageHeader
            title="About MeshEnvy"
            description="MeshEnvy NCC is a Nevada-based nonprofit corporation dedicated to making resilient, community-owned communications possible across the state. Our mandate is simple: stand anywhere in Nevada and reach another node."
          />

          <section style={{ marginBottom: '2rem' }}>
            <h2>Legal Status</h2>
            <ul>
              <li>
                <strong>Official name:</strong> MeshEnvy NCC
              </li>
              <li>
                <strong>Nevada Secretary of State Entity ID:</strong> E52600402025-2
              </li>
              <li>
                <strong>Nevada Business ID:</strong> NV20253463357
              </li>
              <li>
                <strong>IRS Employer Identification Number (EIN):</strong> 41-2583340
              </li>
              <li>
                <strong>501(c)(3) status:</strong> Application submitted to the IRS; determination pending
              </li>
            </ul>
            <p>
              These credentials allow us to operate transparently, accept donations, pursue grants, and partner with agencies
              that depend on accountable nonprofit governance. You can read the full announcement in our{' '}
              <a href="/blog/nevada-entity-ein">entity and EIN update</a>. Once the IRS finalizes our 501(c)(3) filing,
              contributions to MeshEnvy NCC will become tax-deductible, expanding our ability to build and maintain mesh
              infrastructure statewide.
            </p>
          </section>

          <section>
            <h2>Mission Focus</h2>
            <p>
              We coordinate node deployments, support volunteers, and document deployment best practices so that emergency
              responders, rural communities, and civic technologists can rely on resilient communications even when traditional
              infrastructure fails.
            </p>
            <p>
              If you’d like to help, reach out about node hosting, site scouting, technical expertise, or storytelling—we’re
              building this network together.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  )
}

