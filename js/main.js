// var num1 = 10;
// document.write('my name is:' + num1)



// 1. JavaScript  program to input week number(1-7) and print day of week name:
var day = 2;
if (day == 1) {
    document.write("Saturday");
}
else if (day == 2) {
    document.write("Sunday");
}
else if (day == 3) {
    document.write("Monday");
}
else if (day == 4) {
    document.write("Tuesday");
}
else if (day == 5) {
    document.write("Wendsday");
}
else if (day == 6) {
    document.write("Thursday");
}
else if (day == 7) {
    document.write("Friday");
}
else { document.write("Invalid day number") }



var roll = 4;
if (roll == 1) {
    document.write("<br><br><br><br> Md Golam Morshed<br> Dept. CSE");
}
else if (roll == 2) {
    document.write("<br>Md Golam Rabbani<br> Dept. CSE");
}
else if (roll == 3) {
    document.write("<br>Md Khorshed Alom<br> Dept. CSE");
}
else if (roll == 4) {
    document.write("<br>Opurvo Sutradar<br> Dept. CSE")
}
else if (roll == 5) {
    document.write("<br>Md Mehedi Hasan<br> Dept. CSE");
}
else {
    document.write("<br>Invalid")
}

// 2. JavaScript  program to input month number and print total number of days in month :

var month = 11;
if (month == 1) { document.write("<br><br>January 31") }
else if (month == 2) { document.write("<br><br>February 28") }
else if (month == 3) { document.write("<br><br>March 31") }
else if (month == 4) { document.write("<br><br>April 30") }
else if (month == 5) { document.write("<br><br>May 31") }
else if (month == 6) { document.write("<br><br>June 31") }
else if (month == 7) { document.write("<br><br>July 30") }
else if (month == 8) { document.write("<br><br>Aguest 31") }
else if (month == 9) { document.write("<br><br>September 30") }
else if (month == 10) { document.write("<br><br>Octobar 31") }
else if (month == 11) { document.write("<br><br>November 30") }
else if (month == 12) { document.write("<br><br>December 31") }
else { document.write("<br><br>Invalid number") }


document.write('<br>');

// 4. JavaScript  program to input two numbers from user and find maximum between two numbers:
document.write('<br>');
var num1 = 16;
var num2 = 13;
if (num1 > num2) {
    document.write("num2 is maximum")
}
else { document.write("num1 is maximum") }
document.write('<br>');

// 5. JavaScript  program to input number from user and check whether the number is even or odd:

var num = 13;
if (num % 2 == 0) {
    document.write(" <br>Number is even");
}
else {
    document.write("<br>Given number is odd");
}
document.write('<br>');


// 6. JavaScript  program to input a number and check positive negative or zero:
document.write('<br>');
var num = 3;
if (num == 0) { document.write("The number is zero"); }
if (num > 0) { document.write("The number is positive"); }
if (num < 0) { document.write("The number is negative"); }
document.write('<br>');



// Problems Example for if-else:

// 1. JavaScript  program to find maximum between three numbers:

document.write('<br>');

var a = 5;
var b = 15;
var c = 9;
var max;
if (a > b && a > c) {
    max = a;
}
else if (b > a && b > c) {
    max = b;
}
else if (c > b && c > a) {
    max = c;
}
document.write(max + " is maximum number")
document.write('<br>');

// 2. JavaScript program to check whether a number is divisible by 5 and 11 or not using if else:

document.write('<br>');
var num = 110;
if ((num % 5 == 0) && (num % 11 == 0)) {
    document.write(num + " divisible by 5 and 11 ");
}
else {
    document.write(num + " in not divisible by 5 and 11 ");
}

document.write('<br>');


// 3. JavaScript  program to check leap year using if else
document.write('<br>');
var year = 2008;
if (year % 4 == 0) { document.write(year + " is leap year."); }
else { document.write(year + " is not leap year."); }
document.write('<br>');


// 5. JavaScript  program to input a character from user and check whether given character is alphabet, digit or special character using if else:
document.write('<br>');

var char = '=';
if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
    document.write("The character is alphabet.")
}
else if (char >= 0 && char <= 9) {
    document.write("The character is digit.");
}
else { document.write("Special character."); }

document.write('<br>');

// 7. JavaScript  program to input week number(1-7) and print the corresponding day of week name using if else:
document.write('<br>');


// 8. JavaScript  program to check whether a triangle is valid or not if angles are given using if else:

var x = 60;
var y = 90;
var z = 40;
if ((x + y + z) == 180 && x > 0 && y > 0 && z > 0) {
    document.write("The traiangle is vaild");
}
else { document.write("The traiangle is not vaild"); }
document.write('<br>');
document.write('<br>');
// 9. JavaScript  program to input side of a triangle and check whether triangle is valid or not using if else:
var a = 10;
var b = 50;
var c = 50;

if ((a + b > c) && (a + c > b) && (b + c > a)) {
    document.write("The traingle is valid");
}
else { document.write("The traingle is not valid"); }



// 10. JavaScript program to input sides of a triangle and check whether a triangle is equilateral, scalene or isosceles triangle using if else:
document.write('<br>');
document.write('<br>');

var a = 2;
var b = 4;
var c = 1;

if (a == b && b == c) { document.write("This is Equilateral triangle."); }

else if (a == b || b == c || c == a) { document.write("This is  Scalene triangle."); }

else { document.write("This is  Isoscales triangle."); }
document.write('<br>');
document.write('<br>');

// 11. JavaScript C program to input cost price and selling price of a product and check profit or loss:
var cost = 10;
var sell = 6;
if (sell > cost) {
    +
        document.write("Profit is " + (sell - cost) + "tk");
}
else {
    document.write("Loss is " + (cost - sell) + "tk")
}
document.write('<br>');
document.write('<br>');

// 12. JavaScript  program to input marks of five subjects Physics, Chemistry, +```Biology, Mathematics and Computer, calculate percentage and grade according to given conditions:
var Physics = 92;
var Chemistry = 80;
var Biology = 55;
var Mathematics = 89;
var Computer = 85;

var avg;
avg = (Physics + Chemistry + Biology + Mathematics + Computer) / 5;
var percentage;
percentage = ((Physics + Chemistry + Biology + Mathematics + Computer) / 500) * 100;

if (avg >= 90 && avg <= 100) {
    document.write('Got A+' + percentage);
}
if (avg >= 80 && avg < 90) {
    document.write("Got A");
}
if (avg >= 70 && avg < 80) {
    document.write("Got A-");
}
if (avg >= 60 && avg < 70) {
    document.write("Got B");
}
if (avg >= 40 && avg < 60) {
    document.write("Got C");
}
if (avg < 40) {
    document.write('Got F')
}

document.write('<br>');
document.write('<br>');

// 13. JavaScript  program to input basic salary of an employee and calculate gross salary according to given conditions:

var basic = 18000;
var gross = 0;
var da = 0;
var hra = 0

if (basic <= 10000) {
    da = basic * 0.8;
    hra = basic * 0.2;
}
else if (basic > 10000 && basic <= 20000) {
    da = basic * 0.9;
    hra = basic * 0.25;
}
else {
    da = basic * 0.95;
    hra = basic * 0.3;
}
gross = basic + hra + da;
document.write('Gross salary = ' + gross);
document.write('<br>');


// 14. JavaScript program to input electricity unit charge and calculate the total electricity bill according to the given condition:
document.write('<br>'); document.write('<br>');
var unit = 248;
var subtotal = 0;
var total = 0;

if (unit <= 50) {
    subtotal = unit * 3;
}
if (unit > 50 && unit <= 150) {
    subtotal = 50 * 3 + (unit - 50) * 5;
}
if (unit > 150 && unit <= 250) {
    subtotal = 50 * 3 + 100 * 5 + (unit - 150) * 7;
}
if (unit > 250) {
    subtotal = 50 * 3 + 100 * 5 + 100 * 7 + (unit - 250) * 10;
}

total = subtotal * 0.15 + subtotal;

document.write('Subtotal: ' + subtotal + '<br>' + 'Total: ' + total);
