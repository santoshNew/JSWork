var express = require('express');
var router = express.Router();
var session = require('express-session');
var SessionStore = require('express-mysql-session');

var mysql = require('mysql');
var app = module.exports = express()


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root', 
  database : 'test'

});

/*app.use(session({
    key: 'session_cookie_name',
    secret: 'session_cookie_secret',
    store: new SessionStore(options)
}))*/

// connection.query('USE test');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

/* GET Custom home page. */
app.get('/hello', function(req, res) {
  // res.render('hello', { title: 'Hello World Express' });
   connection.query('SELECT * FROM persons', function(err, rows){
    res.render('users', {users : rows});
  });
});

module.exports = router;
