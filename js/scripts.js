var bottlesofBeerFirst = function(number) {
    var countDown = number - 1;
    return number + " bottles of beer on the wall, " + number + " bottles of beer. Take one down and pass it around, " + countDown + " bottles of beer on the wall.";
};


  //  for (var i = number; i <= number; i--) {

$(document).ready(function() {
  $("form#bottleNumber").submit(function(event) {
    number = parseInt($("input#number").val());

    var result = bottlesofBeerFirst(number);

    $(".output").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
