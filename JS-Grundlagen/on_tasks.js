let field = document.createElement("input");

let testinput = document.getElementById("testinput");

testinput.appendChild(field);




addEventListener("input", onkeyup);

function onkeyup(event){
    console.log(event.field);
}






