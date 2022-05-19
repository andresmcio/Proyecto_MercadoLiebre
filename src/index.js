const express = require('express');
const app = express();
const path = require('path');
const publicFolder = path.resolve(__dirname, '../public');

app.use(express.static(publicFolder));

app.listen(1010, () => console.log('Server started at http:/localhost:1010 ...'));

//app.get('/', (req, res) => )