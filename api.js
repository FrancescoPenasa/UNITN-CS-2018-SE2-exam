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

//parte 3
const URL = "https://penasa-187617-b-dec2018.herokuapp.com/bimbumbam"

app.get('/play', async (req, res) => {

    let player1 = +req.query.player1;

    const response = await fetch(URL);
    const json_bimbumbam = await response.json();
  	let number = +json_bimbumbam.result;

    let isEven = 1
    let result = number + player1
    if ((result % 2) == 0)
      isEven = 0

    let json_response = {result: isEven, player2: result}
    res.status(200);
    res.json(json_response);
})

app.listen(PORT, () => console.log('Example app listening on port'+ PORT))
