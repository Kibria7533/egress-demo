const express = require('express')
const app = express()

/**
 * ✅ IMPORTANT
 * If your app is behind a reverse proxy (Nginx / Ingress / ALB / Cloudflare),
 * enable trust proxy so Express can use X-Forwarded-For safely (from your proxy).
 *
 * If your app is directly exposed with NO proxy, you can comment this out.
 */
app.set('trust proxy', true)

/**
 * Allowlist of client IPs (real user IPs)
 * Put your allowed public IP(s) or office IP(s) here.
 */
const ALLOWED_IPS = new Set([
  '192.168.88.65', // example LAN IP
  // '203.0.113.10', // example public IP
])

/**
 * Get the real client IP in a robust way:
 * - Cloudflare: CF-Connecting-IP is the best source if present
 * - Otherwise Express req.ip (uses X-Forwarded-For when trust proxy is enabled)
 */
function getClientIp(req) {
  const cfIp = req.headers['cf-connecting-ip']
  if (cfIp && typeof cfIp === 'string') return cfIp.trim()

  // Express will resolve correctly when trust proxy is enabled
  return req.ip
}

app.use((req, res, next) => {
  const clientIp = getClientIp(req)

  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} from ${clientIp}`)

  if (ALLOWED_IPS.has(clientIp)) return next()

  return res.status(403).json({
    error: 'Access denied',
    your_ip: clientIp,
  })
})

app.get('/nid-data', (req, res) => {
  res.send('nid-121231231231!')
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
})
