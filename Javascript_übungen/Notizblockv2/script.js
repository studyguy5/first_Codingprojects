let title = [];

let notiz = [];

function init(){
    renderInput();
}

function renderInput(){
 let title = document.getElementById('titleInput');
 let text = document.getElementById('textInput');
 let notizDiv = document.getElementById('notizDiv');
 notizDiv.innerHTML+= ``;
 notizDiv.innerHTML+= `${title}`;
}

function getNote(){
    
}

function saveNote(){
    let storage = document.getElementById('notizDiv')
    notiz.push(storage.value);
}