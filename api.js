const express = require('express')
var bodyParser = require('body-parser')
const fetch = require("node-fetch")

const app = express()
app.use( bodyParser.json() )
app.use(bodyParser.urlencoded({ extended: true }));


const PORT = process.env.PORT || 3000


app.get('/', (req, res) => {
    res.json({status: 'ok'})
})

//parte 2
app.get('/bimbumbam', (req, res) => {
    const numero = Math.ceil(Math.random()*5)
    res.json({result: numero})
})


app.listen(PORT, () => console.log('Example app listening on port'+ PORT))
