/*
	Desert Dwellers JavaScript form behavior
	Author: Lauren Wiebenga
	Date:   11/27/17
	File:   formscript.js
	Supporting files-
		none
*/

/* create variables */
var fname = document.querySelector("#fname");
var lname = document.querySelector("lname");
var email = document.querySelector("#emailinput");
var phone = document.querySelector("#phoneinput");
var optphone = document.querySelector("#optphone");
var optemail = document.querySelector("#optemail");
var message = document.querySelector("#messageinput");
var newsletter = document.querySelector("#newsletter");
var resetBttn = document.querySelector("#reset");

/* functions */
function resetForm() {
	fname.reset();
	lname.reset();
	email.reset();
	phone.reset();
	optphone.reset();
	optemail.reset();
	message.reset();
	newsletter.reset();
}

/* event listeners */
resetBttn.addEventListener("click", resetForm, false);

