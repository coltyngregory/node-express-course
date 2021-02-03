const express = require('express');
const app = express();

const mockUserData=[
{name: 'Mark'},
{name: 'Rogers'},
]

app.get('/users', function(req, res){
	res.json({
		success: true,
		message: 'successfully got users. Yeet!',
		users: mockUserData,
	})
})

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