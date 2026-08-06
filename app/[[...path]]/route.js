import { readFile, stat } from 'node:fs/promises';
import { extname, resolve, sep } from 'node:path';

const CLIENT_ROOT = resolve(process.cwd(), 'dist/client');
const SERVER_ASSET_ROOT = resolve(process.cwd(), 'dist/server/site-assets');

const CONTENT_TYPES = {
  '.css': 'text/css; charset=utf-8',
  '.gif': 'image/gif',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml; charset=utf-8',
  '.webp': 'image/webp',
  '.xml': 'application/xml; charset=utf-8'
};

function rootFor(parts) {
  return parts[0] === 'images' || parts[0] === 'icons'
    ? SERVER_ASSET_ROOT
    : CLIENT_ROOT;
}

function safePath(parts = []) {
  if (parts.some((part) => !part || part === '.' || part === '..' || part.includes('\0'))) {
    return null;
  }

  const siteRoot = rootFor(parts);
  const relativePath = parts.length === 0 ? 'index.html' : parts.join('/');
  const candidate = resolve(siteRoot, relativePath);
  const rootPrefix = siteRoot.endsWith(sep) ? siteRoot : `${siteRoot}${sep}`;

  return candidate.startsWith(rootPrefix) ? candidate : null;
}

async function resolveSiteFile(parts) {
  const candidate = safePath(parts);
  if (!candidate) return null;

  try {
    const info = await stat(/* turbopackIgnore: true */ candidate);
    if (info.isFile()) return candidate;
    if (info.isDirectory()) {
      const indexFile = resolve(candidate, 'index.html');
      if ((await stat(/* turbopackIgnore: true */ indexFile)).isFile()) return indexFile;
    }
  } catch {
    if (parts.length === 1 && !extname(parts[0])) {
      const htmlCandidate = safePath([`${parts[0]}.html`]);
      if (htmlCandidate) {
        try {
          if ((await stat(/* turbopackIgnore: true */ htmlCandidate)).isFile()) return htmlCandidate;
        } catch {
          return null;
        }
      }
    }
  }

  return null;
}

async function serve(_request, context, includeBody) {
  const { path = [] } = await context.params;
  const filePath = await resolveSiteFile(path);

  if (!filePath) {
    return new Response('Not found', {
      status: 404,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' }
    });
  }

  const extension = extname(filePath).toLowerCase();
  const headers = new Headers({
    'Content-Type': CONTENT_TYPES[extension] || 'application/octet-stream',
    'Cache-Control': extension === '.html' || filePath.endsWith(`${sep}sw.js`)
      ? 'public, max-age=0, must-revalidate'
      : 'public, max-age=3600'
  });

  return new Response(
    includeBody ? await readFile(/* turbopackIgnore: true */ filePath) : null,
    { headers }
  );
}

export async function GET(request, context) {
  return serve(request, context, true);
}

export async function HEAD(request, context) {
  return serve(request, context, false);
}
