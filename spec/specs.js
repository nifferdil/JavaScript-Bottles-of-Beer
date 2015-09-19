describe('bottlesofBeerFirst', function() {
  it("counts down one number from the user inputted number", function() {
    expect(bottlesofBeerFirst(99)).to.equal("99 bottles of beer on the wall, 99 bottles of beer. Take one down and pass it around, 98 bottles of beer on the wall.");
  });
});

// describe('bottlesofBeer', function() {
//   it("is true when the function returns the factorial of the inputted number", function() {
//     expect(bottlesofBeer(5)).to.equal(120);
//   });
// });
