const axios = require("axios");
const fs = require('fs');
const crypto = require('crypto')
const merchant = require('./merchantConstants')
var path = require('path')


module.exports.callTheOrder = async function (range) {

  var r = parseFloat(range)
  console.log(r)

  console.log('calling');
const result = await merchantOrder(r);
console.log('return the response from merchant Order');

return result;

async function merchantOrder(r) {

var privateKey = fs.readFileSync(path.resolve("createOrder/btcToUSD.pem"))

const dataToSign ='merchantId='+merchant.merchantId+
'&apiId='+merchant.apiId+
'&orderId='+
'&payCurrency='+merchant.payCurrency+
'&payAmount='+merchant.payAmount+
'&receiveCurrency='+merchant.receiveCurrency+
'&receiveAmount='+(r+0.001)+
'&description='+merchant.description+
'&culture='+merchant.culture+
'&callbackUrl='+merchant.callback+
'&successUrl='+merchant.success+
'&failureUrl='+merchant.failure


const signature = crypto.sign("sha1", Buffer.from(dataToSign), {
	key: privateKey,
	padding: crypto.constants.OPENSSL_ALGO_SHA1,
})


// console.log('scorder range ' +merchant.receiveAmount+' SIGNATURE '+signature.toString("base64"))
// console.log(' const: ' +merchant.receiveAmount+' | range: '+r)
// console.log(' const type: ' + typeof merchant.receiveAmount+' | range type: '+typeof r)

const params = new URLSearchParams(dataToSign)
params.append("sign", signature.toString("base64"));


const headers = {
  'Content-Length': '708',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Connection': 'Keep-Alive',
    'Accept-Encoding': 'gzip,deflate'
      }

    try {
      const  res = await axios.post("https://spectrocoin.com/api/merchant/1/createOrder",
      params,
      {headers: headers}
       )
       if(res.status == 200){
         console.log('merchant Order function finished the call !')
        orderData = res.data;
        return orderData 
       }    else return 'failed to create order - ' + res.status
   }
   catch (err) {
       console.error(err);
   }




}


}
