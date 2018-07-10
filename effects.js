var button = document.getElementById("myButton");
var aboutMe = document.getElementById("aboutMe");

function showHideAboutMe(){
  // aboutMe.style.display = "block";

  if (aboutMe.style.display === "none") {
    aboutMe.style.display = "block";
  } else {
    aboutMe.style.display = "none";
}

}
button.onclick = showHideAboutMe;
