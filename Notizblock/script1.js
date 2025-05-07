function init(){                                                                    //init function wird beim öffnen der seite ausgeführt
    getFromLocalStorage();                                                           //get from Local storage  - damit holt man alle Key/value Paare aus dem Localen -Speicher
    renderNote();                                                                   //die Notes werden in das HTML gerendert
}

let allNotes = {                                       // zugriff objekt.key: allNotes.notesTitle oder allNotes['notesTitle']
    'notesTitle' : ['Lebensmittel', 'Acceciouares', 'Mensch', 'Gegenstand', 'Obst'],
    'trashNotesTitle' : [],
    'notes' : ['Semmel', 'Hut', 'Kinder', 'Kinderwagen', 'Apfel'],
    'trashNotes' : [],
}


let startkey = allNotes;                    //definition, das sowohl startkey/destinationkey sich beide im Objekt allNotes bewegen sollen!
let destinationkey = allNotes;


function moveNote(indexNotes, startkey, destinationkey){                        //hier macht man mit startkey und destinationkey eine Verallgmeinerung
    let arch = allNotes[startkey].splice(indexNotes, 1);                          // der startkey kann notes oder trashNotes sein, daher es kann in beide Richtungen bewegt werden
    allNotes[destinationkey].unshift(arch[0]);

    let arch2 = allNotes[startkey + 'Title'].splice(indexNotes, 1);             //hier wird der Zusatz "Title" verwendet, um auf die beiden Title keys zuzugreifen
    allNotes[destinationkey + 'Title'].unshift(arch2[0]);                       //aber auch hier kann der startkey notesTitle oder trashNotesTitle sein, damit kann man es in beide Richtungen verschieben
    console.log(allNotes);                                                      //mit startkey/destinationkey muss man nicht für jede Richtung eine seperate function schreiben
    
    renderTrashNote();
    renderNote();
    
}


function saveData(){
    let titleSave = document.getElementById("titleinput");                           //verbindung mit dem Title Eingabefeld
    let textSave = document.getElementById('textinput');                            //verbindung mit dem Text Eingabefeld
    if(titleSave.value == ""){
    allNotes.notesTitle.unshift("Beispieltitel");
    }else {
    allNotes.notesTitle.unshift(titleSave.value);}                                                    //pusht den value von titleSave in das Array title rein
    
    if(textSave.value == ""){
        allNotes.notes.unshift("Beispieltext");
        }else{
             allNotes.notes.unshift(textSave.value);                                                     //pusht den value von textSave in das Array notes rein
        }
    saveToLocalStorage();                                                           // führt die Funktion aus, damit es unten zum Localen Speicher hinzugefügt wird
    renderNote();                                                                   //rendert die neuen Notizen
    titleSave.value = "";                                                           //leert das Feld
    textSave.value = "";                                                            //leert das Feld
}

function saveToLocalStorage(notesTitle,notes){
    localStorage.setItem("notesTitle",JSON.stringify(notesTitle));                            // fügt Werte in den localen Speicher und mit stringify wird es als Text formatiert
    localStorage.setItem("notes",JSON.stringify(notes));                             // dasselbe für die Werte aus dem Array notes
}

function getFromLocalStorage(){
    let titleSave = JSON.parse(localStorage.getItem('notesTitle'));                        // hier ist es umgekehrt - man holt Key/value Paare aus dem localen Speicher und formatiert sie wieder von Strings zu Objekten
    let notesSave = JSON.parse(localStorage.getItem('notes'));                         // dasselbe hier

    if(titleSave == null){                                                          // abfrage - wenn das Array title leer ist, wird nichts im neuen Container titleSave gespeichert, wenn etwas drin ist, dann schon
        allNotes.notesTitle != titleSave;
    }else {allNotes.notesTitle = titleSave}

    if(notesSave == null){
        allNotes.notes != notesSave;
    }else {allNotes.notes = notesSave}
}

function renderNote(){
    let noteRef = document.getElementById('notesdiv');                  //Verbindung herstellen
    noteRef.innerHTML = "";                                              //es soll ein leerer String sein (vordefinieren)
    for (let indexNote = 0; indexNote < allNotes.notes.length; indexNote++) {        
                                                                            
        noteRef.innerHTML += getNoteTemplate(indexNote);                    // die unten definierte Funktion wird hier als innerHTML eingefügt
    }
}

function clearStorage(){
    localStorage.clear();
}

function deleteAll(){
    allNotes.notesTitle.splice(0, allNotes.notes.length);

    allNotes.notes.splice(0, allNotes.notes.length);
    renderNote();
}

function renderTrashNote(){
    let trashContainer = document.getElementById('trashNote');                              //Verbingung herstellen
    trashContainer.innerHTML = "";                                                          //es soll ein leerer String sein (vordefinieren)
    
    for (let indextrashNotes = 0; indextrashNotes < allNotes.trashNotes.length; indextrashNotes++) {        
                                                                                              
        trashContainer.innerHTML += getTrashNoteTemplate(indextrashNotes);                  // die unten definierte Funktion wird hier als innerHTML eingefügt
    }
}

function getNoteTemplate(indexNote){                                                         //soll die Einträge im Array ausgeben
    
    return `<div class="noteField"><b>${allNotes.notesTitle[indexNote]}:</b> ${allNotes.notes[indexNote]}        
    <button onclick="moveNote(${indexNote}, 'notes', 'trashNotes')"><img src="./assets/icons/folder.png"></button></div>` //Template-Function für die Auflistung der Einträge
}       //die schreibweise: index angeben, dann soll es von notes zu trashNotes verschoben werden

function getTrashNoteTemplate(indextrashNotes){
    return `<div class="trashField"><b>${allNotes.trashNotesTitle[indextrashNotes]}:</b> ${allNotes.trashNotes[indextrashNotes]}
    <button onclick="zeroNotes(${indextrashNotes})"><img src="./assets/icons/remove.png"></button>
    <button onclick="moveNote(${indextrashNotes}, 'trashNotes', 'notes')"><img src="./assets/icons/folder.png"></button></div>`    //Template-Function für die Auflistung der Einträge
}


function zeroNotes(indextrashNotes){
    allNotes.trashNotesTitle.splice(indextrashNotes, 1);

    allNotes.trashNotes.splice(indextrashNotes, 1);
    renderTrashNote();
}



