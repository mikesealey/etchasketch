let sizes = [[4,3], [8,6], [12,9], [16,12], [20,15], [24,18], [28, 21], [32, 24], [36, 27], [40, 30]]
// Array sizes is for a future update that will make the grid into a 4:3 aspect ratio
// by using gridSize as an index of sizes
// eg sizes[gridSize]
// passed into genGrid as two arguments for width and height

let gridSize = document.getElementById("gridSize").innerHTML
let maxGridSize = 25
let minGridSize = 5
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
  console.log(`Attempting to delete previous grid of size ${gridSize}`)
  grid.replaceChildren(); //replaceChildren with Nothing, because function is called inside genGrid
};

// function takes a number as an argument and returns a square of "pixels"
function genGrid(gridSize){ 
  console.log(`Generating grid of size ${gridSize}`)
  deleteGrid();
    var e = document.body.appendChild(grid); // Appends the rows to a <div> called grid: 
    for(var i = 0; i < gridSize; i++){ 
      var row = document.createElement("div"); 
      row.id = "row"; 
      for(var x = 1; x <= gridSize; x++){ 
          var cell = document.createElement("div"); 
          cell.id = "pixel"; 
          //cell.innerText = (i * gridSize) + x; // Drops numbers on each "pixel" for testing
          row.appendChild(cell); 
      } 
      e.appendChild(row); 
    } 
    //document.getElementById("body").innerText = e.innerHTML;
};






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

According to Wikipedia, Etchasketch has an aspect ratio of 4:3, 
so the adjustment
 should follow this ratio
*/



