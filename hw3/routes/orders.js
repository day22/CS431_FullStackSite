var express = require('express');
const { data } = require('jquery');
const { dbquery } = require('./dbms');
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
  var pullData;
  var selectedMonth = req.body.month; //req.body.result;
  //var dataPulled 
  dbquery("SELECT COUNT(*) FROM ORDERS WHERE MONTH='"+ selectedMonth + "' AND TOPPINGS='Plain';", function(error,result) {
    if (error) throw error;
    pullData.push(resultJSO);
    
  });
  dbquery("SELECT COUNT(*) FROM ORDERS WHERE MONTH='"+ selectedMonth + "' AND TOPPINGS='Chocolate';", function (error,result) {
    if (error) throw error;
    console.log(result);
    pullData.push(result);
  });
  dbquery("SELECT COUNT(*) FROM ORDERS WHERE MONTH='"+ selectedMonth + "' AND TOPPINGS='Cherry';", function (error,result) {
    if (error) throw error;
    console.log(result);
    pullData.push(result);
  });

  var sendData = JSON.stringify(pullData);

  res.json(sendData);
});

module.exports = router;
