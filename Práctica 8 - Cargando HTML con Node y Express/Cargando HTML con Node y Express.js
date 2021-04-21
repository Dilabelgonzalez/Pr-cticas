const express = require('express')
const app = express()
const port = 3000

app.use(express.static('Html'));

app.get('/Inicio', (req, res) => res.sendFile(__dirname+"/Html/Inicio.html"))
app.get('/Contacto', (req, res) => res.sendFile(__dirname+"/Html/Contacto.html"))
app.get('/Nosotros', (req, res) => res.sendFile(__dirname+"/Html/Nosotros.html"))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))