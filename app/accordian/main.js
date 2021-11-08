//Create event listener for all buttons
let buttons = document.querySelectorAll('question-btn');
console.log(buttons);

//
// [
//     'btn1',
//     'btn2',
//     'btn3'

// // ]
// button1.forEach(function(button){
//     console.log(button);
// });
// for (let i = 0 ; i < 3; i++ ){
//     console.log(i,buttons[i]);
//     printMe(buttons[i]);

// }
function printMe(button){
    button.addEventListener('click', function(){
        console.log('hello. I am clicked');

    });
}

// printMe('hello');//It will execute Printme
//console.log(printMe);  //It will send printMe
//console.log(buttons.forEach);