var basket = document.getElementById("basket-list");
var buttons = document.getElementsByTagName("button");
var fullPrice = 0;
for (var i = 0; i < 3; i++) {
  buttons[i].onclick = function (event) {
    var productUse = document.createElement("li");
    var productName = document.getElementById(event.target.id[0] + "_name");
    var productPrice = document.getElementById(event.target.id[0] + "_price");
    productUse.innerHTML =
      "<b>Товар: </b> " +
      productName.innerText +
      " / Стоимость: " +
      productPrice.innerText +
      " $ ";
    fullPrice += +productPrice.innerText;
    basket.append(productUse);
    document.querySelector(".sum").textContent =
      "Сумма заказа: " + fullPrice + " $";
  };
}
