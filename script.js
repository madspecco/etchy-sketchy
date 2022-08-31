// create divs using js
const squareContainer = document.querySelector('#squareContainer');
const slider = document.querySelector('#slider');
const sizeValue = document.querySelector('#sliderSize');

// use the default value for the grid by calling a function with innerHTML
const DEFAULT_SIZE = 16;

let currentSize = DEFAULT_SIZE;

// get slider value and change slider value

slider.oninput = function () {

    sizeValue.innerHTML = `${this.value} x ${this.value}`;
    console.log(this.value);
}

// now onto changing the grid according to the slider


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