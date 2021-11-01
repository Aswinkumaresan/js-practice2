/*
1. Trigger the eventwhen the user click on the button
2. Write the function to generate-color
3. Apply to the background color
*/

//1. Trigger the eventwhen the user click on the button
let myButton = document.getElementById('color-generator');
console.log(document);
console.log('document.getElementById');
console.log('myButton');

myButton.addEventListener('click',function(){
    let randomColor = generateRandomColor(),
         bodytag = document.getElementById('body-tag');
         h1Tag = document.getElementById('color');
    
         bodytag.style.backgroundColor = generateRandomColor();
         h1Tag.innerHtml = randomColor ;
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function.generateRandomColor(){
    let red,green,blue;
    
    head='rgb(',
    seperator='',
    tail= ')';
    
    red= getRandomInt(0,255);
    green= getRandomInt(0,255);
    blue= getRandomInt(0,255);

    console.log(red,green,blue);
    style = head + red + seperator + green + seperator + blue + tail; 
    return style;

}