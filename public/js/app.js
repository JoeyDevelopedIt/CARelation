$(document).ready(function() {
  // alert("hello");

  var addCarBtnClicked = false;
  var firstSearchCompleted = false;

  $("#search2, #compareCar").addClass("disappear");

  $("#addSearch").on("click", function() {
    $("#search2").toggleClass("disappear");
    $("#compareCar").toggleClass("disappear");
    $("#search1Btn").toggleClass("disappear");
    addCarBtnClicked = !addCarBtnClicked;

    if (addCarBtnClicked) {
      $("#addSearch").text("-");
    } else {
      $("#addSearch").text("+");
    }
  });

  $("#year").on("change", function() {
    var selectedYear = $(this)
      .find("selected")
      .val();
    $("#model1").prop("disabled", true);
    $("#trim1").prop("disabled", true);
    $("#make1 option[value='make']").attr("selected", "selected");
    $("#model1 option[value='model']").attr("selected", "selected");
    $("#trim1 option[value='trim']").attr("selected", "selected");
    $("#make1").prop("disabled", false);
    $("#make1").val("");
  });
  $("#year2").on("change", function() {
    var selectedYear = $(this)
      .find("selected")
      .val();
    $("#make2").prop("disabled", false);
    $("#model2").prop("disabled", true);
    $("#trim2").prop("disabled", true);
    $("#make2 option[value='make']").attr("selected", "selected");
    $("#model2 option[value='model']").attr("selected", "selected");
    $("#trim2 option[value='trim']").attr("selected", "selected");
    $("#make2").prop("disabled", false);
    $("#make2").val("");
  });
  $("#make1").on("change", function() {
    var selectedMake = $(this)
      .find("selected")
      .val();
    $("#model1").prop("disabled", false);
    $("#trim1").prop("disabled", true);
    $("#trim1 option[value='trim']").attr("selected", "selected");
    $("#model1 option[value='model']").attr("selected", "selected");
    $("#model1").val("");
  });
  $("#make2").on("change", function() {
    var selectedMake = $(this)
      .find("selected")
      .val();
    $("#model2").prop("disabled", false);
    $("#trim2").prop("disabled", true);
    $("#trim2 option[value='trim']").attr("selected", "selected");
    $("#model2 option[value='model']").attr("selected", "selected");
    $("#model2").val("");
  });
  $("#model1").on("change", function() {
    var selectedModel = $(this)
      .find("selected")
      .val();
    $("#trim1").prop("disabled", false);
    $("#trim1").val("");
  });
  $("#model2").on("change", function() {
    var selectedModel = $(this)
      .find("selected")
      .val();
    $("#trim2").prop("disabled", false);
    $("#trim2").val("");
  });
  $("#trim1").on("change", function() {
    var selectedTrim = $(this)
      .find("selected")
      .val();
    // firstSearchCompleted = selectedTrim != "trim";
    // $("#compareCar").prop("disabled", firstSearchCompleted);
  });
});
