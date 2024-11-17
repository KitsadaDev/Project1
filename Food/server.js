const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const socketIo = require('socket.io')
const cors = require('cors')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

const server = app.listen(3000, () => {
    console.log('serveer is running....')
})

