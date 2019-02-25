var temp = 38;
var windSpeed = 6;
var windChill = parseInt(35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16)));

document.getElementById("windchill").innerHTML = windChill;