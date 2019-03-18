var owmapiurl = 'https://api.openweathermap.org/data/2.5/weather?&id=5604473&units=imperial&async=true&APPID=966bc9bebb9b492e2f6d605f06647355';

var weatherRequest = new XMLHttpRequest();

weatherRequest.open('GET', owmapiurl);

weatherRequest.responseType = 'json';

weatherRequest.send();

weatherRequest.onload = function() {

	var weatherData = weatherRequest.response;
	
	console.log(weatherData);
	
	document.getElementById("current-temp").innerHTML = weatherData.main.temp;
	
}