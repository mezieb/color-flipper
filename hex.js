const hex = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F" ];

// @ts-ignore
const btn = document.getElementById( "btn" );
// @ts-ignore
const color = document.querySelector( ".color" );

// @ts-ignore
btn.addEventListener( "click", function () {
    let hexColor = "#";
    for ( let i = 0; i < 6; i++ ) {
        hexColor += hex[ getRandomNumber() ];
    }
    // @ts-ignore
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
} );

function getRandomNumber() {
    return Math.floor( Math.random() * hex.length );
}