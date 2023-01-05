const express = require('express')
const res = require('express/lib/response')
const app = express()
const axios = require('axios')

app.get('/',async (req, res) => {
    const data = await axios.post('https://data.mongodb-api.com/app/data-gdjbb/endpoint/data/v1/action/findOne',{"collection":"code","database":"CodeHustler","dataSource":"CodeHustler"},{
        headers: {
              'Content-Type': 'application/json',
              'Access-Control-Request-Headers': '*',
              'api-key': '3PpRJ6soXfQ31E5uBuwX7EVVcvC6d1BlNkWFmAakNgszGsFz4JeRjltC0KYuhxBT'
        }
    })
    res.send(data.data)
})

app.listen(5000, () => console.log('App Started'))