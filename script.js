const gridContainer = document.querySelector("#mainContainer")
const numSquaresBtn = document.querySelector(".numSquaresBtn")

let gridSize;

drawGrid(16)

function drawGrid(size) {
    gridContainer.textContent = "";
    const squareSize = 960/size;
    for (let i = 0; i < size*size; i++)
    {
        const gridSquare = document.createElement("div")
        gridSquare.classList.add("square")
        gridSquare.style.width = `${squareSize}px`;
        gridSquare.style.height = `${squareSize}px`;
        gridContainer.appendChild(gridSquare)
    
        gridSquare.addEventListener('mouseover', () => {
            gridSquare.style.backgroundColor = "red";
        });
    }
}


numSquaresBtn.addEventListener("click", () => {
    gridSize = parseInt(prompt("Enter the number of squares per side (0-100)"));
    if (!isNaN(gridSize) && gridSize > 0 && gridSize <= 100)
    {
        drawGrid(gridSize)
    }
    else {
        alert("Invalid Number; Enter a number between 0-100")
    }
});

