/**
 * Created by Lars on 14.04.2017.
 */

var express = require('express');
var bodyParser = require('body-parser')

var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.post('/seal', function(req, res){
    console.log(req.body);
    var data = {
        "text": "Seal of approval",
        "response_type": "in_channel",
        "attachments": [
            {
                "img_url":"http://media.treehugger.com/assets/images/2013/10/seal-of-approval-meme.jpg"
            }
        ]
    };
    res.setHeader('Content-Type', 'application/json');
   res.send(JSON.stringify(data));
});

app.listen(process.env.PORT || 3000, function () {
    console.log('Example app listening on port 3000!');
});