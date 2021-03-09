//SECTION 1

//1. DRY - DON'T REPEAT YOURSELF - Repeating code over and over can make it difficult to read and understand. Also can make things more difficult to access in other parts
//of your program. It is better to have a more streamlined code to understand more easily and to work with again in the future/make changes.
//2. const - we use this on a variable that will not change, for example <const lastName> - the person's last name will not likely change so we use const
//   let - we use this when the value of the variable can change - local scope
//   var - global scope - can be used and accessed anywhere in the code

//SECTION 2

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;

if (a < b){
    console.log(true);
}
if (c > d){
    console.log(true);
}
if ('Name' === 'Name'){
    console.log(true);
}
if ((a + b) === c){
    console.log(true);
}
if ((a * a) === d){
    console.log(true);
}
if (e != 'Kevin'){
    console.log(true);
}
if (48 <= '48'){
    console.log(true);
}
if (f !== e){
    console.log(true);
}
var g=0
console.log(g);

var g = b + c
console.log(g);

// 10 = g
// console.log(10);

//1. We have to use var because it is a global variable that can be accessed anywhere within the code.
//2. If you use let or const, an error comes up that says "can not send 'variables'."
//3. When I write "10 = g", the same error message comes up as before, "can not send 'variables'." The variable 10 is not defined.

//BONUS
if (a !== (b || f) === !f && e !== c){
    console.log(true);
}

//SECTION 3

// while (true) {
// 	console.log('Do not run this loop');
// }
//1. Yes, it is an infinite loop because a while loop will run as long as it returns true, and if the parameter given is true,
//it will never stop running.

// const runProgram = true;

// while (runProgram) {
// 	console.log('Do not run this loop');
// 	runProgram = false;
// }
//2. No, it will return an error because const runProgram is declared outside the statement and is a local variable
//3. Our value of q is set to 20. We create a while loop that will run as long as q is greater than 10. The value of q will be
//printed to console. Each time the loop runs, decrease the value of q by 1. The loop will stop when the value of q is no
//longer greater than 10.

// set variable 'letters' to "A"
let letters = "A";
// set variable 'i' to 0
let i = 0;
// create a while loop that will run as long as 'i' is less than 20, adding an "A" to the string each time the loops runs,
// increasing i by 1 each time the code runs
while (i < 20) {
	letters += "A";
	i++;
}
// console will pring out "A" 21 times, because we set the loop to start at 0
console.log(letters);


// SECTION 4
// 1. A for loop should be used when you know how many times the loop should run, a while loop can be used when you don't know
//  how long it will go for.
// 2. The first component is: i = 0
//    The second component is: i < 100
//    The third componenet is: i++
//          for (let i = 0; i < 100; i++) {
//	           console.log('Without you, today\'s emotions are the scurf of yesterday\'s');
//                } 

// 3.  for (let i = 0; i < 1000; i++) {
//         console.log(i);
//           }
// BONUS: The "\" tells the computer that the "'" is being used a character and not a quotation mark, because we can use both
//         ' and " as effective quotations.

// for (let i = 999; i >= 0; i--) {
//     console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//     console.log("The value of i is: " +i+ " of 10");
// }

// // BONUS
// for (let i = 1; i <= 10; i++) {
//     console.log(`The value of i is: ` +i+ ` of 10`);
// }

const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
for (let i = 0; i < StarWars.length; i++) {
    console.log(StarWars[i], i);
}

// BONUS
// const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
// for (let i = 0; i < StarWars.length; i++)
// if (i % 2 == 0) {
//     console.log(StarWars[i], i);
// }