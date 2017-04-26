var Router = module.exports = require('express').Router();

var ott = require('../lib/ott/KalturaClient');
let config = new ott.Configuration();
config.serviceUrl =  process.env.KALTURA_SERVICE_URL || 'http://rest-eus1.ott.kaltura.com/restful';
let client = new ott.Client(config);

Router.post('/ottLogin', function(req, res) {
  ott.services.ottUser.login(req.body.partnerId, req.body.email, req.body.password)
      .completion((success, response) => {
        if (!success) return res.status(500).send("Error logging in");
        if (!response.result) return res.status(500).send(response.message);
        res.json(response.result);
      })
      .execute(client);
})

