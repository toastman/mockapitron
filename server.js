var express = require('express');
var dream = require('dreamjs');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

function generateResponse (schema, quantity) {
    return dream
            .schema(schema)
            .generateRnd(quantity)
            .output()
}

app.post('/', function(req, res) {
    var schema = req.body.schema || {};
    var size = req.body.size || 0;
    res.send(generateResponse(schema, size));
});

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 3000;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

var server = app.listen(server_port, server_ip_address, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
