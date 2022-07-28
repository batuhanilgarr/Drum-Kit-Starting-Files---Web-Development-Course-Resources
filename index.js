//Detecting Button Press
var numberOfDrumButtons = document.querySelectorAll('.drum').length

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function () {
    // alert('I got Clicked!')
    //What to do when click detected.

    var buttonInnerHTML = this.innerHTML

    makeSound(buttonInnerHTML);

    buttonAnimation( buttonInnerHTML);

  });

}

//Detecting Keyboard Press

document.addEventListener("keypress", function(event){
  makeSound(event.key);

  buttonAnimation(event.key);
});


function makeSound(key) {

  // Bulunduğumuz ifadeyi yada olduğumuz şeyi içerir
  switch (key) {
    //değiştirilecek element
    case 'w':
      var tom1 = new Audio('sounds/tom-1.mp3')
      tom1.play()
      break

    case 'a':
      var tom2 = new Audio('sounds/tom-2.mp3')
      tom2.play()
      break

    case 's':
      var tom3 = new Audio('sounds/tom-3.mp3')
      tom3.play()
      break

    case 'd':
      var tom4 = new Audio('sounds/tom-4.mp3')
      tom4.play()
      break

    case 'j':
      var snare = new Audio('sounds/snare.mp3')
      snare.play()
      break

    case 'k':
      var crash = new Audio('sounds/crash.mp3')
      crash.play()
      break

    case 'l':
      var kick = new Audio('sounds/kick-bass.mp3')
      kick.play()
      break

    default:
      console.log(buttonInnerHTML)
  }
}


function buttonAnimation(currentKey){

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100)

}



// var audio = new Audio('sounds/tom-1.mp3')
// audio.play()

//  Birden fazla bilgi girişi yapmak için ;

//  var houseKeeper1 = {
//     yearsOfExperience: 12,
//     name: "Jane",
//     cleaningRepertoire: ["bathroom", "lobby", "bedroom"]
// }

// Function Tanımlayıp birden fazla bilgi girişi yapmak için

// function HouseKeeper(yearsOfExperience, name, cleaningRepertoire) {
//   this.yearsOfExperience = yearsOfExperience
//   this.name = name
//   this.cleaningRepertoire = cleaningRepertoire
// }

// var houseKeeper1 = new HouseKeeper(9, 'Tom', ['lobby', 'bedroom']);

// var houseKeeper2 = new HouseKeeper(14, 'Janet', ['lobby', 'bedroom']);










// Methods

// function modeSuitecase {
//  alert("May I take your suitcase?");
//  pickUpSuitecase();
//  moveBy();
// }








// function HouseKeeper(yearsOfExperience, name, cleaningRepertoire) {
//   this.yearsOfExperience = yearsOfExperience
//   this.name = name
//   this.cleaningRepertoire = cleaningRepertoire
//   this.clean = function () {
//     alert('Cleaning in progress')
//   }
// }


// var houseKeeper1 = new HouseKeeper(14, 'Janet', ['bedroom'])


// houseKeeper1.clean()



// Constructor Function
// function Audio (fileLocation){
//   this.fileLocation = fileLocation;
//   this.play = function () {
  
//   }
// }






// function sayHi(to) {
//   console.log('Hello, ' + to)
// }

// sayHi('Tom')


// Hello, Tom