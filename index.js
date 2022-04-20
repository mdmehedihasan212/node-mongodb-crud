const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('CRUD mongodb is ready')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})