require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

app.use(cors());
app.use(express.json());

const MONGDODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGDODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
	console.log('Mongoose is connected!!!!!!!');
});

app.post('/api/register', async (req, res) => {
	try {
		const hashedPassword = await bcrypt.hash(req.body.password, 10);
		//This code hashes the password using bcrypt.hash() before storing it in the database.
		await User.create({
			fname: req.body.fname,
			lname: req.body.lname,
			email: req.body.email,
			password: hashedPassword,
			subscription: req.body.subscription,
		});
		res.json({ status: 'ok' });
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' });
	}
});

app.post('/api/login', async (req, res) => {
	// find the user with the provided email using the User model, await for the operation to complete
	const user = await User.findOne({ email: req.body.email });

	// if the user doesn't exist, return a JSON response with status 'error' and an error message
	if (!user) {
		return res.json({ status: 'error', error: 'User Does not Exist' });
	}

	// compare the provided password with the user's hashed password, await for the operation to complete
	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	);

	// if the password is invalid, return a JSON response with status 'error' and an error message
	if (!isPasswordValid) {
		return res.json({ status: 'error', error: 'Invalid login' });
	}

	// if the user exists and the password is valid, generate a JSON Web Token with the user's name and email, sign it with a secret string
	const token = jwt.sign({ name: user.name, email: user.email }, 'secret123');

	// return a JSON response with status 'ok' and the generated token
	res.json({ status: 'ok', token });
});

app.get('/api/fetchall', async (req, res) => {
	try {
		const val = await User.find();
		res.json(val);
	} catch (err) {
		console.log(err);
	}
});

app.listen(1337, () => {
	console.log('Server started on port 1337');
});
