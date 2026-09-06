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
  SOCIAL_LINKS,
  publications,
} from '../data/site';

const OG_IMAGE = `${SITE_URL}/api/og`;

const JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Jaeseong Choe',
      url: SITE_URL,
      image: OG_IMAGE,
      jobTitle: 'Computational Communication Researcher',
      description: DESCRIPTION,
      knowsAbout: [
        'Computational Social Science',
        'Topic Modeling',
        'Media Discourse Analysis',
        'Public Opinion Research',
        'Natural Language Processing',
      ],
      sameAs: SOCIAL_LINKS,
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: 'en',
      publisher: { '@id': `${SITE_URL}/#person` },
    },
    ...publications.map((pub) => ({
      '@type': 'ScholarlyArticle',
      headline: pub.title,
      abstract: pub.description,
      url: pub.url,
      author: { '@id': `${SITE_URL}/#person` },
      inLanguage: 'ko',
    })),
  ],
};

function App() {
  return (
    <div className="bg-black text-purple-200">
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={SITE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Jaeseong Choe" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={SITE_URL} />
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
