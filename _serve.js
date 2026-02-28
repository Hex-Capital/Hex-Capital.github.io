const http = require('http');
const fs = require('fs');
const path = require('path');
const ROOT = __dirname;
const MIME = {'.html':'text/html','.css':'text/css','.js':'application/javascript','.json':'application/json','.png':'image/png','.md':'text/markdown; charset=utf-8','.ico':'image/x-icon'};
http.createServer((req, res) => {
  let url = decodeURIComponent(req.url.split('?')[0]);
  let fp = path.join(ROOT, url);
  if (fs.existsSync(fp) && fs.statSync(fp).isDirectory()) fp = path.join(fp, 'index.html');
  if (!fs.existsSync(fp)) { res.writeHead(404); res.end('Not found'); return; }
  const ext = path.extname(fp);
  res.writeHead(200, {'Content-Type': MIME[ext] || 'application/octet-stream'});
  fs.createReadStream(fp).pipe(res);
}).listen(3001, () => console.log('Serving hex-capital at http://localhost:3001/'));
