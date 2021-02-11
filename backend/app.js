const express = require('express')
const app = express()
const axios = require('axios')
const port = process.env.PORT || 8080
const cheerio = require('cheerio')
const bodyParser = require('body-parser')
const cors = require('cors')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())



app.get('/', (req, res) => {


    axios.get('https://www.cifraclub.com.br/' + req.query.artista + '/' + req.query.musica).then((response) => {

        const $ = cheerio.load(response.data)

        const cifra = $('pre').text()

        res.send(cifra)
        console.log(cifra)


    })
})

app.listen(port, () => {

    console.log('online na porta ' + port)
})