const angleInputs = document.getElementsByClassName("angle-input");
const btn = document.getElementById("btn");
const outputEl = document.getElementById("output");

function calculateSumOfAngles(angle1, angle2, angle3){
    return angle1 + angle2 + angle3;
}

function isTriangle(){
    let sumOfAngles = calculateSumOfAngles(Number(angleInputs[0].value), Number(angleInputs[1].value), Number(angleInputs[2].value));
    if(sumOfAngles ===  180){
        outputEl.innerText = "Yay, the angles form a triangle!"
    }else{
        outputEl.innerText = "Oh Oh! The angle doesn't form a triangle"
    }
}

btn.addEventListener('click', isTriangle);