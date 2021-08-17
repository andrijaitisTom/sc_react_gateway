var express = require('express');
var router = express.Router();
const callTheOrder = require('../createOrder/CreateScOrder')


router.get('/', async function(req, res, next) {

var response = await callTheOrder.callTheOrder()
    res.send(response)

});

module.exports = router;
