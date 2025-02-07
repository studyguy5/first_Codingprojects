

let random = ["Haus", "Katze", "Kino"];



function init(){
    getFromLocalStorage();
    renderData();
}


function saveData(){
    let note = document.getElementById('textinput');
    random.push(note.value);
    
    saveToLocalStorage();

    renderData();
    note.value = " ";
}

function saveToLocalStorage(){
    localStorage.setItem("random", JSON.stringify(random));

}


function getFromLocalStorage(){
let myArr = JSON.parse(localStorage.getItem('random'));
if(myArr == null){
    random != myArr;
} else {random = myArr;

}

}





function renderData(){

    let note = document.getElementById('shownote')
    note.innerHTML = "";
    for (let shownoteindex = 0; shownoteindex < random.length; shownoteindex++) {
        
        note.innerHTML += showNotes(shownoteindex);   
    }
    
    
}


function showNotes(shownoteindex){
    return `<li>${random[shownoteindex]}</li>`
}

