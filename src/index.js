const path = require('path');
const express = require('express');
const app = express();

app.listen(1010, () => console.log('Server started at http:/localhost:1010 ...'));

const publicFolder = path.resolve(__dirname, '../public');

app.use(express.static(publicFolder));

app.get('/', (req, res) => 
    res.sendFile(path.resolve(__dirname, 'views/home.html'))
);