const grid = document.querySelector(".grid")
const button = document.querySelector("button")

window.onload = () => {
  initialDimension = 16
  setGrid(initialDimension)

  button.addEventListener("click", () => {
    let gridDimension = parseInt(prompt("Enter grid size: "))
    grid.replaceChildren() // Clear the grid
    setGrid(gridDimension)
  })
}

function setGrid(n) {
  let sizePercentage = `${100 / n}%`

  // Create a grid of square divs
  for (let i = 0; i < n * n; i++) {
    const square = document.createElement("div")
    square.classList.add("square")
    square.style.width = sizePercentage
    square.style.height = sizePercentage
    square.addEventListener("mouseover", onMouseHover)
    grid.appendChild(square)
  }
}

function onMouseHover(e) {
  e.target.style.backgroundColor = "blue"
}