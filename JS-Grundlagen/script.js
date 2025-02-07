let randomTitles = [
    "Das Geheimnis des Waldes",
    "Die verlorene Welt",
    "Der Kristallschädel",
    "Der Fluch der Azteken",
    "Im Bann des Dschungels",
    
];


let randomTitlessecond = [
    "Die Spur des Pharaos",
    "Die verbotene Insel",
    "Der Schatz der Tempelritter",
    "Das Rätsel der Pyramiden",
    "Die Jagd nach dem goldenen Löwen"
]


let randomDescriptions = [
    "Eine spannende Geschichte über Mut und Abenteuer",
    "Ein müysteriöser Fund stellt alles auf den Kopt",
    "Abenteuer stürzen sich in ein gefährliches Abenteuer",
    "Ein Schatz, der alls verändern könnte, wird gesucht.",
    
];


let randomDescriptionssecond = [
    "In einer fernen Zeit beginnt ein epischer Kampf.",
    "Geheimnisse aus vergangenen Zeiten kommen ans Licht.",
    "Eine Reise durch unbekannte Gefahren und Rätsel.",
    "Legenden und Wahrheiten vermischen sich zu einem Mythos.",
    "Die Welt hält den Atem an, während die Suche beginnt.",
    "Helden stehen auf und stellen sich dem Unbekannten."]


/*function render(){
    let usediv = document.getElementById("content");                // template-function bestehend aus dem <div> dem <h2> und dem <p> tag
    for (let index = 0; index < randomTitles.length; index++) {        //<div>,<h2> und <p> tag sind template-strings (template-Literals) und die variablen sind "${..[].}" 
        usediv.innerHTML += `<div class="single_element">               
                                    <h2>
                                        ${randomTitles[index]}
                                    </h2>

                                    <p>
                                        ${randomDescriptions[index]}
                                    </p>
        
                                    </div>`  }
}*/
// 1--> ich speichere die ID verknüpfung in "usediv"
// 2--> Verknüpfe die For-Schleife mit dem ersten Array "randomTitles"
// 3--> greife mit "innerHTML" auf auf HTML & CSS zu und verwende eine template-function
// 4--> template-function bestehend aus template-literals(strings) and string interpolation
// 5--> use back-ticks (``) deutsch: einfache Anführungszeichen nach Links gerichtet
// 6--> Zusatz: wenn beide Indexe (Indizes) gleich lang sind, kannst du den gleichen index für beide Arrays vwerden...Ergo 
// du brauchst nur eine For-Schleife



//Variante NUMMER ZWEI - wie man die Verknüpfung mit dem HTML und For-Schleife und den Zugriff auf
// das innerHTML von der template-function trennt, damit es übersichtlicher ist

function renderfilter(index){

    if (index == 1) {
        render(randomTitles, randomDescriptions);
    }

    if (index == 2) {
        render(randomTitlessecond, randomDescriptionssecond);
    }
}




function render(arrTitles, arrDescription){
    let usediv = document.getElementById("content");   
    usediv.innerHTML = "";             // template-function bestehend aus dem <div> dem <h2> und dem <p> tag
    for (let index = 0; index < arrTitles.length; index++) {        //<div>,<h2> und <p> tag sind template-strings (template-Literals) und die variablen sind "${..[].}" 
        usediv.innerHTML += getNoteshtml(index,arrTitles, arrDescription);

    }}


function getNoteshtml(index, arrTitles, arrDescription){            //hier die toggle funktion in der template funktion, damit das overlay beim klick in schwarze erscheint und bei erneutem klick wieder verschwindet
   return `<div onclick="toggleOverlay()"  class="single_element">               
                                    <h2>
                                        ${arrTitles[index]}
                                    </h2>

                                    <p>
                                        ${arrDescription[index]}
                                    </p>
        
                                    </div>`
};

getNoteshtml();

// für die Unterteilung in jeweils zwei Listen wurden folgende Schritte unternommen..
// 1 --> im HTML zwei button erstellt und onclick Function hinzugefügt
// 2 --> die Arrays auf zwei Listen aufgeteilt
// 3 --> auf den Button Name renderfilter wurde eine Function erstellt mit zwei If-Bedingungen
// wenn button 1 gedrückt wird, dann rendere von beiden Arrray Liste 1
// wenn button 2 gedrückt wird, rendere von beiden Arrays Liste 2
// weiters wurden in der template-function ein allgemeiner Platzhalter für die Arrays geschaffen "arrTitles", und "arrDescriptoin"
// die allgemeinen Platzhalter wurden der render und der getNoteshtml als Parameter übergeben
// in der For-Schleife wurde in der "solange" Bedingung auch der allgmeine Platzhalter übergeben.
// Parameter müssen der Funktion übergeben werden, da die Variablen nicht Global defniert wurden

// hier noch etwas üben: !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!ÜBEN - ÜBEN - ÜBEN - ÜBEN !!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!! ÜBEN - ÜBEN - ÜBEN - ÜBEN !!!!!!!!!!!!!!!!


function toggleOverlay(){                                   // hier die toggle funktion, 
let overlayRef = document.getElementById('overlay');        //dann die verbindung mit dem html(id="overlay") im neuen container overlayRef gespeichert
overlayRef.classList.toggle('d_none')                       //dann das gespeicherte mit toggle d_none verbinden um zu wechseln

};

toggleOverlay();                                            //hier die Funktion nochmal aufrufen