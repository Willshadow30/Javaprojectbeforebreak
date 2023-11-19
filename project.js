console.log("Coding Question 1");
/* Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
Programmatically subtract the value of the first element in the array from the value in the last element of the array.
Do not use numbers to reference the last element, find it programmatically.
ages[7] - ages[0] is not allowed!
Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
Use a loop to iterate through the array and calculate the average age.
*/
let ages = [3,9,23,64,2,8,28,93];
console.log("Ages", ages);
let subages = ages[ages.length -1] - ages[0];
console.log('subrtracting', subages);
//Array is a special variable that can hold more than one variable. think backpack IMPORTANT Array are 0 index first varible is 0 second is one 
//length prop returns the length of a string
ages.push(99)
console.log("Ages after pushing new value", ages);
let subagesPush = ages[ages.length -1]- ages[0];
console.log("subages", subagesPush);
// Push let users add a new stuff to an array, 
//keep in mind that the new stuff will appear at the end of the array
// ALSO made it dynmatic
let averOfAges = 0;
for(let i = 0; i < ages.length; i++){
    //for loop contains the initialization, condition and final expression.
    // < less than expression
    averOfAges += ages[i]//addition assignment
    console.log("index",i,"averOfAges", averOfAges);
}
console.log("Total average", averOfAges);
let average = averOfAges/ages.length // division of average ages by the ages.length
console.log("Average", average);
///
console.log("Coding Question 2")
//Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
//Use a loop to iterate through the array and calculate the average number of letters per name.
//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
let names =['Sam','Tommy','Tim','Sally','Buck','Bob'] //array name//
let totalLet = 0; // 0 because as of this time we dont know the average
for(let i = 0; i < names.length; i++){ //for loop runs through the block of code 3 times
// console.log(i,"Test");
totalLet += names[i].length;
console.log("index", i, "names", names[i],"totalLet", totalLet); //average lett per names
}
let averageName = totalLet /names.length
console.log("Average letter per name",averageName);
let concatNames = " "; //concat basically allows a new array joined with other arrays or values. think Green herb + red herb = full health
for(let i = 0; i < names.length; i++){  // I should also mention the block statement which is used to group one or statement define by ()
    concatNames = concatNames.concat(names[i] + " "); // the double " " is use to indicate empty add + to it and you get space
    console.log(i,"names concateded", concatNames);
}
//////////////////////////////////////////////
console.log("Coding Question 3");
//How do you access the last element of any array?
console.log("last element of array",ages[ages.length -1]); // using length minus 1 inside of the index with an array will always refer to the last element in an array. 
//
console.log("coding Question 4");
//How do you access the first element of an array?
console.log("first element of an array",ages[0]); //earlier comment array are zero indexed, so every first element in array starts at 0
console.log("Question 5");
//Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
let nameLengths = [];
for( let i = 0; i < names.length; i++){
    //console.log(i,"Sup");
    nameLengths.push(names[i].length);
    console.log("Names lengths array:", nameLengths);
}
//////////////////////////////////
console.log("Coding Question 6")
//Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array
let charTotal = 0; // with the let statment you can re assign local block shape variable
for( let i = 0; i< nameLengths.length; i++){
    charTotal += nameLengths[i];
    console.log("charTotal", charTotal);
}
console.log("Coding Question 7")
//Write a function that takes two parameters, 
//word and n, as arguments and returns the word concatenated to itself n number of times. 
//(i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

function concatWords(word,n){
console.log("Word Par:", word, "n Par:", n);
let concat = word.repeat(n);
}
concatWords("Grim",3)
///////////////////////////////////////////////////////
console.log,("Coding Question 8")
//Write a function that takes two parameters, firstName and lastName, and returns a full name. 
//The full name should be the first and the last name separated by a space.
function fullName(Will,Woodall){
    let fullName = Will + " " + Woodall;
    console.log(fullName);
}
fullName("William", "Woodall");
/////////////////////////////////////
console.log("Question 9");
//Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

let numbers1 = [100,200,400,600];
let numbers2 = [11,12,13,14];

function sumNumbersArray(array){ //function is basically a block of code that is designed to run a particutal action
    let total = 0;
    for (let i = 0; i < array.length; i++){
        //console.log(i, "Test");
        total += array[i];
        console.log("total", total);
    }
    if (total > 100){ // if statement lets code run IF the condation is true.
        console.log(True);
        return true
    } else { // oppostion of  how the if statment runs. this code will only run if the condation is false
        console.log(false);
        return false // return statement ends the code function and returns a specfic value 
    }
    

}
 sumNumbersArray(numbers2);
 /////////////////////////////////////////
console.log("Question 10");
//Write a function that takes an array of numbers and returns the average of all the elements in the array.
function calculateNumbersAverage(array){
    let total = 0;
    for (let i = 0; i < array.length; i++)
    total  += array[i];
    console.log("calculate ugh these numbers total", total);
    let average = total / array.length;
    console.log("Average these ugh numbers", average);
    return average;
}
calculateNumbersAverage(numbers1);
/////////////////////////////////////////////
console.log("Question 11");
//Write a function that takes two arrays of numbers and returns true 
//if the average of the elements in the first array is greater than the average of the elements in the second array.
let numbers3 = [777,777,777];
let numbers4 = [5,5,6];

function twoAverages(array1,array2){
    console.log("Parameters", array1, array2)
    let total1 = 0;
    let total2 = 0;
    for(const number of array1){
    total1 += number;
        console.log("Current this annoying number pt1:", number,"Total1", total1);
        
    }
        for(const number of array2){
            total2 += number;
            console.log("Current this annoying number pt2:", number, "Total2", total2);
        }
        let average1 = total1/array1.length;
        let average2 = total2/array2.length;
        console.log("Thank God!", average1,average2);
        if(average1 > average2){
            console.log(true);
            return true
        }
        else if(average1 < average){
            console.log(false);
            return  false
        
        }
    }
twoAverages(numbers3,numbers4);
///////////////////////////////////////////////////
console.log("Coding Question 12 yay!!!!!!")
//Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true 
//if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket){
    console.log("Parameters",isHotOutside,moneyInPocket);
    let buyDrink = isHotOutside === true && moneyInPocket > 10.50;
    console.log("buy a drink goofball?", buyDrink);
    return buyDrink;
        }
    willBuyDrink(true, 11.00);
