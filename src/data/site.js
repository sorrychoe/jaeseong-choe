// Single source of truth for site-wide metadata.
// Override the domain per-environment with NEXT_PUBLIC_SITE_URL.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://jaeseongchoe.vercel.app'
).replace(/\/$/, '');

export const TITLE =
  'Jaeseong Choe | Data Analyst & Computational Communication Researcher';

export const DESCRIPTION =
  'Jaeseong Choe (최재성) is a data-driven researcher applying computational methods to uncover patterns in media discourse, public opinion, and social behavior.';


// Research interests as listed on the CV, surfaced in the About section.
export const RESEARCH_INTERESTS = [
  'Computational Social Science',
  'Computational Discourse Analysis',
  'Political Communication',
  'Media Representation',
];

// Profile links shown in the footer.
export const PROFILE_LINKS = [
  { href: 'https://github.com/sorrychoe', label: 'GitHub', icon: 'github' },
  {
    href: 'https://www.linkedin.com/in/sorrychoe/',
    label: 'LinkedIn',
    icon: 'linkedin',
  },
  {
    href: 'https://www.dbpia.co.kr/author/authorDetail?ancId=723491585',
    label: 'DBpia',
    icon: 'dbpia',
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
    venue: 'Korean Journal of Journalism & Communication Studies',
    year: 2026,
    volume: 'Vol. 70, No. 3',
    pages: '271-312',
    type: 'journal',
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
      '최근 한국사회에서는 정신질환과 관련된 사건·사고 소식이 끊이지 않고 보도된다. 이러한 언론보도는 자칫 특정 질병에 대한 편향된 담론을 형성할 수 있다는 점에서 주목할 만하다. 이에 본 연구는 현대식 정신의학 체계가 도입된 1960년부터 2024년까지 대한민국 주요 언론사 6곳(조선일보, 동아일보, 한겨레, 경향신문, 한국일보, 서울신문)에서 보도된 정신질환 특히 양극성 장애, 우울증, 조현병 관련 기사에 대한 언론의 재현 양상과 그 변화를 심층적으로 살펴보았다. 이를 위해 빅카인즈, 네이버 뉴스 라이브러리, 언론사 웹페이지 크롤링을 활용하여 총 53,051건의 기사(양극성 장애 2,907건, 우울증 43,719건, 조현병 6,425건)를 수집하였으며, 이후에는 TF-IDF 기반의 단어 빈도 분석과 딥러닝 기반의 토픽 모델링(BERTopic)을 시행하였다',
      '분석 결과, 세 질환 모두 언론보도에서 ‘정신’, ‘치료’, ‘환자’ 등 의학적 맥락과 함께 ‘범죄’, ‘자살’, ‘사건’과 같은 부정적인 키워드가 높은 빈도를 보였다. 특히 양극성 장애와 조현병은 강력범죄 및 사건 사고 중심의 보도가 두드러졌고, 우울증은 자살과 연관된 보도가 높은 비율을 차지했다',
      'BERTopic 모델을 통해 양극성 장애는 사건·사고 및 연예인 관련 토픽으로, 우울증은 예술, 의약물, 사회적 트라우마 및 성폭력 등 보다 다양한 사회적 맥락에서, 조현병은 범죄 관련 재판, 강력범죄, 예술 및 사회보건 이슈 등으로 보도되는 경향을 밝혀냈다. 또한, 언론의 정파성과 정신질환의 부정적 재현 간 연관 양상을 분석한 결과, 양극성 장애와 우울증 보도에서는 보수 성향 언론에서 범죄 및 사건·사고 중심 토픽이 상대적으로 두드러졌으며, 조현병 보도에서는 정파성과 무관하게 전체적으로 범죄 관련 토픽의 순위가 상대적으로 높게 나타났다',
      '이러한 보도 행태는 정신질환에 대한 사회적 낙인을 강화하여 정신질환자들이 적절한 치료와 사회적 지원으로부터 멀어지게 할 수 있다는 점에서 사회적 문제를 내포한다. 본 연구는 언론이 정신질환을 다루는 방식이 사회적 인식과 태도 형성에 강력한 영향을 미친다는 점을 강조하며, 정신질환에 대한 균형 잡히고 책임 있는 보도의 필요성을 제언한다.',
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
    type: 'journal',
    keywords: [
      'Nationalism',
      'YouTube Shorts',
      'Comment',
      'Gukbbong',
      'sBERT',
      'K-Means clustering'
    ],
    summary: [
      'This study examines how “Gukppong content,” a form of soft nationalism prevalent on YouTube in South Korea, is amplified and reproduced through comment spaces and user participation. Using Sentence-BERT–based embeddings and K-means clustering on top comments from ten channels, the results show that Korean new nationalism is predominantly articulated through antagonism toward external “others,” particularly within culture war–oriented discourse. Moreover, higher author revisit rates in the “culture war/anti-China sentiment” and “historical/political nationalism” clusters reveal the presence of a loyal core user group that actively sustains these discourses. The findings suggest that new nationalist discourse is amplified and consolidated through affective participation in platform environments with limited critical engagement.',
    ],
    summaryKo: [
      '본 연구는 최근 한국 사회에서 유튜브를 통해 확산되는 이른바 ‘국뽕’ 콘텐츠에 내재한 연성화된 민족주의 담론이 댓글 공간에서 어떻게 확대·재생산되는지 수용자의 참여 양식을 중심으로 분석하고자 한다. 이를 위해 유튜브 쇼츠 채널 10곳에서 수집한 상위 댓글 데이터를 대상으로 Sentence-BERT(sBERT) 기반 임베딩과 K-Means 클러스터링 분석을 수행하였다. 분석 결과, ‘문화 전쟁/혐중 정서’ 군집이 가장 큰 비중을 차지하며, 오늘날 한국의 신민족주의가 긍정적 자기 정체성보다는 외부의 ‘타자’와의 대립을 통해 형성되고 있음을 확인 하였다. 특히 ‘개별 영웅 서사’ 군집은 평균 댓글 길이와 댓글 길이 KL Divergence 지표에서 극단적 특성을 보여, 짧고 반복적인 찬사를 통해 이데올로기가 효율적으로 재생산되는 숏폼 플랫폼 친화적 소통 방식임을 시사한다. 또한 ‘문화 전쟁/혐중 정서’와 ‘역사·정치적 민족주의’ 군집에서는 높은 작성자 재방문율이 관찰되어, 해당 담론을 지속적으로 주도하는 핵심 이용자층의 존재가 확인되었다. 이러한 결과는 플랫폼 환경에서 정체성의 문화정치가 감각적·정동적 참여를 중심으로 재구성되며, 비판적 사고의 개입 없이 신민족주의 담론이 확산·고착화되는 양상을 보여준다.',
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
    year: 2025,
    volume: '',
    pages: '30-31',
    type: 'conference',
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
    summaryKo: [
      '2025년 한국방송학회 가을철 학술대회에서 발표한 논문입니다(주재원 교수와 공동 연구).',
      '본 연구는 한국 공영방송의 미래를 둘러싼 논쟁에서 \'공공성(publicness)\'이 담론적으로 어떻게 구성되는지를 분석합니다.',
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
    category: 'data',
    title: 'Finding Optimal Vertiport Locations in the Seoul Metropolitan Area',
    description:
      'A K-Means clustering study siting 100 vertiports across Seoul.',
    keywords: ['Clustering', 'Urban Air Mobility', 'Geospatial analysis'],
    summary: [
      'A spatial clustering study that combines GIS-based land-use filtering with weighted demand points from commuting patterns and worker population to site 100 candidate vertiports for urban air mobility across the Seoul metropolitan area.',
      'K-Means clustering with centroid refinement produced the site set (silhouette score ≈ 0.4), delivered as an interactive Folium map and cluster spreadsheets alongside an IEEE-formatted writeup and presentation deck.',
    ],
    summaryKo: [
      '도시항공교통(UAM)을 위해 서울 수도권에 수직이착륙장(Vertiport) 100곳을 입지시키는 공간 군집 분석 연구입니다. GIS 기반 토지이용 필터링과 통근 패턴·근로자 인구로 가중한 수요 지점을 결합했습니다.',
      'K-Means 군집화와 중심점 보정으로 입지 후보를 도출했고(실루엣 점수 약 0.4), 결과는 인터랙티브 Folium 지도와 군집 스프레드시트, IEEE 형식 보고서 및 발표 자료로 정리했습니다.',
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
    category: 'data',
    title: 'Everything of Handong, from 1995 to 2024',
    description:
      'A Time-Series News Analysis about Handong Global University',
    keywords: ['Structural Topic Modeling', 'News analysis', 'Longitudinal'],
    summary: [  
      'A text-mining of 7,857 news articles about Handong Global University drawn from BigKinds and spanning 1995-2024, combining TF-IDF frequency analysis, lexicon-based sentiment scoring, and Structural Topic Modeling (STM) in R.',
      'It surfaces six recurring topics — Christian identity, legal matters, faculty diplomatic commentary, admissions, personnel news, and outside recognition — finds coverage skews positive overall, and shows conservative outlets covering the university’s Christian identity more often than other outlets do.',
    ],
    summaryKo: [
      '1995년부터 2024년까지 BigKinds에서 수집한 한동대학교 관련 뉴스 기사 7,857건을 분석한 텍스트 마이닝 연구입니다. TF-IDF 빈도 분석, 사전 기반 감성 점수, R의 구조적 토픽 모델(STM)을 함께 사용했습니다.',
      '반복적으로 등장하는 여섯 개 토픽(기독교 정체성, 법적 사안, 교수진의 외교적 발언, 입학, 인사 소식, 외부 평가)을 도출했습니다. 전반적으로 보도는 긍정적 경향을 보였으며, 보수 성향 언론이 다른 언론보다 대학의 기독교 정체성을 더 자주 다뤘습니다.',
    ],
    links: [
      {
        href: 'https://github.com/TMT2/Everything-of-Handong',
        icon: ICON_GITHUB,
        label: 'GitHub',
      },
    ],
  },
  {
    slug: 'topic-modeling-theory',
    category: 'data',
    title: 'Topic Modeling Theories',
    description: 'A set of notebooks covering the theory behind major topic models.',
    keywords: ['Topic modeling', 'Methodology notes'],
    summary: [
      'A study repository pairing theoretical notes with runnable Jupyter notebooks for seven topic-modeling approaches: Latent Dirichlet Allocation, Dynamic Topic Model, Topics Over Time, Correlated Topic Model, Structural Topic Model, Biterm Topic Model, and BERTopic.',
      'Each notebook is self-contained and moves from foundational LDA concepts to neural, embedding-based methods, so it doubles as a reference for the assumptions behind each model and a working code example, rather than only a description of its software interface.',
    ],
    summaryKo: [
      '토픽 모델 이론 설명과 실행 가능한 Jupyter 노트북을 함께 정리한 학습 저장소로, 7가지 토픽 모델링 기법(LDA, DTM, ToT, CTM, STM, BTM, BERTopic)을 다룹니다.',
      '각 노트북은 독립적으로 구성되어 있으며, 기초적인 LDA 개념에서 임베딩 기반 신경망 방법까지 순서대로 다룹니다. 각 모델의 가정을 이해하는 참고 자료이자 실행 가능한 코드 예제로 활용할 수 있습니다.',
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
    slug: 'attrition-analysis',
    category: 'data',
    title: 'Attrition Analysis',
    description:
      'A survival-analysis study of what drives employee attrition.',
    keywords: ['People analytics', 'Statistical modeling'],
    summary: [
      'A statistical study of HR data from 310 employees (37.4% attrition) combining descriptive statistics, ANOVA, and Kaplan-Meier survival analysis to trace when and why employees leave.',
      'It finds early-career departures dominate — 15% leave within the first year and 30% by year five, with departed staff at a median tenure of about 2 years versus 7+ for those retained — while performance ratings show no significant gap by gender, department, or race, and vendor-referral or website hires retain and perform best.',
    ],
    summaryKo: [
      '인사 데이터(직원 310명, 이직률 37.4%)를 대상으로 기술통계, ANOVA, Kaplan-Meier 생존분석을 결합해 직원이 언제, 왜 떠나는지 분석한 통계 연구입니다.',
      '초기 경력 이탈이 두드러졌습니다. 입사 1년 내 15%, 5년 내 30%가 떠났고, 퇴사자의 중위 재직 기간은 약 2년인 반면 잔류자는 7년 이상이었습니다. 성과 평가는 성별·부서·인종 간에 유의한 차이가 없었으며, 협력업체 추천이나 웹사이트를 통해 채용된 직원의 잔류율과 성과가 가장 높았습니다.',
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
    category: 'data',
    title: 'Satisfaction Survey Analysis',
    description: 'A correlation study of what drives employee job satisfaction.',
    keywords: ['Survey analysis', 'People analytics'],
    summary: [
      'A statistical analysis of 3,025 employee survey responses across 23 items covering job satisfaction, work environment, stress, and work-life balance.',
      'Correlation and probability-impact modeling show satisfaction rising with better work-life balance, a better work environment, and more sleep, while it falls with more stress, heavier workload, and overtime (roughly -51% for overtime present) — evidence that satisfaction is driven mainly by organizational conditions management can change, not individual traits.',
    ],
    summaryKo: [
      '직무 만족도, 근무 환경, 스트레스, 워라밸 등 23개 문항에 응답한 직원 설문 3,025건을 분석한 통계 연구입니다.',
      '상관분석과 확률 영향 모델링 결과, 워라밸·근무 환경이 좋을수록, 수면 시간이 길수록 만족도가 높았고, 스트레스·업무량·초과근무가 많을수록 낮았습니다(초과근무 존재 시 약 -51%). 만족도는 개인 특성보다 경영진이 바꿀 수 있는 조직 여건에 주로 좌우된다는 근거를 제시합니다.',
    ],
    links: [
      {
        href: 'https://github.com/Analytics-for-People/Satisfaction-Survey-Analysis',
        icon: ICON_GITHUB,
        label: 'GitHub',
      },
    ],
  },
  {
    slug: 'pybigkinds',
    category: 'tech',
    title: 'PyBigKinds',
    description: 'A low-code Python library for analyzing BigKinds news exports.',
    keywords: ['Python', 'Text mining', 'BigKinds', 'Open source'],
    summary: [
      'An open-source Python library that turns exports from BigKinds — the Korea Press Foundation’s news database — into ready-to-use dataframes, with utilities for cleaning, tokenizing, and reshaping the raw data for downstream text analysis and topic modeling.',
      'Built-in functions such as press_counter() and keywords_wordcloud() chart outlet-level publication counts and keyword word clouds with Korean-font support out of the box, so a raw export becomes a visualization in a few lines. Published on PyPI.',
    ],
    summaryKo: [
      '한국언론진흥재단의 뉴스 데이터베이스 BigKinds에서 내려받은 데이터를 분석용 데이터프레임으로 변환하는 오픈소스 Python 라이브러리입니다. 텍스트 분석과 토픽 모델링에 앞서 원자료를 정제·토큰화·재구조화하는 기능을 제공합니다.',
      'press_counter()와 keywords_wordcloud() 같은 내장 함수로 언론사별 기사 수와 키워드 워드클라우드를 한글 폰트 지원과 함께 몇 줄의 코드로 시각화할 수 있습니다. PyPI에 배포되어 있습니다.',
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
    category: 'tech',
    title: 'RBigKinds',
    description: 'A low-code R package for analyzing BigKinds news exports.',
    keywords: ['R', 'Text mining', 'BigKinds', 'Open source'],
    summary: [
      'An R package that mirrors PyBigKinds for the R ecosystem, giving researchers a tidy, low-code workflow for importing and preprocessing BIGKINDS news exports straight from Excel.',
      'Functions such as press_counter() and keyword_dataframe() summarize article counts by outlet and rank keyword frequencies, preparing corpora for text mining and topic modeling. The package ships a documentation site generated with pkgdown.',
    ],
    summaryKo: [
      'pyBigKinds와 같은 기능을 R 생태계에 맞게 구현한 R 패키지입니다. 연구자가 엑셀로 내려받은 BigKinds 뉴스 데이터를 로우코드 방식으로 불러오고 전처리할 수 있습니다.',
      'press_counter()와 keyword_dataframe() 등으로 언론사별 기사 수를 집계하고 키워드 빈도를 순위화해, 텍스트 마이닝과 토픽 모델링을 위한 코퍼스를 준비합니다. pkgdown으로 생성한 문서 사이트를 함께 제공합니다.',
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
    slug: 'slack-weather-message',
    category: 'tech',
    title: 'Slack Weather Message',
    description: 'A scheduled bot that posts Naver weather updates to Slack.',
    keywords: ['Go', 'Slack API', 'GitHub Actions'],
    summary: [
      'A small Go program that scrapes the current weather from Naver and posts it to a Slack channel through an incoming webhook.',
      'It runs unattended on a GitHub Actions cron schedule and can be retimed by editing the cron expression in the workflow file.',
    ],
    summaryKo: [
      '네이버 날씨 정보를 크롤링해 Slack 채널에 incoming webhook으로 전송하는 Go 프로그램입니다.',
      'GitHub Actions cron 스케줄로 무인 실행되며, 워크플로 파일의 cron 표현식을 수정해 실행 시간을 바꿀 수 있습니다.',
    ],
    links: [
      { href: 'https://github.com/sorrychoe/slack-weather-message', icon: ICON_GITHUB, label: 'GitHub' },
    ],
  },
  {
    slug: 'creationism-chatbot',
    category: 'tech',
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
      {
        href: 'https://github.com/sorrychoe/Creationism_Chatbot',
        icon: ICON_GITHUB,
        label: 'GitHub',
      },
    ],
  },
  {
    slug: 'bible-ai',
    category: 'tech',
    title: 'Bible AI',
    description: 'A retrieval-augmented chatbot that recommends Bible verses for a worry you describe.',
    keywords: ['LLM', 'Retrieval-augmented generation', 'Bible'],
    summary: [
      'A retrieval-augmented chatbot planned for deployment on the Heaven’s Voice Church website. It embeds verses from the Bible and, given a worry or concern typed in by the user, retrieves the passages that speak to it most closely before an LLM composes a response grounded in them.',
      'The source code is kept private; only the deployed Streamlit app is public.',
    ],
    summaryKo: [
      '하늘소리교회 웹페이지에 배포 예정인 검색 증강(RAG) 챗봇입니다. 성경 구절을 임베딩해 두고, 사용자가 적은 고민과 가장 가까운 구절을 검색한 뒤 그 구절에 근거해 LLM이 답변을 구성합니다.',
      '소스 코드는 비공개이며, 배포된 Streamlit 앱만 공개합니다.',
    ],
    links: [
      { href: 'https://bible-ai-sczqrmuesjcfqzcsmjytkf.streamlit.app/', icon: ICON_CHROME, label: 'Website' },
    ],
  },
{
    slug: 'wordcard',
    category: 'tech',
    title: 'WordCard',
    description: 'A desktop app that turns sermon summaries into Instagram card news and posts them.',
    keywords: ['Python', 'Automation', 'Instagram Graph API'],
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
    slug: 'insta-uploader',
    category: 'tech',
    title: 'Instagram Uploader',
    description: 'A desktop app that drafts and publishes shopping-mall Instagram posts.',
    keywords: ['Python', 'Automation','OpenAI API', 'Instagram Graph API'],
    summary: [
      'A desktop program that helps a Naver SmartStore seller publish product photos to Instagram: it converts 1 to 10 images to Instagram specifications, generates an editable product description and hashtags with the OpenAI API, and posts through the official Instagram API.',
      'Built with Python 3.12, PySide6, and Pillow, with API keys stored in the Windows Credential Manager, a local SQLite history of past posts, and PyInstaller packaging through GitHub Actions.',
    ],
    summaryKo: [
      '네이버 스마트스토어 판매자가 자사 제품 사진을 인스타그램에 쉽게 올릴 수 있도록 돕는 Windows 데스크톱 프로그램입니다. 사진 1~10장을 인스타 규격으로 변환하고, OpenAI API로 수정 가능한 소개글과 해시태그를 생성하며, 공식 Instagram API로 게시합니다.',
      'Python 3.12, PySide6, Pillow로 개발했습니다. API 키는 Windows 자격 증명 관리자에 저장하고, 과거 게시 내역은 로컬 SQLite에 기록하며, GitHub Actions로 PyInstaller 빌드를 자동화했습니다.',
    ],
    links: [
      { href: 'https://github.com/sorrychoe/insta-uploader', icon: ICON_GITHUB, label: 'GitHub' },
    ],
  },
  {
    slug: 'shop-nanda',
    category: 'tech',
    title: 'Shop Nanda Website',
    description: 'A static Astro website for the Shop Nanda online store.',
    keywords: ['Astro', 'Web development', 'E-commerce'],
    summary: [
      'The official website for the Shop Nanda online shopping mall, built as a static site with Astro and deployed to shopnanda.com.',
      'Developed on request for the store.',
    ],
    summaryKo: [
      '샵난다 온라인 쇼핑몰의 공식 웹사이트입니다. Astro로 구축한 정적 사이트이며 shopnanda.com에 배포되어 있습니다.',
      '고객사의 요청에 따라 개발이 이뤄졌습니다.',
    ],
    links: [
      { href: 'https://www.shopnanda.com/', icon: ICON_CHROME, label: 'Website' },
      { href: 'https://github.com/passion-story/shop-nanda', icon: ICON_GITHUB, label: 'GitHub' },
    ],
  },
  {
    slug: 'heavens-voice-church',
    category: 'tech',
    title: 'Heaven’s Voice Church Website',
    description: 'The official website for Heaven’s Voice Church, currently in development.',
    keywords: ['React', 'TypeScript', 'Tailwind CSS', 'Web development'],
    summary: [
      'The official website for Heaven’s Voice Church, a congregation of the Korean Gospel Church, built with React 19, TypeScript, Vite, and Tailwind CSS.',
      'The site is still under development.',
    ],
    summaryKo: [
      '기독교대한복음교회 하늘소리교회의 공식 웹사이트입니다. React 19, TypeScript, Vite, Tailwind CSS로 구축했습니다.',
      '사이트는 아직 개발 중입니다. 교회 측 요청에 근거하여 개발하고 있습니다.',
    ],
    links: [
      { href: 'https://heavens-voice-church.github.io/', icon: ICON_CHROME, label: 'Website' },
      { href: 'https://github.com/heavens-voice-church/heavens-voice-church.github.io', icon: ICON_GITHUB, label: 'GitHub' },
    ],
  },
];
