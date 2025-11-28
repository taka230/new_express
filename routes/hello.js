<<<<<<< HEAD
var express = require('express');
var router = express.Router();

/*GET home page*/
router.get('/', function(req, res, next) {
  res.render('hello', { title: 'Hello Express' });
});

module.exports = router;
=======
var express = require('express');
var router = express.Router();

/*GET home page*/
router.get('/', function(req, res, next) {
  res.render('hello', { title: 'Hello Express' });
});

module.exports = router;
>>>>>>> 250030a3969e3771a90038368f839cb27420de62
