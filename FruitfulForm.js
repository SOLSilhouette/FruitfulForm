cell1 = document.querySelector("#cell1");
cell2 = document.querySelector("#cell2");
cell3 = document.querySelector("#cell3");
cell4 = document.querySelector("#cell4");
cell5 = document.querySelector("#cell5");
cell6 = document.querySelector("#cell6");
cell7 = document.querySelector("#cell7");


var d = new Date();

var date = d.getDate();
var year = d.getFullYear();

var day = new Array();
day[0] = "Monday";
day[1] = "Tuesday";
day[2] = "Wednesday";
day[3] = "Thursday";
day[4] = "Friday";
day[5] = "Saturday"
day[6] = "Sunday";
var day = day[d.getDay()];

var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var month = month[d.getMonth()];

var cm_date = day + ", " + date + "th " + month + " " + year;
document.querySelector("#date").value = cm_date;


cell1.addEventListener("click", function() {
    document.querySelector("#head").style.display = "none";
    document.querySelector("#form").style.display = "block"
    document.querySelector("#main").style.display = "none";
    document.querySelector("#back").style.display = "inline-block";
    document.querySelector("#date").value = cm_date;
    document.querySelector("#cell_n").value = "Fruitful Cell 1";
    document.querySelector("#name").value = "Philip Armah";
});

cell2.addEventListener("click", function() {
    document.querySelector("#head").style.display = "none";
    document.querySelector("#form").style.display = "block"
    document.querySelector("#main").style.display = "none";
    document.querySelector("#back").style.display = "inline-block";
    document.querySelector("#date").value = cm_date;
    document.querySelector("#cell_n").value = "Fruitful Cell 2";
    document.querySelector("#name").value = "Daniel Ampadu";
});

cell3.addEventListener("click", function() {
    document.querySelector("#head").style.display = "none";
    document.querySelector("#form").style.display = "block"
    document.querySelector("#main").style.display = "none";
    document.querySelector("#back").style.display = "inline-block";
    document.querySelector("#date").value = cm_date;
    document.querySelector("#cell_n").value = "Fruitful Cell 3";
    document.querySelector("#name").value = "Tracy Nyame";
});

cell4.addEventListener("click", function() {
    document.querySelector("#head").style.display = "none";
    document.querySelector("#form").style.display = "block"
    document.querySelector("#main").style.display = "none";
    document.querySelector("#back").style.display = "inline-block";
    document.querySelector("#date").value = cm_date;
    document.querySelector("#cell_n").value = "Fruitful Cell 4";
    document.querySelector("#name").value = "Owen Smith";
});

cell5.addEventListener("click", function() {
    document.querySelector("#head").style.display = "none";
    document.querySelector("#form").style.display = "block"
    document.querySelector("#main").style.display = "none";
    document.querySelector("#back").style.display = "inline-block";
    document.querySelector("#date").value = cm_date;
    document.querySelector("#cell_n").value = "Fruitful Cell 5";
    document.querySelector("#name").value = "Gideon Arku";
});

cell6.addEventListener("click", function() {
    document.querySelector("#head").style.display = "none";
    document.querySelector("#form").style.display = "block"
    document.querySelector("#main").style.display = "none";
    document.querySelector("#back").style.display = "inline-block";
    document.querySelector("#date").value = cm_date;
    document.querySelector("#cell_n").value = "Fruitful Cell 6";
    document.querySelector("#name").value = "Brenda Mankatah";
});

cell7.addEventListener("click", function() {
    document.querySelector("#head").style.display = "none";
    document.querySelector("#form").style.display = "block"
    document.querySelector("#main").style.display = "none";
    document.querySelector("#back").style.display = "inline-block";
    document.querySelector("#date").value = cm_date;
    document.querySelector("#cell_n").value = "Fruitful Cell 7";
    document.querySelector("#name").value = "Prince Adzewodah";
});

document.querySelector("#back").addEventListener("click", function() {
    document.querySelector("#back").style.display = "none";
    document.querySelector("#form").style.display = "none";
    document.querySelector("#head").style.display = "block";
    document.querySelector("#main").style.display = "block";
    document.querySelector("form").reset();
});