function pintar(elemento, color = "") {
  elemento.style.backgroundColor = color;
}

const divs = document.querySelectorAll(".color-div");

divs.forEach((div) => {
  div.addEventListener("click", function () {
    pintar(div, "green");
  });
});
