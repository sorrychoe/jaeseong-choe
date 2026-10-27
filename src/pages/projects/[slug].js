import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { SITE_URL, projects } from '../../data/site';
import styles from '../../styles/detail.module.css';

const OG_IMAGE = `${SITE_URL}/api/og`;

export async function getStaticPaths() {
  return {
    paths: projects.map((project) => ({ params: { slug: project.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) return { notFound: true };
  return { props: { project } };
}

function ProjectPage({ project }) {
  const [showKo, setShowKo] = useState(false);
  const paragraphs = showKo && project.summaryKo ? project.summaryKo : project.summary;
  const pageUrl = `${SITE_URL}/projects/${project.slug}`;
  const metaDescription = project.summary[0].slice(0, 300);

  return (
    <div className={styles.wrap}>
      <Head>
        <title>{`${project.title} — Jaeseong Choe`}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Jaeseong Choe" />
        <meta property="og:title" content={project.title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={project.title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Head>
      <div className="container">
        <article className={styles.article}>
          <Link href={`/#projects-${project.category}`} className={styles.back}>
            ← All projects
          </Link>
          <p className={styles.kicker}>Project</p>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.meta}>{project.description}</p>
          {project.summaryKo ? (
            <button
              type="button"
              className={styles.langToggle}
              aria-pressed={showKo}
              onClick={() => setShowKo((value) => !value)}
            >
              {showKo ? 'Show in English' : '한국어로 보기'}
            </button>
          ) : null}
          <div className={styles.body} lang={showKo ? 'ko' : 'en'}>
            {paragraphs.map((para) => (
              <p key={para.slice(0, 40)}>{para}</p>
            ))}
          </div>
          {project.keywords?.length ? (
            <ul className={styles.keywords} aria-label="Keywords">
              {project.keywords.map((keyword) => (
                <li key={keyword} className={styles.keyword}>
                  {keyword}
                </li>
              ))}
            </ul>
          ) : null}
          <div className={styles.links}>
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkBtn}
              >
                {link.label}
              </a>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}

export default ProjectPage;
