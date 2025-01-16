const container = document.getElementById("container");


let rows = 16;
let columns = 16;

for(let i = 1; i<=rows; i++){
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for(let j = 1; j <= columns; j++){
        const pixelDiv = document.createElement("div");
        pixelDiv.classList.add("pixel");
        row.appendChild(pixelDiv);
    }
}


