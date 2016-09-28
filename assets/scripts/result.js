// calc and print differences
var methodDifference = function() {

  // Grab stored session data and calc difference
  methodDiff = sessionStorage.getItem('tradSaved') - sessionStorage.getItem('simOnlySaved');

  // calc monthly diff non-rounded by length
  monthlyDiff = methodDiff / contractLength;
  // round the diff to 2 decimal places
  monthlyDiffRounded = monthlyDiff.toFixed(2);
  // calc weekly diff non-rounded by 104 weeks (2 years)
  weeklyDiff = methodDiff / 104;
  // round the diff to 2 decimal places
  weeklyDiffRounded = weeklyDiff.toFixed(2);

  if (methodDiff > 0) {
    // insert price difference into the DOM
    document.getElementById("price-diff").innerHTML = "Sim-only is cheaper by<br> <span class='figure'>£" + Math.abs(methodDiff) + "</span>";

    // insert monthly/weekly price difference into the DOM
    document.getElementById("month-diff").innerHTML = "A mobile contract is <br> <span class='figure'>£" + Math.abs(monthlyDiffRounded) + "/month </span><br> or <br> <span class='figure'>£" + Math.abs(weeklyDiffRounded) + "/week</span> <br>more expensive.";

  } else if (methodDiff < 0) {
    // insert price difference into the DOM
    document.getElementById("price-diff").innerHTML = "Mobile contract is cheaper by<br> <span class='figure'>£" + Math.abs(methodDiff) + "</span>";

    // insert monthly/weekly price difference into the DOM
    document.getElementById("month-diff").innerHTML = "Sim-only is <br> <span class='figure'>£" + Math.abs(monthlyDiffRounded) + "/month </span><br> or <br> <span class='figure'>£" + Math.abs(weeklyDiffRounded) + "/week</span> <br>more expensive."

  } else {
    document.getElementById("price-same").innerHTML = "Both of the methods cost the same.";
  }
}

document.body.onload = methodDifference();
