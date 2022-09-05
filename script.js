// create divs using js
const squareContainer = document.querySelector('#squareContainer');
const clearbtn = document.querySelector('#clearbtn');
const slider = document.querySelector('#slider');
const sizeValue = document.querySelector('#sliderSize');

const DEFAULT_SIZE = 16;

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);


let currentSize = DEFAULT_SIZE;

// utility function to change current size inside updateGrid()
function setCurrentSize(newSize) {
    currentSize = newSize;
}

// utility function to change the text over the slider each time it changes
function updateSizeValue(value) {
    sizeValue.innerHTML = `${value} x ${value}`
}

// this updates the grid by getting input on the slider
function updateGrid(value) {
    setCurrentSize(value);
    updateSizeValue(value);
    reloadGrid();
}

function reloadGrid() {
    squareContainer.innerHTML = '';
    createGrid(currentSize);
}

function createGrid(size) {
    squareContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    squareContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for(let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.draggable = false;
        square.classList.add('squares');

        square.addEventListener('mouseover', fill);

        squareContainer.appendChild(square);
    }
}

// function to add color to a square
function fill(e) {
    if(e.type === 'mouseover' && !mouseDown) return;
    e.target.style.backgroundColor = 'black';
}

// now we need a button to clear the grid
clearbtn.addEventListener('click', reloadGrid);

slider.onmousemove = (e) => updateSizeValue(e.target.value);
slider.onchange = (e) => updateGrid(e.target.value);

window.onload = () => {
    createGrid(DEFAULT_SIZE);
}