// create divs using js
const squareContainer = document.querySelector('#squareContainer');
const slider = document.querySelector('#slider');
const sizeValue = document.querySelector('#sliderSize');

// use the default value for the grid by calling a function with innerHTML
const DEFAULT_SIZE = 16;

let currentSize = DEFAULT_SIZE;


// get slider value and change slider value

// function updateSizeValue(value) {
//     sizeValue.innerHTML = `${value} x ${value}`
//   }

// slider.onmousemove = (e) => updateSizeValue(e.target.value);



// slider.oninput = function () {

//     sizeValue.innerHTML = `${this.value} x ${this.value}`;
//     console.log(this.value);

//     currentSize = this.value;
//     console.log(currentSize);

//     // squareContainer.style.gridTemplateColumns = `repeat(${currentSize}, 1fr)`;
//     // squareContainer.style.gridTemplateRows = `repeat(${currentSize}, 1fr)`;
// }

// now onto changing the grid according to the slider

for(let  i = 0; i < currentSize*currentSize; i++) {
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
