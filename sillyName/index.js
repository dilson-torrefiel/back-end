import generateName from "sillyname";
import { randomSuperhero } from "superheroes";

var sillyName = generateName();
var superheroName = randomSuperhero();

console.log(`Hello my name is ${sillyName} and I am ${superheroName}!`);
