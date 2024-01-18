// importing the dependencies
// defining the Express app
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
let alert = require('alert');

// defining the Express app
const app = express();

//setting middleware
app.use(express.static('public'));
app.use('/images', express.static(__dirname + '/Images'));
app.use(express.static('src'));

// adding Helmet to enhance your API's security
app.use(helmet());
// using bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '5000mb', extended: true, parameterLimit: 100000000000}));
// enabling CORS for all requests
app.use(cors());
// adding morgan to log HTTP requests
app.use(morgan('combined'));

//setting database
var mysql = require('mysql');
var connection = mysql.createConnection({
    host            : 'sql12.freemysqlhosting.net',
    user            : 'sql12578823',
    password        : 'pRYB5HU3dg',
    database        : 'sql12578823'
});
connection.connect(function(err) {
    if (err) throw err;
});

//variable
let username;

//API
app.post('/login', function(request, response) {
	var alert = require('alert');
	// Capture the input fields
	username = request.body.username;
	let password = request.body.password;
	// Ensure the input fields exists and are not empty
	if (username && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		connection.query('SELECT * FROM User WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				if(results[0].type == 0) response.redirect('/MainPageStudent.html');
				else response.redirect('/MainPageTeacher.html');
			} else {
				alert('Incorrect Username and/or Password!');
				response.redirect('/login.html');
			}			
			response.end();
		});
	} else {
		alert('Please enter username and password');
		response.redirect('/login.html');
		response.end();
	}
});

// starting the server
app.listen(3001, () => {
    console.log('listening on port 3001');
});
