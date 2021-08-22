const sideInputs = document.getElementsByClassName("side-inputs")
const outputEl = document.getElementById("output")
const btn = document.getElementById("btn")

function caculateSumOfSquares(side1, side2){
    return side1*side1 + side2*side2
}

function calculateHypotenuse(){
    let sumOfSquares = caculateSumOfSquares(Number(sideInputs[0].value), Number(sideInputs[1].value));
    let hypotenuse = Math.sqrt(sumOfSquares);
    outputEl.innerHTML = "The length of hypotenuse is " + hypotenuse;
}

btn.addEventListener("click", calculateHypotenuse)