import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Statewide Coverage',
    image: require('@site/static/nevada-desert-road.jpg').default,
    description: (
      <>
        Building a resilient mesh network across all of Nevada, connecting communities from Reno to Las Vegas and
        beyond. Join us in creating a truly statewide communication infrastructure.
      </>
    ),
  },
  {
    title: 'Off-Grid Communication',
    image: require('@site/static/nevada-goldfield-town.jpg').default,
    description: (
      <>
        Stay connected without internet or cellular service. Meshtastic provides long-range, low-power communication
        that works anywhere, anytime—perfect for Nevada&apos;s vast landscapes.
      </>
    ),
  },
  {
    title: 'Community Driven',
    image: require('@site/static/nevada-reno.jpg').default,
    description: (
      <>
        Join a growing network of mesh enthusiasts across Nevada. Share knowledge, expand coverage, and help build
        something bigger than any single node. Open-source, free, and collaborative.
      </>
    ),
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} className={styles.featureSvg} role="img" alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): ReactNode {
  return (
    <>
      <section className={styles.mission}>
        <div className="container">
          <div className="row">
            <div className="col">
              <Heading as="h2" className={clsx('text--center', styles.missionHeading)}>
                Our Mission
              </Heading>
              <p className={clsx('text--center', styles.missionText)}>
                We are a statewide nonprofit cooperative of mesh network enthusiasts with our home chapter in Reno, NV, dedicated to establishing a
                comprehensive mesh network across Nevada. From major cities to small towns, we&apos;re building resilient
                communication infrastructure that connects all Nevadans through the power of Meshtastic technology.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
