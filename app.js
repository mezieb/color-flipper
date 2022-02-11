/*
Key concepts covered:

arrays
document.getElementById()
document.querySelector()
addEventListener()
document.body.style.backgroundColor
Math.floor()
Math.random()
array.length
 */

const colors = [ "green", "red", "rgba(133,122,200)", "#f15025" ];
// @ts-ignore
const btn = document.getElementById( "btn" );
// @ts-ignore
const color = document.querySelector( ".color" );

// @ts-ignore
btn.addEventListener( "click", function () {
    // get random number between 0 - 3
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[ randomNumber ];
    // @ts-ignore
    color.textContent = colors[ randomNumber ];

} );

function getRandomNumber() {
    return Math.floor( Math.random() * colors.length );
}