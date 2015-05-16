// Question 1

// Get All Prices
var allPrices = items.map( function (item){
	return item.price;
});

// Get the Sum
var sum = allPrices.reduce( function (a, b){
	return a + b;
});

// Average
var average = sum / allPrices.length;

// Answer

var answer = average.toFixed(2);

// Drop answer in DOM Node
document.querySelector('#answer1').textContent = "The average price is $" + answer;

// End Question 1
// appendChild example

// var answer2 = document.querySelector('#answer2');

// answer2.innerText = ' ';
// items.forEach( function(item){


// 	answer2.appendChild(document.createTextNode(item.price + '/n'));

// });

// Question 2

// Filter the prices between 14 and 18

var filterPrices = items.filter(function (item) {
return (item.price >14 && item.price <18);
});

// display titles of items and create variables for them

var newItem1 = filterPrices[0].title
var newItem2 = filterPrices[1].title
var newItem3 = filterPrices[2].title

// Drop answer in DOM Node and include line breaks

document.querySelector('#answer2').textContent = newItem1 + '\n' + newItem2 + '\n'+ newItem3;

// End Question 2

// Question 3

// Map all the currency prices

var CC = items.map(function(item) {
return item.currency_code;
});

// Filter currency prices to GBP

var GBP = items.filter(function(item) {
return item.currency_code ==="GBP";
});

// Map the title and price

var answer3 = GBP.map(function(item) {
return item.title + item.price;
});

// Drop answer in DOM Node 

document.querySelector('#answer3').textContent = answer3;

// End Question 3


// Question 4

var madeOfWood = [];

items.filter( function(item) {
 item.materials.forEach (function(item2) {
   if (item2 === "wood") {
   madeOfWood.push(item.title)
   }
 });
});

var answer4 = console.log(madeOfWood);

document.querySelector('#answer4').textContent = madeOfWood;

// End Question 4

// Question 5


// End Question 5




// Question 6

// Filter items by who made them

var whoMade = items.filter(function(item){
return item.who_made === "i_did";
});

// declare answer variable and use the .length command to count the newly formed array

var answer6 = whoMade.length

// Drop answer in DOM Node

document.querySelector('#answer6').textContent = answer6 + " were made by their sellers"

// End Question 6







