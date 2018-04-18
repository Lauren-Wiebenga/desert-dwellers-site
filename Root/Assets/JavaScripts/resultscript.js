/*
	Desert Dwellers JavaScript result page behavior
	Author: Lauren Wiebenga
	Date:   11/27/17
	File:   resultscript.js
	Supporting files-
		none
*/

var formData = location.search; // get form input data
formData = formData.slice(1).replace(/\+/g, " "); // remove beginning ? and replace +
formData = decodeURIComponent(formData); // parse the query
var formItems = formData.split("&"); // split the data
var article = document.querySelector("article");
for (var i = 0; i < formItems.length; i++) {
	article.innerHTML += "<p>" + formItems[i] + "</p>"; // write data to html
}