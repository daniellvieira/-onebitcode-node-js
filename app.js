const { response } = require('express')
const express = require('express')
const app = express()
const port = 3000

// Primeira rota com Express
app.get('/', (req, res) => {
  res.send('<h1>TODO List</h1>')
})

app.get('/json', (req, res) => {
  res.json({title: 'Tarefa X', done: true})
})

app.listen(port, () => {
  console.log(`Servidor foi iniciado em http://localhost:${port}`)
})