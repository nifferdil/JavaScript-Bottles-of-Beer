var bottlesOfBeer = function(number) {
  var bottles = [];

  for (var i = number; i > 0; i--) {
    bottles.push(i + " bottles of beer on the wall. " + i + " bottles of beer. Take one down pass it around- " + (i - 1) + " bottles of beer on the wall. ")
  }
  bottles.push("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");

  return formatArrayToString(bottles);
}

var formatArrayToString = function(array) {
  return array.toString().replace(/,/g, '');
}

$(document).ready(function() {
  $("form#bottleNumber").submit(function(event) {
    number = parseInt($("input#number").val());

    var result = bottlesOfBeer(number);
    
    $(".output").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
