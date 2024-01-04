import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

import 'custup/src/all.min.css'
import HomePageShowcase from '../components/HomePageShowCase';
import SupportedLangs from '../components/SupportedLangs';
import Features from '../components/Features';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <img src={require('./../../static/img/custup.png').default} className={styles.custuplogo} />
        <Heading as="h1" className="hero__title">
              {siteConfig.title}
        </Heading>
        <div style={{display: 'flex', justifyContent: 'center', marginTop: 40}}>
          <div style={{fontSize: '130%', width: '60%'}}>
            Stop settling, start customizing. CustUp is the ultimate file upload toolbox with zero dependencies. Endless options, zero limitations.
          </div>
        </div>
        <div style={{marginTop: 10}}>
          <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} Documentation`}
      >
      <HomepageHeader />
      <main>
        <HomePageShowcase />
        <SupportedLangs />
        <Features />
      </main>
    </Layout>
  );
}
