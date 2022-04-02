require('dotenv').config();
const express = require('express');
const session = require('express-session'); 
const passport = require('passport');
const path = require('path');

const app = express();

process.env.HTTPS = true

const {PORT} = process.env.PORT;

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname + '/react-ui/build')));

app.use(passport.initialize());
app.use(passport.session())

app.get('/heartbeat', (req, res) => {
  res.json({
    "is": "working"
  })
});


// catch-all so react can handle routing
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './react-ui/build', 'index.html'));
});

app.listen(process.env.PORT || 8080, () => {
  console.log(process.env)
  console.log(`The server is running at port ${PORT}`);
});