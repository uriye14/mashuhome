import { copyFile, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const projectRoot = process.cwd();
const metadataDirectory = resolve(projectRoot, 'dist', '.openai');

await mkdir(metadataDirectory, { recursive: true });
await copyFile(
  resolve(projectRoot, '.openai', 'hosting.json'),
  resolve(metadataDirectory, 'hosting.json')
);
