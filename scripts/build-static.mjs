import { cpSync, mkdirSync, existsSync } from 'node:fs';

const dist = 'dist';

mkdirSync(dist, { recursive: true });
cpSync('index.html', `${dist}/index.html`);
cpSync('NATALIS-PERSIANAS.png.webp', `${dist}/NATALIS-PERSIANAS.png.webp`);
cpSync('assets', `${dist}/assets`, { recursive: true });

if (existsSync('_headers')) {
  cpSync('_headers', `${dist}/_headers`);
}

console.log('Build estático concluído → dist/');
