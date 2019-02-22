// JavaScript is capitalized using "camel case": https://en.wikipedia.org/wiki/Camel_case
// Check out the power of the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp

// "el" stands for the "element" that was just clicked
function addClass(el){
	el.classList.add("opaque");

}

// "el" stands for the "element" that was just clicked
function removeClass(el){
	el.classList.remove("pats-silver");
}
// rocket --> spaceship --> alien --> planet --> astronaut
function firstImage(el){
	if (el.src.match("image/rocket.png")){
		el.src = "image/spaceship.png";
	} else if (el.src.match ("image/spaceship.png")){
		el.src = "image/alien.png";
	} else if (el.src.match ("image/alien.png")){
		el.src = "image/planet.png";
	} else if (el.src.match ("image/planet.png")){
		el.src = "image/astronaut.png";
	} else if (el.src.match ("image/astronaut.png")){
		el.src ="image/rocket.png";
	}
}
function secondImage(el){
	if (el.src.match ("image/spaceship.png")){
		el.src = "image/alien.png";
	} else if (el.src.match ("image/alien.png")){
		el.src = "image/planet.png";
	} else if (el.src.match ("image/planet.png")){
		el.src = "image/astronaut.png";
	} else if (el.src.match ("image/astronaut.png")){
		el.src ="image/rocket.png";
	} else if (el.src.match("image/rocket.png")){
		el.src = "image/spaceship.png";
	}
}
function thirdImage(el){
	if (el.src.match ("image/alien.png")){
		el.src = "image/planet.png";
	} else if (el.src.match ("image/planet.png")){
		el.src = "image/astronaut.png";
	} else if (el.src.match ("image/astronaut.png")){
		el.src ="image/rocket.png";
	} else if (el.src.match("image/rocket.png")){
		el.src = "image/spaceship.png";
	} else if (el.src.match ("image/spaceship.png")){
		el.src = "image/alien.png";
	}
}
function fourthImage(el){
	if (el.src.match ("image/planet.png")){
		el.src = "image/astronaut.png";
	} else if (el.src.match ("image/astronaut.png")){
		el.src ="image/rocket.png";
	} else if (el.src.match("image/rocket.png")){
		el.src = "image/spaceship.png";
	} else if (el.src.match ("image/spaceship.png")){
		el.src = "image/alien.png";
	} else if (el.src.match ("image/alien.png")){
		el.src = "image/planet.png";
	}
}
function fifthImage(el){
	if (el.src.match ("image/astronaut.png")){
		el.src ="image/rocket.png";
	} else if (el.src.match("image/rocket.png")){
		el.src = "image/spaceship.png";
	} else if (el.src.match ("image/spaceship.png")){
		el.src = "image/alien.png";
	} else if (el.src.match ("image/alien.png")){
		el.src = "image/planet.png";
	} else if (el.src.match ("image/planet.png")){
		el.src = "image/astronaut.png";
	}
}
function firstRow(el){
	document.getElementById("one_picture").src = ("image/spaceship.png");
}
function secondRow(el){
	document.getElementById("second_picture").src = ("image/alien.png");
}
function thirdRow(el){
	document.getElementById("third_picture").src = ("image/planet.png");
}
function fourthRow(el){
	document.getElementById("fourth_picture").src = ("image/astronaut.png");
}
function fifthRow(el){
	document.getElementById("fifth_picture").src = ("image/rocket.png");
}