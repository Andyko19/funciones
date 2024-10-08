const divs = document.querySelectorAll(".color-div");
divs.forEach((div) => {
  div.addEventListener("click", function () {
    this.style.backgroundColor = "black";
  });
});

let currentColor = "";

document.addEventListener("keydown", function (event) {
  const keyDiv = document.getElementById("key");

  if (event.key === "a") {
    currentColor = "pink";
    keyDiv.style.backgroundColor = currentColor;
  } else if (event.key === "s") {
    currentColor = "orange";
    keyDiv.style.backgroundColor = currentColor;
  } else if (event.key === "d") {
    currentColor = "lightblue";
    keyDiv.style.backgroundColor = currentColor;
  }

  if (event.key === "q") {
    createNewDiv("purple");
  } else if (event.key === "w") {
    createNewDiv("gray");
  } else if (event.key === "e") {
    createNewDiv("brown");
  }
});

function createNewDiv(color) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("color-div");
  newDiv.style.backgroundColor = color;
  document.body.appendChild(newDiv);

  newDiv.addEventListener("click", function () {
    this.style.backgroundColor = "black";
  });
}
