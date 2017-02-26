var express =  require('express');
var app = express();
var bodyParser = require('body-parser');
var index = require('./routes/index');
var mathOperators = require('./routes/math');


app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', index);
app.use('/math', math);



app.listen(5000);
