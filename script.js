/*
button elemenet variables include all the 10 qustions
*/
var buttonEl = document.querySelector("#start-button");
var buttonfirstQuestionEl = document.querySelector("#first-q-b");
var buttonSecondQuestionEl = document.querySelector("#second-q-b");
var buttonThirdQuestionEl = document.querySelector("#third-q-b");
var buttonForthQuestion = document.querySelector("#forth-q-b");
var buttonFifthQuestion = document.querySelector("#fifth-q-b");
var buttonSixthQuestion = document.querySelector("#sixed-q-b");
var buttonSeventhQuestion = document.querySelector("#seventh-q-b");
var buttonEighthQuestion = document.querySelector("#eighth-q-b");
var buttonNinthQuestion = document.querySelector("#ninth-q-b");
var buttonTenthQuestion = document.querySelector("#tenth-q-b");

/*
Setting rest of the variables
*/
var score = 0;
var questionsLeft = 11;
var timer = 60;
var totalScore;
var pause = false;
var playerName;
var highScores = [];
var ul = document.getElementById("highscore-list-child");
var li = document.createElement("li");

var scoreEL = document.querySelector("#score-total");
var totalScoreEl = document.querySelector("#total-score");
var timerEl = document.querySelector("#time-left");
var endTimeEl = document.querySelector("#end-time");

var highScoreslinkEL = document.querySelector("#highscore-link");
var highScoreExitButtonEL = document.querySelector("#highScoreBackButton");
var highScoreClearButtonEL = document.querySelector("#highScoreClearButton");

var initalsButton = document.querySelector("#initals-button");
console.log(pause)

var gameOverButtonEl = document.querySelector("#gameover-button");

/*
Intro removing function
*/
function removeIntro() {
    document.getElementById('quiz-overview').style.display = 'none';
    document.getElementById('start-button').style.display = 'none';
}
/*
Input form function
*/function inputForm() {
    document.getElementById('initals-form').style.display = 'block';
}
/*
Set the highscore
*/
function clearHighScore() {
    ul.innerHTML = "";
}
/*
Highscore calculator
*/
function getInputFromForm() {
    var playerScore = document.getElementById("score-input").value;
    highScores.push(playerScore, totalScore);
    playerScore += " " + totalScore;
    console.log(highScores)
    var ul = document.getElementById("highscore-list-child");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(playerScore));
    ul.appendChild(li);
}

/*
Countdown function
*/
function stopCountdown() {
    clearInterval(countdown);
}

/*
Start the timer
*/
function countdown() {
    timer = 60;
    var timeDecay = setInterval(function () {
        if (timer > 0) {
            timerEl.textContent = timer;
            timer--;
            timerEl.textContent = timer + " seconds ";
        }
        else if (timer <= 0) {
            timerEl.textContent = "0 seconds";
            clearInterval(timeDecay)
        }
    }, 1000);
}

/*
Start the 10 questions one at a time
*/
function firstQuestion(event) {
    event.preventDefault();
    document.getElementById('q-1').style.display = 'block';
}

function secondQuestion(event) {
    event.preventDefault();
    document.getElementById('q-1').style.display = 'none';
    document.getElementById('q-2').style.display = 'block';
    if (timer <= 0) {
        gameOver();
        console.log(timer)
    }
}
function thirdQuestion(event) {
    document.getElementById('q-2').style.display = 'none';
    document.getElementById('q-3').style.display = 'block';
    if (timer <= 0) {
        gameOver();
        console.log(timer)
    }
}
function forthQuestion(event) {
    event.preventDefault();
    document.getElementById('q-3').style.display = 'none';
    document.getElementById('q-4').style.display = 'block';
    if (timer <= 0) {
        gameOver();
        console.log(timer)
    }
}
function fifthQuestion(event) {
    event.preventDefault();
    document.getElementById('q-4').style.display = 'none';
    document.getElementById('q-5').style.display = 'block';
    if (timer <= 0) {
        gameOver();
        console.log(timer)
    }
}
function sixthQuestion(event) {
    event.preventDefault();
    document.getElementById('q-5').style.display = 'none';
    document.getElementById('q-6').style.display = 'block';
    if (timer <= 0) {
        gameOver();
        console.log(timer)
    }
}
function seventhQuestion(event) {
    event.preventDefault();
    document.getElementById('q-6').style.display = 'none';
    document.getElementById('q-7').style.display = 'block';
    if (timer <= 0) {
        gameOver();
        console.log(timer)
    }
}
function eigthtQuestion(event) {
    event.preventDefault();
    document.getElementById('q-7').style.display = 'none';
    document.getElementById('q-8').style.display = 'block';
    if (timer <= 0) {
        gameOver();
        console.log(timer)
    }
}
function ninthQuestion(event) {
    event.preventDefault();
    document.getElementById('q-8').style.display = 'none';
    document.getElementById('q-9').style.display = 'block';
    if (timer <= 0) {
        gameOver();
        console.log(timer)
    }
}
function tenthQuestion(event) {
    event.preventDefault();
    document.getElementById('q-9').style.display = 'none';
    document.getElementById('q-10').style.display = 'block';
}

/*
Submitted answer
*/
function firstQAns() {
    if (document.getElementById('1-correct').checked) {
        document.getElementById('correct-answer').style.display = 'block';
        score = score + 10;
        return
    }
    else {
        document.getElementById('incorrect-answer').style.display = 'block';
        timer = timer - 10;
        return
    }
}

function secondQAns() {
    if (document.getElementById('2-correct').checked) {
        document.getElementById('correct-answer').style.display = 'block';
        document.getElementById('incorrect-answer').style.display = 'none';
        score = score + 10;
        return
    }
    else {
        document.getElementById('incorrect-answer').style.display = 'block';
        document.getElementById('correct-answer').style.display = 'none';
        timer = timer - 10;
        return
    }
}

function thirdQAns() {
    console.log(questionsLeft);
    if (document.getElementById('3-correct').checked) {
        document.getElementById('correct-answer').style.display = 'block';
        document.getElementById('incorrect-answer').style.display = 'none';
        score = score + 10;
        return
    }
    else {
        document.getElementById('incorrect-answer').style.display = 'block';
        document.getElementById('correct-answer').style.display = 'none';
        timer = timer - 10;
        return
    }
}

function forthQAns() {
    console.log(timer);
    console.log(questionsLeft);
    if (document.getElementById('4-correct').checked) {
        document.getElementById('correct-answer').style.display = 'block';
        document.getElementById('incorrect-answer').style.display = 'none';
        score = score + 10;
        return
    }
    else {
        document.getElementById('incorrect-answer').style.display = 'block';
        document.getElementById('correct-answer').style.display = 'none';
        timer = timer - 10;
        return
    }
}

function fifthQAns() {
    console.log(timer);
    console.log(questionsLeft);
    if (document.getElementById('5-correct').checked) {
        document.getElementById('correct-answer').style.display = 'block';
        document.getElementById('incorrect-answer').style.display = 'none';
        score = score + 10;
        return
    }
    else {
        document.getElementById('incorrect-answer').style.display = 'block';
        document.getElementById('correct-answer').style.display = 'none';
        timer = timer - 10;
        return
    }
}

function sixthQAns() {
    console.log(timer);
    console.log(questionsLeft);
    if (document.getElementById('6-correct').checked) {
        document.getElementById('correct-answer').style.display = 'block';
        document.getElementById('incorrect-answer').style.display = 'none';
        score = score + 10;
        return
    }
    else {
        document.getElementById('incorrect-answer').style.display = 'block';
        document.getElementById('correct-answer').style.display = 'none';
        timer = timer - 10;
        return
    }
}

function seventhQAns() {
    console.log(timer);
    console.log(questionsLeft);
    if (document.getElementById('7-correct').checked){
        document.getElementById('correct-answer').style.display = 'block';
        document.getElementById('incorrect-answer').style.display = 'none';
        score = score + 10;
        console.log(score);
        return
    }
    else {
        document.getElementById('incorrect-answer').style.display = 'block';
        document.getElementById('correct-answer').style.display = 'none';
        timer = timer - 10;
        return
    }
}

function eighthQAns() {
    console.log(timer);
    console.log(questionsLeft);
    if (document.getElementById('8-correct').checked){
        document.getElementById('correct-answer').style.display = 'block';
        document.getElementById('incorrect-answer').style.display = 'none';
        score = score + 10;
        console.log(score);
        return
    }
    else {
        document.getElementById('incorrect-answer').style.display = 'block';
        document.getElementById('correct-answer').style.display = 'none';
        timer = timer - 10;
        return
    }
}

function ninthQAns() {
    console.log(timer);
    console.log(questionsLeft);
    if (document.getElementById('9-correct').checked){
        document.getElementById('correct-answer').style.display = 'block';
        document.getElementById('incorrect-answer').style.display = 'none';
        score = score + 10;
        console.log(score);
        return
    }
    else {
        document.getElementById('incorrect-answer').style.display = 'block';
        document.getElementById('correct-answer').style.display = 'none';
        timer = timer - 10;
        return
    }
}

function tenthQAns() {
    questionsLeft = questionsLeft - 10;
    console.log(timer);
    if (document.getElementById('10-correct').checked){
        document.getElementById('correct-answer').style.display = 'block';
        document.getElementById('incorrect-answer').style.display = 'none';
        score = score + 10;
        console.log(score);
        return
    }
    else {
        document.getElementById('incorrect-answer').style.display = 'block';
        document.getElementById('correct-answer').style.display = 'none';
        timer = timer - 10;
        return
    }
}



// Score
function scoreTotal() {
    document.getElementById('gameOver').style.display = 'none';
    document.getElementById('gameover-button').style.display = 'none';
    document.getElementById('score-total').style.display = 'block';
    document.getElementById('initals-button').style.display = 'flex';
    document.getElementById('initals-button').style.width = 'fit-content'
    document.getElementById('incorrect-answer').style.display = 'none';
    document.getElementById('correct-answer').style.display = 'none';
    totalScore = timer + score;
    document.getElementById('time-left').style.display = 'none';
    document.getElementById('end-time').style.display = 'block';
    endTimeEl.textContent = timer;
    scoreEL.textContent = ("Score from correct answers " + score + " Score from time remaining " + timer + " Total score = " + totalScore + "   ");
    return
}

/* 
Storing Highscore function
*/
function storeHighscore() {
    timer = 0;
    score = 0;
    document.getElementById('end-time').style.display = 'none';
    document.getElementById('initals-form').style.display = 'none';
    document.getElementById('score-total').style.display = 'none';
    document.getElementById('initals-button').style.display = 'none';
    document.getElementById('time-left').style.display = 'block';
    document.getElementById('quiz-overview').style.display = 'block';
    document.getElementById('start-button').style.display = 'block';
    getInputFromForm();
    console.log(highScores)
}

/*
Highescore function
*/
function highscore() {
    timer = 60;
    document.getElementById('q-1').style.display = 'none';
    document.getElementById('q-2').style.display = 'none';
    document.getElementById('q-3').style.display = 'none';
    document.getElementById('q-4').style.display = 'none';
    document.getElementById('q-5').style.display = 'none';
    document.getElementById('q-6').style.display = 'none';
    document.getElementById('q-7').style.display = 'none';
    document.getElementById('q-8').style.display = 'none';
    document.getElementById('q-9').style.display = 'none';
    document.getElementById('q-10').style.display = 'none';
    document.getElementById('q-1').style.display = 'none';
    document.getElementById('time-left').style.display = 'none';
    document.getElementById('quiz-overview').style.display = 'none';
    document.getElementById('start-button').style.display = 'none';
    document.getElementById('incorrect-answer').style.display = 'none';
    document.getElementById('correct-answer').style.display = 'none';
    document.getElementById('highScore-list-container').style.display = 'block';
    document.getElementById('highscore-timer').style.display = 'block';
}

/*
Highscore exit function
*/
function highscoreExit() {
    document.getElementById('quiz-overview').style.display = 'block';
    document.getElementById('start-button').style.display = 'block';
    document.getElementById('highScore-list-container').style.display = 'none';
    document.getElementById('highscore-timer').style.display = 'none';
    document.getElementById('time-left').style.display = 'block';
}

/*
Gameover function
*/
function gameOver() {
    document.getElementById('q-1').style.display = 'none';
    document.getElementById('q-2').style.display = 'none';
    document.getElementById('q-3').style.display = 'none';
    document.getElementById('q-4').style.display = 'none';
    document.getElementById('q-5').style.display = 'none';
    document.getElementById('q-6').style.display = 'none';
    document.getElementById('q-7').style.display = 'none';
    document.getElementById('q-8').style.display = 'none';
    document.getElementById('q-9').style.display = 'none';
    document.getElementById('q-10').style.display = 'none';
    document.getElementById('gameOver').style.display = 'block';
    document.getElementById('gameover-button').style.display = 'block';
}

/* 
Start the quiz
*/
buttonEl.addEventListener("click", firstQuestion);
buttonEl.addEventListener("click", countdown);
buttonEl.addEventListener("click", removeIntro);

/*
Event Listener for each question
*/
buttonfirstQuestionEl.addEventListener("click", firstQAns);
buttonfirstQuestionEl.addEventListener("click", secondQuestion);

buttonSecondQuestionEl.addEventListener("click", secondQAns);
buttonSecondQuestionEl.addEventListener("click", thirdQuestion);

buttonThirdQuestionEl.addEventListener("click", thirdQAns);
buttonThirdQuestionEl.addEventListener("click", forthQuestion);

buttonForthQuestion.addEventListener("click", forthQAns);
buttonForthQuestion.addEventListener("click", fifthQuestion);

buttonFifthQuestion.addEventListener("click", fifthQAns);
buttonFifthQuestion.addEventListener("click", sixthQuestion);

buttonSixthQuestion.addEventListener("click", sixthQAns);
buttonSixthQuestion.addEventListener("click", seventhQuestion);

buttonSeventhQuestion.addEventListener("click", seventhQAns);
buttonSeventhQuestion.addEventListener("click", eigthtQuestion);

buttonEighthQuestion.addEventListener("click", eighthQAns);
buttonEighthQuestion.addEventListener("click", ninthQuestion);

buttonNinthQuestion.addEventListener("click", ninthQAns);
buttonNinthQuestion.addEventListener("click", tenthQuestion);

buttonTenthQuestion.addEventListener("click", tenthQAns);
buttonTenthQuestion.addEventListener("click", gameOver);

gameOverButtonEl.addEventListener("click", scoreTotal);
gameOverButtonEl.addEventListener("click", inputForm);

initalsButton.addEventListener("click", storeHighscore);

highScoreslinkEL.addEventListener("click", highScoresDiv);
highScoreExitButtonEL.addEventListener("click", highscoreExit);
highScoreClearButtonEL.addEventListener("click", clearHighScore);