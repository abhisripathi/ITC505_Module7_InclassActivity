//node jsonUsage.js
const movies = require('./movies.json');

// Example: Finding a movie by title
const movie = movies.find(m => m.title === 'Inception');
console.log(movie);

// Example: Converting JSON to a string
const jsonString = JSON.stringify(movie);
console.log(jsonString);

// Example: Parsing a JSON string
const parsedJson = JSON.parse(jsonString);
console.log(parsedJson);
