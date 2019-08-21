// using button click
for (var i = 0; i < document.querySelectorAll(".drum").length; i++)
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonContent = this.innerHTML;
    makeSound(buttonContent);

  });

// using keyboard press
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
});

// makesound function
function makeSound(event) {
  switch (event) {
    case "s":
      var audio = new Audio('tom-1.mp3');
      audio.play();
      break;
    case "r":
      var audio = new Audio('tom-2.mp3');
      audio.play();
      break;
    case "g":
      var audio = new Audio('tom-3.mp3');
      audio.play();
      break;
    case "m":
      var audio = new Audio('tom-4.mp3');
      audio.play();
      break;
    case "p":
      var audio = new Audio('snare.mp3');
      audio.play();
      break;
    case "d":
      var audio = new Audio('crash.mp3');
      audio.play();
      break;
    case "n":
      var audio = new Audio('kick-bass.mp3');
      audio.play();
      break;
    default:
      alert("default button press");
  }
}
