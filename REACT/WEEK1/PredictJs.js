const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)
// output: 1/ Tesla 2/ Mercedes

//Problem :
const employee = {
    employeeName: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { employeeName: otherName } = employee;
//Predict the output
console.log(otherName);
// console.log(employeeName);
// output : 1/Elon 2/ undefined we changed employeeName to otherName
// we need to use a spread operator to make sure that the origen object does not change 


// problem 3:

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet',
    password:88888
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);
// 12345/undefined
console.log('********************************************')
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first === second);
console.log(first === third);
// output : False /True 
const [,,,,fourth]= numbers;
console.log(fourth)

console.log('********************************************')
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
// output : value /[1, 5, 1, 8, 3, 3]/1/5
const[,,,,,lastval]=secondKey
console.log(lastval)


console.log('********************************************')
// problem 6 : 
var beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
function actuallyPrintingNames() {
    for (var index = 0; index < names.length; index++) {
    var name = names[index];
    console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
}
actuallyPrintingNames();
}
printNames(beatles);

// we have 3 scopes 
var beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
function actuallyPrintingNames() {
for (var index = 0; index < names.length; index++) {
    var name = names[index];
    console.log(name + ' was found at index ' + index);
}
console.log('name and index after loop is ' + name + ':' + index);
}
actuallyPrintingNames();
}
printNames(beatles);

// output: George was found at index 1
// John was found at index 2
// Ringo was found at index 3
// name and index after loop is Ringo:4
// Paul was found at index 0
// George was found at index 1
// John was found at index 2
// Ringo was found at index 3
// name and index after loop is Ringo:4

console.log('********************************************')

// function actuallyPrintingNames() {
// for (let index = 0; index < names.length; index++) {
//     let name = names[index];
//     console.log(name + ' was found at index ' + index);
// }
// console.log('name and index after loop is ' + name + ':' + index);
// }     
// actuallyPrintingNames() 
// names is not defined anywhere in any outer scope also name only belong to the scope of the for loop it's a block scope


console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')


// const beatles = ['Paul', 'George', 'John', 'Ringo'];
// function printNames(names) {
// function actuallyPrintingNames() {
// for (let index = 0; index < names.length; index++) {
//     const name = names[index];
//     console.log(name + ' was found at index ' + index);
// }
// }
// actuallyPrintingNames();
// }
// printNames(beatles);

//  there is no error : each variable is used inside it's scope where const beatles is used as globale scope 
// and let index is creating a scope for the for loop 
// and const name is declared as a new const with each iteration of the loop 



console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')

// Problem 9:

const planet = {
	name:"Jupiter",
	milesFromSun: 49849,
	mass: 393983,
            composition: ["gas", "liquid", "oxygen"]
}
const planetCopy = {...planet}
console.log(planet.composition[0] === planetCopy.composition[0]) 
console.log(planet === planetCopy)

// output true /false : 

// First console.log: true  because the value is shared and the same string is being compared
// Second console.log: false because planet and planetCopy are different object references






