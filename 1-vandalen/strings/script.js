"use strict";

window.onload = function(){

	// I denna funktion ska du skriva koden för att hantera "spelet"
	var convertString = function(str){
		// Plats för förändring.		
		// Returnera den konverterade strängen.
		// Vid fel, kasta ett undantag med ett meddelande till användaren. 
	
	var slength = str.length;
	var lower = /[a-z|åäö]/g;
	var upper = /[A-Z|ÅÄÖ]/g;
	var matchLower, matchUpper;
	var input = str;
	var newstr = str;
	
	if(slength == 0){
		throw new Error("Du måste mata in någonting!");
	}
	
	while(matchLower = lower.exec(input)){
		if(matchLower.index == 0){
			newstr = newstr.substr(0,1).toUpperCase()+newstr.substr(1);
		}else if (0 < matchLower.index < slength){
			newstr = newstr.substr(0,matchLower.index)+newstr.substr(matchLower.index,1).toUpperCase()+newstr.substr(matchLower.index+1);
		}
	}
	while(matchUpper = upper.exec(input)){
		if(matchUpper.index == 0){
			newstr = newstr.substr(0,1).toLowerCase()+newstr.substr(1);
		}else if (0 < matchUpper.index < slength){
			newstr = newstr.substr(0,matchUpper.index)+newstr.substr(matchUpper.index,1).toLowerCase()+newstr.substr(matchUpper.index+1);
		}
	}
	newstr = newstr.replace(/[aA]/g,'#')	;
	return newstr;
	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = convertString(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.	
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};