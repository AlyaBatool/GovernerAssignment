//This file contain question 36-45(the question no.40 is in the end)
//question no 36 and 37
console.log('Question no : 36, 37');
function make_shirt() {
    var large = 'Large';
    var l_m = '\'I love TypeScript.\'';
    console.log(large + ' is the size of the shirt and ' + l_m + ' is the message printed on the shirt.');
    var small = 'Small';
    var s_m = '\'I love JavaScript.\'';
    console.log(small + ' is the size of the shirt and ' + s_m + ' is the message printed on the shirt.');
    var med = 'Medium';
    var m_m = '\'I love Node.Js.\'';
    console.log(med + ' is the size of the shirt and ' + m_m + ' is the message printed on the shirt.');
}
make_shirt();
console.log('\n');
//question no 38
console.log('Question no : 38');
function describe_city(city, country) {
    if (country === void 0) { country = 'Pakistan'; }
    if (city == 'Karachi' || city == 'Islamabad' || city == 'Lahore') {
        console.log(city + ' is in ' + country);
    }
    else {
        console.log(city + ' is not in ' + country);
    }
}
var city1 = 'Karachi';
describe_city(city1);
var city2 = 'Islamabad';
describe_city(city2);
var city3 = 'Washington DC';
describe_city(city3);
console.log('\n');
//question no 39
console.log('Question no : 39');
function city_country(city, country) {
    console.log('\"' + city + ', ' + country + '\"');
}
city_country('Lahore', 'Pakistan');
city_country('Sydney', 'Australia');
city_country('Beijing', 'China');
console.log('\n');
//question no 41
console.log('Question no : 41');
function show_magicians() {
    var original_array = ['denny', 'lana', 'kale', 'olivia', 'hadid'];
    for (var a = 0; a < original_array.length; a++) {
        console.log(original_array[a]);
    }
}
console.log('\n');
//question no 42, 43
console.log('Question no : 42, 43');
function make_great() {
    var copied_array = ['denny', 'lana', 'kale', 'olivia', 'hadid'];
    for (var r = 0; r < copied_array.length; r++) {
        console.log('The Great ' + copied_array[r]);
    }
}
show_magicians(); //calling the original array
var new_array = make_great();
console.log(new_array); //copied array with 'The Great'
console.log('\n');
//question no 44
console.log('Question no : 44');
function sandwich(item) {
    console.log(item);
}
sandwich('My first sandwich should have these items: ' + ['Chicken Patty', 'Lettuce', 'Cheese']);
sandwich('My second sandwich should have these items: ' + ['Beef Patty', 'Cheese']);
sandwich('My third sandwich should have these items: ' + ['Iceburg', 'Mayo-Garlic sauce', 'Capsicum', 'Onion', 'Lotus root']);
console.log('\n');
//question no 45
console.log('Question no : 45');
function info_car() {
    var listofcars = {
        manufacturer: 'Japan',
        model_name: '2016',
        arbitrary_no: '',
        color: 'Black',
        weight: '1180 Kg'
    };
    return listofcars;
}
console.log('The manufacturer of the Honda company is ' + info_car().manufacturer);
console.log('The Model name of car is ' + info_car().model_name);
console.log('The arbitrary number of car is' + info_car().arbitrary_no, 'C-945'); //keyword argument
console.log('The color of the car is ' + info_car().color);
console.log('The weight of the car is ' + info_car().weight);
console.log('\n');
//question no 40
console.log('Question no : 40');
function make_album(a_name, t_name, track) {
    var music_album = {
        artist_name: a_name,
        title: t_name,
        no_of_tracks: track
    };
    return music_album;
}
var first_album = (make_album('Michael Jackson', 'One Way Ticket', '6'));
var second_album = (make_album('Timeberland', 'The way I are', '2'));
var third_album = (make_album('BTS', 'Blood,sweat and tears', '11'));
var all_album = [first_album, second_album, third_album];
console.log('The 3 dictionary representing different albums, and these are : ');
console.log(all_album);
