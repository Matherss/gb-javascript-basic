function init() {
  var images = document.querySelectorAll("img");
  for (var i = 0; i < images.length; i++) {
    images[i].onclick = createBigImg;
  }
}
function createBigImg(event) {
  var img = document.createElement("img");
  var header = document.querySelector(".header");
  header.innerHTML = "";
  img.src = event.target.src.replace("small", "big");
  img.onload = function () {
    // Если изображение загрузилось без ошибок - она выводится
    header.appendChild(img);
  };
  img.onerror = function () {
    // Проверка на наличие ошибок загрузки изображения
    header.innerHTML = "<h1>Изображение отутствует</h1>";
  };
}
window.onload = init;
