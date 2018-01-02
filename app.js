const express = require('express')
const app = express()
const unirest = require('unirest')

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000
const API_HOST = process.env.API_HOST || "pi1.local"
const API_PORT = process.env.API_PORT || 8080
const API_URL = "http://" + API_HOST + ":" + API_PORT

console.log("API: " + API_URL)

const GPIOS_URL = API_URL + "/v1/gpios"
app.get('/gpios', function (req, res) {
  console.log('Fetch GPIOs');
  unirest.get(GPIOS_URL).end(function (response) {
    console.log(response)
    res.send(response.body)
  });
})

const LEDMODE_URL = API_URL + "/v1/ledMode"
app.post('/ledMode', function(req, res) {
  console.log('Toggle LED mode')
  unirest.post(LEDMODE_URL).end(function (response) {
    res.send({status: "OK"})
  })
})

app.listen(PORT, function () {
  console.log('Example app listening on port ' + PORT)
})
