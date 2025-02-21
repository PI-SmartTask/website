import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './Team.module.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const teamMembers = [
  { name: 'João Monteiro', role: 'CEO', imageUrl: '/img/fundo.jpg', altText: 'João Monteiro', github: '#', linkedin: 'https://github.com/monteiroo21', email: 'joao@exemplo.com' },
  { name: 'Rafael Kuati', role: 'Desenvolvedor Front-End', imageUrl: '/img/fundo.jpg', altText: 'Rafael Kuati', github: 'https://github.com/Rafael-Kauati', linkedin: '#', email: 'rafael@exemplo.com' },
  { name: 'Gabriel Teixeira', role: 'Designer UX/UI', imageUrl: '/img/fundo.jpg', altText: 'Gabriel Teixeira', github: 'https://github.com/GabrielTeixei', linkedin: '#', email: 'gabriel@exemplo.com' },
  { name: 'Vitale', role: 'Gerente de Produto', imageUrl: '/img/fundo.jpg', altText: 'Vitale', github: '#', linkedin: 'https://github.com/Vitalie03', email: 'vitale@exemplo.com' },
];

export default function Team() {
  return (
    <section className={clsx(styles.teamSection)}>
      <div className="container">
        <Heading as="h2" className={clsx("text--center", styles.headingTitle)}>Nossa Equipe</Heading>
        <div className={styles.teamGrid}>
          {teamMembers.map((member, idx) => (
            <div key={idx} className={clsx(styles.teamCard)}>
              <img src={member.imageUrl} alt={member.altText} className={styles.cardImage} />
              <div className={styles.cardContent}>
                <Heading as="h3" className="text--center">{member.name}</Heading>
                <p className="text--center">{member.role}</p>
                <div className={styles.socialLinks}>
                  <a href={member.github} target="_blank" rel="noopener noreferrer" className={styles.icon}>
                    <FaGithub size={32} />
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className={styles.icon}>
                    <FaLinkedin size={32} />
                  </a>
                  <a href={`mailto:${member.email}`} className={styles.icon}>
                    <FaEnvelope size={32} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
