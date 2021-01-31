var  plusButton = document.getElementsByClassName('plus');
var minusButton = document.getElementsByClassName('minus');
//console.log(plusButton);
//console.log(minusButton);

for(var i = 0; i < plusButton.length; i++){
var button = plusButton[i];
button.addEventListener("click",function(event){

var buttonClicked = event.target;
console.log(buttonClicked);
})
}