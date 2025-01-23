const container = document.getElementById("container");
const gridButton = document.getElementById("grid-button");

let userRows;
let userColumns;

etchASketch();

const cells = document.getElementsByClassName("pixel");
assignRandBackgroundColor();
//increaseOpacity();

gridButton.addEventListener("click", () => {
  userRows = prompt("Enter number for grid rows: ", "");
  while (userRows > 100 || userRows < 1) {
    userRows = prompt("Enter number for grid rows: ", "");
  }

  userColumns = prompt("Enter number for grid columns", "");
  while (userColumns > 100 || userColumns < 1) {
    userColumns = prompt("Enter number for grid columns: ", "");
  }
  deleteGridPixels();
  etchASketch(userRows, userColumns);
  assignRandBackgroundColor();
  //increaseOpacity();
});

function deleteGridPixels() {
  let containerChilds = document.getElementById("container");

  let child = containerChilds.lastElementChild;
  while (child) {
    containerChilds.removeChild(child);
    child = containerChilds.lastElementChild;
  }
}

function etchASketch(rows = 16, columns = 16) {
  for (let i = 1; i <= rows; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for (let j = 1; j <= columns; j++) {
      const pixelDiv = document.createElement("div");
      pixelDiv.classList.add("pixel");
      row.appendChild(pixelDiv);
    }
  }
}

function randomRGP() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const hex = "#" + randomColor;
  return hex;
};

// TODO: fix increase opacity feature
// failed attempt to increase opacity 
/* function increaseOpacity(){
    for (let i = 0; i < cells.length; i++) {
        let increase = parseFloat(cells[i].style.opacity);
        console.log(increase);
        cells[i].addEventListener("mouseover", () => {
            increase += 0.1;
            cells[i].style.opacity += increase
            console.log(increase);
            console.log(parseFloat(cells[i].style.opacity));
        });
      }
}; */

function assignRandBackgroundColor() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("mouseover", () => {
      cells[i].style.backgroundColor = randomRGP();
    });
  }
};
