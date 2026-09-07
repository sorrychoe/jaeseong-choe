import React from 'react';
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
  const canonical = `${SITE_URL}/projects/${project.slug}`;
  const metaDescription = project.summary[0].slice(0, 300);
  const repo = project.links.find((link) => link.label === 'GitHub')?.href;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': repo ? 'SoftwareSourceCode' : 'CreativeWork',
        '@id': `${canonical}#project`,
        name: project.title,
        headline: project.title,
        abstract: project.summary.join(' '),
        description: project.description,
        url: canonical,
        ...(repo ? { codeRepository: repo } : {}),
        keywords: (project.keywords || []).join(', '),
        author: { '@id': `${SITE_URL}/#person` },
        ...(project.links?.length
          ? { sameAs: project.links.map((link) => link.href) }
          : {}),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Projects',
            item: `${SITE_URL}/#projects`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: project.title,
            item: canonical,
          },
        ],
      },
    ],
  };

  return (
    <div className={styles.wrap}>
      <Head>
        <title>{`${project.title} — Jaeseong Choe`}</title>
        <meta name="description" content={metaDescription} />
        <meta name="author" content="Jaeseong Choe (최재성)" />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Jaeseong Choe" />
        <meta property="og:title" content={project.title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={project.title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <div className="container">
        <article className={styles.article}>
          <Link href="/#projects" className={styles.back}>
            ← All projects
          </Link>
          <p className={styles.kicker}>Project</p>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.meta}>{project.description}</p>
          <div className={styles.body}>
            {project.summary.map((para) => (
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
