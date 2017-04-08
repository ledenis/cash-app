import express from 'express'

const app = express()

app.use(express.static('client/build'))

app.get('/api/hello', (req, resp) => {
  console.log('hello')
  resp.send('hello')
})

const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
