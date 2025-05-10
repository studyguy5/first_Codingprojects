function init() {
    renderQuestionsLength();
    renderCurrentQuestionInfo();
    renderQuestions();

};

//shows the max-amount of questions
function renderQuestionsLength() {
    let allquestionsamount = document.getElementById('arrayLength')
    let amountquestions = document.getElementById('amountOfquestions')
    amountquestions.innerHTML = questions.length;
    allquestionsamount.innerHTML = questions.length;
};

//shows the currently visible question
function renderCurrentQuestionInfo() {
    let currentIndex = document.getElementById('currentQuestion')
    currentIndex.innerHTML = currentQuestion + 1;
};


let audio_success = new Audio("./sounds/successful.mp3");
let audio_fail = new Audio("./sounds/fail.mp3");

let currentQuestion = 0;
let numberOfQuestion = questions[currentQuestion];



function renderQuestions() {            //if-statement to check if the last question has arrived
    if ((currentQuestion + 1) > 8) {
        showEndscreen();
    } else {
        visibleProgress();      // this is only for the progress bar, which does visible getting bigger and shows the progress
        let numberOfQuestion = questions[currentQuestion];
        let showQuestionQ = document.getElementById('card-bodyQ').innerHTML = numberOfQuestion["question"];
        let showAnswerA = document.getElementById('card-bodyA').innerHTML = numberOfQuestion["answer 1"];
        let showAnswerB = document.getElementById('card-bodyB').innerHTML = numberOfQuestion["answer 2"];
        let showAnswerC = document.getElementById('card-bodyC').innerHTML = numberOfQuestion["answer 3"];
        let showAnswerD = document.getElementById('card-bodyD').innerHTML = numberOfQuestion["answer 4"];
    }
};


function showEndscreen(){
    document.getElementById('endScreenBody').style = "";
        document.getElementById('questionBody').style = "display:none";
        document.getElementById('quizImage').src = "./img/cup.png";
}


function visibleProgress(){
    let percent = Math.round((currentQuestion + 1) / questions.length * 100);   // amount will be rounded and devided by hundred to show itself in percent mode
        document.getElementById('progress-bar').innerHTML = `${percent} %`      //here we show the progress in persent style
        document.getElementById('progress-bar').style = `width: ${percent}%;`;    // here we change the width from the bar to show it in a strong visible way
}


let trueAnswers = 0;        //here is set a counter, starting at 0, and in the selectAnswer function "trueAnswer++" counts +1 for ever right Answer
let rightAnswer = `answer_${numberOfQuestion['right_answer']}`; // here we add the number of the answer on the right spot
// and paste it to the string to get the id correct - otherwise we would've got only the number alone, but the word answer is included



function selectAnswer(element) {
    let selectedAnswer = element.slice(-1);     // here the slice operator cuts the last caracter and present it as return
    let numberOfQuestion = questions[currentQuestion];      //here is the index of the questions saved, which counts and is used in render questions -else statement
    let rightAnswer = `answer_${numberOfQuestion['right_answer']}`; //this line of code does paste the return of slice and put it after the underscore to get all the right answers id
    if (selectedAnswer == numberOfQuestion['right_answer']) {
        rightAnswerFeedback(rightAnswer); // the function has to know the return of rightAnswer
        trueAnswers++;  //counts +1
        document.getElementById('rightQuestions').innerHTML = trueAnswers;  //shows the updated number of right answers
        
        console.log('arbeitet')
    } else {
        falseAnswerFeedback(element,rightAnswer);   //here the function needs the element for wrong answers and also the rightAnswers
        //selectAnswer().disabled; -> auf diese Weise kann ich einen onclick disablen!!
    }
    document.getElementById('next-button').disabled = false;     //here we enable the button(with id "next-button") after click any answer
};

function rightAnswerFeedback(rightAnswer){
        document.getElementById(rightAnswer).classList.add("bg-success")
        audio_success.play();   //plays the downloaded sound
};

function falseAnswerFeedback(element,rightAnswer){
        document.getElementById(element).classList.add("bg-danger")
        document.getElementById(rightAnswer).classList.add("bg-success")
        audio_fail.play();
};



function showNextQuestion() {
    currentQuestion++       // after the button is clicked, it should count +1 in current Question
    renderQuestions();      // the question has to be rendered, in order we can see the next question
    renderCurrentQuestionInfo();        // we also show it down on the sentence "2 from 8 Questions" with this function
    document.getElementById('next-button').disabled = true; //we disable the button after answer a question, so in the new question
    // the button works only after an answer has been clicked on
    document.getElementById('answer_1').classList.remove('bg-danger');  // here we set back all green and red colors from line 102 to line 112 
    document.getElementById('answer_1').classList.remove('bg-success');

    document.getElementById('answer_2').classList.remove('bg-danger');
    document.getElementById('answer_2').classList.remove('bg-success');

    document.getElementById('answer_3').classList.remove('bg-danger');
    document.getElementById('answer_3').classList.remove('bg-success');

    document.getElementById('answer_4').classList.remove('bg-danger');
    document.getElementById('answer_4').classList.remove('bg-success');

    

};


function restartGame() {
    document.getElementById('quizImage').src = "./img/quizImage_one.jpg";
    document.getElementById('questionBody').style = "display:''"
    document.getElementById('endScreenBody').style = "display:none"
    currentQuestion = 0;
    trueAnswers = 0;
    init();
}       // in this function: line 120 -> we show the quizimage angin
                            // line 121 -> we delete display:none; from questionBody to show it again
                            // line 122 -> we but display:none; at endscreen to hide it again
                            // then we set currentQuestion back to 0 to start from question 0 (1)
                            // we also set trueAnswers back to 0, so it is able to count from question one again
                            // and finaly we execute init(); at the start this is the first function to execute