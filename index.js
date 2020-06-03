const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
var fs = require('fs');
const bodyParser = require('body-parser');

app.use(bodyParser());
app.use(express.static('public'));

app.get('/send-id', function (req, res) {
    res.json({ id: myLiffId });
});

app.post('/saveimage', function (req, res) {
    const data = req.body.data;
    const base64 = data.split(',')[1];
    const decode = new Buffer.from(base64, 'base64');
    const path = '/upload/images/' + new Date().getTime() + '-' + Math.random().toString(32).substring(2) + '.jpg';
    fs.writeFile('./public' + path, decode, (err) => {
        if (err) {
            console.log(err)
            res.status(500).json({ error: err });
        } else {
            console.log('saved:', path);
            res.status(200).json({ imagePath: path });
        }
    });
});

app.listen(port, () => console.log(`app listening on port ${port}!`));