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

app.listen(8000, function() {
	console.log('We have liftoff')
})