let gridSize = document.getElementById("gridSize").innerHTML
let maxGridSize = 60
let minGridSize = 10
let grid = document.getElementById("grid")
console.log(`Starting grid size is ${gridSize}`)

function increaseGrid() {
  if (gridSize < maxGridSize) {
    gridSize ++
    console.log(`Increasing grid size to ${gridSize}`)
    document.getElementById("gridSize").innerHTML = gridSize
  }
};

function decreaseGrid() {
  if (gridSize > minGridSize) {
    gridSize --
    console.log(`Decreasing grid size to ${gridSize}`)
    document.getElementById("gridSize").innerHTML = gridSize
  }
};

function deleteGrid() {
  console.log(`Attempting to delete existing grid`)
  grid.replaceChildren(); //replaceChildren with Nothing, because function is called inside genGrid
};

// function takes a number as an argument and returns a square of "pixels"
function genGrid(gridSize){ 
  console.log(`Generating grid of size ${gridSize}`)
  deleteGrid();
    //var e = document.body.appendChild(grid); // Appends the rows to a <div> called grid: 
    for(var i = 0; i < gridSize; i++){ 
      var row = document.createElement("div"); 
      row.id = "row"; 
      for(var x = 1; x <= gridSize; x++){ 
          var cell = document.createElement("div"); 
          cell.id = `pixel-${(i * gridSize) + x}`;
          cell.classList.add("pixel")
          //cell.innerText = (i * gridSize) + x; // Drops numbers on each "pixel" for testing
          row.appendChild(cell); 

      } 
      grid.appendChild(row); 
      
    } 
    
};

genGrid(gridSize); // Calling this here makes a grid ready for the user

var item = document.getElementsByClassName("pixel")
item.addEventListener("mouseenter", hoverDraw)

function hoverDraw() {
  console.log("class \"drawn\" added ")
  cell.classList.add("drawn")
}




/*
Closing 19/10/22
Pixel grid populates directly into body, which isn't ideal

Opening 20/10/22
On hover, add a class to "pixel" that has different properties (ie different colour)

Opening 21/10/22
Adding feature to increase and decrease grid-size using buttons

Opening 24/10/22
Building function deleteGrid() that removes existing grid when generating a new grid.

Function genGrid creates a new <div> underneath all of the existing HTML
This is problematic for the layout, and should be edited to make changes to an existing div


*/



