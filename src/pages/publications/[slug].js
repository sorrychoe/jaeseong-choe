import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { SITE_URL, publications } from '../../data/site';
import styles from '../../styles/detail.module.css';

const OG_IMAGE = `${SITE_URL}/api/og`;

export async function getStaticPaths() {
  return {
    paths: publications.map((pub) => ({ params: { slug: pub.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const publication = publications.find((pub) => pub.slug === params.slug);
  if (!publication) return { notFound: true };
  return { props: { publication } };
}

function PublicationPage({ publication }) {
  const [showKo, setShowKo] = useState(false);
  const paragraphs = showKo && publication.summaryKo ? publication.summaryKo : publication.summary;
  const pageUrl = `${SITE_URL}/publications/${publication.slug}`;
  const metaDescription = publication.summary[0].slice(0, 300);
  const isConference = publication.type === 'conference';

  const metaParts = [
    publication.authors.join(', '),
    publication.venue,
    [publication.volume, publication.year].filter(Boolean).join(', '),
    publication.pages ? `pp. ${publication.pages}` : null,
  ].filter(Boolean);

  return (
    <div className={styles.wrap}>
      <Head>
        <title>{`${publication.title} — Jaeseong Choe`}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Jaeseong Choe" />
        <meta property="og:title" content={publication.title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={publication.title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Head>
      <div className="container">
        <article className={styles.article}>
          <Link href="/#publication" className={styles.back}>
            ← All publications
          </Link>
          <p className={styles.kicker}>
            {isConference ? 'Conference Paper' : 'Journal Article'}
          </p>
          <h1 className={styles.title}>{publication.title}</h1>
          <p className={styles.titleKo} lang="ko">
            {publication.titleKo}
          </p>
          <p className={styles.meta}>{metaParts.join(' · ')}</p>
          {publication.summaryKo ? (
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
          {publication.keywords?.length ? (
            <ul className={styles.keywords} aria-label="Keywords">
              {publication.keywords.map((keyword) => (
                <li key={keyword} className={styles.keyword}>
                  {keyword}
                </li>
              ))}
            </ul>
          ) : null}
          <div className={styles.links}>
            {publication.links.map((link) => (
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

export default PublicationPage;
