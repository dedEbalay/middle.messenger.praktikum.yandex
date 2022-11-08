/*eslint-env es6*/
const express = require('express'),
      path = require('path'),
      PORT = process.env.PORT || 3000;


const app = express()

app.use('/', express.static(__dirname))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
})
