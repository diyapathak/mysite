var mybio = document.getElementById("bio");
var myLink = document.getElementById("link");

function changeColor(){
  mybio.style.color = "grey";
  myLink.style.color = "grey";
}

function changeBack(){
  mybio.style.color = "black";
  myLink.style.color = "blue";
}



mybio.onmouseover = changeColor;
myLink.onmouseover = changeColor;
myLink.onmouseout = changeBack;
mybio.onmouseout = changeBack;
