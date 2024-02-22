/* b. Use this JavaScript object of exchange rates relative to Euros.
The properties are currency symbols, the values are the exchange rates.
Data source: http://fixer.io/
* */


let rates = {
    "AUD": 1.5417,
    "BGN": 1.9558,
    "BRL": 3.8959,
    "CAD": 1.5194
}

// TODO write code to add a new property for Swiss Francs. Symbol is CHF, value is 1.1787.
rates["CHF"] = 1.1787;
// TODO if you had 100 Euros, write code to get the exchange rate from the object, then calculate
//      the equivalent value in Australian Dollars (AUD)
const euros = 100;
const exchangeRateAUD = rates["AUD"];
const equivalentInAUD = euros * exchangeRateAUD;
console.log(`Equivalent value in AUD: ${equivalentInAUD}`);