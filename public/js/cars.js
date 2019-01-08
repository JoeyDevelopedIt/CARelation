$(document).ready(function() {
  var currentVins = [];

  $("#vinSearch").on("click", function(e) {
    console.log("click hello");
    var vinStr = $("#vinInput")
      .val()
      .trim();
    var vin = { vin: vinStr };
    if (vinStr.trim() == "" || vinStr == null) {
      return;
    }
    if (currentVins.indexOf(vinStr) != -1) {
      alert("VIN already searched");
      e.preventDefault();
      return;
    }
    currentVins.push(vinStr);

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
      var carResultInfo = $("<div class='carData'>");
      var headerVinAndCarName = $("<div class='vinNumAndCarDisplay'>");

      var vinNumText = $("<p class='vinNumDisplay'>");
      vinNumText.text("VIN #" + vinStr);
      var s3 = $("<h2 class='carFullName'>").text(
        `${dataGotBack.year} ${dataGotBack.make} ${dataGotBack.model} ${
          dataGotBack.trim
        }`
      );
      headerVinAndCarName.append(vinNumText);
      // headerVinAndCarName.append(s3);

      var totalSoldCarsText = $("<h3 class='soldCarsTextHeader'>");
      var s1 = $("<span class='soldCars'>").text(
        dataGotBack.total_cars_sold_in_last_45_days
      );
      var div1 = $("<div class='numSpan'>").append(s1);
      totalSoldCarsText.append(div1);
      totalSoldCarsText.append(
        "<span class='totalCarsSoldText'>\t Sold in the last 45 days \t</span>"
      );
      var activeCarsText = $("<h3 class='activeCarsTextHeader'>");
      var s2 = $("<span class='activeCars'>").text(
        dataGotBack.total_active_cars_for_ymmt
      );
      activeCarsText.append(s2);
      activeCarsText.append(
        "<span class='totalActiveCarsText'>\t Currently active</span>"
      );
      carResultInfo.append(headerVinAndCarName);
      carResultInfo.append(totalSoldCarsText);
      carResultInfo.append(activeCarsText);
      carResultInfo.append(s3);
      $("#infoDiv").prepend(carResultInfo);
    });
    $("#infoDiv").css("display", "block");

    e.preventDefault();
  });
});
