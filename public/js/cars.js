$(document).ready(function() {
  $("#vinSearch").on("click", function() {
    console.log("click hello");

    var vin = { vin: $("#vinInput").val() };

    $.ajax({
      url: "/vinTest",
      type: "POST",
      data: vin,
      dataType: "json"
    }).then(function(dataGotBack) {
      console.log("data!!!!!", dataGotBack);
      console.log(
        "total_cars_sold_in_last_45_days",
        dataGotBack.total_cars_sold_in_last_45_days
      );

      var h1 = $("<h1>");
      h1.text(
        "Total Sold last 45 days " + dataGotBack.total_cars_sold_in_last_45_days
      );
      $("#infoDiv").append(h1);

      var secondh1 = $("<h1>");
      secondh1.text(
        "Total Actice Cars RN " + dataGotBack.total_active_cars_for_ymmt
      );
      $("#infoDiv").append(secondh1);
    });
  });
});
