require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')
const path = require('path')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', express.static(path.join(__dirname, '../public')))

// your API calls

// example API call
app.get('/curiosity', async (req, res) => {
    try {
        let data = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${process.env.API_KEY}`)
            .then(res => res.json())
        res.send({ data })
    } catch (err) {
        console.log('error:', err);
    }
})

app.listen(port, () => console.log(`Rover app listening on port ${port}!`))