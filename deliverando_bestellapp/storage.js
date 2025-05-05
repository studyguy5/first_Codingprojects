function saveProducts(){
  localStorage.setItem('shoppingCart',JSON.stringify(shoppingCart));
}

function getStorage(){
let memory = JSON.parse(localStorage.getItem('shoppingCart'))
if (memory !== null) {
    shoppingCart = memory;
}
}

function clearshoppingCart(){
    localStorage.clear();
    shoppingCart = [];
    renderShoppingCart();
    renderNethPriceInOverlay();
    renderTotalPriceforOverlay();
    for (let productIndex = 0; productIndex < menu.length; productIndex++) {
      menu[productIndex].amount = 0; 
    }
    
};



