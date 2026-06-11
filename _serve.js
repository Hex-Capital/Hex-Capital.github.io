// Front router for local dev on port 3000:
//   /hex-capital/*  -> this repo's static files
//   /ycrank         -> entry alias into the ycrank dev server (proxied to port 3001)
//   everything else -> proxied to ycrank as-is (its frontend uses absolute root
//                      paths: /login, /web/*, /api/*, batch data), so it must own
//                      the root namespace. Run it with: PORT=3001 node web/server.js
const http = require('http');
const fs = require('fs');
const path = require('path');
const ROOT = __dirname;
const PORT = 3000;
const PREFIX = '/hex-capital';
const YCRANK_PORT = 3001;
const MIME = {'.html':'text/html','.css':'text/css','.js':'application/javascript','.json':'application/json','.png':'image/png','.md':'text/markdown; charset=utf-8','.ico':'image/x-icon'};

function serveStatic(req, res, urlPath) {
  let fp = path.join(ROOT, urlPath);
  if (fs.existsSync(fp) && fs.statSync(fp).isDirectory()) {
    if (!urlPath.endsWith('/')) { res.writeHead(302, {Location: PREFIX + urlPath + '/'}); res.end(); return; }
    fp = path.join(fp, 'index.html');
  }
  if (!fs.existsSync(fp)) { res.writeHead(404); res.end('Not found'); return; }
  const ext = path.extname(fp);
  res.writeHead(200, {'Content-Type': MIME[ext] || 'application/octet-stream'});
  fs.createReadStream(fp).pipe(res);
}

function proxy(req, res, targetPath) {
  const preq = http.request({
    hostname: 'localhost',
    port: YCRANK_PORT,
    path: targetPath,
    method: req.method,
    headers: { ...req.headers, host: 'localhost:' + YCRANK_PORT }
  }, pres => {
    res.writeHead(pres.statusCode, pres.headers);
    pres.pipe(res);
  });
  preq.on('error', () => {
    res.writeHead(502, {'Content-Type': 'text/plain'});
    res.end('ycrank is not running on port ' + YCRANK_PORT + '. Start it from the ycrank repo with: PORT=3001 node web/server.js');
  });
  req.pipe(preq);
}

http.createServer((req, res) => {
  const url = decodeURIComponent(req.url.split('?')[0]);
  if (url === PREFIX) { res.writeHead(302, {Location: PREFIX + '/'}); res.end(); return; }
  if (url.startsWith(PREFIX + '/')) { serveStatic(req, res, url.slice(PREFIX.length)); return; }
  if (url === '/ycrank' || url === '/ycrank/') { proxy(req, res, '/'); return; }
  if (url.startsWith('/ycrank/')) { proxy(req, res, req.url.replace(/^\/ycrank/, '')); return; }
  proxy(req, res, req.url);
}).listen(PORT, () => console.log(`http://localhost:${PORT}${PREFIX}/ (this site) | http://localhost:${PORT}/ycrank (ycrank via :${YCRANK_PORT})`));
