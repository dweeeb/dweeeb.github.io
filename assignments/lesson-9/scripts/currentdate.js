// Script to get current date and time

var today = new Date();

// Array to hold days of the week

var day = new Array(7);
day[0] = "Sunday";
day[1] = "Monday";
day[2] = "Tuesday";
day[3] = "Wednesday";
day[4] = "Thursday";
day[5] = "Friday";
day[6] = "Saturday";

var dayOfWeek = day[today.getDay()];

// Array to hold months of year

var month = new Array(12);
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

var monthOfYear = month[today.getMonth()];

// Get the current year

var year = today.getFullYear();

var todaysDate = dayOfWeek + ", " + monthOfYear + " " + today.getDate() + " " + year;

document.getElementById("currentDate").innerHTML = todaysDate;