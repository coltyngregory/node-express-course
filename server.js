const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const mockUserData=[
{name: 'Mark'},
{name: 'Rogers'},
]

app.post('/login', function(req, res){
	const username = req.body.username;
	const password = req.body.password;

	const mockUsername = "Ya";
	const mockPassword = "Yeet";

	if (username===mockUsername) && password===mockPassword){
	res.json({
		success: true,
		message: 'YAYEET!',
		token: 'encrypted token goes here',
	})
	} else {
		res.join({
			success: false,
			message: 'password and username do not match :()',
		})
	}
})

app.get('/users', function(req, res){
	res.json({
		success: true,
		message: 'successfully got users. Yeet!',
		users: mockUserData,
	})
})

//colons are used to pass variables thru url
app.get('/users/:id',function(req,res){
	console.log(req.params.id)
	res.json({
		success: true,
		message: 'got one user',
		user: req.params.id
	})
})

app.listen(8000, function() {
	console.log('We have liftoff')
})