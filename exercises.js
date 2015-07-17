// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(x, y) {
    if (x > y){
        return x;
    }
    else {
        return y;
    }
}
console.log(max);
console.log("use numbers for params");
// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x, y, z){
    return Math.max (x , y, z);
}

console.log(maxOfThree);
console.log("use numbers");

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    if ( char == "a" ||char == "e" || char == "i" || char == "o" || char == "u" ) {
        return "true";
    }
    else {
        return "false"
    }
}

console.log(isVowel);
console.log("enter a single character to determine if it is a vowel");

// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){

}

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------


function sum(numbers){
    return numbers.reduce( function (x, y) {
        return x + y;
    });

}
console.log(sum);
console.log('use numbers separated by commas and in [] format. EX [1, 2, 3]');

function multiply(numbers){
    return numbers.reduce( function (x, y){
        return x * y;
    });
}
console.log(multiply);
console.log('use numbers separated by commas and in [] format. EX [1,2,3]');

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string){
    string.split('').reverse()
}
console.log(reverse);
console.log("enter a string to be reversed");

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    //...
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    //...
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    //...
}