
// 1)Color_picker 

// 1. Trigger the eventwhen the user click on the button
// 2. Write the function to generate-color
// 3. Apply to the background color


//1. Trigger the eventwhen the user click on the button
let myButton = document.getElementById('color-generator');
// console.log(document);
// console.log(document.getElementById);
// console.log(myButton);

myButton.addEventListener('click',function(){
    // console.log(generateRandomColor());
    let  randomColor = generateRandomColor(),
         bodyTag = document.getElementById('body-tag'),
        h1Tag = document.getElementById('color');


    bodyTag.style.backgroundColor = randomColor;
    h1Tag.innerHTML = randomColor;

});


// function getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
// }

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//2. Write the function to generate-color 

function generateRandomColor() {

    let red,green,blue, style;
    red = getRandomInt(0,255);
    green = getRandomInt(0,255);
    blue = getRandomInt(0,255);
    //      

    style = 'rgb(' + red + ' ' + green + ' ' + blue + ')';
    return (style);


    //rgb(0-255, 0-255, 0-255)
    
}