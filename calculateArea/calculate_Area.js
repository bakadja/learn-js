let length;
let width;


/**
 * The parseFloat() function converts the string value retrieved from the input field to a floating-point number. 
 * This conversion ensures that the input, typically text entered by the user, is treated as a number 
 * and can be used in mathematical operations.
 */

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    let area = length * width;

    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}