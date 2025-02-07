imageList = ["celebration-9149600_1280.jpg",
    "china-7094961_1280.jpg",
    "holiday-table-1926946_1280.jpg",
    "houses-8010401_1280.jpg",
    "london-4395917_1280.jpg",
    "museum-458321_1280.jpg",
    "national-history-museum-4314035_1280.jpg",
    "night-4694750_1280.jpg",
    "red-wine-2443699_1280.jpg",
    "soumaya-museum-6724229_1280.jpg",
    "tower-bridge-6273431_1280.jpg",
    "wine-6174460_1280.jpg"];


    function renderImage(){
        let imgRef = document.getElementById("imgContainer")        //rendert die Biler in den erstellten leeren Container
        
        for (let index = 0; index < imageList.length; index++) {
            imgRef.innerHTML += ` <img class="myImages" onclick="toggleDialog(); bigImage(${index}); skipTool(${index}); closeImg(${index});" src="./imgs/${imageList[index]}"> `       // führt mittels onclick die Funktionen bigImage(bild vergrößern), skipTool(pfeile zum skippen),
                                                                                                                                                                                        //closeImg(um die Größansicht zu schließen) aus, damit alle Funtionen verfügbar sind und alles richtig angezeigt wird
         }
        }


    function closeImg(index){
        let closeimg = document.getElementById('close_section')                     //die Funktion closeImg verknüpft sich mit der close_section (div im html code) und fügt hier den file_name und das Schließsymbol als Bild ein
                                                                                    // gleichzeitig ist auf dem Bild (welches mittels Template-Funktion hier erstellt wird) wieder eine onclick, um das schließen der großansicht zu ermöglichen (index als Parameter für filename)
        closeimg.innerHTML = `${imageList[index]};
        <img onclick="toggleDialog()" id="closebutton" class="overlay_closebutton" src="./close_button.png">`
    }
    

    function bigImage(index){
        let image = document.getElementById('in_topsection')                        // mit bigImage wird das Bild vergrößert in der 'in_topsection' dargestellt, ein class, um das Bild mit css anzupassen (index als Parameter für das Richtige Bild)
        image.innerHTML = ` <img  class="big_Image"  src="./imgs/${imageList[index]}">`
        }



    function skipTool(index){
        let images = document.getElementById('in_mainsection')
                                                                                    // mit skipTool werden die skip Pfeile und die aktuelle Bildnummer angezeigt ( ALLE FUNKTIONEN BRAUCHEN DEN INDEX ALS PARAMETER; DAMIT DIE NUMMER RICHTIG ANGEZIGT WIRD; DAS RICHTIGE BILD ANGEZEIGT WIRD USW.)
    images.innerHTML = `<img onclick="nextImageL(${[index]})" class="skip_arrowLeft" src="./pfeil.png">            
    <h3>${(index+1) + "/" + 12}</h3>
    <img onclick="nextImageR(${[index]})" class="skip_arrowRight" src="./pfeil.png">`
}                                                                                                  // (index als Parameter für die Bildnummer und das richtige Verhalten ab 12 und ab nummer 1)
    

    function nextImageR(index){
        if (index == 11){                   // hier die Mechanik, damit der Index von 12 auf die 1 hüpft und umgekehrt (einmal Pfeil, einmal Bild, einmal für den Filename)
            index = -1;
        }
        skipTool(index + 1);
        bigImage(index + 1);
        closeImg(index + 1);
    }
    
    
    function nextImageL(index){
        if (index == 0){
            index = 12;                 // hier die Mechanik, damit der Index von 12 auf die 1 hüpft und umgekehrt (einmal Pfeil, einmal Bild, einmal für den Filename)
        }
        skipTool(index - 1);
        bigImage(index - 1);
        closeImg(index - 1);
    }
    

    

    function toggleDialog(){
        let dialog = document.getElementById("toggleDialog")            //toggle Mechanik um das Overlay anzeigen und schließen zu lassen

        dialog.classList.toggle('d_none')

    }

    
    function stopBubbling(event){                                       //eventbubbling, damit das bigImage nur an gewünschten Stellen schließt
        
        event.stopPropagation();
    }
    