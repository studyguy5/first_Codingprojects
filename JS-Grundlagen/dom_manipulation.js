let title = document.getElementById("website_title");

console.log(title.innerHTML);



let div = document.getElementById("test_div");

let button = document.createElement("button");

button.textContent = "<p></p> hinzufügen";

div.appendChild(button);

console.log(div.innerHTML);


document.getElementById("test_div").classList.add("green_bg");







let testdiv =  document.getElementById("test_div");

let para = document.createElement("p");


para.textContent = "Testparagraph als Übung";



testdiv.appendChild(para);

para.id = "testp";

para.title = "Absatzsektion"



console.log(document.createElement("p"));






function toggleDNone(id){

document.getElementById(id).classList.toggle("d_none");


document.getElementById(id).classList.toggle("d_color");
}

console.log(toggleDNone);








