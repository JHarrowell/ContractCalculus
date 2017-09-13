# ContractCalculus

Whilst working for Three, a phone network in the UK, I found myself always doing this same comparison with customers. I made this tool for staff to use.

## What does it do?

The web app performs a calculation based on the following four inputs:

* Sim-Only recurring cost - based on a 12 month contract
*  Total retail cost of the handset
* Regular contract recurring cost  - based on a 24 month contract
*  Any upfront cost for the handset

In order to properly compare the two methods, the contract time has to match therefore the Sim-Only is assumed to run for 24 months:

```javascript
contractLength = 24;
```

The calculation is then performed as:

```javascript
var simOnlyMRCTotal = simOnlyMRC * contractLength;
var tradMRCTotal = tradMRC * contractLength;
```

The two totals are then stored into session storage upon clicking the calculate button, and on the results page the difference is worked out. Naturally the regular contract is usually more expensive so we use that as the first number.

```javascript
methodDiff = sessionStorage.getItem('tradSaved') - sessionStorage.getItem('simOnlySaved');
```

The differences are there calculated with the following methods:

```javascript
  // calc monthly diff non-rounded by length
  monthlyDiff = methodDiff / contractLength;
  // round the diff to 2 decimal places
  monthlyDiffRounded = monthlyDiff.toFixed(2);
  // calc weekly diff non-rounded by 104 weeks (2 years)
  weeklyDiff = methodDiff / 104;
  // round the diff to 2 decimal places
  weeklyDiffRounded = weeklyDiff.toFixed(2);
```

The result is then shown using InnerHTML to render the result in the DOM.
