const express = require('express')

const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const routeObj = require('./routes/memRouter')

const app = express()
const apiPort = 5000

app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())
app.use(bodyParser.json({ limit: "30mb", extended: true }))

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', routeObj)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))