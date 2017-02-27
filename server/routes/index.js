var express = require('express');
var router = express.Router();
var path = require('path');

// ask about index.js as separate file | what benefit?  
router.use('/', function(req, res){
  res.sendFile(path.resolve('./server/public/index.html'));
});

module.exports = router;
