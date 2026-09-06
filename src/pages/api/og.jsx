import { ImageResponse } from 'next/og';

const TITLE = 'Jaeseong Choe';
const SUBTITLE =
  'Opinion Miner · Data Analyst · Computational Communication Researcher';

// Pages Router API routes use the Node (req, res) model, so render the
// ImageResponse to a buffer and write it out manually.
export default async function handler(req, res) {
  const image = new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background:
            'linear-gradient(135deg, #0b0f1a 0%, #111827 55%, #1e1b4b 100%)',
          color: '#f9fafb',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 34, color: '#c4b5fd', letterSpacing: 2 }}>
          PORTFOLIO
        </div>
        <div
          style={{
            fontSize: 96,
            fontWeight: 700,
            marginTop: 24,
            lineHeight: 1.1,
          }}
        >
          {TITLE}
        </div>
        <div
          style={{
            fontSize: 40,
            color: '#d1d5db',
            marginTop: 28,
            maxWidth: 960,
          }}
        >
          {SUBTITLE}
        </div>
        <div
          style={{
            marginTop: 48,
            width: 160,
            height: 8,
            borderRadius: 4,
            background: '#a78bfa',
          }}
        />
      </div>
    ),
    { width: 1200, height: 630 }
  );

  const buffer = Buffer.from(await image.arrayBuffer());
  res.setHeader('Content-Type', 'image/png');
  res.setHeader(
    'Cache-Control',
    'public, immutable, no-transform, max-age=86400, s-maxage=31536000'
  );
  res.end(buffer);
}
