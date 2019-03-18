var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';

request.send();

request.onload = function() {

	var townData = request.response;

	populateTowns(townData);

}

function populateTowns(townData) {
	
	for (var i = 0; i <townData.towns.length; i++) {
		
		if (townData.towns[i].name != "Preston" && townData.towns[i].name != "Fish Haven" && townData.towns[i].name != "Soda Springs") {
			continue;
		}
		
		var article = document.createElement('article');
		
		var imagename = townData.towns[i].name.split(' ').join('').toLowerCase();
				
		var townimage = document.createElement('img');
		townimage.src = "images/" + imagename + "_homepage.jpg";
		article.appendChild(townimage);
				
		var name = document.createElement('h1');
		name.textContent = townData.towns[i].name;
		article.appendChild(name);
		
		var motto = document.createElement('h2');
		motto.textContent = townData.towns[i].motto;
		article.appendChild(motto);
		
		var yearFounded = document.createElement('h3');
		yearFounded.textContent = "Year Founded: " + townData.towns[i].yearFounded;
		article.appendChild(yearFounded);
		
		var currentPop = document.createElement('h3');
		currentPop.textContent = "Current Population: " + townData.towns[i].currentPopulation;
		article.appendChild(currentPop);
		
		var avgRainfall = document.createElement('h3');
		avgRainfall.textContent = "Average Annual Rainfall: " + townData.towns[i].averageRainfall;
		article.appendChild(avgRainfall);
	
		document.getElementById("towninfo").appendChild(article);
		
		
		
	}
	
	
	
	
}
		
	