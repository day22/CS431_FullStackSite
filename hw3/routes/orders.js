var express = require('express');
var router = express.Router();
var order = {
  "order1":{"topping":"Cherry", "quantity":"2"},
  "order2":{"topping":"Plain", "quantity":"6"},
  "order3":{"topping":"Chocolate", "quantity":"3"}}
  var orderJSON = JSON.stringify(order);
/* GET home page. */

router.get('/', function(req, res, next) {
  res.json(orderJSON);
});

router.post('/', function(req, res, next) {
  res.send(orderJSON)
});

module.exports = router;
