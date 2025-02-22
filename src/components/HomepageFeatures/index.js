import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const SmarTaskCards = [
  {
    title: 'Gestão de Horários',
    description: 'O SmarTask otimiza a alocação de horários automaticamente.',
    imageUrl: './img/Gestao.png',
    altText: 'Ícone de relógio',
  },
  {
    title: 'Inteligência Artificial',
    description: 'Utiliza IA para fazer ajustes dinâmicos e rápidos.',
    imageUrl: './img/IA.png', 
    altText: 'Ícone de IA',
  },
  {
    title: 'Eficiência e Flexibilidade',
    description: 'Adapta-se facilmente a mudanças e imprevistos.',
    imageUrl: './img/flexibilidade.png',
    altText: 'Ícone de flexibilidade',
  },
];

function SmarTaskCard({ title, description, imageUrl, altText }) {
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
        <Heading as="h2" className="text--center">O que é a SmarTask</Heading>
        <div className="row">
          {SmarTaskCards.map((props, idx) => (
            <SmarTaskCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
