// const button = document.getElementById("btn");
// const body = document.body;


// const colors = ['red','green','blue','purple','orange','yellow',]
// button.addEventListener('click',changeBackground);
//  function changeBackground(){

//     const colorsIndex = Math.floor(Math.random()*colors.length)
//     body.style.backgroundColor= colors[colorsIndex];
// }



var button = document.getElementById("btn");
var body = document.body;


var colors = ['yellow','black','pink','blue','green'];
button.addEventListener('click',changeBackground);
function changeBackground(){

    var colorsIndex = Math.floor(Math.random()*colors.length);
    body.style.backgroundColor = colors[colorsIndex];
}