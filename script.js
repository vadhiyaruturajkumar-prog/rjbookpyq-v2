const questions = [
    {
        question: "What does GPSC stand for?",
        options: ["Gujarat Public Service Commission", "General Public Safety Council", "Graduate Program for Civil", "Gujarat Police Selection Committee"],
        answer: 0
    },
    {
        question: "What is the full form of PYQ?",
        options: ["Previous Year Quotient", "Previous Year Questions", "Post Your Query", "Previous Year Quiz"],
        answer: 1
    }
];

let currentQuestion = 0;

function loadQuestion() {
    const container = document.getElementById("question-container");
    const q = questions[currentQuestion];
    let html = `<h2>${q.question}</h2>`;
    q.options.forEach((opt, idx) => {
        html += `<div><input type='radio' name='option' value='${idx}' id='opt${idx}'><label for='opt${idx}'> ${opt}</label></div>`;
    });
    container.innerHTML = html;
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
}

function checkAnswer() {
    const selected = document.querySelector("input[name='option']:checked");
    if (selected) {
        const ans = parseInt(selected.value);
        if (ans === questions[currentQuestion].answer) {
            alert("Correct Answer!");
        } else {
            alert("Wrong Answer!");
        }
    } else {
        alert("Please select an option.");
    }
}

window.onload = loadQuestion;