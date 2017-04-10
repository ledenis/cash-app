import express from 'express'

const app = express()

app.use(express.static('client/build'))

//TODO use a database...
const cash = {
  123: {
    items: {
      500: {
        facial: 500,
        count: 2
      },
      200: {
        facial: 200,
        count: 3
      },
    }
  }
}

app.get('/api/cash/:id', (req, res) => {
  const csh = cash[req.params.id]
  if (csh === undefined) {
    res.status(400).send('Not found')
  }
  res.json(csh)
})

const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
