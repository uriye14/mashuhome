import { copyFile, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const projectRoot = process.cwd();
const metadataDirectory = resolve(projectRoot, 'dist', '.openai');
const serverImageDirectory = resolve(
  projectRoot,
  'dist',
  'server',
  'site-assets',
  'images',
  'recipes'
);

await mkdir(metadataDirectory, { recursive: true });
await copyFile(
  resolve(projectRoot, '.openai', 'hosting.json'),
  resolve(metadataDirectory, 'hosting.json')
);

await mkdir(serverImageDirectory, { recursive: true });
await copyFile(
  resolve(projectRoot, 'images', 'recipes', 'fei-niu-gai-fan.webp'),
  resolve(serverImageDirectory, 'fei-niu-gai-fan.webp')
);
