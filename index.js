const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded);
app.use(bodyParser.json);

const http = require('http');
const server = http.createServer(app);



const pgPromise = require('pg-promise');


app.use(express.static('public'));

server.listen(5000, () => {
  console.log('listening on *:5000')
});

app.use('')