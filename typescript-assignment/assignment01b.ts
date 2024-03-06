//This file contain question 14-22

//question no 14
console.log('Question no : 14');
let invite=["Tina","Harry","Zoya"];
 console.log("Hey "+invite[0]+", I have arranged a dinner at my place and would like to invite you please attend.");
 console.log("Hey "+invite[1]+", I have arranged a dinner at my place and would like to invite you please attend.");
 console.log("Hey "+invite[2]+", I have arranged a dinner at my place and would like to invite you please attend.");
 console.log('\n');

//question no 15
console.log('Question no : 15');
  console.log("We just heard that "+invite[1]+" will not be coming for dinner at our place.");
  console.log('\n');
  const no=invite.indexOf('Harry');
  if(no!==2){
    invite[no]="Fatyma";
  }
console.log("The Updated invitation")
console.log("Hey "+invite[0]+", I have arranged a dinner at my place and would like to invite you please attend.");
console.log("Hey "+invite[1]+", I have arranged a dinner at my place and would like to invite you please attend.");
console.log("Hey "+invite[2]+", I have arranged a dinner at my place and would like to invite you please attend.");
console.log('\n');

//question no 16
console.log('Question no : 16');
console.log("I just wanted to tell you all that I found a bigger dinner table");
//add one person in beginning
const start=0;
const personatstart="Haya"
invite.splice(start,0,personatstart);
//add person in the middle
const middle=2;
const personatmiddle="Zara"
invite.splice(middle,0,personatmiddle);
//add new person in the end
function appendd(list,value){
list[list.length]=value;}
appendd(invite,'Neelum');
console.log('\n');
console.log("Invitation for all the people in my list");
console.log("Hey "+invite[0]+", I have arranged a dinner at my place and would like to invite you please attend.");
console.log("Hey "+invite[1]+", I have arranged a dinner at my place and would like to invite you please attend.");
console.log("Hey "+invite[2]+", I have arranged a dinner at my place and would like to invite you please attend.");
console.log("Hey "+invite[3]+", I have arranged a dinner at my place and would like to invite you please attend.");
console.log("Hey "+invite[4]+", I have arranged a dinner at my place and would like to invite you please attend.");
console.log("Hey "+invite[5]+", I have arranged a dinner at my place and would like to invite you please attend.");
console.log('\n');

//question no 17
console.log('Question no : 17');
console.log("We can only invite two people because, shortage of space.");
console.log("We are sorry "+invite[5]+" as we can't invite you to the dinner")
invite.pop();
console.log("We are sorry "+invite[4]+" as we can't invite you to the dinner")
invite.pop();
console.log("We are sorry "+invite[3]+" as we can't invite you to the dinner")
invite.pop();
console.log("We are sorry "+invite[2]+" as we can't invite you to the dinner")
invite.pop();
console.log("Dear "+invite[0]+"! You are still invited for the dinner");
console.log("Dear "+invite[1]+"! You are still invited for the dinner");
invite.pop();
invite.pop();
console.log(invite);//the list is empty
console.log('\n');

 //question no 18
 console.log('Question no : 18');
 const fav_location=["Netherlands","Dubai","Turkey","Scotland","Australia"];
 console.log("The Original Array");
 console.log(fav_location);
 let sort_array=fav_location.slice().sort();
 console.log("The Sorted Array");
 console.log(sort_array);
 //the array is in its original state.
 console.log("The Array in its original position");
console.log(fav_location);
//reverse array
let reverse_array=sort_array.slice().reverse();
console.log("The Reverse Alphabetical Order of Array");
console.log(reverse_array);
//the array is in its original state.
console.log("The Array in its original position");
console.log(fav_location);
console.log("The Reverse of Original List");
console.log(fav_location.reverse());
console.log("The Array is back to its Original position")
console.log(fav_location.reverse());
console.log("The Order is sorted Alphabetically");
console.log(fav_location.sort());
console.log("The Array is sorted in Reverse Alphabetical Order");
console.log(fav_location.reverse());
console.log('\n');

//question no 19
console.log('Question no : 19');
console.log("The number of guest I have invited is "+invite.length);
console.log('The list is empty as per the instructions but 2 people are invited.')
console.log('\n');

//question no 20
console.log('Question no : 20');
const language=['English','French','German','Spanish','Persian'];
console.log(language);
console.log('\n');

//question no 21
console.log('Question no : 21');
console.log('Name of fruits ; ');
var fruits={
  f1:'Passion Fruit',
  f2:'Orange',
  f3:'Guava'
};
console.log(fruits.f1);
console.log(fruits.f2);
console.log(fruits.f3);
console.log('\n');

//question no 22 (checking error done)
console.log('Question no : 22 (error checking done)');


