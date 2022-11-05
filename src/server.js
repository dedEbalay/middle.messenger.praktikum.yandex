const express = require('express'),
      path = require('path'),
      PORT = 3000;


const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
})