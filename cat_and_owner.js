/* c. Use this JavaScript array of objects of cat owners, and their cats. Source, moderncat.com
 */

let cats_and_owners = [
    { name: "Bill Clinton", cat: "Socks" },
    { name: "Gary Oldman", cat: "Soymilk" },
    { name: "Katy Perry", cat: "Kitty Purry" },
    { name: "Snoop Dogg", cat: "Miles Davis" }
];

// TODO Taylor Swift's cat is called 'Meredith'. Write code to add this data to the array.
cats_and_owners.push({ name: "Taylor Swift", cat: "Meredith" });
// TODO write a loop to print each cat owner, and their cat's name, one per line. Use the forEach style.
cats_and_owners.forEach(owner => {
    console.log(`${owner.name}'s cat is called ${owner.cat}`);
});
//   Each line should have a message like "Snoop Dogg's cat is called Miles Davis"
// TODO print Gary Oldman's cat's name by reading the data in the appropriate array index, using [] notation
console.log("Gary Oldman's cat's name:", cats_and_owners[1].cat);

// TODO print Gary Oldman's cat's name by looping over the array until you find the object with name = "Gary Oldman"
cats_and_owners.forEach(owner => {
    if (owner.name === "Gary Oldman") {
        console.log("Gary Oldman's cat's name (looping):", owner.cat);
    }
});