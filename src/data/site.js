import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsMortarboardFill } from 'react-icons/bs';

// Single source of truth for site-wide metadata.
// Override the domain per-environment with NEXT_PUBLIC_SITE_URL.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://jaeseongchoe.vercel.app'
).replace(/\/$/, '');

export const TITLE =
  'Jaeseong Choe | Data Engineer & Computational Communication Researcher';

export const DESCRIPTION =
  'Jaeseong Choe (최재성) is a data engineer with a background in analytics and computational communication research, building data pipelines, deploying AI in product backends, and applying computational methods to media discourse and public opinion.';


// Research interests as listed on the CV, surfaced in the About section.
export const RESEARCH_INTERESTS = [
  'Computational Social Science',
  'Computational Discourse Analysis',
  'Political Communication',
  'Media Representation',
];

// Profile links shown in the About section and the footer.
export const PROFILE_LINKS = [
  { href: 'https://github.com/sorrychoe', label: 'GitHub', icon: 'github', Icon: FaGithub },
  {
    href: 'https://www.linkedin.com/in/sorrychoe/',
    label: 'LinkedIn',
    icon: 'linkedin',
    Icon: FaLinkedin,
  },
  {
    href: 'https://www.dbpia.co.kr/author/authorDetail?ancId=723491585',
    label: 'DBpia',
    icon: 'dbpia',
    Icon: BsMortarboardFill,
  },
];

const ICON_BOOKSTACK = 'https://cdn.simpleicons.org/bookstack/FFFFFF';
const ICON_GITBOOK = 'https://cdn.simpleicons.org/gitbook/FFFFFF';
const ICON_GITHUB = 'https://cdn.simpleicons.org/Github/FFFFFF';
const ICON_PYPI = 'https://cdn.simpleicons.org/pypi/FFFFFF';
const ICON_CHROME = 'https://cdn.simpleicons.org/googlechrome/FFFFFF';

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
    venue: 'Korean Journal of Journalism & Communication',
    year: 2026,
    volume: 'Vol. 70, No. 3',
    pages: '271-312',
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
    summaryKo: [
      '최근 한국사회에서는 정신질환과 관련된 사건·사고 소식이 끊이지 않고 보도된다. 이러한 언론보도는 자칫 특정 질병에 대한 편향된 담론을 형성할 수 있다는 점에서 주목할 만하다. 이에 본 연구는 현대식 정신의학 체계가 도입된 1960년부터 2024년까지 대한민국 주요 언론사 6곳(조선일보, 동아일보, 한겨레, 경향신문, 한국일보, 서울신문)에서 보도된 정신질환 특히 양극성 장애, 우울증, 조현병 관련 기사에 대한 언론의 재현 양상과 그 변화를 심층적으로 살펴보았다. 이를 위해 빅카인즈, 네이버 뉴스 라이브러리, 언론사 웹페이지 크롤링을 활용하여 총 53,051건의 기사(양극성 장애 2,907건, 우울증 43,719건, 조현병 6,425건)를 수집하였으며, 이후에는 TF-IDF 기반의 단어 빈도 분석과 딥러닝 기반의 토픽 모델링(BERTopic)을 시행하였다.',
      '분석 결과, 세 질환 모두 언론보도에서 ‘정신’, ‘치료’, ‘환자’ 등 의학적 맥락과 함께 ‘범죄’, ‘자살’, ‘사건’과 같은 부정적인 키워드가 높은 빈도를 보였다. 특히 양극성 장애와 조현병은 강력범죄 및 사건 사고 중심의 보도가 두드러졌고, 우울증은 자살과 연관된 보도가 높은 비율을 차지했다.',
      'BERTopic 모델을 통해 양극성 장애는 사건·사고 및 연예인 관련 토픽으로, 우울증은 예술, 의약물, 사회적 트라우마 및 성폭력 등 보다 다양한 사회적 맥락에서, 조현병은 범죄 관련 재판, 강력범죄, 예술 및 사회보건 이슈 등으로 보도되는 경향을 밝혀냈다. 또한, 언론의 정파성과 정신질환의 부정적 재현 간 연관 양상을 분석한 결과, 양극성 장애와 우울증 보도에서는 보수 성향 언론에서 범죄 및 사건·사고 중심 토픽이 상대적으로 두드러졌으며, 조현병 보도에서는 정파성과 무관하게 전체적으로 범죄 관련 토픽의 순위가 상대적으로 높게 나타났다.',
      '이러한 보도 행태는 정신질환에 대한 사회적 낙인을 강화하여 정신질환자들이 적절한 치료와 사회적 지원으로부터 멀어지게 할 수 있다는 점에서 사회적 문제를 내포한다. 본 연구는 언론이 정신질환을 다루는 방식이 사회적 인식과 태도 형성에 강력한 영향을 미친다는 점을 강조하며, 정신질환에 대한 균형 잡히고 책임 있는 보도의 필요성을 제언한다.',
    ],
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
        href: 'https://github.com/sorrychoe/media_coverage_of_mental_illness',
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
    year: 2026,
    volume: 'Vol. 26, No. 3',
    pages: '421-434',
    keywords: [
      'Nationalism',
      'YouTube Shorts',
      'Comment',
      'Gukppong',
      'sBERT',
      'K-Means clustering'
    ],
    summary: [
      'This study examines how “Gukppong content,” a form of soft nationalism prevalent on YouTube in South Korea, is amplified and reproduced through comment spaces and user participation. Using Sentence-BERT–based embeddings and K-means clustering on top comments from ten channels, the results show that Korean new nationalism is predominantly articulated through antagonism toward external “others,” particularly within culture war–oriented discourse. Moreover, higher author revisit rates in the “culture war/anti-China sentiment” and “historical/political nationalism” clusters reveal the presence of a loyal core user group that actively sustains these discourses. The findings suggest that new nationalist discourse is amplified and consolidated through affective participation in platform environments with limited critical engagement.',
    ],
    summaryKo: [
      '본 연구는 최근 한국 사회에서 유튜브를 통해 확산되는 이른바 ‘국뽕’ 콘텐츠에 내재한 연성화된 민족주의 담론이 댓글 공간에서 어떻게 확대·재생산되는지 수용자의 참여 양식을 중심으로 분석하고자 한다. 이를 위해 유튜브 쇼츠 채널 10곳에서 수집한 상위 댓글 데이터를 대상으로 Sentence-BERT(sBERT) 기반 임베딩과 K-Means 클러스터링 분석을 수행하였다. 분석 결과, ‘문화 전쟁/혐중 정서’ 군집이 가장 큰 비중을 차지하며, 오늘날 한국의 신민족주의가 긍정적 자기 정체성보다는 외부의 ‘타자’와의 대립을 통해 형성되고 있음을 확인 하였다. 특히 ‘개별 영웅 서사’ 군집은 평균 댓글 길이와 댓글 길이 KL Divergence 지표에서 극단적 특성을 보여, 짧고 반복적인 찬사를 통해 이데올로기가 효율적으로 재생산되는 숏폼 플랫폼 친화적 소통 방식임을 시사한다. 또한 ‘문화 전쟁/혐중 정서’와 ‘역사·정치적 민족주의’ 군집에서는 높은 작성자 재방문율이 관찰되어, 해당 담론을 지속적으로 주도하는 핵심 이용자층의 존재가 확인되었다. 이러한 결과는 플랫폼 환경에서 정체성의 문화정치가 감각적·정동적 참여를 중심으로 재구성되며, 비판적 사고의 개입 없이 신민족주의 담론이 확산·고착화되는 양상을 보여준다.',
    ],
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
];

// Conference presentations listed on the Research tab, newest first.
export const conferences = [
  {
    title:
      'Structural Changes and Politicization in Public Broadcasting Discourse after Democratization: An Analysis of Media Coverage Using Structural Topic Modeling (STM)',
    authors: ['Jaewon Joo', 'Jaeseong Choe'],
    year: 2026,
    venue: 'Autumn Conference of the Korean Association for Broadcasting & Telecommunication Studies',
    links: [
      // TODO: uncomment once the conference uploads it to DBpia.
      // {
      //   href: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE...',
      //   icon: ICON_BOOKSTACK,
      //   label: 'DBpia',
      // },
    ],
  },
  {
    title:
      "Softened Neo-Nationalist Public Sphere and Affective Reception of 'Gukppong' Content: An Analysis of YouTube Shorts Comments Using sBERT Embeddings and K-means Clustering",
    authors: ['Jaewon Joo', 'Jaeseong Choe', 'Jisoo Kim'],
    year: 2025,
    venue: 'Autumn Conference of the Korean Association for Communication and Information Studies',
    links: [
      {
        href: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12547679',
        icon: ICON_BOOKSTACK,
        label: 'DBpia',
      },
    ],
  },
  {
    title:
      'A Study on Publicness Discourse in the Debate Over Korean Public Broadcasting: Focusing on an Analysis of News Editorials Using Structural Topic Modeling (STM)',
    authors: ['Jaewon Joo', 'Jaeseong Choe'],
    year: 2025,
    venue: 'Autumn Conference of the Korean Association for Broadcasting & Telecommunication Studies',
    links: [
      {
        href: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12480933',
        icon: ICON_BOOKSTACK,
        label: 'DBpia',
      },
    ],
  },
  {
    title:
      'Representation Patterns of Mental Illness in Korean Media: Focusing on the Cases of Bipolar Disorder, Depression, and Schizophrenia',
    authors: ['Jaewon Joo', 'Jaeseong Choe'],
    year: 2025,
    venue: 'Spring Conference of the Korean Society for Journalism & Communication Studies',
    links: [
      {
        href: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12241858',
        icon: ICON_BOOKSTACK,
        label: 'DBpia',
      },
    ],
  },
];

export const projects = [
  {
    slug: 'topicsovertime',
    title: 'topicsovertime',
    description: 'Research software: an R package for the Topics over Time continuous-time topic model.',
    keywords: ['R', 'C++', 'Research software', 'Topic modeling', 'Open source'],
    summary: [
      'An R implementation of the Topics over Time (TOT) model of Wang and McCallum (2006): an LDA-style topic model in which each topic also has a Beta distribution over continuous time, so topics are shaped by both word co-occurrence and when documents were written — without slicing time into periods or assuming Markov dynamics.',
      'Inference uses collapsed Gibbs sampling written in C++ via Rcpp. A fitted model plots topic trends over time and predicts the topic proportions and timestamps of new documents. The package accepts quanteda and tm document-term matrices, simulates synthetic corpora, and documents where it departs from a literal reading of the paper.',
    ],
    summaryKo: [
      'Wang과 McCallum(2006)의 Topics over Time(TOT) 모델을 R로 구현한 패키지입니다. TOT는 각 토픽이 단어 분포와 함께 연속 시간에 대한 베타 분포를 갖는 LDA 계열 토픽 모델로, 시간을 구간으로 나누거나 마르코프 동역학을 가정하지 않고 단어 공기 관계와 문서 작성 시점을 함께 반영해 토픽을 찾습니다.',
      '추론은 Rcpp 기반 C++로 구현한 collapsed Gibbs 샘플링을 사용합니다. 학습한 모델로 시간에 따른 토픽 추이를 그리고, 새 문서의 토픽 비율과 작성 시점을 예측할 수 있습니다. quanteda와 tm의 문서-단어 행렬을 지원하고, 합성 코퍼스 시뮬레이션 기능과 함께 논문을 그대로 구현하지 않은 부분도 문서로 밝혀 두었습니다.',
    ],
    links: [
      // {
      //   href: 'https://CRAN.R-project.org/package=topicsovertime',
      //   icon: 'https://cdn.simpleicons.org/r/FFFFFF',
      //   label: 'CRAN',
      // },
      {
        href: 'https://sorrychoe.github.io/topicsovertime/',
        icon: ICON_GITBOOK,
        label: 'Documentation',
      },
      {
        href: 'https://github.com/sorrychoe/topicsovertime',
        icon: ICON_GITHUB,
        label: 'GitHub',
      },
    ],
  },
  {
    slug: 'knewsr',
    title: 'knewsr',
    description: 'Research software: an R package for collecting, preprocessing, and text-mining Korean news.',
    keywords: ['R', 'Research software', 'Text mining', 'Korean news', 'Open source'],
    summary: [
      'An R package that automates collecting and preprocessing Korean news data and runs basic text analysis in a few lines of code. Excel, CSV, and JSON files (including BigKinds exports), any data frame with title and body columns, the Naver News Search API, and RSS/Atom feeds all go into the same pipeline.',
      'It computes term and document frequencies, TF-IDF, sparse document-term matrices, n-grams, co-occurrence, keyness between groups, and term trends over time, with a plotting function for each. It succeeds RBigKinds, which handled only BigKinds exports, and comes with a pkgdown documentation site.',
    ],
    summaryKo: [
      '한국어 뉴스 데이터의 수집과 전처리를 자동화하고, 기초 텍스트 분석을 몇 줄의 R 코드로 끝내는 패키지입니다. Excel·CSV·JSON 파일(BigKinds 내보내기 포함), 제목·본문 컬럼이 있는 data.frame, 네이버 뉴스 검색 API, RSS/Atom 피드를 모두 같은 파이프라인에 넣을 수 있습니다.',
      '단어·문서 빈도, TF-IDF, 희소 문서-단어 행렬(DTM), n-gram, 공기어, 집단 간 키니스(keyness), 기간별 단어 추이를 계산하고 각각을 시각화합니다. BigKinds 데이터만 다루던 RBigKinds를 대체하며, pkgdown 문서 사이트를 함께 제공합니다.',
    ],
    links: [
      // {
      //   href: 'https://CRAN.R-project.org/package=knewsr',
      //   icon: 'https://cdn.simpleicons.org/r/FFFFFF',
      //   label: 'CRAN',
      // },
      {
        href: 'https://sorrychoe.github.io/knewsr/',
        icon: ICON_GITBOOK,
        label: 'Documentation',
      },
      {
        href: 'https://github.com/sorrychoe/knewsr',
        icon: ICON_GITHUB,
        label: 'GitHub',
      },
    ],
  },
  {
    slug: 'kiwikorean-jl',
    title: 'KiwiKorean.jl',
    description: 'Research software: Korean morphological analysis for Julia, built on the Kiwi analyzer.',
    keywords: ['Julia', 'Research software', 'Korean NLP', 'Morphological analysis', 'Open source'],
    summary: [
      'A Julia package for Korean morphological analysis that calls the C API of Kiwi, an open-source Korean morphological analyzer, directly through ccall, so it needs no Python or Java. Installing it downloads the Kiwi binary and model automatically on Linux and macOS.',
      'It provides tokenization, part-of-speech tagging, noun extraction, sentence splitting, and spacing correction, along with dictionary-form lemmas, character positions for every token, user dictionaries, typo correction, and unsupervised extraction of new words from a corpus. Its output feeds straight into TextAnalysis.jl for document-term matrices and TF-IDF.',
    ],
    summaryKo: [
      '오픈소스 한국어 형태소 분석기 Kiwi의 C API를 ccall로 직접 호출하는 Julia 형태소 분석 패키지로, Python이나 Java 없이 동작합니다. Linux와 macOS에서는 설치할 때 Kiwi 바이너리와 모델을 자동으로 내려받습니다.',
      '토큰화, 품사 태깅, 명사 추출, 문장 분리, 띄어쓰기 교정을 제공하며, 기본형(lemma) 복원, 토큰별 원문 위치, 사용자 사전, 오타 교정, 코퍼스 기반 비지도 신조어 추출도 지원합니다. 결과는 TextAnalysis.jl에 바로 넣어 문서-단어 행렬과 TF-IDF를 계산할 수 있습니다.',
    ],
    links: [
      // {
      //   href: 'https://juliahub.com/ui/Packages/General/KiwiKorean',
      //   icon: 'https://cdn.simpleicons.org/julia/FFFFFF',
      //   label: 'JuliaHub',
      // },
      {
        href: 'https://github.com/sorrychoe/KiwiKorean.jl',
        icon: ICON_GITHUB,
        label: 'GitHub',
      },
    ],
  },
  {
    slug: 'pybigkinds',
    title: 'pyBigKinds',
    description: 'Research software: a no-code app and low-code Python toolkit for analyzing BigKinds news exports.',
    keywords: ['Python', 'Research software', 'Text mining', 'BigKinds', 'Streamlit', 'Open source'],
    summary: [
      'An open-source Python toolkit for analyzing exports from BigKinds — the Korea Press Foundation’s news database. Version 2.0 adds a no-code web app built on Streamlit: upload BigKinds Excel files and get outlet-level article counts, keyword frequencies and word clouds, TF-IDF, clustering and dimensionality reduction, and LDA and association rules, with every table downloadable as CSV and every chart as PNG.',
      'BigKinds exports at most 20,000 articles at a time, so read_bigkinds() merges files downloaded over separate periods and removes duplicate articles. The same analyses remain available as low-code Python functions such as press_counter() and keywords_wordcloud(). Heavier dependencies moved into optional extras ([ml], [app]); v1 code runs unchanged except that lda() and association() now need the [ml] extra. Published on PyPI.',
    ],
    summaryKo: [
      '한국언론진흥재단의 뉴스 데이터베이스 BigKinds에서 내려받은 데이터를 분석하는 오픈소스 Python 툴킷입니다. 2.0 버전에서 Streamlit 기반 No-Code 웹 앱을 추가했습니다. BigKinds 엑셀 파일을 올리면 언론사별 기사 수, 키워드 빈도와 워드클라우드, TF-IDF, 군집·차원축소, LDA·연관규칙 분석을 제공하며, 모든 표는 CSV로, 그림은 PNG로 내려받을 수 있습니다.',
      'BigKinds는 한 번에 20,000건까지만 내보낼 수 있어, read_bigkinds()가 기간을 나눠 받은 여러 파일을 하나로 합치고 중복 기사를 제거합니다. 같은 분석을 press_counter(), keywords_wordcloud() 같은 로우코드 Python 함수로도 쓸 수 있습니다. 무거운 의존성은 선택 설치([ml], [app])로 분리했으며, lda()와 association()에 [ml]이 필요해진 것 외에는 v1 코드가 그대로 동작합니다. PyPI에 배포되어 있습니다.',
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
    slug: 'heavens-voice-church',
    title: 'Heaven’s Voice Church Website',
    description: 'The official website for Heaven’s Voice Church.',
    keywords: ['React', 'TypeScript', 'Web development', 'SEO'],
    summary: [
      'The official website for Heaven’s Voice Church, a congregation of the Korean Gospel Church, built with React, TypeScript, Vite, and Tailwind CSS.',
      'Built on request from the church; I handle the entire project on my own — planning, development, SEO, and ongoing operation.',
    ],
    summaryKo: [
      '기독교대한복음교회 하늘소리교회의 공식 웹사이트입니다. React, TypeScript, Vite, Tailwind CSS로 구축했습니다.',
      '교회 측 요청으로 제작했으며, 기획부터 개발, SEO, 운영까지 1인으로 담당하고 있습니다.',
    ],
    links: [
      { href: 'https://www.heavensvoicechurch.com/', icon: ICON_CHROME, label: 'Website' },
      // { href: 'https://github.com/heavens-voice-church/heavens-voice-church.github.io', icon: ICON_GITHUB, label: 'GitHub' },
    ],
  },
  { 
    slug: 'shop-nanda',
    title: 'ShopNanda Website',
    description: 'The official website for the ShopNanda online shopping mall.',
    keywords: ['Astro', 'Web development', 'SEO'],
    summary: [
      'The official website for the ShopNanda online shopping mall, built as a static site with Astro.',
      'Built on request for the store; I handle the entire project on my own — planning, development, SEO, and ongoing operation.',
    ],
    summaryKo: [
      '샵난다 온라인 쇼핑몰의 공식 웹사이트입니다. Astro로 구축한 정적 사이트이며 shopnanda.com에 배포되어 있습니다.',
      '고객사 요청으로 제작했으며, 기획부터 개발, SEO, 운영까지 1인으로 담당하고 있습니다.',
    ],
    links: [
      { href: 'https://www.shopnanda.com/', icon: ICON_CHROME, label: 'Website' },
      // { href: 'https://github.com/passion-story/shop-nanda', icon: ICON_GITHUB, label: 'GitHub' },
    ],
  },
  {
    slug: 'bible-ai',
    title: 'Bible AI',
    description: 'A retrieval-augmented chatbot that recommends Bible verses for a worry you describe.',
    keywords: ['LLM', 'Retrieval-augmented generation', 'Bible'],
    summary: [
      'A retrieval-augmented chatbot linked from the Heaven’s Voice Church website. It embeds verses from the Bible and, given a worry or concern typed in by the user, retrieves the passages that speak to it most closely before an LLM composes a response grounded in them.',
      'Due to copyright restrictions, the source code is kept private; only the deployed Streamlit app is public.',
    ],
    summaryKo: [
      '하늘소리교회 웹페이지에 연결된 검색 증강(RAG) 챗봇입니다. 성경 구절을 임베딩해 두고, 사용자가 적은 고민과 가장 가까운 구절을 검색한 뒤 그 구절에 근거해 LLM이 답변을 구성합니다.',
      '저작권 이슈로 인해 소스 코드는 비공개이며, 배포된 Streamlit 앱만 공개합니다.',
    ],
    links: [
      { href: 'https://bible-ai-sczqrmuesjcfqzcsmjytkf.streamlit.app/', icon: ICON_CHROME, label: 'Website' },
    ],
  },
  {
    slug: 'versetype',
    title: 'VerseType',
    description: 'A typing web app for memorizing the church’s monthly Bible verse.',
    keywords: ['TypeScript', 'PWA', 'Web development'],
    summary: [
      'A progressive web app for Heaven’s Voice Church members to memorize the monthly Bible verse by typing it out, highlighting mistyped characters in real time and offering a mode that hides the verse text for unassisted practice.',
      'It works offline after the first load, records daily attendance once a verse is typed correctly in full, and ships a new year of verses every January; it installs to the home screen directly from the browser, with no app store needed.',
    ],
    summaryKo: [
      '하늘소리교회 교인들이 이달의 성경 말씀을 타이핑하며 암송하도록 돕는 PWA입니다. 틀린 글자를 실시간으로 표시하고, 원문을 가리고 연습하는 모드를 지원합니다.',
      '처음 접속한 뒤에는 오프라인으로도 사용할 수 있으며, 말씀을 끝까지 맞게 입력하면 출석이 기록됩니다. 매년 1월에 한 해 치 말씀이 새로 배포되고, 앱스토어 없이 브라우저에서 바로 홈 화면에 설치할 수 있습니다.',
    ],
    links: [
      { href: 'https://www.heavensvoicechurch.com/VerseType/', icon: ICON_CHROME, label: 'Website' },
      { href: 'https://github.com/sorrychoe/VerseType', icon: ICON_GITHUB, label: 'GitHub' },
    ],
  },
    {
    slug: 'wordcard',
    title: 'WordCard',
    description: 'A desktop app that turns sermon summaries into Instagram card news and posts them.',
    keywords: ['Automation', 'Instagram Graph API'],
    summary: [
      'A native desktop app that splits pasted sermon text and Bible verses into a series of 4:5 or 1:1 card images using church templates, then publishes them to the church Instagram account as a carousel.',
      'Handles Bible book names and abbreviations, Korean line breaking, and automatic font sizing; it works offline for card creation and uses only the official Instagram API when posting, with autosave and crash recovery.',
    ],
    summaryKo: [
      '설교 요약과 성경 구절을 붙여넣으면 교회 템플릿에 맞춘 카드뉴스 이미지 여러 장을 만들고, 교회 인스타그램 계정에 캐러셀로 게시하는 네이티브 데스크톱 앱입니다. 4:5 또는 1:1 비율을 지원합니다.',
      '성경 책명과 약칭 인식, 한글 줄바꿈, 글자 크기 자동 조정을 지원하며, 카드 생성은 오프라인으로 동작하고 게시할 때만 공식 Instagram API를 사용합니다. 자동 저장과 비정상 종료 후 복구 기능이 있습니다.',
    ],
    links: [
      { href: 'https://github.com/sorrychoe/WordCard', icon: ICON_GITHUB, label: 'GitHub' },
    ],
  },
  {
    slug: 'creationism-chatbot',
    title: 'Creationism Chatbot',
    description: 'A retrieval-augmented LLM chatbot for a Creation and Evolution course.',
    keywords: ['LLM', 'Retrieval-augmented generation', 'Education'],
    summary: [
      'A retrieval-augmented chatbot built on the OpenAI API for Handong Global University’s "Creation and Evolution" course, grounding its answers in course materials gathered by its own crawler and indexed in a vector store rather than the model’s general knowledge.',
      'A Makefile-driven pipeline collects and preprocesses the source material, builds the embeddings, and launches the Q&A interface.',
    ],
    summaryKo: [
      '한동대학교 교과목 "창조와 진화" Q&A를 위해 OpenAI API로 구현한 검색 증강(RAG) 챗봇입니다. 모델의 일반 지식이 아니라, 자체 크롤러로 수집해 벡터 저장소에 색인한 강의 자료에 근거해 답변합니다.',
      'Makefile 기반 파이프라인으로 자료 수집·전처리, 임베딩 생성, 질의응답 인터페이스 실행을 한 번에 처리합니다.',
    ],
    links: [
      { href: 'https://github.com/sorrychoe/Creationism_Chatbot', icon: ICON_GITHUB, label: 'GitHub' },
    ],
  },
  {
    slug: 'insta-uploader',
    title: 'Instagram Uploader',
    description: 'A desktop app that drafts and publishes shopping-mall Instagram posts.',
    keywords: ['Python', 'Automation','OpenAI API', 'Instagram Graph API'],
    summary: [
      'A desktop program that helps a Naver SmartStore seller publish product photos to Instagram: it converts 1 to 10 images to Instagram specifications, generates an editable product description and hashtags with the OpenAI API, and posts through the official Instagram API.',
      'Built with Python, PySide6, and Pillow, with API keys stored in the Windows Credential Manager, a local SQLite history of past posts, and PyInstaller packaging through GitHub Actions.',
    ],
    summaryKo: [
      '네이버 스마트스토어 판매자가 자사 제품 사진을 인스타그램에 쉽게 올릴 수 있도록 돕는 데스크톱 프로그램입니다. 사진 1~10장을 인스타 규격으로 변환하고, OpenAI API로 수정 가능한 소개글과 해시태그를 생성하며, 공식 Instagram API로 게시합니다.',
      'Python, PySide6, Pillow로 개발했습니다. API 키는 Windows 자격 증명 관리자에 저장하고, 과거 게시 내역은 로컬 SQLite에 기록하며, GitHub Actions로 PyInstaller 빌드를 자동화했습니다.',
    ],
    links: [
      { href: 'https://github.com/sorrychoe/insta-uploader', icon: ICON_GITHUB, label: 'GitHub' },
    ],
  },
  {
    slug: 'real-estate-predict',
    title: 'Real Estate Price Prediction',
    description: 'A CLI tool that estimates multi-family housing sale prices in Seoul from real transaction data.',
    keywords: ['Price prediction', 'Real estate', 'Public data API'],
    summary: [
      'A command-line program that estimates sale prices for multi-family housing in Seoul’s Hwagok-dong (Gangseo-gu), Gangnam-gu, and Gwanak-gu. Given a lot number, floor, and unit, it returns an estimated price, a price range, a confidence score, and the basis for the estimate as CSV.',
      'It works out of the box on bundled historical transaction data, and can optionally query Korea’s public building registry and the Kakao Maps API at runtime for building area, completion year, and proximity to subway stations to refine the estimate.',
    ],
    summaryKo: [
      '서울 강서구 화곡동, 강남구, 관악구의 다세대주택 매매 시세를 추정하는 명령행 프로그램입니다. 지번·층·호를 입력하면 추정 시세, 가격 범위, 신뢰도, 산출 근거를 CSV로 반환합니다.',
      '저장소에 포함된 실거래 수집 자료만으로도 동작하며, API 키가 있으면 건축물대장(면적·준공 연도)과 카카오맵(건물·지하철역 위치)을 실행 중에 조회해 추정치를 보정합니다.',
    ],
    links: [
      {
        href: 'https://github.com/sorrychoe/real-estate-predict',
        icon: ICON_GITHUB,
        label: 'GitHub',
      },
    ],
  },
];
