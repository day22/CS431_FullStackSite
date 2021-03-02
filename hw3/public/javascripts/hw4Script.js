
    $(".month").click(function(){
        var updateMonth = $(this).attr('id');
        $("#monthButton").html(updateMonth);

        $.post("/orders",updateMonth, function(data){
          var databaseData = JSON.parse(data);
          document.getElementById("order1").innerHTML = databaseData.order1.quantity + " " + databaseData.order1.topping; 
          document.getElementById("order2").innerHTML = databaseData.order2.quantity + " " + databaseData.order2.topping; 
          document.getElementById("order2").innerHTML = databaseData.order3.quantity + " " + databaseData.order3.topping; 
        });
      });
   
  