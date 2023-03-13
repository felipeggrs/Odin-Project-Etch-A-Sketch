// create button and put it on top of the grid
const button = document.createElement("button");
button.textContent = "Click me";
mainContainer.insertBefore(button, mainContainer.children[0]);
button.addEventListener("click", createGrid);

// loop to create the default 16 divs grid
for (let i = 1; i <= 256; i++) {
  div = document.createElement("div");
  div.className = "square"
  div.id = "div" + i; // assign a unique ID to each div element
  div.textContent = `S${i}`
  div.setAttribute("style", "font-size: smaller; display: flex; justify-content: center; align-items: center;")
  squareContainer.appendChild(div);
}

// creates a grid with the row and column size of the user's input
function createGrid() {
  let userInput = prompt("Choose a number between 2 and 100");
  if (userInput > 100) {
    return alert("This number is too high!")
  } else if (userInput < 2) {
    return alert("This number is too low!")
  } else {
  squareContainer.innerHTML = "";
  let userNumber = +userInput * +userInput;

  for (i = 1; i <= userNumber; i++) {
    div = document.createElement("div");
    div.className = "square"
    div.id = "div" + i; // assign a unique ID to each div element
    // div.textContent = `S${i}`
    div.setAttribute("style", `font-size: smaller; display: flex; justify-content: center; align-items: center; width: ${800 / +userInput}px; height: ${800 / +userInput}px;`)
    squareContainer.appendChild(div);
  }
  // hover effect for the new grid
  const squares = document.querySelectorAll("div .square");
  squares.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = `rgb(${getRandomInt()}, ${getRandomInt()}, ${getRandomInt()})`;
    });
    // item.addEventListener("mouseleave", () => {
    //   item.style.backgroundColor = "rgb(3, 141, 123)";
    // });
  });
  }
}

// hover effect for the default grid
const squares = document.querySelectorAll("div .square");
squares.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.backgroundColor = `rgb(${getRandomInt()}, ${getRandomInt()}, ${getRandomInt()})`;
  });
  // item.addEventListener("mouseleave", () => {
  //   item.style.backgroundColor = "rgb(3, 141, 123)";
  // });
});

// returns a random number between 0 and 255
function getRandomInt() {
  return Math.floor(Math.random() * 255);
}