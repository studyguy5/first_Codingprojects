function init(){
    init1();                    //hier wird die init1 als erstes aufgerufen, daher auch als erstes in der Console
    console.log(filterArray(), filterArray2())
}

function getNum(){
    return 2;
}

//man kann aber auch eine Variable einfügen

function init1(){               //die function soll den erstellten Container numm in der Console anzeigen
    console.log(numm(), numm1())         //der Container numm wird hier wie eine function angegeben, obwohl die function erst innerhalb des Containers kommt
    console.log(numm1())
}

let numm = function getNum(){     //die getNum() könnte man hier noch wecklassen
    return 245;
}

let numm1 = () => {     //das getNum und das function könnte man hier noch wecklassen,(Vergleich vorheriges Beispiel) 
    return 88888;       //die () müssen bleiben und dafür muss ein => nach den Klammern eingefügt werden
}                       // das ganze von zeile 21 bis 23 nennt sich Arrow Function







let numObj = {
    numm1 : () => {return 88788}     // man die function ohne das let als key: value paar in ein Objekt geben

}


function filterArray(){
    let testArray = [5,6,78,11,6];
    return testArray.filter(isBiggerTen.bind())  // mit bind() kann sich ein objekt eine Methode von einem anderen objekt ausleihen
}

function filterArray2(){
    let testArray = [5,6,78,11,6];
    return testArray.filter((element, index, array) => {return element > 10} )   
}   //hier wird anstelle von isBiggerTen.bind() eine Arrow function benutzt, Grundsyntax: () => {} hier hat man die geschwungenen Klammern weggelassen
    // benutzt man die geschwungenen Klammern, muss auch das return rein, sonst funktioniert es nicht
    // man könnte in diesem Fall, da nur element, auch die runden Klammern weglassen

    
    numbers = [5, 6, 7, 4, 2, 8];
    function isBiggerTen(){
    
    

    numbers.findIndex((numbers, index, array)=> {return numbers > 5})}//so sieht die Synthax aus

    console.log(isBiggerTen());


    //Array.filter() Beispiel

        const words = ["spray", "elite", "exuberant", "destruction", "present"]

        const resullt = words.filter(word => word.length > 6); //1*alles nach dem => muss eine Booleonwert zurückgeben
                                                            //1* es ist also wie eine If-Bedingung
        let result = [];                                    // "word" vor dem => steht für ein einzelnes Element im Array
        for (let index = 0; index < words.length; index++) {
            let word = words[index] // diese Zeile wäre das erste word nach filter() oben
            if(word.length > 6){
                result.push(word)
            }
        }

        //die funktion filter() iteriert durch ein Array wie eine for-schleife
        //ab let result = [] betrachtet bis zeile 72 ist die lange schreibweise aus zeile 64 oben

//Beispiele folgen:

//findIndex() anschauen!!