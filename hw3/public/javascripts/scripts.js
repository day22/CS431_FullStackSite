
var newCustomerNotes;
var newTopping;
var newQuantity;


let collapseFormAndDisplayOrder = function ( event ) {
    event.preventDefault()
    newCustomerNotes = document.getElementById("notes").value;
    if (newCustomerNotes.includes("vegan")) {
        alert("Cheesecake can not be vegan, so sorry.");
    } else {
        $("form").hide();
        var ele = document.getElementsByName("topping");
        newTopping = "Plain";
        for (i = 0; i < ele.length; i++) {
            if (ele[i].checked)
                newTopping = ele[i].value;
        }
        newQuantity = document.getElementById("quantity").value;
        var order = "Success, you ordered " + newQuantity + " " + newTopping + " Cheescakes with the notes: " + newCustomerNotes;
        document.getElementById("success").innerHTML = order;
        $("#success").css("display", "block");
    }
}

$(function() {
    $("#myform").submit(collapseFormAndDisplayOrder);
});

$.post("/newOrders", req, function(data) {
    var newOrder = {quantity: newQuantity, toppings: newTopping, notes:newCustomerNotes};
    orderJSON = JSON.stringify(newOrder);
    req.JSON(orderJSON);
}
