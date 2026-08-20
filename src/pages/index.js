import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Publication from '../components/Publication';
import Footer from '../components/Footer';

const SITE_URL = 'https://jaeseongchoe.vercel.app';
const TITLE = 'Jaeseong Choe | Opinion Miner & Computational Communication Researcher';
const DESCRIPTION =
  'Jaeseong Choe is a data-driven professional specialized in computational methods to uncover patterns in media discourse, public opinion, and social behavior.';

function App() {
  return (
    <div className="bg-black text-purple-200">
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={SITE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={SITE_URL} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
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