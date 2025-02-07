let list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let letterlist = ["a", "b", "c", "d", "e", "f", "g"]
function printNumbers(){

for (let index = 0; index < list.length; index+= 3) {
    console.log(letterlist[index]);
    
}
}

printNumbers();


function seearray(){

    let box = document.getElementsByClassName("red_box");

    for (let index = 0; index < box.length; index++) {
          let refbox = box[index];
            refbox.innerText = index; 
    }

};

