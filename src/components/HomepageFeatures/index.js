import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const SmartAskCards = [
  {
    title: 'Schedule Management',
    description: 'SmartAsk automatically optimizes the allocation of schedules.',
    imageUrl: './img/Gestao.png',
    altText: 'Clock Icon',
  },
  {
    title: 'Artificial Intelligence',
    description: 'Uses AI to make dynamic and quick adjustments.',
    imageUrl: './img/IA.png',
    altText: 'AI Icon',
  },
  {
    title: 'Efficiency and Flexibility',
    description: 'Easily adapts to changes and unforeseen events.',
    imageUrl: './img/flexibilidade.png',
    altText: 'Flexibility Icon',
  },
];

function SmartAskCard({ title, description, imageUrl, altText }) {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx('card', styles.card)}>
        <div className="card__header">
          <img src={imageUrl} alt={altText} className={styles.cardImage} />
          <Heading as="h3" className="text--center">{title}</Heading>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as="h2" className="text--center">What is SmartAsk?</Heading>
        <div className="row">
          {SmartAskCards.map((props, idx) => (
            <SmartAskCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
