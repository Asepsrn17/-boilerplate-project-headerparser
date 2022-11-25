// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();
var requestIp = require('request-ip');

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
const { request } = require('express');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get("/api/whoami", (req, res) => {
  let ip = requestIp.getClientIp(req);
  let language = req.headers['accept-language'];
  let software = req.headers['user-agent']
  res.json({
    ipaddress: ip,
    language,
    software
  })
})

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port http://localhost:' + listener.address().port);
});
