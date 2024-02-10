// a. ISS Location
console.log('Latitude:', iss_location.iss_position.latitude);
console.log('Longitude:', iss_location.iss_position.longitude);

// b. Exchange Rates
rates.CHF = 1.1787;
let euros = 100;
let equivalentInAUD = euros * rates.AUD;
console.log(`Equivalent value in Australian Dollars (AUD): ${equivalentInAUD}`);

// c. Cat Owners
cats_and_owners.push({ name: "Taylor Swift", cat: "Meredith" });

cats_and_owners.forEach(owner => {
    console.log(`${owner.name}'s cat is called ${owner.cat}`);
});

console.log("Gary Oldman's cat's name:", cats_and_owners[1].cat);

let garyOldmanCat = cats_and_owners.find(owner => owner.name === "Gary Oldman");
if (garyOldmanCat) {
    console.log("Gary Oldman's cat's name (using find):", garyOldmanCat.cat);
}

// d. Nobel Prize Winners
console.log('Literature Nobel laureate:', nobel_prize_winners_2017.prizes[4].laureates[0].firstname);
console.log('Physics Nobel laureates IDs:', nobel_prize_winners_2017.prizes[0].laureates.map(laureate => laureate.id));

let prizeCategories = nobel_prize_winners_2017.prizes.map(prize => prize.category);
console.log('Prize Categories:', prizeCategories);

console.log('Total number of prize categories:', prizeCategories.length);

let totalLaureates = nobel_prize_winners_2017.prizes.reduce((total, prize) => total + prize.laureates.length, 0);
console.log('Total number of laureates from 2017:', totalLaureates);
