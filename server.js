require('dotenv').config();
const express = require('express');
const session = require('express-session'); 
const passport = require('passport');
const path = require('path');

const app = express();

process.env.HTTPS = true

const {PORT} = process.env;

//CORS
app.use(function(req, res, next) {
  const allowList = [
    "http://localhost:3000",
  ];
  const origin = req.headers.origin;
  if (allowList.indexOf(origin) > -1) {
    res.header("Access-Control-Allow-Origin", origin);
  }
  res.header(
    "Access-Control-Allow-Headers",
    "Accept, Authorization, Content-Type, Origin, X-Requested-With"
  );
  res.header("Access-Control-Allow-Methods", "DELETE, GET, PATCH, POST, PUT");
  res.header("Access-Control-Allow-Credentials", true);

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }
  next();
});

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

// mock data for now
app.get('/api/projects', (req, res) => {
  res.json([
    'MOCK PROJECT 1',
    'MOCK PROJECT 2',
    'MOCK PROJECT 3',
    'MOCK PROJECT 4',
    'MOCK PROJECT 5',
    'MOCK PROJECT 6',
    'MOCK PROJECT 7',
    'MOCK PROJECT 8',
    'MOCK PROJECT 9',
    'MOCK PROJECT 10',
    'MOCK PROJECT 11',
    'MOCK PROJECT 12'
  ]);
});

app.post('/api/projects', (req, res) => {
  const {newProjectName} = req.body;
  res.json({
    "data": newProjectName
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