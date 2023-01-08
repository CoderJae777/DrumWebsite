//Detecting Button Press

var numLoops =  document.querySelectorAll(".drum").length
var audio = new Audio('sounds/tom-1.mp3');

for(var i = 0; i<numLoops; i++){
    document.querySelectorAll(".drum")[i].addEventListener('click',function(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    })}


//Detecting Keyboard Press
document.addEventListener("keydown",function(event){
    buttonAnimation(event.key);
    makeSound(event.key);
}
);

function makeSound(key){
    switch (key){
        case "w":
            var crash = new Audio('crash.mp3');
            crash.play();
        
            break;
        case "a":
            var kick = new Audio('kick-bass.mp3');
            kick.play();
            break;
        case "s":
            var snare = new Audio('snare.mp3');
            snare.play();
            break;    
        case "d":
            var tom_1 = new Audio('tom-1.mp3');
            tom_1.play();
            break;       
        case "j":
            var tom_2 = new Audio('tom-2.mp3');
            tom_2.play();
            break;
        case "k":
            var tom_3 = new Audio('tom-3.mp3');
            tom_3.play();
            break;
        case "l":
            var tom_4 = new Audio('tom-4.mp3');
            tom_4.play();
            break;                }}

function buttonAnimation(key){
    var activButton = document.querySelector("." + key);
    activButton.classList.add("pressed");
    setTimeout(function(){activButton.classList.remove("pressed");},100);

}