/**
 * Created by Lars on 14.04.2017.
 */

var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.post('/seal', function(req, res){
    var data = {
        "text": "Seal of approval",
        "attachments": [
            {
                "img_url":"https://sealofapproval.herokuapp.com/seal.jpg"
            }
        ]
    };
    res.setHeader('Content-Type', 'application/json');
   res.send(JSON.stringify(data));
});

app.listen(process.env.PORT || 3000, function () {
    console.log('Example app listening on port 3000!');
});