/*
The Milky Way Galaxy
Create an object called milkyWay
Assign it properties for type, age, containsEarth with the following corresponding values (in order): barred spiral, 13,600,000,000, false
Using dot notation, access the containsEarth property in your object
Wait a second, that's not right! The Milky Way does contain earth, let's fix that! Without directly changing the milkyWay object, update the value of containsEarth to be true
Verify that the value has been updated using dot notation
Add a key to the object called number of stars and give it a value of "100-400 billion"

*/

const milkyWay = {

type : 'barred Spiral',
age : '13,600,000,000',
containsEarth :false,


}









const solarSystem = [
	{ name: "Mercury", ringSystem: false, moons: [] },
	{ name: "Venus", ringSystem: false, moons: [] },
	{ name: "Earth", ringSystem: false, moons: ["The Moon"] },
	{ name: "Mars", ringSystem: false, moons: ["Phobos", "Deimos"] },
	{ name: "Jupiter", ringSystem: true, moons: ["Europa", "Ganymede", "Io", "Callisto"] },
	{ name: "Saturn", ringSystem: true, moons: ["Titan", "Enceladus", "Rhea", "Mimas"] },
	{ name: "Uranus", ringSystem: true, moons: ["Miranda", "Titania", "Ariel", "Umbriel"] },
	{ name: "Neptune", ringSystem: true, moons: ["Triton", "Nereid"] }
];