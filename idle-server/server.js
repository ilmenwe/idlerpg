//server.js

const express = require('express');
const app = express();
const jwt = require('express-jwt');
const cors = require('cors');
const gameloop = require('node-gameloop');
const gameLogic = require ('./gameLogic');
const UserStorage = require ('./store/UserStore');
const JwtDecode  = require('jwt-express-decode');
const server = require('http').createServer(app);

var logicLoop = new gameLogic(server);

gameloop.setGameLoop(logicLoop.gameLogicUpdate.bind(logicLoop),logicLoop.getDesiredFrameLength());

app.use(cors());




app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

const authCheck = jwt({
  secret: new Buffer("INSER YOURS", 'base64'),
  audience: "INSERT YOURS"
});

var contacts = [
  {
    id:"test",
    name:"bob"
  }
];


server.listen(3002);

app.get('/api/contacts', (req,res) => {
  const allContacts = contacts.map(contact => {
    return {id: contact.id, name: contact.name}

    }
  );
  res.json(allContacts);
});

app.get('/api/contact/', (req,res) =>{
//app.get('/api/contact/', authCheck, (req,res) =>{
  console.log(req.headers.email);
  res.json({});
});

console.log(gameloop);

app.listen(3001);
console.log('Listening on http://localhost:3001');
