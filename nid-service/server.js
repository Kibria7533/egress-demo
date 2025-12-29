const express = require('express')
const app = express()

// Allow only this IP
//const ALLOWED_IP = '192.168.88.65'
//
//app.use((req, res, next) => {
//  // Get real client IP (works behind proxy if trust proxy is set)
//  const clientIp =
//    req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
//    req.socket.remoteAddress
//console.log("Request coming from",clientIp)
//  if (clientIp === ALLOWED_IP || clientIp === `::ffff:${ALLOWED_IP}`) {
//    return next()
//  }
//
//  return res.status(403).json({ error: 'Access denied' })
//})

app.get('/nid-data', (req, res) => {
  res.send('nid-121231231231!')
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
})
