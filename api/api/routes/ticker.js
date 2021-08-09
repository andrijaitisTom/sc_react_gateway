var express = require('express');
var router = express.Router();
const callTicker = require('../ticker/ticker')


router.get('/',async function(req, res, next) {

var response = await callTicker.ticker()
    res.send(response)

});

module.exports = router;
