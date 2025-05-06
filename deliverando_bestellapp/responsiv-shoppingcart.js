function toggleshoppingCart() {
    let openshopping = document.getElementById('shoppingOverlay')
    openshopping.classList.toggle('display_none')
    renderTotalPriceforOverlay();
    renderNethPriceInOverlay();
};


function rendershoppingOverlay() {
    let overlayshopping = document.getElementById('shoppingdetailsOverlay')
    overlayshopping.innerHTML = "";
    for (let cartIndex = 0; cartIndex < shoppingCart.length; cartIndex++) {
        overlayshopping.innerHTML += `
        <div class="shoppingCartItem-NameOverlay">
        <h4>${shoppingCart[cartIndex].name}</h4>
        </div>
        <div class="shoppingCartItem-DetailsOverlay">
        <div class="shoppingCartItem-Amount">
        <img onclick="reduceAmount(${cartIndex})" class="amount-minus-symbol" src="./images/icons/minus-symbol.png">
        <h5>${shoppingCart[cartIndex].amount}</h5>
        <img onclick="increaseAmount(${cartIndex})" class="amount-plus-symbol" src="./images/icons/plus-symbol.png">
        </div>
        <div class="shoppingCartItem-Price">
        <h5>${calculatePrice(cartIndex)}€</h5>
        <img onclick="deleteProduct(${cartIndex})" class="trashbox-symbol" src="./images/icons/trashbox-symbol.png">
        </div>
        </div>`

    };

};



function renderPriceInOverlay() {
    let priceOverlay = document.getElementById('priceOverlaydiv')
    priceOverlay.innerHTML = `
            <div>
                <hr>
            </div>
            <div id="calculation-container" class="calculation-container">
                <div class="nethPriceContainerOverlay">
                    <h5>Zwischensumme</h5>
                    <div id="nethPriceForTheOverlay"> </div>
                </div>
                <div id="deliveryCostContainer" class="deliveryCostContainer">
                    <h5>Lieferkosten</h5>
                    <div>
                        <h5>3,99€</h5>
                    </div>
                </div>
                <div>
                    <hr>
                </div>
                <div id="totalPriceContainerOverlay" class="totalPriceContainer">
                    <b>Gesamt</b>
                    <div id="totalpriceOverlay"></div>
                </div>
            </div>`
}