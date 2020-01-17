function keyPressed() {
  if (keyCode == 83) {
    // saveCanvas('afbeelding', 'png');
  }
}

function toonCode() {
    var x = document.getElementById("code");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}