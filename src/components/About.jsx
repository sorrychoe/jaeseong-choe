import React, { useState } from 'react';
import styles from './About.module.css';
import { FaEnvelope } from 'react-icons/fa';
import { TabLink } from './Navbar';
import { PROFILE_LINKS } from '../data/site';

const COPY = {
  en: {
    toggle: '한국어로 보기',
    lead: (
      <>
        I work where <strong>AI transformation (AX)</strong> meets <strong>data analytics</strong>: I automate work with AI and measure whether it actually delivers results. Experience designing marketing KPIs, forecasting user demand, and analyzing visibility in LLM responses lets me measure, with data, whether a project has really proved useful to the business.
      </>
    ),
    projects: 'See my projects',
    cv: 'View my CV',
    email: 'Email',
    highlights: [
      {
        period: 'Now',
        title: 'AI & Automation',
        items: [
          'AI-assisted web development: planning, building, SEO, and running websites for clients on my own',
          'Knowledge Q&A: retrieval-augmented (RAG) assistants grounded in an organization’s own documents',
          'Repetitive data work: collection, estimation, and reporting jobs that run on a schedule instead of by hand',
        ],
      },
      {
        period: 'Before',
        title: 'Marketing Data Analytics',
        items: [
          'Designed a GEO (Generative Engine Optimization) framework for measuring brand visibility in LLM responses',
          'Built demand-forecasting models that reached 93% accuracy',
          'Consolidated a three-brand KPI dashboard onto Databricks, cutting maintenance effort by 90%',
        ],
      },
      {
        period: 'Ongoing',
        title: 'Computational Social Science',
        items: [
          'Apply NLP and topic modeling (STM, sBERT, BERTopic) to media discourse and public opinion',
          'Two articles in KCI-listed journals and four conference presentations',
          'Maintain open-source packages for text data: topicsovertime, knewsr, KiwiKorean.jl, and pyBigKinds',
        ],
        link: { href: '/#research', label: 'Research →' },
      },
    ],
  },
  ko: {
    toggle: 'Show in English',
    lead: (
      <>
        <strong>AX</strong>와 <strong>데이터 분석</strong>이 만나는 포인트에서 일하고 있습니다. AI를 통해 업무를 자동화하고, 그것이 실제로 성과를 내는지 측정합니다. 마케팅 KPI 설계, 유저 수요 예측, LLM Response 속 Visibility 분석과 같은 경험으로 말미암아 프로젝트가 실질적으로 비즈니스에 유용하게 적용됐는지를 데이터로 측정합니다.
      </>
    ),
    projects: '프로젝트 보기',
    cv: 'CV 보기',
    email: '이메일',
    highlights: [
      {
        period: '현재',
        title: 'AI & Automation',
        items: [
          'AI를 활용한 웹 개발: 의뢰받은 웹사이트 기획, 개발, SEO, 운영을 1인으로 담당',
          '지식 Q&A: 조직이 가진 문서에 근거해 답하는 검색 증강(RAG) 어시스턴트',
          '데이터 업무 자동화: 사람이 손으로 하던 수집, 추정, 보고 작업을 예약 실행으로 자동화',
        ],
      },
      {
        period: '이전',
        title: '마케팅 데이터 분석',
        items: [
          'LLM 응답 속 Brand Visibility를 측정하는 GEO(생성형 엔진 최적화) 프레임워크 설계',
          '정확도 93%의 수요 예측 모델 구축',
          '3개 브랜드의 KPI 대시보드를 Databricks로 통합해 유지보수 공수 90% 절감',
        ],
      },
      {
        period: '진행 중',
        title: '전산사회과학',
        items: [
          'NLP와 토픽 모델링(STM, sBERT, BERTopic)으로 미디어 담론과 여론 분석',
          'KCI 등재 학술지 논문 2편, 학술대회 발표 4건',
          '텍스트 데이터 분석용 오픈소스 패키지 개발: topicsovertime, knewsr, KiwiKorean.jl, pyBigKinds',
        ],
        link: { href: '/#research', label: '연구 보기 →' },
      },
    ],
  },
};

function About() {
  const [lang, setLang] = useState('en');
  const t = COPY[lang];

  return (
    <section className={styles.about} lang={lang}>
      <div className="container">
        <div className={styles.hero}>
          <button
            type="button"
            className={styles.langToggle}
            aria-pressed={lang === 'ko'}
            onClick={() => setLang(lang === 'en' ? 'ko' : 'en')}
          >
            {t.toggle}
          </button>
          <h2 className={styles.greeting} lang="en">Hi, I&apos;m Jaeseong.</h2>
          <p className={styles.lead}>{t.lead}</p>
          <div className={styles.actions}>
            <TabLink href="/#projects" className={styles.primary}>
              {t.projects}
            </TabLink>
            <TabLink href="/#cv" className={styles.secondary}>
              {t.cv}
            </TabLink>
          </div>
          <ul className={styles.contacts}>
            {PROFILE_LINKS.map(({ href, label, Icon }) => (
              <li key={href}>
                <a href={href} target="_blank" rel="noopener noreferrer" className={styles.contact}>
                  <Icon aria-hidden="true" />
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a href="mailto:cjssoote@gmail.com" className={styles.contact}>
                <FaEnvelope aria-hidden="true" />
                {t.email}
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.grid}>
          {t.highlights.map(({ period, title, items, link }) => (
            <article key={title} className={styles.highlight}>
              <p className={styles.period}>{period}</p>
              <h3 className={styles.highlightTitle}>{title}</h3>
              <ul className={styles.items}>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {link && (
                <TabLink href={link.href} className={styles.more}>
                  {link.label}
                </TabLink>
              )}
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default About;
