const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')

// Middleware
server.use(bodyParser.urlencoded({ extended: true})) 
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, function() {
    console.log(`Backend is running on port ${port}.`)
})

module.exports = server