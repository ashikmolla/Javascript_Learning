var phones =[
    {name:'oppo', camera:19, quantity:2, price:20000},
    {name:'nokia', camera:10, quantity:2, price:21000},
    {name:'Xaomio', camera:10, quantity:3, price:22000},
    {name:'bangla', camera:10, quantity:4, price:23000}
]
function cheapestPhone(phones){
    cheapest=phones[0]
    for(let i =0; i< phones.length; i++){
        const phone =phones[i]
        if(phone.price < cheapest.price){
            cheapest=phone;
        }
    }
    return cheapest;
}
// console.log(cheapestPhone(phones))



var shoppnCart =[
    {name:'shampo', price:20000},
    {name:'mobile', price:21000},
    {name:'shop', price:22000},
    {name:'cack', price:23000}
];
function totalCost(products){
    let sum =0;
    for(let i=0; i<products.length; i++){
        const product =products[i];
        console.log(product)
        sum = sum + product.price;
    }
    return sum;
}
// console.log(totalCost(shoppnCart))

  //---------------- three 

var shop =[
    {name:'mobile', camera:19, quantity:2, price:20000},
    {name:'apple', camera:10, quantity:2, price:21000},
    {name:'am', camera:10, quantity:3, price:22000},
    {name:'changlas', camera:10, quantity:4, price:23000}
]
function totalShop(products){
    let sum =0;
    for(let i=0; i<products.length; i++){
        const product =products[i];
       const totaPrice=product.price * product.quantity;
        sum = sum + totaPrice;
    }
    return sum;
}
console.log(totalShop(shop))