const express = require('express')
const app = express()
const request = require('request')

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000
const API_HOST = process.env.API_HOST || "192.168.0.107"
const API_PORT = process.env.API_PORT || 8080
const API_URL = "http://" + API_HOST + ":" + API_PORT

console.log("API: " + API_URL)

app.get('/health', function (req, res) {
  res.status = 200
  res.send({status: "UP"})
})

const GPIOS_URL = API_URL + "/v1/gpios"
app.get('/gpios', function (req, res) {
  request.get(GPIOS_URL)
    .on("response", function (response) {
      res.send(response.body)
  });
})

const LEDMODE_URL = API_URL + "/v1/ledMode"
app.post('/ledMode', function(req, res) {
  request.post(LEDMODE_URL)
    .on(function (response) {
      res.send({status: "OK"})
  })
})

app.use(express.static(__dirname + '/'));

app.listen(PORT, function () {
  console.log('Example app listening on port ' + PORT)
})

if (process.argv.includes('test/app.spec.js')) {
  module.exports = app
}
