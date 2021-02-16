collapseFormAndDisplayOrder = function ( event ) {
    event.preventDefault()
    var customerNotes = document.getElementById("notes").value;
    if (customerNotes.includes("vegan")) {
        alert("Cheesecake can not be vegan, so sorry.");
    } else {
        $("form").hide();
        var ele = document.getElementsByName("topping");
        var topping = "Plain";
        for (i = 0; i < ele.length; i++) {
            if (ele[i].checked)
                topping = ele[i].value;
        }
        var quantity = document.getElementById("quantity").value;
        var order = "Success, you ordered " + quantity + " " + topping + " Cheescakes with the notes: " + customerNotes;
        document.getElementById("success").innerHTML = order;
        $("#success").css("display", "block");
    }
}

$(function() {
    $("#myform").submit(collapseFormAndDisplayOrder);
});