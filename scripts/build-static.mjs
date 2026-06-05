import { cpSync, mkdirSync, existsSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { dirname, join } from 'node:path';

const dist = 'dist';

mkdirSync(dist, { recursive: true });
cpSync('index.html', `${dist}/index.html`);
cpSync('NATALIS-PERSIANAS.png.webp', `${dist}/NATALIS-PERSIANAS.png.webp`);

if (existsSync('_headers')) {
  cpSync('_headers', `${dist}/_headers`);
}

const trackedAssets = execSync('git ls-files assets', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(Boolean);

for (const file of trackedAssets) {
  const dest = join(dist, file);
  mkdirSync(dirname(dest), { recursive: true });
  cpSync(file, dest);
}

console.log(`Build estático concluído → dist/ (${trackedAssets.length + 2} arquivos)`);
