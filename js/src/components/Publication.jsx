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
        title: '한국 언론의 정신질환 재현 양상 분석',
        description: '양극성 장애, 우울증, 조현병의 사례를 중심으로',
        links: [
          { href: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12241858', icon: 'https://cdn.simpleicons.org/bookstack/FFFFFF' },
          // { href: 'https://github.com/sorrychoe/', icon: 'https://cdn.simpleicons.org/Github/FFFFFF' },
        ],
      },
      {
        title: '한국 공영방송 논의에서의 공공성 담론 연구',
        description: '구조적 토픽모델링(STM)을 활용한 언론사 사설 분석을 중심으로',
        links: [
          { href: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12480933', icon: 'https://cdn.simpleicons.org/bookstack/FFFFFF' },
          // { href: 'https://github.com/sorrychoe/', icon: 'https://cdn.simpleicons.org/Github/FFFFFF' },
        ],
      },
      {
        title: '연성화된 신(新)민족주의 공론장과 국뽕 콘텐츠 수용자 연구',
        description: 'sBERT 임베딩과 K-Means 클러스터링을 활용한 유튜브 쇼츠 댓글 분석을 중심으로',
        links: [
          { href: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12547679', icon: 'https://cdn.simpleicons.org/bookstack/FFFFFF' },
          // { href: 'https://github.com/sorrychoe/', icon: 'https://cdn.simpleicons.org/Github/FFFFFF' },
        ],
      },
  ];

  return (
    <section id="publication" className="section" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title">Publication</h2>
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