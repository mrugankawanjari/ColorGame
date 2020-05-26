var numberSquares = 6;
var colors =[];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


//run init function
init();

//init function
function init(){
    //run modeBUtton event listener function
    setUpModeButtons();
    //run function squares event handlers
    setUpSquares();
    //run reset function
    reset();
}

//modeButton event listener function
function setUpModeButtons(){
    for(var i=0;i<modeButtons.length;i++)
    {
        modeButtons[i].addEventListener("click",function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent==="Easy"? numberSquares = 3: numberSquares = 6;
        // if(this.textContent==="Easy"){
        //     numberSquares=3;}
        // else{
        //     numberSquares=6;}
        reset();
        });
    }
}


//function squares event handlers
function setUpSquares(){
    for(var i=0;i<squares.length;i++)
    {
        //add click listeners to squares
        squares[i].addEventListener("click", function(){
        //grab color of clicked square
        var clickedColor = this.style.background;
            //compare color of pickedColor
            if(clickedColor === pickedColor)
            {
                messageDisplay.textContent="Correct!";
                resetButton.textContent="Play Again?";
                changeColors(clickedColor);
                h1.style.background=clickedColor;
            }
            else{
                this.style.background = "#232323"
                messageDisplay.textContent="Try Again!!"
            }
        });
    }
}

//reset colors function
function reset(){
    colors = generateRandomColors(numberSquares);
    //pick a new random color from array
    pickedColor= pickColor();
    //change color display to match picked color
    colorDisplay.textContent=pickedColor;
    resetButton.textContent="New Colors";
    messageDisplay.textContent="";
    //change colors of squares
    for(var i=0;i<squares.length;i++)
    {
        if(colors[i]){
            squares[i].style.display="block";
            squares[i].style.background=colors[i];
        }else{
            squares[i].style.display ="none";
        }
    }
    h1.style.background = "steelblue";
}


resetButton.addEventListener("click",function(){
    reset();
})




// easyButton.addEventListener("click",function(){
//     hardButton.classList.remove("selected");
//     easyButton.classList.add("selected");
//     numberSquares=3;
//     colors = generateRandomColors(numberSquares);
//     pickedColor=pickColor();
//     colorDisplay.textContent=pickedColor;
//     for(var i=0;i<squares.length;i++)
//     {
//         if(colors[i]){
//             squares[i].style.background=colors[i];
//         }
//         else{
//             squares[i].style.display ="none";
//         }
//     }
// })


// hardButton.addEventListener("click",function(){
//     hardButton.classList.add("selected");
//     easyButton.classList.remove("selected");
//     numberSquares=6;
//     colors = generateRandomColors(numberSquares);
//     pickedColor=pickColor();
//     colorDisplay.textContent=pickedColor;
//     for(var i=0;i<squares.length;i++)
//     {
//             squares[i].style.background=colors[i];
//             squares[i].style.display ="block";   
//     }
// })



function changeColors(color){
    //loop through all squares
    for(var i=0;i<squares.length;i++){
    //change each color to match given color
        squares[i].style.background=color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr =[];
    //add num random colors to an array
    for(var i=0; i<num;i++)
    {
        //get random color and push into array
        arr.push(randomColor());        
    }
    //return that array
    return arr;
}

function randomColor(){
    //pick red from 0 to 255
    var r = Math.floor(Math.random() * 256)
    //pick green from 0 to 255
    var g = Math.floor(Math.random() * 256)
    //pick blue from 0 to 255
    var b = Math.floor(Math.random() * 256)
    //"rgb(r, g, b)"
    return "rgb(" + r + ", " + g + ", " + b + ")";
}