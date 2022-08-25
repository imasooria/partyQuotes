const cors = require('cors');
const express = require('express');
const delay = require('delay');

const partyQuotes = require("./partyQuotes");

console.log(partyQuotes)

const app = express()
app.use(cors());
const port = 3000

function getRandomIndex(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.get('/', async (request, response) => {
    const index = getRandomIndex(0, 11);
    const quote = partyQuotes[index]
    await delay(200);
    response.send(JSON.stringify(quote))
})

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
})
