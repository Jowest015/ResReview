const http = require('http');
const server = http.createServer(app);

var express = require('express');
var bodyParser = require('body-parser');
var es6Renderer = require('express-es6-template-engine');
var pgPromise = require('pg-promise')({});
var db = pgPromise({database:''});

var app = express();

app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");

app.use(bodyParser.urlencoded);
app.use(bodyParser.json);

app.use("/public", express.static("public"))
app.use(express.static('public'));

server.listen(5000, () => {
  console.log('listening on *:5000')
});