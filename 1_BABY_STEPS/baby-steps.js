
////////////TESTS RAN BEFORE DOING THE FINAL SOLUTION///////////
// Hard-coded test solution for up to 3 numerical values.
// ******************************************************
/*
console.log(process.argv);
let arr = process.argv;
let arr2 = [Number(process.argv[2]), Number(process.argv[3]), Number(process.argv[4])]

let reducer = (acc, curr) => acc + curr;

console.log(arr2.reduce(reducer));
*/
/////////////////////////////////////////////////////////////////



// ************************************************************
/////////////////////SOLUTION//////////////////////////////////

// Add the elemets of the command line to an array.
let arr = process.argv;

// Create a second array where the numerical elements of the first array will be saved.
let arr2 = [];

// Iterate through the first array to pass the numerical items to the second array, starting in the index 2, and converting the strings to numbers. NB. Indexes 0 and 1 correspond to the text commands (i.e. 'node', 'baby-steps.js/) 
for (let i=2; i < arr.length; i++) {
    arr2.push(Number(arr[i]));
}
// console.log(`This is arr2: ${arr2}`);

// Create a function to add up all the numerical elements of the second array into a total value.
let reducer = (acc, curr) => acc + curr;

// Print out the sum of the entered numbers when running the program.
console.log(arr2.reduce(reducer));

////////////////////////////////////////////////////////////////