var express = require('express');
var router = express.Router();
const callTicker = require('../ticker/ticker')


router.get('/',async function(req, res, next) {

var response = await callTicker.ticker()
    res.send(response)

});



router.post('/',async function(req,res){
    var currencyFrom = await req.body.currencyFrom;
    var currencyTo = await req.body.currencyTo;
    var response = await callTicker.ticker(currencyFrom, currencyTo)
    console.log('RESPONSE of TICKER : '+response)
    res.send(response)
    });


module.exports = router;
