const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000

app.use(cors()) // allow all origins

app.get('/nid-data', (req, res) => {
  res.send('nid-121231231231!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
