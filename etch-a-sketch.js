const grid = document.querySelector(".grid")

const rows = 16
const cols = 16

const onMouseHover = (e) => {
  e.target.style.backgroundColor = "blue"
}

// Create a grid of square divs
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    const square = document.createElement("div")
    square.classList.add("square")
    square.addEventListener("mouseover", onMouseHover)
    grid.appendChild(square)
  }
}