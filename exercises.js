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

//on this one, stack overflow helped out a whole lot
var translation = [];

function rovarspraket(phrase){
    var translate = phrase.split('');

    translate.forEach( function (letter){
        if ("aeiou ".indexOf(letter) < 0) {
            translation.push(letter + 'o' + letter);
        }
        else if ("aeiou ".indexOf(letter) >= 0) {
            translation.push(letter);
        }
    });

    return translation;
}

console.log(rovarspraket);
console.log('function takes a string or phrase');


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
    return string.split('').reverse().join('');
}
console.log(reverse);
console.log("enter a string to be reversed");

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    return words.reduce( function(x,y){
        if ( x.length > y.length ) {
            return x;
        }
        else {
            return y;
        }
    });
}
console.log(findLongestWord);
console.log("enter an array of words. Example ['anna', 'banna', 'foo-fighters']")
// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    return words.filter( function(words){
        return words.length > i;
    });
}
console.log(filterLongWords);
console.log("function takes 2 params, one an array of words, and the other a number. example: (['blue', 'red', 'green'], 3) ")
// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    var obj = {}; //empty object to pass answer into

    string.split('').forEach( function (char){
        if (obj[char]){
            obj[char]++;
        }
        else {
            obj[char] = 1;
        }
    });
    return obj;
}

console.log(charFreq);
console.log('function takes in a string');

