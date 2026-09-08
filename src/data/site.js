// Single source of truth for site-wide metadata.
// Override the domain per-environment with NEXT_PUBLIC_SITE_URL.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://jaeseongchoe.vercel.app'
).replace(/\/$/, '');

export const TITLE =
  'Jaeseong Choe | Opinion Miner & Computational Communication Researcher';

export const DESCRIPTION =
  'Jaeseong Choe (최재성) is a data-driven researcher applying computational methods to uncover patterns in media discourse, public opinion, and social behavior.';

// Bump when page content meaningfully changes (used for sitemap <lastmod>).
export const LAST_MODIFIED = '2026-09-07';

// Identity data. alternateName ties the romanizations and the Korean name to a
// single person so search engines and knowledge graphs resolve them together.
export const PERSON = {
  name: 'Jaeseong Choe',
  alternateName: ['최재성', 'Jaeseong Choe', 'Choe Jaeseong'],
  jobTitle: 'Computational Communication Researcher',
  email: 'cjssoote@gmail.com',
  affiliation: 'Handong Global University',
  knowsLanguage: ['ko', 'en'],
  knowsAbout: [
    'Computational Social Science',
    'Topic Modeling',
    'Media Discourse Analysis',
    'Public Opinion Research',
    'Natural Language Processing',
  ],
};

export const SOCIAL_LINKS = [
  'https://github.com/sorrychoe',
  'https://www.linkedin.com/in/sorrychoe/',
  'https://www.dbpia.co.kr/author/authorDetail?ancId=723491585',
];

// Identity links surfaced in the UI with rel="me" for entity association.
export const PROFILE_LINKS = [
  { href: 'https://github.com/sorrychoe', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/sorrychoe/', label: 'LinkedIn' },
  {
    href: 'https://www.dbpia.co.kr/author/authorDetail?ancId=723491585',
    label: 'DBpia',
  },
];

const ICON_BOOKSTACK = 'https://cdn.simpleicons.org/bookstack/FFFFFF';
const ICON_GITBOOK = 'https://cdn.simpleicons.org/gitbook/FFFFFF';
const ICON_GITHUB = 'https://cdn.simpleicons.org/Github/FFFFFF';
const ICON_PYPI = 'https://cdn.simpleicons.org/pypi/FFFFFF';

export const publications = [
  {
    slug: 'media-coverage-mental-illness-social-stigma',
    title:
      'Media Coverage of Mental Illness and the Reproduction of Social Stigma',
    titleKo:
      '언론의 정신질환 보도 경향과 사회적 낙인의 재생산: 한국 주요 일간지의 양극성 장애, 우울증, 조현병 보도 분석을 중심으로',
    description:
      'An analysis of coverage of bipolar disorder, depression, and schizophrenia in major Korean newspapers.',
    authors: ['Jaewon Joo', 'Jaeseong Choe'],
    venue: 'Korean Journal of Journalism & Communication Studies',
    venueKo: '한국언론학보',
    year: 2026,
    volume: 'Vol. 70, No. 3',
    pages: '271-312',
    type: 'journal',
    inLanguage: 'ko',
    keywords: [
      'Mental illness',
      'Bipolar Disorder',
      'Schizophrenia',
      'Depression',
      'Topic modeling',
    ],
    summary: [
      'In South Korea, media coverage of incidents involving mental illness has been continuous and pervasive, raising concerns that it may foster biased public discourse about specific disorders and reinforce social stigma. This study examines how major news outlets have represented mental illnesses—and how those representations have changed over time—focusing on schizophrenia, depression, and bipolar disorder in articles published by six leading Korean newspapers (Chosun Ilbo, Dong-A Ilbo, Hankyoreh, Kyunghyang Shinmun, Hankook Ilbo, and Seoul Shinmun) from January 1, 1960 to December 31, 2024. The study period begins in 1960, when Western-style psychiatry became institutionally established in Korea and mental illness began circulating as a matter of public discourse through mass media. Using BigKinds, the NAVER News Library, and web crawling, we collected 53,051 articles (6,425 on schizophrenia; 43,719 on depression; 2,907 on bipolar disorder) and conducted TF–IDF word-frequency analysis and BERTopic-based topic modeling to identify dominant representational patterns and their temporal trajectories.',
      'Across all three disorders, high-frequency terms consistently mixed medical-context words such as ‘mental’, ‘treatment’, and ‘patient’ with negative terms including ‘crime’, ‘suicide’, and ‘incident’. Schizophrenia and bipolar disorder were especially reported through the lens of serious crimes and accidents, while depression coverage was strongly tied to suicide. Using the BERTopic model, schizophrenia coverage was classified into topics including crime-related trials, violent crime, art, and social health issues. Bipolar disorder coverage concentrated on incidents, accidents, and celebrity figures, whereas depression appeared across broader social contexts—including art, pharmaceuticals, social trauma, and sexual violence.',
      'Temporal analysis revealed that crime- and incident-centered reporting increased markedly following specific triggering events: schizophrenia coverage spiked after the 2016 Gangnam Station murder; depression coverage surged following the 2009 Jang Ja-yeon suicide case and the 2018 Gangseo PC Room murder; and bipolar disorder coverage intensified around high-profile cases involving public figures in 2013 and 2019. Analysis of media partisanship showed that conservative outlets more prominently featured crime- and incident-centered topics in coverage of bipolar disorder and depression. In schizophrenia coverage, however, crime-related topics ranked relatively high across all outlets regardless of political orientation, suggesting that stigmatizing frames around schizophrenia transcend ideological boundaries. Progressive outlets tended to contextualize mental illness within structural and social conditions, while centrist outlets displayed a more pragmatic balance between medical and incident-based framing.',
      'These reporting patterns risk reinforcing social stigma and distancing individuals with mental illness from appropriate treatment and social support. This study highlights the importance of examining how media representations of mental illness are structured over time, and urges a shift toward more balanced, rights-based, and medically informed reporting on mental health in Korea.',
    ],
    url: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12889989',
    links: [
      {
        href: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12889989',
        icon: ICON_BOOKSTACK,
        label: 'DBpia',
      },
      {
        href: 'https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003351985',
        icon: ICON_GITBOOK,
        label: 'KCI',
      },
      {
        href: 'https://github.com/sorrychoe/Media_Coverage_of_Mental_Illness',
        icon: ICON_GITHUB,
        label: 'GitHub',
      },
    ],
  },
  {
    slug: 'neo-nationalism-gukppong-youtube-shorts',
    title:
      "Softened Neo-nationalist Public Sphere and Affective Reception of 'Gukppong' Content",
    titleKo:
      "연성화된 신(新)민족주의 공론장과 '국뽕' 콘텐츠의 정동적 수용: sBERT 임베딩과 K-Means 클러스터링을 활용한 유튜브 쇼츠 댓글 분석을 중심으로",
    description:
      'An analysis of YouTube Shorts comments using sBERT embeddings and K-means clustering.',
    authors: ['Jaewon Joo', 'Jaeseong Choe', 'Jisoo Kim'],
    venue: 'The Journal of the Korea Contents Association',
    venueKo: '한국콘텐츠학회논문지',
    year: 2026,
    volume: 'Vol. 26, No. 3',
    pages: '421-434',
    type: 'journal',
    inLanguage: 'ko',
    keywords: [
      'Nationalism',
      'YouTube Shorts',
      'Comment',
      'Gukbbong',
      'sBERT',
      'K-Means clustering',
      'KL Divergence'
    ],
    summary: [
      'This study examines how “Gukppong content,” a form of soft nationalism prevalent on YouTube in South Korea, is amplified and reproduced through comment spaces and user participation. Using Sentence-BERT–based embeddings and K-means clustering on top comments from ten channels, the results show that Korean new nationalism is predominantly articulated through antagonism toward external “others,” particularly within culture war–oriented discourse. Moreover, higher author revisit rates in the “culture war/anti-China sentiment” and “historical/political nationalism” clusters reveal the presence of a loyal core user group that actively sustains these discourses. The findings suggest that new nationalist discourse is amplified and consolidated through affective participation in platform environments with limited critical engagement.',
    ],
    url: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12731248',
    links: [
      {
        href: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12731248',
        icon: ICON_BOOKSTACK,
        label: 'DBpia',
      },
      {
        href: 'https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003321043',
        icon: ICON_GITBOOK,
        label: 'KCI',
      },
      {
        href: 'https://github.com/sorrychoe/softened_neo-nationalism_in_youtube',
        icon: ICON_GITHUB,
        label: 'GitHub',
      },
    ],
  },
  {
    slug: 'publicness-discourse-korean-public-broadcasting-stm',
    title:
      'A Study on Publicness Discourse in the Debate Over Korean Public Broadcasting',
    titleKo:
      '한국 공영방송 논의에서의 공공성 담론 연구: 구조적 토픽모델링(STM)을 활용한 언론사 사설 분석을 중심으로',
    description:
      'An analysis of news editorials using Structural Topic Modeling (STM).',
    authors: ['Jaewon Joo', 'Jaeseong Choe'],
    venue: 'Korean Association for Broadcasting & Telecommunication Studies Fall Conference',
    venueKo: '한국방송학회 2025 가을철 정기학술대회',
    year: 2025,
    volume: '',
    pages: '30-31',
    type: 'conference',
    inLanguage: 'ko',
    keywords: [
      'Public service broadcasting',
      'Publicness',
      'Structural Topic Modeling',
      'Newspaper editorials',
      'Media policy',
    ],
    summary: [
      'Presented at the 2025 Fall Conference of Korean Association for Broadcasting & Telecommunication Studies (with prof. Jaewon Joo).',
      'this paper studies how "publicness"(공공성) is discursively constructed in the debate over the future of Korean public service broadcasting.',

    ],
    url: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12480933',
    links: [
      {
        href: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12480933',
        icon: ICON_BOOKSTACK,
        label: 'DBpia',
      },
    ],
  },
];

export const projects = [
  {
    slug: 'optimal-vertiport-locations-seoul',
    title: 'Finding Optimal Vertiport Locations in the Seoul Metropolitan Area',
    description:
      'A clustering approach to identify 100 optimal vertiport locations in the Seoul metropolitan area.',
    keywords: ['Clustering', 'Urban Air Mobility', 'Geospatial analysis'],
    summary: [
      'A spatial clustering study that identifies 100 candidate vertiport sites for urban air mobility across the Seoul metropolitan area.',
      'Demand-related geographic features are clustered to propose location sets that balance coverage and accessibility. The analysis pipeline and results are available on GitHub.',
    ],
    links: [
      {
        href: 'https://github.com/sorrychoe/Finding-Optimal-Vertiport',
        icon: ICON_GITHUB,
        label: 'GitHub',
      },
    ],
  },
  {
    slug: 'everything-of-handong',
    title: 'Everything of Handong, from 1995 to 2024',
    description:
      'A Structural Topic Modeling approach to news about Handong Global University.',
    keywords: ['Structural Topic Modeling', 'News analysis', 'Longitudinal'],
    summary: [
      'A Structural Topic Modeling (STM) analysis of three decades of news coverage about Handong Global University, from the university’s founding in 1995 through 2024.',
      'The project traces how dominant topics in reporting about the institution shift over time and how external events reshape media attention.',
    ],
    links: [
      {
        href: 'https://github.com/sorrychoe/Everything-of-Handong',
        icon: ICON_GITHUB,
        label: 'GitHub',
      },
    ],
  },
  {
    slug: 'creationism-chatbot',
    title: 'Creationism Chatbot',
    description: 'An LLM chatbot for Creation and Evolution class Q&A.',
    keywords: ['LLM', 'Retrieval-augmented generation', 'Education'],
    summary: [
      'A retrieval-augmented LLM chatbot built to answer student questions for a university "Creation and Evolution" course.',
      'It grounds responses in course readings and reference material so that in-class Q&A stays consistent with the assigned curriculum.',
    ],
    links: [
      {
        href: 'https://github.com/sorrychoe/Creationism_Chatbot',
        icon: ICON_GITHUB,
        label: 'GitHub',
      },
    ],
  },
  {
    slug: 'pybigkinds',
    title: 'PyBigKinds',
    description: 'A BIGKINDS data preprocessing library for Python.',
    keywords: ['Python', 'Text mining', 'BIGKINDS', 'Open source'],
    summary: [
      'An open-source Python library that streamlines preprocessing of news datasets exported from BIGKINDS, the Korea Press Foundation’s news analytics service.',
      'It provides utilities for cleaning, tokenizing, and reshaping BIGKINDS exports for downstream text analysis and topic modeling. The package is published on PyPI.',
    ],
    links: [
      {
        href: 'https://pypi.org/project/pyBigKinds/',
        icon: ICON_PYPI,
        label: 'PyPI',
      },
      {
        href: 'https://github.com/sorrychoe/pyBigKinds',
        icon: ICON_GITHUB,
        label: 'GitHub',
      },
    ],
  },
  {
    slug: 'rbigkinds',
    title: 'RBigKinds',
    description: 'A BIGKINDS data preprocessing library for R.',
    keywords: ['R', 'Text mining', 'BIGKINDS', 'Open source'],
    summary: [
      'An R package that mirrors PyBigKinds for the R ecosystem, providing a tidy workflow for importing and preprocessing BIGKINDS news exports.',
      'It prepares corpora for text mining and topic modeling, and ships a documentation site generated with pkgdown.',
    ],
    links: [
      {
        href: 'https://sorrychoe.github.io/RBigKinds/',
        icon: ICON_GITBOOK,
        label: 'Documentation',
      },
      {
        href: 'https://github.com/sorrychoe/RBigKinds',
        icon: ICON_GITHUB,
        label: 'GitHub',
      },
    ],
  },
  {
    slug: 'topic-modeling-theory',
    title: 'About Topic Modeling Theory',
    description: 'A repository on the theory of topic modeling.',
    keywords: ['Topic modeling', 'Methodology notes'],
    summary: [
      'A study repository collecting notes and derivations on the theory behind topic models — from Latent Dirichlet Allocation to structural and embedding-based variants.',
      'It is intended as a reference for researchers who want to understand the assumptions and mechanics of the methods rather than only their software interfaces.',
    ],
    links: [
      {
        href: 'https://github.com/sorrychoe/topic-modeling-theory',
        icon: ICON_GITHUB,
        label: 'GitHub',
      },
    ],
  },
  {
    slug: 'sns-addiction-analysis',
    title: 'SNS Addiction Analysis',
    description:
      'A statistical analysis of student social media addiction.',
    keywords: ['Statistical modeling', 'Social media'],
    summary: [
      'This project analyzes factors influencing student social media addiction using regression and clustering techniques. Key predictors include mental health, sleep duration, social media usage, and SNS-related conflicts.',
    ],
    links: [
      {
        href: 'https://github.com/sorrychoe/sns-addiction-modeling',
        icon: ICON_GITHUB,
        label: 'GitHub',
      },
    ],
  },
  {
    slug: 'attrition-analysis',
    title: 'Attrition Analysis',
    description:
      'A statistical analysis of HR data to reduce employee attrition.',
    keywords: ['People analytics', 'Statistical modeling'],
    summary: [
      'A people-analytics project that statistically models employee attrition from HR data to identify the factors most associated with turnover.',
    ],
    links: [
      {
        href: 'https://github.com/Analytics-for-People/Attrition-Analysis',
        icon: ICON_GITHUB,
        label: 'GitHub',
      },
    ],
  },
  {
    slug: 'satisfaction-survey-analysis',
    title: 'Satisfaction Survey Analysis',
    description: 'A statistical analysis of survey data for people analytics.',
    keywords: ['Survey analysis', 'People analytics'],
    summary: [
      'A statistical analysis of employee satisfaction survey data for people-analytics use.',
    ],
    links: [
      {
        href: 'https://github.com/Analytics-for-People/Satisfaction-Survey-Analysis',
        icon: ICON_GITHUB,
        label: 'GitHub',
      },
    ],
  },
];
