const grid = document.querySelector(".grid")

const rows = 16
const cols = 16

// Create a grid of square divs
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    const square = document.createElement("div")
    square.classList.add("square")
    grid.appendChild(square)
  }
}