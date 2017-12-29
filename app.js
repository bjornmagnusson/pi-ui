const express = require('express')
const app = express()
const unirest = require('unirest')

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/gpios', function(req, res) {
  unirest.post('http://192.168.0.110:8080/v1/gpios')
  .end(function (response) {
    console.log(response.body);
    return response.body;
  });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
