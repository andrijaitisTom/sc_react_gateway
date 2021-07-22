import React from 'react'
const axios = require("axios");
const fs = require('fs');
const crypto = require('crypto')


function merchantOrder() {

var privateKey = fs.readFileSync('./keys/btcToUSD.pem')

const dataToSign ='merchantId=842776&apiId=45964&orderId=&payCurrency=BTC&payAmount=0.0&receiveCurrency=USD&receiveAmount=15.99&description=Payment+for+Order+2547&culture=&callbackUrl=https%3A%2F%2Fmerchant.com%2Fcallback.php&successUrl=https%3A%2F%2Fmerchant.com%2Fsuccess.php&failureUrl=https%3A%2F%2Fmerchant.com%2Ffailure.php'

const signature = crypto.sign("sha1", Buffer.from(dataToSign), {
	key: privateKey,
	padding: crypto.constants.OPENSSL_ALGO_SHA1,
})

console.log('SIGNATURE '+signature.toString("base64"))

const params = new URLSearchParams(dataToSign)
params.append("sign", signature.toString("base64"));


var order = dataToSign+'&sign='+signature.toString("base64")


// console.log('order ---- '+order)

const headers = {
  'Content-Length': '708',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Connection': 'Keep-Alive',
    'Accept-Encoding': 'gzip,deflate'
      }
  axios.post(
      "https://spectrocoin.com/api/merchant/1/createOrder",
      params,
      {headers: headers}
    )
    .then((r) => {
      console.log(r.data);
    })
    .catch((e) => console.log(e));
return(
    <div>
        
    </div>
)

}


export default merchantOrder