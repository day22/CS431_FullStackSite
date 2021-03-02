var fs = require('fs');
test('test selectEvent', () => {
 //Read the index.html file into a string
 var pageText = fs.readFileSync('routes/orders.js', 'utf8');

 //put the HTML into a testing DOM and do a sanity check
 var order = {
    0:{"topping":"cherry", "quantity":"2"},
    1:{"topping":"plain", "quantity":"6"},
    3:{"topping":"chocolate", "quantity":"3"}}
var orderJSON = JSON.stringify(order);

 expect(pageText===orderJSON);

});