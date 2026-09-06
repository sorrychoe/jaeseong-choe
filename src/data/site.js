// Single source of truth for site-wide metadata.
// Override the domain per-environment with NEXT_PUBLIC_SITE_URL.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://jaeseongchoe.vercel.app'
).replace(/\/$/, '');

export const TITLE =
  'Jaeseong Choe | Opinion Miner & Computational Communication Researcher';

export const DESCRIPTION =
  'Jaeseong Choe is a data-driven professional specialized in computational methods to uncover patterns in media discourse, public opinion, and social behavior.';

// Bump when page content meaningfully changes (used for sitemap <lastmod>).
export const LAST_MODIFIED = '2026-09-07';

export const SOCIAL_LINKS = [
  'https://github.com/sorrychoe',
  'https://www.linkedin.com/in/sorrychoe/',
  'https://www.dbpia.co.kr/author/authorDetail?ancId=723491585',
];

export const publications = [
  {
    title: 'Media Coverage of Mental Illness and the Reproduction of Social Stigma',
    description:
      'An Analysis of Coverage of Bipolar Disorder, Depression and Schizophrenia in Major Korean Newspapers',
    url: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12889989',
    links: [
      { href: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12889989', icon: 'https://cdn.simpleicons.org/bookstack/FFFFFF', label: 'DBpia' },
      { href: 'https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003351985', icon: 'https://cdn.simpleicons.org/gitbook/FFFFFF', label: 'KCI' },
      { href: 'https://github.com/sorrychoe/Media_Coverage_of_Mental_Illness', icon: 'https://cdn.simpleicons.org/Github/FFFFFF', label: 'GitHub' },
    ],
  },
  {
    title: "Softened Neo-nationalist Public Sphere and Affective Reception of 'Gukppong' Content",
    description:
      'An analysis of YouTube Shorts Comments Using sBERT Embeddings and K-means Clustering',
    url: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12731248',
    links: [
      { href: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12731248', icon: 'https://cdn.simpleicons.org/bookstack/FFFFFF', label: 'DBpia' },
      { href: 'https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003321043', icon: 'https://cdn.simpleicons.org/gitbook/FFFFFF', label: 'KCI' },
      { href: 'https://github.com/sorrychoe/softened_neo-nationalism_in_youtube', icon: 'https://cdn.simpleicons.org/Github/FFFFFF', label: 'GitHub' },
    ],
  },
  {
    title: 'A Study on Publicness Discourse in the Debate Over Korean Public Broadcasting',
    description:
      'Focusing on an Analysis of News Editorials Using Structural Topic Modeling (STM)',
    url: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12480933',
    links: [
      { href: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12480933', icon: 'https://cdn.simpleicons.org/bookstack/FFFFFF', label: 'DBpia' },
    ],
  },
];
