let defaultColor = "white";
let currentColor = "black";

document.addEventListener("DOMContentLoaded", function() {
    const grid = document.getElementById("grid");
    console.log(grid);

    createSquares(16);

    const reset = document.querySelector("#reset");
    reset.addEventListener("click", newCanvas);
});

const newCanvas = function(){
    let grid = document.getElementById("grid");

    do{
        var selection = parseInt(window.prompt("How many squares long?", ""), 10);
    }while(isNaN(selection) || selection > 100 || selection < 1);

    numSquares = selection;

    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    createSquares(numSquares);
}

const createSquares = function(numSquares) {
    for(let i = 0; i < numSquares; i++){
        for(let j = 0; j < numSquares; j++){
            const div = document.createElement('div');
            div.classList.add('square');
            div.style.backgroundColor = defaultColor;
            div.style.height =`${960/numSquares}px`;
            div.style.width = `${960/numSquares}px`;;
            grid.appendChild(div);
            console.log("square created");
            div.addEventListener("mouseover", () => {
                div.style.backgroundColor = "#"+Math.floor(Math.random()*16777215).toString(16);
                console.log("color changed")
            });
        }
    }
}
