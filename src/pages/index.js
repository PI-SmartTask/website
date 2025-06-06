import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Team from '@site/src/components/HomepageFeatures/Team';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import AboutUs from '@site/src/components/HomepageFeatures/AboutUs';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header
      className={clsx('hero hero--primary', styles.heroBanner)}
      style={{
        backgroundImage: 'url(./img/fundo.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '600px',
        padding: '4rem 0',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <Heading
          as="h1"
          className="hero__title"
          style={{
            color: 'black',
            fontSize: '4rem',
            fontWeight: 'bold',
          }}
        >
          SmarTask
        </Heading>
        <p
          className="hero__extra"
          style={{
            color: 'black',
            fontStyle: 'italic',
            fontSize: '1.5rem',
            marginTop: '10px',
          }}
        >
          Leverage the power of AI and transform your company's schedule management!
        </p>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="SmarTask"
      description="SmarTask é um sistema avançado que utiliza IA para otimizar a alocação de horários em empresas."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <AboutUs />
        <Team />
      </main>
    </Layout>
  );
}

