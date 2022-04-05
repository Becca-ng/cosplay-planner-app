require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const path = require('path');

const app = express();

process.env.HTTPS = true

const { PORT } = process.env.PORT;

app.use(function (req, res, next) {
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

/**
 * POST Request
 * 
 */

app.get('/api/projects', (req, res) => {
  res.json([
    {
      "projectId": "TESTUSER-01",
      "username": "TESTUSER",
      "project": {
        "name": "Ahri",
        "startDate": "SomeDateValue",
        "dueDate": "SomeDateValue",
        "debutCon": "Katsucon",
        "blurb": "Ahri is kinda hot and sexy uwu",
        "tasks": [
          {
            "name": "Tails",
            "subTasks": [
              "wood",
              "wire",
              "fur",
              "lights"
            ]
          }
        ],
      }
    },
    {
      "projectId": "TESTUSER-02",
      "username": "TESTUSER",
      "project": {
        "name": "Lux"
      }
    },
    
    
    // let exampleProject = {
    //   "project":{
    //     "name": "whatever they input"
    //   }
    // }
    
    // setProjects([...project, exampleProject])
    
    // {
    //   "project"
    // }
    
    
    
    
    {
      "projectId": "TESTUSER-03",
      "username": "TESTUSER",
      "project": {
        "name": "Bone Armor"
      }
    },
    {
      "projectId": "TESTUSER-04",
      "username": "TESTUSER",
      "project": {
        "name": "Kevin, work armor"
      }
    },
    {
      "projectId": "TESTUSER-05",
      "username": "TESTUSER",
      "project": {
        "name": "Kevin, casual armor"
      }
    },
    {
      "projectId": "TESTUSER-06",
      "username": "TESTUSER",
      "project": {
        "name": "Nia, Dormant mode" 
      }
    },
  ]);
});

app.post('/api/projects', (req, res) => {
  const { newProjectName } = req.body;
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
  console.log(`The server is running at port ${process.env.PORT}`);
});