// create divs using js

const squareContainer = document.querySelector('#squareContainer');
// const squares = document.querySelectorAll('.squares');


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