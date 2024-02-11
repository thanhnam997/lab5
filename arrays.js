// Create an array of song names
const songNames = [
    "Bohemian Rhapsody",
    "Hotel California",
    "Imagine",
    "Stairway to Heaven",
    "Thriller",
    "Like a Rolling Stone",
    "What's Going On",
    "Billie Jean",
    "Let It Be",
    "Hey Jude"
];

// Change size of array (add new song)
songNames.push("New Song");

// Define with square brackets
const anotherArray = [
    1,
    "two",
    true,
    // more elements...
];

// Can store the same type or mix of types
const mixedArray = [
    "text",
    42,
    true,
    // more elements...
];

// Read and write individual elements with [ ] notation
console.log(songNames[0]); // Output: "Bohemian Rhapsody"
songNames[0] = "Updated Song";
console.log(songNames); // Output: ["Updated Song", "Hotel California", ...]
