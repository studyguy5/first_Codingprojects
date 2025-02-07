
let discount = 400*0.20;
let price = 400;

calculateprice();


function calculateprice(){
  console.log((price - discount)*1.2)  
}





console.log(calculatePrice(400*0.20, 400));

function calculatePrice(discount, price) {
    let value = (price - discount)*1.20;

    return value;
}




let testergebnis = 2.5;
let testergebnis1 = 1.7;




if((testergebnis > 4) || (testergebnis1 > 3)) {
    console.log("disqualiviziert");
} else if ((testergebnis < 3) || (testergebnis1 < 2)){
    console.log("super gemacht")
} else { console.log ("Bereit für das Studium");}




