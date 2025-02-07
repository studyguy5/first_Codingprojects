
 
    let firstName = "Max";
    let lastName = "Mustermann";

    console.log(fullName(firstName, lastName));    

function fullName(firstName, lastName){
    let value = (firstName + " " + lastName);
    
    
    return value;
    
}


let myWord = "bAnanE";


console.log(capitalizeLetters(myWord));

function capitalizeLetters(myWord){
    let outcome = myWord.toUpperCase();  
    
    return outcome;
}


let myWord1 = "bAnanE";


console.log(countCharacters(myWord1));

function countCharacters(myWord1){
    let number = myWord1.length;

    return number;
}


let mycurrency = 0.5;

console.log(formatToCurrency(mycurrency));

function formatToCurrency(mycurrency){
    let number1 = mycurrency
    .toFixed(2)
    .replace(".", ",")
    .concat("€");
    
    return number1;
}

