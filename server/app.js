// defining dependencies 
var express =  require('express');
var app = express();
var bodyParser = require('body-parser');
var index = require('./routes/index');
var math = require('./routes/math');

// body parser setup
// parse request body from client
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// setting up routes
app.get('/', index);
app.use('/math', math);

app.use(express.static('server/public'));

app.listen(5000);
console.log("Listening on port: 5000");
