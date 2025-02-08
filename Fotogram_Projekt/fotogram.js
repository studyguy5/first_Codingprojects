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
        let imgRef = document.getElementById("imgContainer")
        
        for (let index = 0; index < imageList.length; index++) {
            imgRef.innerHTML += ` <img class="myImages" onclick="toggleDialog(); bigImage(${index}); skipTool(${index}); closeImg(${index});" src="./imgs/${imageList[index]}"> `
         }
        }


    function closeImg(index){
        let closeimg = document.getElementById('close_section')
        
        closeimg.innerHTML = `${imageList[index]};
        <img onclick="toggleDialog()" id="closebutton" class="overlay_closebutton" src="./close_button.png">`
    }
    

    function bigImage(index){
        let image = document.getElementById('in_topsection')
        image.innerHTML = ` <img  class="big_Image"  src="./imgs/${imageList[index]}">`
        }



    function skipTool(index){
        let images = document.getElementById('in_mainsection')

    images.innerHTML = `<img onclick="nextImageL(${[index]})" class="skip_arrowLeft" src="./pfeil.png">
    <h3>${(index+1) + "/" + 12}</h3>
    <img onclick="nextImageR(${[index]})" class="skip_arrowRight" src="./pfeil.png">
    
    `}
    

    function nextImageR(index){
        if (index == 11){
            index = -1;
        }
        skipTool(index + 1);
        bigImage(index + 1);
        closeImg(index + 1);
    }
    
    
    function nextImageL(index){
        if (index == 0){
            index = 12;
        }
        skipTool(index - 1);
        bigImage(index - 1);
        closeImg(index - 1);
    }
    

    

    function toggleDialog(){
        let dialog = document.getElementById("toggleDialog")

        dialog.classList.toggle('d_none')

    }

    
    function stopBubbling(event){
        
        event.stopPropagation();
    }
    