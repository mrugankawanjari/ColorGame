var numberSquares = 6;
var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyBtn");
var hardButton = document.querySelector("#hardBtn");



easyButton.addEventListener("click",function(){
    hardButton.classList.remove("selected");
    easyButton.classList.add("selected");
    numberSquares=3;
    colors = generateRandomColors(numberSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++)
    {
        if(colors[i]){
            squares[i].style.background=colors[i];
        }
        else{
            squares[i].style.display ="none";
        }
    }
})


hardButton.addEventListener("click",function(){
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    numberSquares=6;
    colors = generateRandomColors(numberSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++)
    {
            squares[i].style.background=colors[i];
            squares[i].style.display ="block";   
    }
})


resetButton.addEventListener("click",function(){
    //generate all new colors
    colors = generateRandomColors(numberSquares);
    //pick a new random color from array\
    pickedColor= pickColor();
    //change color display to match picked color
    colorDisplay.textContent=pickedColor;
    //change colors of squares
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.background=colors[i];
    }
    h1.style.background = "#232323";
})



colorDisplay.textContent = pickedColor;

for(var i=0;i<squares.length;i++)
{
    //add initial colors to squares
    squares[i].style.background = colors[i];

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