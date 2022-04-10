const express = require('express');
const app = express()
const PORT = 5000

app.get('/', (req, res) => {
    res.send("Welcome Home Route!!!")
})

app.listen(PORT, () => {
    console.log(`Port is running on ${PORT}`)
})