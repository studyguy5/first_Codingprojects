
let testarray = ["Anton", "Berta", "Cecar", "Donald", "Katrin", "Ludwig"];

let testletter = [1, 2, 3, 4, 5, 6, 8, 45];

function joinArray(){
    
};





console.log(testnumber = testletter.slice(2, 7));

console.log(testnumber.join("-"));


function createforloop(){
    let contentRef = document.getElementById("testy")
    contentRef.innerHTML="";
    for (let init = 0; init < 6; init+= 1) {
        contentRef.innerHTML += `<p>${testarray[init]} </p>`
        
    }
}


let printbox = [1, 2, 3, 4, 5, 6, 7, 8, 9];                     // Array


function isPrime(){                                             // Funktion


    for (let index = 0; index < printbox.length; index++) {     //For-Schleife Nr.1
    
        let number= printbox[index];
        let isPrime = true;
        
    if (number <= 1){                                           // If-Bedingung Nr.1
        console.log(number + " ist keine Primzahl");
        continue;}                                              //Continue = bitte fortsetzen
        
          for (divisor = 2; divisor <=Math.sqrt(number); divisor++) {         //For-Schleife Nr.2
          if (number % divisor === 0) {                                       // If-Bedingung Nr.2
          isPrime = false;
          break;                                                       // break = Prüfung stoppen
          }
    }
    
      if (isPrime) {                                                  // If-Bedinung Nr.3
        console.log(number + " ist eine Primzahl")
      }else{
        console.log(number + " ist keine Primzahl")
      }
    
    }                                                           // Ende der Forschleife Nr.1
  }
    
    isPrime();                                                  // Funktionsaufruf
                                                // damit es in der Konsole angezeigt wird

    
                                               
    function changehtml(){
      
      let reflist = document.getElementsByClassName('red_box');   //Vernknüpfung in reflist speicher
      
      for (let index = 0; index < reflist.length; index++) {
        let singleref = reflist[index];           //Index Verknüpfung in neuem Container singelref speichern

        if (singleref.classList.contains("green_fill" && "red_box")) {       //Abfrage ob ein <div> die Klasse green_fill beinhaltet
         singleref.innerHTML = index + '<p>kleine Gans</p>';              //mittels Javascript das Html ändern
        
        }
        
      
    }

  }  

  changehtml();


    let example = [1, 2, 3, 4, 5, 6]
 
  function whilestatement(){        // while schleife  "i = 0;" -> in der Regel außerhalb der Schleife
   let i = 0;
    while (i < 5) {
      
      console.log("while " + i)
      i++;                          // "i++" -> gehört unter console.log(); sonst zählt es ab 1
    }




    for (let index = 0; index < 5; index++) {     //for- schleife
      console.log("aha " + index);
        
    }
    index = 0;
    example.forEach(element => {            // ForEach-Schleife ->> beinhaltet eine Arrow-Funktion (ab Element)
      console.log(index++, element + " Gösser");  //benutztes Array = let example - über der Schleife i = 0; sonst funktioniert es nicht!!
    });                     // index++ eingebaut mit"," - da sonst index und element addiert wird
                            //test: ersetzt den Beistrich mit einem "+" - dann wird es addiert



  }

  whilestatement();