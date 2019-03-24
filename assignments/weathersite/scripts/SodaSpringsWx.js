var currentWxAPIurl = 'https://api.openweathermap.org/data/2.5/weather?&id=5607916&units=imperial&async=true&APPID=966bc9bebb9b492e2f6d605f06647355';

var weatherRequest = new XMLHttpRequest();

weatherRequest.open('GET', currentWxAPIurl);

weatherRequest.responseType = 'json';

weatherRequest.send();

weatherRequest.onload = function() {

	var weatherData = weatherRequest.response;
	
	document.getElementById("temp").innerHTML = parseInt(weatherData.main.temp *10) / 10;
	
	document.getElementById("windchill").innerHTML = parseInt(35.74 + (0.6215 * weatherData.main.temp) - (35.75 * Math.pow(weatherData.wind.speed, 0.16)) + (0.4275 * weatherData.main.temp * Math.pow(weatherData.wind.speed, 0.16)));
	
	document.getElementById("windspeed").innerHTML = parseInt(weatherData.wind.speed);
	
	document.getElementById("humidity").innerHTML = weatherData.main.humidity;
	
	document.getElementById("baro").innerHTML = parseInt(weatherData.main.pressure * 2.953) / 100;
	
}
	
var day = new Array(7);
	day[0] = "Sun";
	day[1] = "Mon";
	day[2] = "Tue";
	day[3] = "Wed";
	day[4] = "Thu";
	day[5] = "Fri";
	day[6] = "Sat";

var forecastAPIurl = 'https://api.openweathermap.org/data/2.5/forecast?&id=5604473&appid=966bc9bebb9b492e2f6d605f06647355&units=imperial';

var forecastRequest = new XMLHttpRequest();

forecastRequest.open('GET', forecastAPIurl);

forecastRequest.responseType = 'json';

forecastRequest.send();

forecastRequest.onload = function() {

    var forecastData = forecastRequest.response;
	
	var icon = "http://openweathermap.org/img/w/"

    document.getElementById("day1").innerHTML = day[new Date(forecastData.list[0].dt_txt).getDay()];
    document.getElementById("icon1").src = icon + forecastData.list[0].weather[0].icon + ".png";
    document.getElementById("temp1").innerHTML = parseInt(forecastData.list[0].main.temp);

    document.getElementById("day2").innerHTML = day[new Date(forecastData.list[8].dt_txt).getDay()];
    document.getElementById("icon2").src = icon + forecastData.list[8].weather[0].icon + ".png";
    document.getElementById("temp2").innerHTML = parseInt(forecastData.list[8].main.temp);

    document.getElementById("day3").innerHTML = day[new Date(forecastData.list[16].dt_txt).getDay()];
    document.getElementById("icon3").src = icon + forecastData.list[16].weather[0].icon + ".png";
    document.getElementById("temp3").innerHTML = parseInt(forecastData.list[16].main.temp);

    document.getElementById("day4").innerHTML = day[new Date(forecastData.list[24].dt_txt).getDay()];
    document.getElementById("icon4").src = icon + forecastData.list[24].weather[0].icon + ".png";
    document.getElementById("temp4").innerHTML = parseInt(forecastData.list[24].main.temp);

    document.getElementById("day5").innerHTML = day[new Date(forecastData.list[32].dt_txt).getDay()];
    document.getElementById("icon5").src = icon + forecastData.list[32].weather[0].icon + ".png";
    document.getElementById("temp5").innerHTML = parseInt(forecastData.list[32].main.temp);
	
}