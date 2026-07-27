import fs from 'fs';
import path from 'path';
import https from 'https';

async function submitToIndexNow() {
  const host = 'aidietcalculator.com';
  const key = process.env.INDEXNOW_KEY || '';

  // Fallback URLs if the sitemap cannot be read
  const defaultUrls = [
    `https://${host}/`,
  ];

  const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  let urlsToSubmit = defaultUrls;

  try {
    if (fs.existsSync(sitemapPath)) {
      const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
      const matches = sitemapContent.match(/<loc>(.*?)<\/loc>/g);
      if (matches) {
        urlsToSubmit = matches.map(m => m.replace(/<\/?loc>/g, '').trim());
      }
    }
  } catch (err) {
    console.warn('Could not read sitemap.xml, using default URL list', err);
  }

  if (!key) {
    console.warn('[IndexNow] INDEXNOW_KEY is not defined. Skipping submission.');
    return;
  }

  const payload = JSON.stringify({
    host,
    key,
    keyLocation: `https://${host}/${key}.txt`,
    urlList: urlsToSubmit
  });

  const options = {
    hostname: 'api.indexnow.org',
    port: 443,
    path: '/indexnow',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(payload)
    }
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        console.log(`[IndexNow] Status Code: ${res.statusCode}`);
        console.log(`[IndexNow] Response: ${data}`);
        resolve(data);
      });
    });

    req.on('error', (error) => {
      console.error('[IndexNow] Error submitting URLs:', error);
      reject(error);
    });

    req.write(payload);
    req.end();
  });
}

submitToIndexNow().catch((err) => {
  console.error('[IndexNow] Postbuild submission failed:', err);
  process.exit(0);
});