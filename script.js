const container = document.getElementById("container");
var size = 16;
var c = 0

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c+1);
    cell.addEventListener('mouseover', () => {
      cell.classList.add('hovered');
    });
    container.appendChild(cell).className = "grid-item";
  };
};

document.getElementById("button").addEventListener("click", function() {
  size = prompt("What do you want the size to be (can't go lower)(max 50)");
  if (size <= 50){
    makeRows(size,size);
  }
});


makeRows(size, size);