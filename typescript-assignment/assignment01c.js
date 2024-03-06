//This file contain question 23-27
//question no 23
console.log('Question no : 23');
var flag = 'Ireland';
console.log("Is flag == 'Ireland'? I predict True.");
console.log(flag == 'Ireland');
var num = 7;
console.log("Is num == '7' ? I predict True");
console.log(num == 7);
var email = '@gmail.com';
console.log("Is email == '@gmail.com' ? I predict True");
console.log(email == '@gmail.com');
var female = 'Mistress';
console.log("Is female == 'Mistress' ? I predict True");
console.log(female == 'Mistress');
var shop = 'bakery';
console.log("Is shop == 'bakery' ? I predict True");
console.log(shop == 'bakery');
var pie = 3.16;
console.log("Is value of pie == '4.16' ? I predict False");
console.log(pie == 4.16);
var male = 'Mister';
console.log("Is male == 'Mistress' ? I predict False");
console.log(male == 'Mistress');
var num1 = 10;
console.log("Is num == '11' ? I predict False");
console.log(num1 == 11);
var car = 'Honda';
console.log("Is car == 'rickshaw' ? I predict False");
console.log(car == 'rickshaw');
var phone = 'Apple';
console.log("Is phone == 't.v' ? I predict False");
console.log(phone == 't.v');
console.log('\n');
//question no 24
console.log('Question no : 24');
//test for equality and inequality using string
var girl = 'aina';
var teacher = 'laureen';
console.log("The name of the girl is not equal to the name of the teacher hence ");
console.log(girl == teacher);
var aina = 'girl';
var laureen = 'girl';
console.log("Both aina and laureen are girl hence it is ");
console.log(aina == laureen);
//test using the lower case function
var fruit = 'Apple';
console.log("Apple is not equal to apple hence");
console.log(fruit.toLowerCase() == fruit);
//test for numerical 
//using greater than and less than
var zero = 45;
console.log("Zero variable value is greater than 35");
console.log(zero > 35);
console.log("Zero variable value is less than 50");
console.log(zero < 50);
//using greater than or equal to and less than or equal to
console.log("Zero variable value is greater than or equal to 45");
console.log(zero >= -1);
console.log("Zero variable value is less than or equal to 80");
console.log(zero <= 80);
//using equality and inequality
console.log("Zero variable value is equal to 45");
console.log(zero == 45);
console.log("Zero variable value is is not equal to 75");
console.log(zero != 75);
//using or operator
console.log("Check whether zero variable value is equal to 34 or zero variable value is equal to 45");
console.log(zero == 34 || zero == 45);
console.log("Check whether zero variable value is equal to 45 or zero variable value is not equal to 45");
console.log(zero == 45 && zero != 45);
//testing using array
var color = ['red', 'blue', 'green', 'black'];
var find_color = color.includes("blue");
console.log('blue is found in the array so');
console.log(find_color); //element found
var find_colorr = color.includes("pink");
console.log('pink is not found in the array so');
console.log(find_colorr); //element not found
console.log('\n');
//question no 25,26,27
console.log('Question no : 25, 26, 27');
var alien_color0 = 'green';
if (alien_color0 == 'green') {
    console.log('you just earned 5 points!');
}
else if (alien_color0 == 'yellow') {
    console.log('you just earned 10 points!');
}
else if (alien_color0 == 'red') {
    console.log('you just earned 15 points!');
}
var alien_color1 = 'yellow';
if (alien_color1 == 'green') {
    console.log('you just earned 5 points!');
}
if (alien_color1 == 'yellow') {
    console.log('you just earned 10 points!');
}
if (alien_color1 == 'red') {
    console.log('you just earned 15 points!');
}
var alien_color = 'red';
if (alien_color == 'green') {
    console.log('you just earned 5 points!');
}
if (alien_color == 'yellow') {
    console.log('you just earned 10 points!');
}
if (alien_color == 'red') {
    console.log('you just earned 15 points!');
}
