import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './Publication.module.css';

function Publication() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);
  const publications = [
      {
        title: 'Media Coverage of Mental Illness and the Reproduction of Social Stigma',
        description: 'An Analysis of Coverage of Bipolar Disorder, Depression and Schizophrenia in Major Korean Newspapers',
        links: [
          { href: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12889989', icon: 'https://cdn.simpleicons.org/bookstack/FFFFFF' },
          { href: 'https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003351985', icon: 'https://cdn.simpleicons.org/gitbook/FFFFFF' },
          // { href: 'https://github.com/sorrychoe/', icon: 'https://cdn.simpleicons.org/Github/FFFFFF' },
        ],
      },
      {
        title: "Softened Neo-nationalist Public Sphere and Affective Reception of 'Gukppong' Content",
        description: 'An analysis of YouTube Shorts Comments Using sBERT Embeddings and K-means Clustering',
        links: [
          { href: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12731248', icon: 'https://cdn.simpleicons.org/bookstack/FFFFFF' },
          { href: 'https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003321043', icon: 'https://cdn.simpleicons.org/gitbook/FFFFFF' },
          // { href: 'https://github.com/sorrychoe/', icon: 'https://cdn.simpleicons.org/Github/FFFFFF' },
        ],
      },
      {
        title: 'A Study on Publicness Discourse in the Debate Over Korean Public Broadcasting',
        description: 'Focusing on an Analysis of News Editorials Using Structural Topic Modeling (STM)',
        links: [
          { href: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12480933', icon: 'https://cdn.simpleicons.org/bookstack/FFFFFF' },
          // { href: 'https://github.com/sorrychoe/', icon: 'https://cdn.simpleicons.org/Github/FFFFFF' },
        ],
      },
  ];

  return (
    <section id="publication" className="section" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title">Publications</h2>
        <div className={styles.grid}>
          {publications.map((publication, index) => (
            <div className={`card ${styles.card}`} key={index}>
              <h3 className={styles.cardTitle}>{publication.title}</h3>
              <p className={styles.cardDescription}>{publication.description}</p>
              <div className={styles.links}>
                {publication.links.map((link, idx) => (
                  <a href={link.href} target="_blank" rel="noopener noreferrer" key={idx} className={styles.link}>
                    <img height="24" width="24" src={link.icon} alt={publication.title} className={`${styles.icon} floating-icon`} />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Publication;