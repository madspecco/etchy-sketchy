// create divs using js
const squareContainer = document.querySelector('#squareContainer');
const slider = document.querySelector('#slider');
const sizeValue = document.querySelector('#sliderSize');
const colorPicker = document.querySelector('#colorPicker');
const colorbtn = document.querySelector('#colorbtn');
const rainbowbtn = document.querySelector('#rainbowbtn');
const erasebtn = document.querySelector('#erasebtn');
const clearbtn = document.querySelector('#clearbtn');


const DEFAULT_COLOR = '#262626';
const DEFAULT_MODE = 'color';
const DEFAULT_SIZE = 16;

let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_SIZE;

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

// Made the container undraggable since it won't work in HTML
// So the user can sketch cursively
squareContainer.addEventListener('dragstart', (e) => {
    e.preventDefault();
});

squareContainer.addEventListener('drop', (e) => {
    e.preventDefault();
});

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
        square.classList.add('squares');

        square.addEventListener('mouseover', fill);
        square.addEventListener('mousedown', fill);

        squareContainer.appendChild(square);
    }
}

// function to add color to a square
function fill(e) {
    if(e.type === 'mouseover' && !mouseDown) return;
    if(currentMode === 'rainbow') {
        const R = Math.floor(Math.random() * 256);
        const G = Math.floor(Math.random() * 256);
        const B = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
    }
    else if(currentMode === 'color') {
        e.target.style.backgroundColor = DEFAULT_COLOR;
    }

    else if(currentMode === 'erase') {
        e.target.style.backgroundColor = 'white';
    }

}

// now we need a button to clear the grid
clearbtn.addEventListener('click', reloadGrid);

slider.onmousemove = (e) => updateSizeValue(e.target.value);
slider.onchange = (e) => updateGrid(e.target.value);

colorbtn.addEventListener('click', () => {
    currentMode = 'color';
})

rainbowbtn.addEventListener('click', () => {
    currentMode = 'rainbow';
})

erasebtn.addEventListener('click', () => {
    currentMode = 'erase';
})

window.onload = () => {
    createGrid(DEFAULT_SIZE);
}