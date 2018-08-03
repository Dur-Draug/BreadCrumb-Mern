const express = require('express');
const mongoose = require('mongoose');


const authentication = require('./routes/api/authentication');
const post = require('./routes/api/post');
const profiles = require('./routes/api/profiles');



const app = express();

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello World'));

//use routes
app.use('/api/authentication', authentication);
app.use('/api/profiles', profiles);
app.use('/api/post', post);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

