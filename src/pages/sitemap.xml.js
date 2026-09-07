import { SITE_URL, LAST_MODIFIED, publications, projects } from '../data/site';

function urlEntry(loc, changefreq, priority) {
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${LAST_MODIFIED}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

function generateSiteMap() {
  const entries = [
    urlEntry(`${SITE_URL}/`, 'monthly', '1.0'),
    ...publications.map((pub) =>
      urlEntry(`${SITE_URL}/publications/${pub.slug}`, 'yearly', '0.8')
    ),
    ...projects.map((project) =>
      urlEntry(`${SITE_URL}/projects/${project.slug}`, 'yearly', '0.6')
    ),
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>`;
}

export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
  res.write(generateSiteMap());
  res.end();
  return { props: {} };
}

export default function SiteMap() {
  return null;
}
