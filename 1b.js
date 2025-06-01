// Part (b)
let cities = ["Bangalore", "Chennai", "Mumbai", "Delhi", "Hyderabad"];
console.log("Total cities:", cities.length);
cities.push("Kolkata");
console.log("After adding:", cities);
cities.shift();
console.log("After removing first:", cities);
let index = cities.indexOf("Mumbai");
console.log("Index of Mumbai:", index);