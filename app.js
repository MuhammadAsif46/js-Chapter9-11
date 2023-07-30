//********* Take input from user and welcome the City **********//

// var city = prompt("ENTER A CITY");

// if (city.toLowerCase() === "karachi") {
//   alert("'Welcome The City Of Light :'");
// } else if (city.toLowerCase() === "lahore") {
//   alert("'Welcome The City Of Traffic :'");
// } else if (city.toLowerCase() === "kashmir") {
//   alert("'Welcome The City Of Nature :'");
// } else {
//   alert("'NOT WELLCOME :'");
// }


//********* Take input from user and find Gender **********//

// var gender = prompt("ENTER A GENDER");
// if (gender.toLowerCase() === "male"){
//     alert(" 'Good Morning Sir!' ");
// }else if (gender.toLowerCase() === "female"){
//     alert(" 'Good Morning Ma'am!' ");
// } else {
//     alert(" 'You are Male or Female ?? ' ");
// }


//********* Take input from user and find Gender **********//

// var gender = prompt("ENTER A GENDER");
// if (gender.toLowerCase() === "male"){
//     alert(" 'Good Morning Sir!' ");
// }else if (gender.toLowerCase() === "female"){
//     alert(" 'Good Morning Ma'am!' ");
// } else {
//     alert(" 'You are Male or Female ?? ' ");
// }



//********* Take input from user and show traffic signal message **********//

// var signalLight = prompt("ENTER A SIGNAL-LIGHT COLOR");

// if (signalLight.toLowerCase() === "red") {
//   alert(" Must Stop! ");
// } else if (signalLight.toLowerCase() === "yellow") {
//   alert(" Ready To Move! ");
// } else if (signalLight.toLowerCase() === "green") {
//   alert(" Move Now! ");
// } else {
//   alert(" Na Batanay Ki Paneshment ! <br><br> Yhi Kharay Raho ");
// }



//********* Take input from user and show message refill the fuel **********//

// var fuel = prompt("Remaining Fuel In Your Car! In Liters ??");

// if (fuel === "0.25 liter"){
//     alert(" 'Please refill the fuel in your car!' ");
// } else if (fuel === "1 liter"){
//     alert(" If You Are Long Drive ! 'Please refill the fuel in your car' ");
// } else if (fuel === "5 liter"){
//     alert(" 'No Fuel Problem!' ");
// } else {
//     alert(" WRONG INPUT : ");
// }



//********* Run this script & check outputs **********//

// var a = 4; // YES INCREMENT
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }

// var b = 82; //NOT INCREMENT
// if (b++ === 83) {
// alert("given condition for variable b is false");
// }

// var c = 12; //NOT INCREMENT
// if (c++ === 13) {
//     alert("condition 1 is false");
// }

// if (c === 13) {
//     alert("condition 2 is true");//YES INCREMENT
// }

// if (++c < 14) {
//     alert("condition 3 is false");// WROUNG
// }

// if (c === 14) {
//     alert("condition 4 is true");//YES CORRECT
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals"); // CORRECT CODE
// }

// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");// this situation false not count
// }
// if ("car" < "cat") {
//     alert("car is smaller than cat"); //correct code / but situation.
// }



//********* Take input from user and show ready marks sheet **********//

// var total = 300;
// var math = prompt("enter the marks of math 1 out of 100");
// var english = prompt("enter the marks of english 1 out of 100");
// var urdu = prompt("enter the marks of urdu 1 out of 100");
// var obtMarks = Number(math) + Number(english) + Number(urdu);
// var per = (Number(obtMarks) * 100) / 300;


// document.write("MARKS SHEET :"+"<br>" + "<br>");
// document.write("Total Marks : " + total + "<br>");
// document.write("0btained Marks : " + obtMarks + "<br>");
// document.write("Percentage : " + Math.round(per) + "%" + "<br>");

// if (per >= 80) {
//   document.write("your grade is : A+1" + "<br>");
// } else if (per >= 70) {
//   document.write("your grade is : A" + "<br>");
// } else if (per >= 60) {
//   document.write("your grade is : B" + "<br>");
// } else if (per < 60) {
//   document.write("your grade is : FAIL" + "<br>");
// }

// if (per >= 80) {
//   document.write("Remarks : EXCELLENT" + "<br>");
// } else if (per >= 70) {
//   document.write(" Remarks : GOOD " + "<br>");
// } else if (per >= 60) {
//   document.write("Remarks : YOU NEED TO IMPROVE" + "<br>");
// } else if (per < 60) {
//   document.write("Remarks : SORRY" + "<br>");
// }



//********* Take input from user and show secret number generate user = computer **********//

// let userFavNum = +prompt("Enter a number 1 to 10");
// let computerNum = Math.round(Math.random() * 10);

// if (userFavNum === computerNum) {
//     alert("you win! " + computerNum);
// } else if (userFavNum - 1 === computerNum || userFavNum + 1 === computerNum ) {
//     alert("you are so close : " + computerNum);
// } else {
//     alert("you lose! " + computerNum);
// }



//********* Take input from user and the number is divisible by 3 **********//

// var divided = +prompt("enter a number");
// if (divided % 3 === 0 ){
//     alert("If The Number Is Divided By 3");
// }else {
//     alert("try again");
// }


//********* Take input from user and show message input number is even or odd **********//

// var num1 = prompt("ENTER A NUMBER.");

// if (num1 % 2 === 0) {
//     alert("this is an even number : " + num1);
// }else {
//     alert("this is an odd number : " + num1);
// }
