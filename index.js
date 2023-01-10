require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;


app.use(express.static('public', {index: 'index.html'}));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});