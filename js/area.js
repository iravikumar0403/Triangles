const inputs = document.getElementsByClassName("inputs")
const outputEl = document.getElementById("output")
const btn = document.getElementById("btn")

function calculateArea(){
    let area = (Number(inputs[0].value)*Number(inputs[1].value))/2;
    outputEl.innerHTML = "The area of triangle is " + area;
}

btn.addEventListener("click", calculateArea)