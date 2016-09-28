// Contract length is 24 as industry standard, could add
// more options in future for non-standard lengths

var contractLength = 24;
var simOnlyMethodTotal;
var tradMethodTotal;

// Sim only method calculation function

var simOnlyTotal = function(){

  var simOnlyMRC = document.form.simOnly.value;
  var handsetCost = document.form.handsetCost.value;

  var simOnlyMRCTotal = simOnlyMRC * contractLength;
  simOnlyMethodTotal = parseInt(simOnlyMRCTotal) + parseInt(handsetCost);

  sessionStorage.setItem("simOnlySaved", simOnlyMethodTotal);
}

// Traditional contract method calculation function

var tradTotal = function(){
  var tradMRC = document.form.contractCost.value;
  var upfrontCost = document.form.upfrontCost.value;

  var tradMRCTotal = tradMRC * contractLength;
  tradMethodTotal = parseInt(tradMRCTotal) + parseInt(upfrontCost);

  sessionStorage.setItem("tradSaved", tradMethodTotal);

}

// Resets local storage when triggered
var calcReset = function(){
  sessionStorage.clear();
}
