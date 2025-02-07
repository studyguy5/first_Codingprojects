function init(){                                                                    //init function wird beim öffnen der seite ausgeführt
    getFromLocalStorage();                                                           //get from Local storage  - damit holt man alle Key/value Paare aus dem Localen -Speicher
    renderNote();                                                                   //die Notes werden in das HTML gerendert
}

function recover(indextrashNotes){
    let arch = trashTitle.splice(indextrashNotes, 1)
    title.unshift(arch[0])

    let arch2 = trashNotes.splice(indextrashNotes, 1)
    notes.unshift(arch2[0])
    renderTrashNote();
    renderNote();
}

let title = ["Lebensmittel", "Acceciouares", "Mensch", "Gegenstand"];
let trashTitle = [];
let notes = ["Semmel", "Hut", "Kinder", "Kinderwagen"];
let trashNotes = [];




function saveData(){
    let titleSave = document.getElementById("titleinput");                           //verbindung mit dem Title Eingabefeld
    let textSave = document.getElementById('textinput');                            //verbindung mit dem Text Eingabefeld
    if(titleSave.value == ""){
        title.unshift("Beispieltitel");
    }else {
    title.unshift(titleSave.value);}                                                    //pusht den value von titleSave in das Array title rein
    
    if(textSave.value == ""){
        notes.unshift("Beispieltext");
        }else{
             notes.unshift(textSave.value);                                                     //pusht den value von textSave in das Array notes rein
        }
    saveToLocalStorage();                                                           // führt die Funktion aus, damit es unten zum Localen Speicher hinzugefügt wird
    renderNote();                                                                   //rendert die neuen Notizen
    titleSave.value = "";                                                           //leert das Feld
    textSave.value = "";                                                            //leert das Feld
}

function saveToLocalStorage(){
    localStorage.setItem("title",JSON.stringify(title));                            // fügt Werte in den localen Speicher und mit stringify wird es als Text formatiert
    localStorage.setItem("notes",JSON.stringify(notes));                             // dasselbe für die Werte aus dem Array notes
}

function getFromLocalStorage(){
    let titleSave = JSON.parse(localStorage.getItem('title'));                        // hier ist es umgekehrt - man holt Key/value Paare aus dem localen Speicher und formatiert sie wieder von Strings zu Objekten
    let notesSave = JSON.parse(localStorage.getItem('notes'));                         // dasselbe hier

    if(titleSave == null){                                                          // abfrage - wenn das Array title leer ist, wird nichts im neuen Container titleSave gespeichert, wenn etwas drin ist, dann schon
        title != titleSave;
    }else {title = titleSave}

    if(notesSave == null){
        notes != notesSave;
    }else {notes = notesSave}
}

function renderNote(){
    let noteRef = document.getElementById('notesdiv');                  //Verbingung herstellen
    noteRef.innerHTML = "";                                              //es soll ein leerer String sein (vordefinieren)
    for (let indexNote = 0; indexNote < notes.length; indexNote++) {        
                                                                            
        noteRef.innerHTML += getNoteTemplate(indexNote);                    // die unten definierte Funktion wird hier als innerHTML eingefügt
    }
}

function clearStorage(){
    localStorage.clear();
}

function deleteAll(indexNote){
    title.splice(0, notes.length);

    notes.splice(0, notes.length);
    renderNote();
}

function renderTrashNote(){
    let trashContainer = document.getElementById('trashNote');                              //Verbingung herstellen
    trashContainer.innerHTML = "";                                                          //es soll ein leerer String sein (vordefinieren)
    
    for (let indextrashNotes = 0; indextrashNotes < trashNotes.length; indextrashNotes++) {        
                                                                                              
        trashContainer.innerHTML += getTrashNoteTemplate(indextrashNotes);                  // die unten definierte Funktion wird hier als innerHTML eingefügt
    }
}

function getNoteTemplate(indexNote){                                                         //soll die Einträge im Array ausgeben
    
    return `<div class="noteField"><b>${title[indexNote]}:</b> ${notes[indexNote]} <button onclick="archiveNote(${indexNote})"><img src="./assets/icons/folder.png"></button></div>` //Template-Function für die Auflistung der Einträge
}

function getTrashNoteTemplate(indextrashNotes){
    return `<div class="trashField"><b>${trashTitle[indextrashNotes]}</b>: ${trashNotes[indextrashNotes]}<button onclick="zeroNotes(${indextrashNotes})"><img src="./assets/icons/remove.png"></button><button onclick="recover(${indextrashNotes})"><img src="./assets/icons/folder.png"></button></div>`    //Template-Function für die Auflistung der Einträge
}






function archiveNote(indexNote){
    let trashedTitles = title.splice(indexNote, 1);
    trashTitle.push(trashedTitles[0]);
    

    let trashedNote = notes.splice(indexNote, 1);
    trashNotes.push(trashedNote[0]);
    renderNote();                                                   //sollte den aktuellen stand der Notizen aktualisieren
    renderTrashNote();                                               //sollte den aktuellen Stand der gelöschten Notizen aktualisieren
}

function zeroNotes(indextrashNotes){
    trashTitle.splice(indextrashNotes, 1);

    trashNotes.splice(indextrashNotes, 1);
    renderTrashNote();
}



//notizen archivieren