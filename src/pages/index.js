import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Publication from '../components/Publication';
import Footer from '../components/Footer';
import { SITE_URL, TITLE, DESCRIPTION } from '../data/site';

const HOME_URL = `${SITE_URL}/`;
const OG_IMAGE = `${SITE_URL}/api/og`;

function App() {
  return (
    <div className="bg-black text-purple-200">
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
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
      </Head>
      <Header />
      <About />
      <Publication />
      <Projects category="tech" title="Development Projects" />
      <Projects category="data" title="Data Analysis Projects" />
      <Footer />
    </div>
  );
}

export default App;
