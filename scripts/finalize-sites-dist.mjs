import { copyFile, cp, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const projectRoot = process.cwd();
const metadataDirectory = resolve(projectRoot, 'dist', '.openai');
const serverAssetDirectory = resolve(projectRoot, 'dist', 'server', 'site-assets');

await mkdir(metadataDirectory, { recursive: true });
await copyFile(
  resolve(projectRoot, '.openai', 'hosting.json'),
  resolve(metadataDirectory, 'hosting.json')
);

await mkdir(serverAssetDirectory, { recursive: true });
await Promise.all(['icons', 'images'].map((directory) => cp(
  resolve(projectRoot, directory),
  resolve(serverAssetDirectory, directory),
  { recursive: true }
)));
