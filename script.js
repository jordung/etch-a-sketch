const container = document.querySelector('.container');
const DEFAULT_SIZE = 16;


function createGrid(n) {
  container.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${n}, 1fr)`;
  for (let i = 0; i < (n * n); i++) {
    let cell = document.createElement('div');
    cell.classList.add('grid')
    cell.addEventListener("mouseenter", mouseOver);
    container.appendChild(cell);
  };

  let clearButton = document.getElementById('clear');
  clearButton.addEventListener("click", clearGrid);

  let newButton = document.getElementById('new');
  newButton.addEventListener("click", newGrid);
};

function mouseOver() {
  this.classList.add('hoverEffect')
};

function clearGrid() {
  let gridCells = document.querySelectorAll('.grid');
  gridCells.forEach(cell => {cell.classList.remove('hoverEffect')});
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

createGrid(DEFAULT_SIZE);
