import type { ReactNode } from 'react'
import Heading from '@theme/Heading'
import styles from './PageHeader.module.css'

type PageHeaderProps = {
  title: string
  description?: ReactNode
  children?: ReactNode
}

export default function PageHeader({ title, description, children }: PageHeaderProps): ReactNode {
  return (
    <div className={styles.header}>
      <Heading as="h1" className={styles.title}>
        {title}
      </Heading>
      {description && <p className={styles.description}>{description}</p>}
      {children && <div className={styles.extra}>{children}</div>}
    </div>
  )
}

