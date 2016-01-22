console.log("where's the wheel?");

// hamster model
function hamster (name, breed, age, sound, imgUrl) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.sound = sound;
    this.imgUrl = imgUrl; 
}

// hamster Instances
var chiquitaBanana = new hamster('hammy the hamster', 'rodent', 100, 'squish squish','https://s-media-cache-ak0.pinimg.com/236x/ea/ce/66/eace66909626c5a34c0dfcb75286f958.jpg');
var Emy = new hamster('Emy','shepard mix', 7, 'woof woof!','https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTBXU_b2Mf32szvfGA_po31rVn5Akt7aXvBEdhyA7lMBXZjubKj' );


// hamster Array
var hamsterArray = [chiquitaBanana, Emy];

//Output to HTML
for (i=0;i < hamsterArray.length; i++) {
        name = hamsterArray[i].name,
        img = hamsterArray[i].imgUrl,
        breed = hamsterArray[i].breed,
        sound = hamsterArray[i].sound;
        var animalDiv = document.createElement('div');
        animalDiv.className = 'animalContainer'        
        animalDiv.innerHTML = '<div class="animalContent"><img class="animalImg" src="'+img+'" /><p class="name">'+name+'</p><p class="breed">'+breed+'</p><p class="sound">'+sound+'</p></div>';
        var sectionContainer = document.getElementById('hamsters');
        sectionContainer.appendChild(animalDiv);
}

