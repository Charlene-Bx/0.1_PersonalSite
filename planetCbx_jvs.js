function envoyer () {
	let x = document.getElementById("nom").value;
	alert("Bonjour " + x + "!\nLe contact a bien été établi, merci.");
}

//Galerie d'images

var images = [ // les "[" definise un tableau
"Images/tattoo1.jpg",
"Images/tattoo2.jpg",
"Images/tattoo3.jpg", 
"Images/tattoo4.jpg", 
"Images/tattoo5.jpg", 
"Images/tattoo6.jpg", 
"Images/tattoo7.jpg",
"Images/tattoo8.jpg"
]

var num = 0;


function plus(){
	var slider = document.getElementsByClassName("slider");
	var mini = document.getElementsByClassName("mini");
  	num++; 
  		if(num >= images.length) { 
  			num=0;
  			mini[images.length-1].style.filter="grayscale(100%)";
  		}
  	slider[0].src = images[num];
  	mini[num].style.filter="grayscale(0%)";
  	mini[num-1].style.filter="grayscale(100%)";
  }

function moins(){
	var slider = document.getElementsByClassName("slider");
	var mini = document.getElementsByClassName("mini");
  	num--;
  		if(num < 0) {
    	num = images.length-1;
  		mini[0].style.filter="grayscale(100%)"
    
  	}

  	slider[0].src = images[num];
  	mini[num].style.filter="grayscale(0%)";
  	mini[num+1].style.filter="grayscale(100%)";
}