

function calculateRectangleArea() {
    //   get length of the rectangle
    const lengthInput = document.getElementById('rectangle-length');
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText)
    console.log(length);



    // get width of the rectangle 
    const widthInput = document.getElementById('rectangle-width');
    const widthText = widthInput.value;
    const width = parseFloat(widthText);
    console.log(width);


    //  calculate rectangle area 
    const area = length * width;
    console.log('area of rectangle : ', area);

    // display rectangle area

    const RectangleAreaSpan = document.getElementById('rectangle-area');
    RectangleAreaSpan.innerText = area;
}


/* number 3 card start */

// function calculateParallelologramArea() {
//     // const baseInput = document.getElementById('paralalo-base');
//     // const baseText = baseInput.value;
//     // const base = parseFloat(baseText);
//     // console.log(base);

//     const base = getParalalogramBase();
//     console.log(base);


// }

// function getParalalogramBase() {
//     const baseInput = document.getElementById('paralalo-base');
//     const baseText = baseInput.value;
//     const base = parseFloat(baseText);
//     return base;

// }
function calculateParallelologramArea() {

    const base = getInputValueById('parallogram')

}

function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    console.log(inputField);
}