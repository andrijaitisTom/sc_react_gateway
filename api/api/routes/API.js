var express = require('express');
var router = express.Router();
const callTheOrder = require('../createOrder/CreateScOrder')
const app = express();
app.use(express.json()); 


router.get('/', async function(req, res, next) {

var response = await callTheOrder.callTheOrder()
    res.send(response)

});

router.post('/',async function(req,res){
    var range = await req.body.range;
    var response = await callTheOrder.callTheOrder(range)
    console.log(response)
    res.send(response)
    });


module.exports = router;
