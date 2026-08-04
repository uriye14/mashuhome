import { cp, mkdir, rm } from 'node:fs/promises';
import { resolve } from 'node:path';

const projectRoot = process.cwd();
const outputRoot = resolve(projectRoot, '.sites-static');

const siteFiles = [
  'about.html',
  'index.html',
  'manifest.json',
  'recipes-en.js',
  'robots.txt',
  'sitemap.xml',
  'sw.js',
  'under_construction.svg'
];

const siteDirectories = ['icons', 'images', 'recipe'];

await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });

await Promise.all([
  ...siteFiles.map((file) => cp(resolve(projectRoot, file), resolve(outputRoot, file))),
  ...siteDirectories.map((directory) => cp(
    resolve(projectRoot, directory),
    resolve(outputRoot, directory),
    { recursive: true }
  ))
]);
