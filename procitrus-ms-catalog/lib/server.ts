var resultConfig=require('dotenv').config();

if (resultConfig.error) {
    throw resultConfig.error
}
   
console.log(resultConfig.parsed)

var fetch = require('node-fetch');

import app from './app';
import https = require('https');
import fs = require('fs');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
});
