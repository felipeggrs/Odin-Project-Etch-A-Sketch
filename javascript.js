// loop to create 16 divs
for (let i = 1; i <= 256; i++) {
  const div = document.createElement("div");
  div.className = "square"
  div.id = "div" + i; // assign a unique ID to each div element
  div.textContent = `S${i}`
  div.setAttribute("style", "font-size: smaller; display: flex; justify-content: center; align-items: center;")
  // div.setAttribute("style", "height: 25px; width: 25px; background-color: black; border: 2px solid red;")
  squareContainer.appendChild(div);
}
console.log(squareContainer);