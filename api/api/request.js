const axios = require('axios');


 async function makeRequest () {
            try {
               const { res } = await axios.get({
                    url: 'https://api.coindesk.com/v1/bpi/currentprice.json',
                    method: 'get',
                    timeout: 8000,
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                if(res.status == 200){
                   return res.data.bpi.EUR.description
                    
                }    
            }
            catch (err) {
                console.error(err);
            }


    }

    module.exports = {
        makeRequest
    };

