const quizForm = document.getElementById("quizForm");
const btn = document.getElementById("btn");
const outputEl = document.getElementById("output");

const answers = ["Equilateral triangle", "90", "one right angle", "12, 16, 20", "Equilateral triangle", "0", "a + b + c", "45", "None", "85"]
function checkAnswers(e){
    e.preventDefault()
    window.scrollTo(0,0)
    let formResults = new FormData(quizForm);
    let score = 0;
    for (var p of formResults.entries()){
        console.log(p[1] === answers[Number(p[0]) - 1])
        if(p[1] === answers[Number(p[0]) - 1]){
            score++
        }
    }
    outputEl.innerText = "Your score is "  + score
    if(score > 7){
        outputEl.style.backgroundColor = "green"
    }else{
        outputEl.style.backgroundColor = "red"
    }
}

btn.addEventListener("click", checkAnswers)