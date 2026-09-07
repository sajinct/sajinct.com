const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.jpg':'image/jpeg','.xml':'application/xml','.txt':'text/plain'};
http.createServer((req,res) => {
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); }
  catch { res.writeHead(400); res.end(); return; }
  if (pathname === '/') pathname = '/index.html';
  if (!/^\/(index\.html|robots\.txt|sitemap\.xml|(?:css|js|assets)\/[^/]+)$/.test(pathname)) { res.writeHead(404); res.end(); return; }
  const file = path.join(root, pathname);
  fs.readFile(file, (error, body) => {
    if (error) {res.writeHead(404); res.end('Not found'); return;}
    res.writeHead(200, {'Content-Type':types[path.extname(file)] || 'application/octet-stream','Cache-Control':'no-store'});
    res.end(body);
  });
}).listen(4173, '127.0.0.1', () => console.log('Local: http://127.0.0.1:4173'));
