// Importing express module
const express = require('express');
const app = express();

//app.use(express.json());

app.get('/',
	(req, res) => {
		res.sendFile(__dirname + '/index.html');
	});

app.get('/login.html',
	(req, res) => {
		res.sendFile(__dirname + '/login.html');
	});
app.get('/register.html',
	(req, res) => {
		res.sendFile(__dirname + '/register.html');
	});
app.get('/welcome.html',
	(req, res) => {
		res.sendFile(__dirname + '/welcome.html');
	});
app.post('/',(req, res) => {
		res.redirect("/")
		});
app.post('/login.html',(req, res) => {
	res.redirect("/login.html")
	});
app.post('/register.html',(req, res) => {
        res.redirect("/register.html")
        });
app.post('/welcome.html',(req, res) => {
	res.redirect("/welcome.html")
	});

app.listen(3000,
	() => {
		console.log(
			'Our express server is up on port 3000'
		);
	});