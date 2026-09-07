const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const output = path.join(root, 'dist');
fs.mkdirSync(output, {recursive:true});
for (const entry of ['index.html','css','js','assets','robots.txt','sitemap.xml']) {
  fs.cpSync(path.join(root, entry), path.join(output, entry), {recursive:true});
}
// GitHub Pages supplies its actual URL, including the repository subpath.
// Leave the source metadata ready for the personal domain.
if (process.env.SITE_URL) {
  const siteUrl = new URL(process.env.SITE_URL);
  if (!['https:', 'http:'].includes(siteUrl.protocol)) throw new Error('SITE_URL must be an HTTP(S) URL');
  const origin = siteUrl.href.replace(/\/$/, '');
  for (const entry of ['index.html', 'robots.txt', 'sitemap.xml']) {
    const filename = path.join(output, entry);
    fs.writeFileSync(filename, fs.readFileSync(filename, 'utf8').replaceAll('https://sajinct.com', origin));
  }
}
console.log('Static site built in dist/');
