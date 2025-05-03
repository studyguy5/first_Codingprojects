function saveProducts(){
  localStorage.setItem('shoppingCart',JSON.stringify(shoppingCart));
}

function getStorage(){
let memory = JSON.parse(localStorage.getItem('shoppingCart'))
if (memory !== null) {
    shoppingCart = memory;
}
}

function clearshoppingCart(cartIndex){
    localStorage.clear();
    shoppingCart.splice(cartIndex, 10)
    renderShoppingCart();
}

function toggleOrdered(){
  let orderednow = document.getElementById('youHaveOrderedrightNow')
  orderednow.classList.toggle('doNotShow')
  clearshoppingCart();
};