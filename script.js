// create divs using js

const squareContainer = document.querySelector('#squareContainer');

for(let  i = 0; i < 16*16; i++) {
    // create div
    const square = document.createElement('div');
    console.log(square);

    // attribute class
    square.className = 'squares';
    console.log(square.className);

    squareContainer.appendChild(square);
}