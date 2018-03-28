
window.onscroll = paraFunk;

function paraFunk(){
  var backgroundImage = document.querySelector(".largeimage__parallax");

  var scrollText = document.querySelector(".floating__text");

var yOffset = window.pageYOffset;
// document.getElementById("tellme").innerHTML = yOffset + "px";
backgroundImage.style.backgroundPositionY = "-" + yOffset/4 + "px";

  scrollText.style.right =  yOffset * 2 - 200 + "px";

}
