

function calculatePrice(productIndex) {
    sum = shoppingCart[productIndex].price;
    amount = shoppingCart[productIndex].amount;
    result = sum * amount;
    return result.toFixed(2);
}

function nethPrice() {
    sum1 = 0;

    for (let cartIndex = 0; cartIndex < shoppingCart.length; cartIndex++) {

        sum = shoppingCart[cartIndex].price;
        amount = shoppingCart[cartIndex].amount;
        result = sum * amount;
        sum1 += result;
    }

    return sum1;

}

function renderNethPrice() {
    let nethprice = document.getElementById('nethPrice')
    nethprice.innerHTML = `${nethPrice().toFixed(2)} €`;
}

function renderNethPriceInOverlay() {
    let nethPriceinTheOverlay = document.getElementById('nethPriceForTheOverlay')
    nethPriceinTheOverlay.innerHTML = `${nethPrice().toFixed(2)}€`;
}




function totalPrice() {
    let neth = nethPrice();
    return neth + Number(3.99);

}

function renderTotalPrice() {
    let total = document.getElementById('totalPrice')
    total.innerHTML = `<b>${totalPrice().toFixed(2)}</b> €`

}

function renderTotalPriceforOverlay() {
    let totalOverlay = document.getElementById('totalpriceOverlay')
    totalOverlay.innerHTML = `<b>${totalPrice().toFixed(2)}</b> €`
}

