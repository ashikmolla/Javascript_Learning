

const addItemUI = () => {
    const productFild = document.getElementById('product-fild')
    const quantitFild = document.getElementById('quantit-fild')
    const product = productFild.value;
    const quantit = quantitFild.value;
    console.log(product, quantit)
    productFild.value = ""
    quantitFild.value = ""
    showItem(product, quantit)
    setProductToLocalStorag(product, quantit)
}


const showItem = (product, quantit) => {
    const showItem = document.getElementById('showItem')
    showItem.style.border = " 1px solid black"
    const li = document.createElement('li')
    li.innerHTML = `
    <p>${product} ${quantit} </p>
    `
    showItem.appendChild(li);
    // localStorage.setItem(product, quantit)

}


const getStoredShoppingCart = () => {
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    return cart;
}
const setProductToLocalStorag = (product, quantit) => {

    const cart = getStoredShoppingCart();
    cart[product] = quantit;
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem("cart", cartStringify)

}
const displayProductLength = () => {
    const saveCarts = getStoredShoppingCart();

    for (const product in saveCarts) {
        const quantit = saveCarts[product];
        // console.console(product, quantit);
        showItem(product, quantit)
    }
    const saveCartObject = Object.keys(saveCarts)
    const saveCartLength = saveCartObject.length
    if (saveCartLength > 0) {
        document.getElementById('productLength').innerText = "total Item =" + saveCartLength

    }
}
 displayProductLength();
