var images = ["1.png", "2.png", "3.png", "4.png", "5.png"];
var img = document.querySelector("img");
var i = 1;
function rightImg() {
  if (i >= 5) {
    i = 0;
  }
  i++;
  img.src = i + ".png";
}
function leftImg() {
  if (i <= 1) {
    i = 6;
  }
  i--;
  img.src = i + ".png";
}
