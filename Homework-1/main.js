"use strict"; // strict mode
import "./style.scss";
const GREETING_BY_DEFAULT = "Welcome, pane ";

alert("Slava Ukraine!");

var firstName = prompt("What is your name, pane?");
var surName = prompt("What is your surname, pane?");

alert("Hello, " + firstName + " " + surName);

var fullName = firstName + " " + surName;
var yearOfBirth = prompt("When were you born " + fullName + "?");

var currentYear = 2023;
var userAge = currentYear - yearOfBirth;

if (userAge < 18) {
  alert("You are not allowed, pane! ");
} else {
  console.log("You are allowed, pane!");
  alert("Your age is " + userAge);
  var confirmMessage = confirm("Do you like money ?");

  if (confirmMessage === true) {
    alert(GREETING_BY_DEFAULT + fullName + "!");
  } else {
    alert(
      "Sorry, you are not invited to a business training. Have a nice day!"
    );
  }
}
