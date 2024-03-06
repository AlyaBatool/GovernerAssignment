//This file contain question 28-35
//question no 28
console.log('Question no : 28');
var age = 20;
if (age < 2) {
    console.log('the person is a baby');
}
if (age >= 2 && age < 4) {
    console.log('the person is a toddler');
}
if (age >= 4 && age < 13) {
    console.log('the person is a kid');
}
if (age >= 13 && age < 20) {
    console.log('the person is a teenager');
}
if (age >= 20 && age < 65) {
    console.log('the person is an adult');
}
if (age >= 65) {
    console.log('the person is an elder');
}
console.log('\n');
//question no 29
console.log('Question no : 29');
var favorite_fruits = ['Apple', 'Pear', 'Kiwi'];
if (favorite_fruits.indexOf('Apple') !== -1) {
    console.log("You really like Apples!");
}
if (favorite_fruits.indexOf('DragonFruit') !== -1) {
    console.log("You really like DragonFruits!");
}
if (favorite_fruits.indexOf('Kiwi') !== -1) {
    console.log("You really like Kiwi!");
}
if (favorite_fruits.indexOf('Banana') !== -1) {
    console.log("You really like Bananas!");
}
if (favorite_fruits.indexOf('Pear') !== -1) {
    console.log("You really like Pears!");
}
console.log('\n');
//question no 30
console.log('Question no : 30');
//const username=['taniya','jeena','admin','patrick','johnny']
var username = [''];
for (var i = 0; i < username.length; i++) {
    if (username[i] == 'admin') {
        console.log('Hello ' + username[i] + ', would you like to see a status report?');
    }
    if (username[i] == '') {
        console.log('We need to find some users!');
    }
    else {
        console.log('Hello ' + username[i] + ', thank you for logging in again.');
    }
}
console.log('\n');
//question no 31(check the list of username is not empty using if statement)
console.log('Question no : 31 (check the list of username is not empty using if statement)');
console.log('\n');
//question no 32
console.log('Question no : 32');
var current_users = ['rose', 'thomas', 'jisoo', 'jordan', 'ali', 'khloe'];
var new_users = ['ali', 'sam', 'jessica', 'rose', 'andrew', 'rozi'];
for (var k = 0; k < new_users.length; k++) {
    var duplicate_name = false;
    for (var l = 0; l < current_users.length; l++) {
        if (new_users[k] === current_users[l]) {
            console.log('Dear ' + new_users[k] + ', You need to enter a new username');
            duplicate_name = true;
            break;
        }
    }
    if (!duplicate_name) {
        console.log(new_users[k] + ' This username is available!');
    }
}
console.log('\n');
//question no 33
console.log('Question no : 33');
var ord_no = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (i = 0; i < 9; i++) {
    if (ord_no[i] == 1) {
        console.log(ord_no[i] + 'st');
    }
    if (ord_no[i] == 2) {
        console.log(ord_no[i] + 'nd');
    }
    if (ord_no[i] == 3) {
        console.log(ord_no[i] + 'rd');
    }
    if (ord_no[i] != 1 && ord_no[i] != 2 && ord_no[i] != 3) {
        console.log(ord_no[i] + 'th');
    }
}
console.log('\n');
//question no 34
console.log('Question no : 34');
var pizza = ['Afghani pizza', 'Chicken Tikka pizza', 'Fajita pizza'];
for (i = 0; i < 3; i++) {
    console.log('I like ' + pizza[i]);
}
console.log('I really love pizza');
console.log('\n');
//question no 35
console.log('Question no 35');
var animal = ['horse', 'dog', 'buffalo'];
for (i = 0; i < 3; i++) {
    console.log('A ' + animal[i] + ' would make a such a great pet.');
}
console.log('Any of these animals would make a great pet!');
console.log('\n');
