import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './Team.module.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const teamMembers = [
  { name: 'João Monteiro', role: 'MLOps', imageUrl: '/img/fundo.jpg', altText: 'João Monteiro', github: '#', linkedin: 'https://github.com/monteiroo21', email: 'joaomonteiro29@ua.pt' },
  { name: 'Rafael Kuati', role: 'DevOps Master ', imageUrl: './img/rafael.jpeg', altText: 'Rafael Kuati', github: 'https://github.com/Rafael-Kauati', linkedin: '#', email: 'rafaelkauati@ua.pt' },
  { name: 'Gabriel Teixeira', role: 'Team Manager', imageUrl: './img/gabriel.jpeg', altText: 'Gabriel Teixeira', github: 'https://github.com/GabrielTeixei', linkedin: '#', email: 'gabrielm.teixeira@ua.pt' },
  { name: 'Vitale', role: 'Architect', imageUrl: '/img/fundo.jpg', altText: 'Vitale', github: '#', linkedin: 'https://github.com/Vitalie03', email: 'vitalie@ua.pt' },
  { name: 'André Fernandes', role: 'Product Owner', imageUrl: '/img/fundo.jpg', altText: 'André Fernandes', github: '#', linkedin: 'https://github.com/SledgeSune', email: 'andre.sou.fernandes@ua.pt' },
];

export default function Team() {
  return (
    <section className={clsx(styles.teamSection)}>
      <div className="container">
        <Heading as="h2" style={{ fontSize: '2.5rem', fontWeight: 'bold' }} className={clsx("text--center", styles.headingTitle)}>
          Our Team
        </Heading>
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