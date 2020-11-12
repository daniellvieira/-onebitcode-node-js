const { response } = require('express')
const express = require('express')
const app = express()
const port = 3000

// verifica se existe um JSON dentro da chamada web e disponibiliza
// dentro do req.body
app.use(express.json())

// criar um middleware
const log = (req, res, next) => {
  console.log(req.body)
  console.log(`Data: ${Date.now()}`)
  next()
}

app.use(log)

// Primeira rota com Express
app.get('/', (req, res) => {
  res.send('<h1>TODO List</h1>')
})

app.get('/json', (req, res) => {
  console.log(req.body)
  res.json({title: 'Tarefa X', done: true})
})

app.listen(port, () => {
  console.log(`Servidor foi iniciado em http://localhost:${port}`)
})