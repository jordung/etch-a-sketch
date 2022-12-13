const container = document.querySelector('.container');

function createGrid(n) {
  for (let i = 0; i < (n * n); i++) {
    let gridCells = document.createElement('div');
    gridCells.classList.add('grid')
    container.appendChild(gridCells);
  };
};

function mouseOver() {
  this.style.backgroundColor = "black";
};

function clearGrid() {
  gridCells.forEach(cell => cell.style.backgroundColor = "white");
  alert("cleared!");
}

function newGrid() {
  let n = prompt("Enter new grid size: ");
  if (n >= 1 && n <= 100) {
    while (container.hasChildNodes()) {
      container.removeChild(container.lastChild); // removes all existing grid squares
    }
    createGrid(n);
  } else {
    alert('Choose a number between 1-100');
    newGrid();
  }
  alert(n);
}

createGrid(16);
let gridCells = document.querySelectorAll('.grid');
gridCells.forEach(cell => cell.addEventListener("mouseenter", mouseOver));

let clearButton = document.getElementById('clear');
clearButton.addEventListener("click", clearGrid);

let newButton = document.getElementById('new');
newButton.addEventListener("click", newGrid);