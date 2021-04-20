const express = require('express')
const app = express()
const port = 3000

app.get('/Inicio', (req, res) => res.send('Ciao a tutti!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))