// Cat model
function Cat (name, breed, age, sound, imgUrl) {
	this.name = name;
	this.breed = breed;
	this.age = age;
	this.sound = sound;
	this.imgUrl = imgUrl; 
}

// Cat Instances
var mrGrumpy = new Cat('Mr.Grumpy', 'persian long hair', 4, '"mew mew mew"', 'http://www.petwave.com/~/media/Images/Center/Breed/Cats/Semi-Long-and-Long-Hair/Persian/Persian-Cat-Sitting.ashx');
var kalie = new Cat('Tiger', 'calico', 0,'"mew mew"','https://s-media-cache-ak0.pinimg.com/236x/08/67/99/0867998a8e927bb50133bb5d2cd25f83.jpg');
var blackie = new Cat('Blackie','tabby',0, '"meeew"', 'http://placekitten.com/150/170');
var milo = new Cat('Milo','orange tabby',0, '"meow meow meow meow"', 'http://oddstuffmagazine.com/wp-content/uploads/2011/09/Small-Cat-580x574.png');


// Cat Array
var catArray = [mrGrumpy,kalie,blackie,milo];

//Output to HTML
for (i=0;i < catArray.length; i++) {
		name = catArray[i].name,
		img = catArray[i].imgUrl,
		breed = catArray[i].breed,
		sound = catArray[i].sound;
		var animalDiv = document.createElement('div');
		animalDiv.className = 'animalContainer'		
		animalDiv.innerHTML = '<div class="animalContent"><img class="animalImg" src="'+img+'" /><p class="name">'+name+'</p><p class="breed">'+breed+'</p><p class="sound">'+sound+'</p></div>';
		var sectionContainer = document.getElementById('cats');
		sectionContainer.appendChild(animalDiv);
}






