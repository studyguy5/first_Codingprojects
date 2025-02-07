let myCondition = true;

myCondition = !myCondition;


myCondition = false && false && false || true;


console.log(myCondition)

myCondition = (true && false);  //false

console.log(myCondition) 



myCondition = (true || false); //true

console.log(myCondition)



myCondition = (false && true); //false

console.log(myCondition)



myCondition = (true && (false || true)); //true

console.log(myCondition)



myCondition = ((true && false) || true); //true

console.log(myCondition)




myCondition = (!(true && false)); // true wegen dem Rufezeichen

console.log(myCondition)




myCondition = (!(false || true)); //false wegen dem Rufezeichen

console.log(myCondition)




myCondition = (!(true && (false || true))); //false wegen dem Rufezeichen

console.log(myCondition)




myCondition = (true && (false || true) || (false && (true || false))); //false wegen dem Rufezeichen

console.log(myCondition)



myCondition = ((false || !(false && true)) && ((true || false) || (false && true))); //false wegen dem Rufezeichen

console.log(myCondition)







// Abfragen, ob Werte gleich sind, ob Typen gleich sind (Textformat, Zahlenformat usw.) (=, ==, ===, >=, <=, !=, !==,)


myCondition =  45 == "45"; // == testet ob exakt gleich, ohne Type
                    
console.log(myCondition) //true



myCondition =  45 === 45; // === testet ob exakt gleich, mit Type
                    
console.log(myCondition) //true


myCondition =  45 === "45"; // === testet ob exakt gleich, mit Type
                    
console.log(myCondition) //false


myCondition =  45 < 123; // < testet ob die anvisierte Zahl kleiner ist
                    
console.log(myCondition) // true



myCondition =  12 >= 45; // >= testet ob die anvisierte Zahl größer oder gleich ist
                    
console.log(myCondition) //false



myCondition =  45 != "45" // != Gegenteil von exakt gleich, ohne Type (man ersetzt das erste Zeichen mit einem Rufezeichen)
                    
console.log(myCondition) //false



myCondition =  45 !== 47; //!== Gegenteil von exakt gleich, mit Typen (erstes Zeichen durch Rufezeichen ersetzt)
                    
console.log(myCondition) //true



myCondition =  45 !== "47"; // !== Gegenteil von exakt gleich, mit Typen (erstes Zeichen durch Rufezeichen ersetzt)
                    
console.log(myCondition) //true


myCondition =  ((4 >= 4) && (8 < 15) && (3 == 3));
                    
console.log(myCondition)


let myIfCondition_a = 50;

let myIfCondition_b = "5";


if(7 < 5){
console.log("hello world i werd alles haken und steinreich");
} else if(!(10 >= 10)){
    console.log("hello world ich werde multimiliadär");
} else{
    console.log("Hello World, ich werde in 5 Jahren euer König sein")
}