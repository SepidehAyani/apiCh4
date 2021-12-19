/*
button elemenet variables include all the 10 qustions
*/
var buttonEl = document.querySelector("#start-button");
var buttonfirstQuestionEl = document.querySelector("#first-q-b");
var buttonSecondQuestionEl = document.querySelector("second-q-b");
var buttonThirdQuestionEl = document.querySelector("third-q-b");
var buttonForthQuestion = document.querySelector("forth-q-b");
var buttonFifthQuestion = document.querySelector("fifth-q-b");
var buttonSixthQuestion = document.querySelector("sixed-q-b");
var buttonSeventhQuestion = document.querySelector("seventh-q-b");
var buttonEighthQuestion = document.querySelector("eighth-q-b");
var buttonNinthQuestion = document.querySelector("ninth-q-b");
var buttonTenthQuestion = document.querySelector("tenth-q-b");

/*
Start the 10 questions one at a time
*/
function firstQuestion(event) {
    event.preventDefault();
    document.getElementById('q-1').style.display = 'block';
}

// function secondQuestion(event){
//     event.preventDefault();
//     document.getElementById('q-1').style.display = 'none';
//     document.getElementById('q-2').style.display = 'block';
//     if (timer <= 0){
//         gameOver();
//         console.log(timer)
//     }
// }
// function thirdQuestion(event){
//     // event.preventDefault();
//     document.getElementById('q-2').style.display = 'none';
//     document.getElementById('q-3').style.display = 'block';
//     if (timer <= 0){
//         gameOver();
//         console.log(timer)
//     }
// }
// function forthQuestion(event){
//     event.preventDefault();
//     document.getElementById('q-3').style.display = 'none';
//     document.getElementById('q-4').style.display = 'block';
//     if (timer <= 0){
//         gameOver();
//         console.log(timer)
//     }
// }
// function fifthQuestion(event){
//     event.preventDefault();
//     document.getElementById('q-4').style.display = 'none';
//     document.getElementById('q-5').style.display = 'block';
//     if (timer <= 0){
//         gameOver();
//         console.log(timer)
//     }
// }
// function sixthQuestion(event){
//     event.preventDefault();
//     document.getElementById('q-5').style.display = 'none';
//     document.getElementById('q-6').style.display = 'block';
//     if (timer <= 0){
//         gameOver();
//         console.log(timer)
//     }
// }
// function seventhQuestion(event){
//     event.preventDefault();
//     document.getElementById('q-6').style.display = 'none';
//     document.getElementById('q-7').style.display = 'block';
//     if (timer <= 0){
//         gameOver();
//         console.log(timer)
//     }
// }
// function eigthtQuestion(event){
//     event.preventDefault();
//     document.getElementById('q-7').style.display = 'none';
//     document.getElementById('question-8').style.display = 'block';
// }
// function ninthQuestion(event){
//     event.preventDefault();
//     document.getElementById('q-8').style.display = 'none';
//     document.getElementById('q-9').style.display = 'block';
// }
// function tenthQuestion(event){
//     event.preventDefault();
//     document.getElementById('q-9').style.display = 'none';
//     document.getElementById('q-10').style.display = 'block';
// }


/*
Highescore function
*/
function highscore(){
    document.getElementById('q-1').style.display = 'none';
}

/*
Gameover function
*/
function gameOver() {
    document.getElementById('q-1').style.display = 'none';
}