const http = require('http');
const server = http.createServer(app);

var es6Renderer = require('express-es6-template-engine');
var express = require('express');
var bodyParser = require('body-parser');
var pgPromise = require('pg-promise')({
  promiseLib: Promise
});
var app = express();

var db = pgPromise({
  database:'restaurant'
});

app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");

app.use(bodyParser.urlencoded({ extended: false}));

app.use("/public", express.static("public"))
app.use(express.static('public'));

app.get('/', function(req, resp) {
  resp.render('search_form.html');
});

app.get('/search', function(req, resp) {

})

server.listen(5000, () => {
  console.log('listening on *:5000')
});