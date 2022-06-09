const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 1010;
// const previewProfilePic = require('./functionalities.js');

app.listen(port, () => console.log('Server started at http:/localhost: ' + port + ' ...'));

const publicFolder = path.resolve(__dirname, '../public');

app.use(express.static(publicFolder));

app.get('/', (req, res) => 
    res.sendFile(path.resolve(__dirname, 'views/home.html'))
);

app.post('/', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'views/home.html'))
);

app.get('/login.html', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'views/login.html'))
);

app.get('/register.html', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'views/register.html'))
);