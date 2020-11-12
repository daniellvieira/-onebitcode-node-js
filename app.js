const express = require('express')
const checkListRouter = require('./src/routes/checklists')
const app = express()
const port = 3000

// verifica se existe um JSON dentro da chamada web e disponibiliza
// dentro do req.body
app.use(express.json())
app.use('/checklists', checkListRouter)

app.listen(port, () => {
  console.log(`Servidor foi iniciado em http://localhost:${port}`)
})