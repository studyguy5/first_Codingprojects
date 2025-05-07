let color = "red";

function init(){
    newVersion();
}

function newVersion(){
    let colorcode;

    switch (key){               // key = color in dem Fall hier
        case "red":
            colorcode = "#ba0e1b";
            break;
        case "green":
            colorcode = "#0eba1e";
            break;
        default:
            colorcode = "#210eba";
            break;
}
document.getElementById('title').style.color = colorcode;
}

// Vs. If-else Variante

if(color == "red"){
    colorcode = "#ba0e1b";
} else if (color == "green"){
    colorcode = "#0eba1e";
}else {
    colorcode = "#210eba";
}


//Allgeimeine Gegenüberstellung von Switch vs. If-else Statement

// Switch Case: 

// Es ist in der Regel effizienter, wenn mehr abgefragt werden muss, da eine Kondition
// vorgegeben/vordefiniert wird/ist und das Switch Statement mithilfe dem (key) einfach zum passenden Case hüpft!
// das switch überpfrüft auch nur den Charakter(das hauptformat) und integer datatype(ganze Zahlen)
// du musst nach jedem Case ein break setzen, sonst hört es nicht auf, zu executen auszuführen


// das If-else statement:

//beim If-else Statement wird Zeile für Zeile geprüft und die richtige If Bedingung wird dann ausgeführt(executed)
// das If-else statement prüft genauer (equality und logical expression, genauer integer, charakter, pointer oder floating-point-type = gleitkommazahl) switch nur für equality


// der ternary Operator

let lang = "fr";
function init(){
let myTitle;
if(lang =="de"){
    myTitle = "Webseite";
}else if(lang == "en"){
    myTitle = "Website";
}else{
    myTitle = "französchisch le Site"
};
test = document.getElementById("myTitle")
test.innerHTML= myTitle;
}
//das gleich als ternary Operator

myTitle = lang =="de" ? "Webseite":"Website";   //wenn language == "de" ?(? = abfragen/wenn das so ist?) "Webseite":(ansonsten) "Website";
