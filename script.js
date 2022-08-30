// create divs using js
const squareContainer = document.querySelector('#squareContainer');
const sizeSlider = document.getElementById('#slider');


// use the default value for the grid by calling a function with innerHTML
const DEFAULT_SIZE = 16;

// setting defautl size;
let currentSize = DEFAULT_SIZE;

function setSize(size) {
    currentSize = size;
}


console.log(currentSize);

for(let  i = 0; i < 32*32; i++) {
    // create div
    const square = document.createElement('div');

    // attribute class
    square.className = 'squares';

    squareContainer.appendChild(square);

    square.addEventListener('click', function () {
        square.style.background = 'black';
    });

    square.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        square.style.background = 'blue';
    });
}