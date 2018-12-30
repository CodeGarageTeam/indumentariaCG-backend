const express = require('express')
const cors = require('cors')

var app = express()
app.use(cors())

app.get('/', (req, res) => {
  res.send({ hello: 'world!' })
})

app.get('/products', (req, res) => {
  res.send([
    {
      name: 'Remera',
      price: 10
    },
    {
      name: 'Pantalon',
      price: 20
    },
    {
      name: 'Campera',
      price: 30
    }
  ])
})

app.get('/promotions', (req, res) => {
  res.send([
    {
      name: 'Remera',
      price: 8
    },
    {
      name: 'Pantalon',
      price: 15
    },
    {
      name: 'Campera',
      price: 20
    }
  ])
})

app.listen(3000)
module.exports.app = app
