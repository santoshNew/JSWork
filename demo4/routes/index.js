var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root', 
  database : 'test',
  port: 3307
});

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


router.get('/newuser', function(req, res) {
  	console.log(req.query.username);
  	console.log(req.query.password);
  	var username = req.query.username;
  	var password = req.query.password;

  	res.redirect("/home");
});

router.get('/home', function(req, res){
	// res.render('home', {title: 'Dashboard Page'});
	connection.connect();
	connection.query('SELECT * FROM persons;', function(err, rows, fields) {
 		res.render('home', {users : rows});
 		if (err) throw err;
 		console.log( 'the data comes from :');
 		console.log(rows);

 	});

 	connection.end();

});

module.exports = router;
