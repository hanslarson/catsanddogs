// Dog model
function Dog (name, breed, age, sound, imgUrl) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.sound = sound;
    this.imgUrl = imgUrl; 
}

// dog Instances
var chiquitaBanana = new Dog('Chiquita Banana', 'chihuahua', 14, 'squeek squeek','https://s-media-cache-ak0.pinimg.com/236x/ea/ce/66/eace66909626c5a34c0dfcb75286f958.jpg');
var Emy = new Dog('Emy','shepard mix', 7, 'woof woof!','http://www.yourpurebredpuppy.com/dogbreeds/photos-AB/australianshepherds-th1.jpg' );


// dog Array
var dogArray = [chiquitaBanana, Emy];

//Output to HTML
for (i=0;i < dogArray.length; i++) {
        name = dogArray[i].name,
        img = dogArray[i].imgUrl,
        breed = dogArray[i].breed,
        sound = dogArray[i].sound;
        var animalDiv = document.createElement('div');
        animalDiv.className = 'animalContainer'        
        animalDiv.innerHTML = '<div class="animalContent"><img class="animalImg" src="'+img+'" /><p class="name">'+name+'</p><p class="breed">'+breed+'</p><p class="sound">'+sound+'</p></div>';
        var sectionContainer = document.getElementById('dogs');
        sectionContainer.appendChild(animalDiv);
}

