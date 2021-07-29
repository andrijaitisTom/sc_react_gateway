module.exports = {
    merchantId: 842776,
    apiId: 46013,
    payCurrency: 'BTC',
    receiveCurrency: 'USD',
    receiveAmount: 15.99,
    payAmount: '0.0' ,
    description: 'some description here'.replace(/\s/g, ''),
    culture: 'en',
    callback: encodeURIComponent('https://merchant.com/callback.php'),
    success: encodeURIComponent('https://merchant.com/success.php'),
    failure: encodeURIComponent('https://merchant.com/failure.php'),
}




// 'merchantId='+info.merchantId+
// '&apiId='+info.apiId+
// '&orderId='+
// '&payCurrency='+info.payCurrency+
// '&payAmount='+
// '&receiveCurrency='+info.receiveCurrency+
// '&receiveAmount='+info.receiveAmount+
// '&description='+info.description+
// '&culture='+
// '&callbackUrl='+info.callback+
// '&successUrl='+info.success+
// '&failureUrl='+info.failure