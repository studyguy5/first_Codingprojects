function init() {
    getStorage();
    renderProductSource();
    renderHeadline();

};


function renderHeadline() {
    let categoryheadline = document.getElementById('productlist-main-headline-shortcuts')
    categoryheadline.innerHTML = "";
    for (let index = 0; index < categorys.length; index++) {
        categoryheadline.innerHTML += `
    <div class="productlist-main-headline-shortcuts"><a href="#${index}">${categorys[index].name}</a></div>`
    }
}


function renderProductSource() {
    let productlist = document.getElementById('productlist-itself')

    for (let index = 0; index < categorys.length; index++) {

        let currentCategory = categorys[index].name;
        let filteredCategoryMenu = menu.filter(item => item.category === currentCategory);
        productlist.innerHTML += `<div class="${currentCategory} categorys" id="${index}"><h2>${currentCategory} > ${categorys[index].description}</h2></div>`
        for (let productIndex = 0; productIndex < filteredCategoryMenu.length; productIndex++) {
            productlist.innerHTML += `
            <div class="productbox">
            <div class="productbox-leftside">
            <h3>${filteredCategoryMenu[productIndex].name}</h3>
            <h5>${filteredCategoryMenu[productIndex].description}</h5>
            <br>
            <h5><b>${filteredCategoryMenu[productIndex].price}€</b></h5>
            </div>
            <div class="productbox-rightside">
            <img onclick="addToBasket(${filteredCategoryMenu[productIndex].id})" src="./images/icons/plus-zeichen.png">
            </div>
            </div>`;

        }
    };

    renderShoppingCart();
    renderPriceInOverlay();
}


function renderShoppingCart() {
    let cart = document.getElementById('shoppingCart')
    cart.innerHTML = "";
    for (let cartIndex = 0; cartIndex < shoppingCart.length; cartIndex++) {
        cart.innerHTML += `
        <div class="shoppingCartItem-Name">
        <h4>${shoppingCart[cartIndex].name}</h4>
        </div>
        <div class="shoppingCartItem-Details">
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
        console.log('arbeitet')
    };
    rendershoppingOverlay();
    renderNethPrice();
    renderTotalPrice();
};

function addToBasket(productIndex) {

    if (menu[productIndex].amount === 0) {
        menu[productIndex].amount += 1;
        shoppingCart.push(menu[productIndex])
    } else {
        menu[productIndex].amount += 1;
    }

    renderShoppingCart();
    saveProducts();
    renderNethPriceInOverlay();
    renderTotalPriceforOverlay();
}

function reduceAmount(productIndex) {
    if (shoppingCart[productIndex].amount === 1) {
        shoppingCart.splice(productIndex, 1)
    } else {
        shoppingCart[productIndex].amount -= 1;
    }
    renderShoppingCart();
    renderNethPriceInOverlay();
    renderTotalPriceforOverlay();
}

function increaseAmount(productIndex) {
    shoppingCart[productIndex].amount += 1;
    renderShoppingCart();
    renderNethPriceInOverlay();
    renderTotalPriceforOverlay();
}

function deleteProduct(productIndex) {
    shoppingCart.splice(productIndex, 1);
    renderShoppingCart();
    renderNethPriceInOverlay();
    renderTotalPriceforOverlay();
}
