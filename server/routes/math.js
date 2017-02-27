// defining dependencies
var express = require('express');
var router = express.Router();
var calculatorObject;

// execute function when '/' post occurs
router.post('/', function(req, res){
  console.log(req.body);
  calculatorObject = req.body;
  var value = 0;
  if(calculatorObject.type == 'add'){ // .type specifies operation | defined client side in client.js
    value = add(calculatorObject.x, calculatorObject.y);
  } else if (calculatorObject.type == 'subtract'){
    value = subtract(calculatorObject.x, calculatorObject.y);
  } else if (calculatorObject.type == 'multiply'){
    value = multiply(calculatorObject.x, calculatorObject.y);
  } else if (calculatorObject.type == 'divide'){
    value = divide(calculatorObject.x, calculatorObject.y);
  }
  res.send(200, value);
});

function add(x, y){
  return parseInt(x) + parseInt(y);
};
function subtract(x, y){
  return parseInt(x) - parseInt(y);
};
function multiply(x, y){
  return parseInt(x) * parseInt(y);
};
function divide(x, y){
  return parseInt(x) / parseInt(y);
};

module.exports = router;
