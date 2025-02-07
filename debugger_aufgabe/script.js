let age = "18";




function init(){
    
    setLetterTwo();
    setLetterThree('B');
    setLetterFour();
    setLetterFive();
    setLetterSix();
    setLetterSeven();
}

function setLetter(id, letter){
    let refTag = document.getElementById(id);
    refTag.innerText = letter;
}

function setLetterTwo(){
    setLetter('second_letter','E');
    
}

function setLetterThree(){
    setLetter('third_letter','B');
}

function setLetterFour(){

    if(calculateSum(1, 3) == 4){
        setLetter('four_letter','U');
    }
}

function setLetterFive(){

    if("18" == 18){
        setLetter('five_letter','G');
        
    }
}

function setLetterSix(){

    if(buildHelloWorld() == "HELLO"){
        setLetter('six_letter','G');
    }
}

function setLetterSeven(){

    if(getNumber() >= 20){
        setLetter('seven_letter','E');
    }
}





function calculateSum(a, b) {
    let sum = a + b;
    return sum; 
}

function getNumber(){
    let startValue = 10;
    let additionValue = 20; //=30
    let x = 2;
    
    let step1 = parseInt(startValue) + additionValue; //=30
    let step2 = step1 * 2; //=30*2=60
    let step3 = step2 / x; //60/2=30
    
    return step3;
}

let str = "HELLO";
function buildHelloWorld() {
    
    
    

    return "HELLO"
}