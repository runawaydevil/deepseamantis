import { createServer } from 'node:http'
import {
  createReadStream,
  existsSync,
  mkdirSync,
  statSync,
  writeFileSync,
} from 'node:fs'
import { dirname, extname, isAbsolute, join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = dirname(fileURLToPath(import.meta.url))
const distDir = resolve(projectRoot, 'dist')
const fallbackFile = resolve(distDir, 'index.html')
const host = process.env.HOST || '0.0.0.0'
const requestedPort = Number.parseInt(process.env.PORT || '0', 10)
const port = Number.isNaN(requestedPort) ? 0 : requestedPort
const runtimeDir = resolve(projectRoot, '.runtime')
const portFile = resolve(runtimeDir, 'port.txt')

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.mp4': 'video/mp4',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.webm': 'video/webm',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
}

if (!existsSync(fallbackFile)) {
  console.error('[pablo] dist/index.html not found. Run "npm run build" first.')
  process.exit(1)
}

function isInsideDist(filePath) {
  const rel = relative(distDir, filePath)
  return rel !== '' && !rel.startsWith('..') && !isAbsolute(rel)
}

function resolveAsset(pathname) {
  const decodedPath = decodeURIComponent(pathname)
  const relativePath =
    decodedPath === '/' ? 'index.html' : decodedPath.replace(/^\/+/, '')
  const candidate = resolve(distDir, relativePath)

  if (!isInsideDist(candidate) || !existsSync(candidate)) {
    return null
  }

  if (statSync(candidate).isDirectory()) {
    const nestedIndex = join(candidate, 'index.html')
    return existsSync(nestedIndex) ? nestedIndex : null
  }

  return candidate
}

function sendFile(res, filePath) {
  const extension = extname(filePath).toLowerCase()
  const contentType = mimeTypes[extension] || 'application/octet-stream'

  res.writeHead(200, { 'Content-Type': contentType })

  const stream = createReadStream(filePath)
  stream.on('error', () => {
    if (!res.headersSent) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' })
    }
    res.end('Internal server error')
  })
  stream.pipe(res)
}

function sendNotFound(res) {
  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' })
  res.end('Not found')
}

const server = createServer((req, res) => {
  if (!req.url) {
    res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' })
    res.end('Bad request')
    return
  }

  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`)
  const assetPath = resolveAsset(url.pathname)
  const isAssetRequest = extname(url.pathname) !== ''

  if (!assetPath && isAssetRequest) {
    sendNotFound(res)
    return
  }

  const targetFile = assetPath || fallbackFile

  sendFile(res, targetFile)
})

server.listen(port, host, () => {
  const address = server.address()

  if (!address || typeof address === 'string') {
    console.log('[pablo] server started')
    return
  }

  mkdirSync(runtimeDir, { recursive: true })
  writeFileSync(portFile, String(address.port), 'utf8')

  console.log(`[pablo] listening on ${host}:${address.port}`)
  console.log(`[pablo] active port saved to ${portFile}`)
})

function shutdown() {
  server.close(() => {
    process.exit(0)
  })
}

process.on('SIGINT', shutdown)
process.on('SIGTERM', shutdown)
