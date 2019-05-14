// document.write("JAVASCRIPT CLASS 3");
// document.write("<br>");
// document.write("<br>");



//F 0 - 39
//D 40 - 49
//C 50 - 59
//B 60 - 69
//A 70 - 100
//
// var examScore = 100;
//
// if (examScore >= 70 && examScore<=100) {
//     document.write("You got an A: " + examScore);
// }
//
// else if (examScore >= 60 && examScore <= 69) {
//     document.write("You got a B: " + examScore);
// }
// else if (examScore >= 50 && examScore <= 59) {
//     document.write("You got a C: " + examScore);
// }
// else if (examScore >= 40 && examScore <= 49) {
//     document.write("You got a D: " + examScore);
// }
// else if (examScore >= 30 && examScore <= 39) {
//     document.write("You got a F: " + examScore);
// }
// else {
//     document.write("Invalid Exam Score");
// }
// document.write("<br>");
// document.write("<br>");



// //addition
// function addition() {
//     document.write("Add: " + (20 + 1200));
// }
//
// addition();
//
// document.write("<br>");
// document.write("<br>");


// function addition(num1, num2, num3) {
//     document.write("Add: " + (num1 + num2 + num3));
// }
//
// addition(3,5,10);
// document.write("<br>");
// document.write("<br>");



// A = 20
// B = 26
// H = 15
//
// function areaofTrapezium(A, B, H) {
//     document.write("Area: " + (A + B) / 2 * H);
//
// }
//
// areaofTrapezium(20, 26, 15);
// document.write("<br>");
// document.write("<br>");
//
//
//
// function breakFast(lunch) {
//     document.write("Ogi and Akara<br>" );
//     lunch();
// }
//
//
// function lunch() {
//     document.write("Bread and Butter<br>");
// }
//
// breakFast(lunch);
//
//
// // //console.log
// var movieList = {
//     'movie1': 'Endgame',
//     'movie2': 'Birdbox',
//     'movie3': 'Alita',
//     'movie4': 'Captain Marvel',
//     'movie5': 'Hobbs & Shaw',
//     'movie6': 'John Wick',
//     'year': 2019,
//     'bool': true,
//     'interesting': false,
//     'rating': null
// };
// movieList.movie7 = 'GOT S8';
// movieList.actor = 'Dwayne Johnson';
//
//
// console.log(movieList);
//
//
// var countingNumbers = [{'one': 1, 'two': 2}, {'three': 3, 'four': 4}];
//
// console.log(countingNumbers[1].four);
// console.log(countingNumbers[0].two);




var lorem = document.getElementById("lorem");
lorem.style.backgroundColor = "green";
lorem.style.fontSize = "20px";
lorem.innerHTML = "Hello, How are you doing";




var bio = document.getElementsByClassName("bio");
bio[0].innerHTML = "Name: James Bond";
bio[1].style.backgroundColor = "purple";
bio[1].style.color = "white";
bio[3].style.backgroundColor = "Black";
bio[3].style.color = "white";
bio[2].style.color = "white";
bio[2].style.backgroundColor = "blue";
bio[0].style.backgroundColor = "Red";
bio[0].style.color = "white";


var loremSelector = document.querySelector("#lorem");
loremSelector.style.backgroundColor = "lightgreen";


var bioSelector = document.querySelectorAll(".bio");
bioSelector[1].style.backgroundColor = "gray";


// alert("Good Evening");
//
// var day = "morning";
//
// if (day == "morning") {
//     alert("Good Morning");
// }
// else if (day == "afternoon") {
//     alert("Good Afternoon");
// }
// else if (day == "evening") {
//     alert("Good Evening");
// }
// else {
//     alert("Cannot get time of the day");
// }




//Timing function

function name() {
    console.log("James Bond");
}
// setTimeout(name, 3000);

// setInterval(name, 2000);


var counter = 0;

function name() {
    document.write("James Bond" + "<br>");
    document.write( counter )
}

























