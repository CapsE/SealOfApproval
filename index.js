/**
 * Created by Lars on 14.04.2017.
 */

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.post('/seal', function(req, res){
    var data = {
        "text": "Seal of approval",
        "attachments": [
            {
                "thumb_url":"https://cdn.shopify.com/s/files/1/0860/3518/products/sealofapproval_comp.jpg?v=1432862016"
            }
        ]
    };
   res.send(JSON.stringify(data));
});

app.listen(process.env.PORT || 3000, function () {
    console.log('Example app listening on port 3000!');
});