// Importing express module
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Establishing the port
const PORT = process.env.PORT ||5000;

// Executing the server on given port number
app.listen(PORT, console.log(
`Server started on port ${PORT}`));

