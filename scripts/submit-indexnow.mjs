/**
 * Submit engrant.eu sitemap URLs to IndexNow (api.indexnow.org).
 *
 * Post-merge verification:
 * 1. https://engrant.eu/7dff2cad03bb4182be1e65417f40bda7.txt returns the key
 * 2. CI IndexNow step logs HTTP 200 or 202
 * 3. Bing Webmaster Tools → IndexNow / URL submission history
 */

const HOST = 'engrant.eu';
const KEY = '7dff2cad03bb4182be1e65417f40bda7';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_INDEX_URL = `https://${HOST}/sitemap-index.xml`;
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';

async function main() {
  const urls = await collectSitemapUrls(SITEMAP_INDEX_URL);
  const urlList = [...urls].filter((url) => !url.includes('/404'));

  if (urlList.length === 0) {
    throw new Error('No URLs found in sitemap');
  }

  console.log(`Submitting ${urlList.length} URLs to IndexNow for ${HOST}`);

  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList,
    }),
  });

  const body = await response.text();
  console.log(`IndexNow response: ${response.status}${body ? ` ${body}` : ''}`);

  if (response.status !== 200 && response.status !== 202) {
    throw new Error(`IndexNow submission failed with status ${response.status}`);
  }
}

async function collectSitemapUrls(sitemapUrl, seenSitemaps = new Set()) {
  if (seenSitemaps.has(sitemapUrl)) {
    return new Set();
  }
  seenSitemaps.add(sitemapUrl);

  const xml = await fetchText(sitemapUrl);
  const locs = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/gi)].map((m) => m[1].trim());
  const urls = new Set();

  for (const loc of locs) {
    if (loc.endsWith('.xml')) {
      const nested = await collectSitemapUrls(loc, seenSitemaps);
      for (const url of nested) {
        urls.add(url);
      }
      continue;
    }

    if (loc.includes(HOST)) {
      urls.add(loc);
    }
  }

  return urls;
}

async function fetchText(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }
  return response.text();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
