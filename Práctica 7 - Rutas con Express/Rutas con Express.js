const express = require('express')
const app = express()
const port = 3000

app.get('/Inicio', (req, res) => res.send('Estás en Inicio'))
app.get('/Servicios', (req, res) => res.send('Estás en Servicios'))
app.get('/Contactos', (req, res) => res.send('Estás en Contactos'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))