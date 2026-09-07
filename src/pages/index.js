import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Publication from '../components/Publication';
import Footer from '../components/Footer';
import {
  SITE_URL,
  TITLE,
  DESCRIPTION,
  PERSON,
  SOCIAL_LINKS,
  publications,
} from '../data/site';

const HOME_URL = `${SITE_URL}/`;
const OG_IMAGE = `${SITE_URL}/api/og`;

const publicationNodes = publications.map((pub) => ({
  '@type': 'ScholarlyArticle',
  '@id': `${SITE_URL}/publications/${pub.slug}#article`,
  headline: pub.title,
  name: pub.title,
  alternativeHeadline: pub.titleKo,
  abstract: pub.description,
  url: `${SITE_URL}/publications/${pub.slug}`,
  sameAs: pub.url,
  datePublished: String(pub.year),
  inLanguage: pub.inLanguage || 'ko',
  isPartOf: {
    '@type': pub.type === 'conference' ? 'PublicationEvent' : 'Periodical',
    name: pub.venue,
    alternateName: pub.venueKo,
  },
  author: pub.authors.map((name) =>
    name === PERSON.name
      ? { '@type': 'Person', '@id': `${SITE_URL}/#person`, name }
      : { '@type': 'Person', name }
  ),
}));

const JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: PERSON.name,
      alternateName: PERSON.alternateName,
      url: HOME_URL,
      image: OG_IMAGE,
      email: `mailto:${PERSON.email}`,
      jobTitle: PERSON.jobTitle,
      description: DESCRIPTION,
      affiliation: { '@type': 'Organization', name: PERSON.affiliation },
      alumniOf: { '@type': 'Organization', name: PERSON.affiliation },
      knowsLanguage: PERSON.knowsLanguage,
      knowsAbout: PERSON.knowsAbout,
      sameAs: SOCIAL_LINKS,
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: HOME_URL,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: 'en',
      publisher: { '@id': `${SITE_URL}/#person` },
    },
    ...publicationNodes,
  ],
};

function App() {
  return (
    <div className="bg-black text-purple-200">
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="author" content="Jaeseong Choe (최재성)" />
        <link rel="canonical" href={HOME_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Jaeseong Choe" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="ko_KR" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={HOME_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Jaeseong Choe — Computational Communication Researcher"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </Head>
      <Header />
      <About />
      <Publication />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
