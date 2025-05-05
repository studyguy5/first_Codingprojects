function toggleOrdered(){
    let ordered = document.getElementById('youHaveOrderedrightNow')
      if(shoppingCart !== 0){
        ordered.classList.remove('doNotShow')
        ordered.classList.add('youHaveOrderedrightNow')
        setTimeout(() => {
          ordered.classList.add('doNotShow')
          ordered.classList.remove('youHaveOrderedrightNow')
        }, 4000);
      }
      clearshoppingCart();
    };
    
    function toggleOrderedOverlay(){
      let ordered = document.getElementById('youHaveOrderedrightNowOverlay')
        if(shoppingCart !== 0){
          ordered.classList.remove('doNotShow')
          ordered.classList.add('youHaveOrderedrightNowOverlay')
          setTimeout(() => {
            ordered.classList.add('doNotShow')
            ordered.classList.remove('youHaveOrderedrightNowOverlay')
          }, 4000);
        }
        clearshoppingCart();
      };