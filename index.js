const addPizza  = document.querySelector("#add-pizza");
const orderPizza = document.querySelector(".order-pizza");
const pizzaPrice = document.querySelector("#pizza-price");
const removePizza = document.querySelector(".remove-pizza");

const addBurger = document.querySelector("#add-burger");
const orderBurger = document.querySelector(".order-burger");
const burgerPrice = document.querySelector("#burger-price");
const removeBurger = document.querySelector(".remove-burger");

const addBeer = document.querySelector("#add-beer");
const orderBeer = document.querySelector(".order-beer");
const beerPrice = document.querySelector("#beer-price");
const removeBeer = document.querySelector(".remove-beer");

const orderTitle = document.querySelector(".order-title");
const orderFood = document.querySelector(".order-food");
const total = document.querySelector(".total");
const completeBtn = document.querySelector(".complete");
const totalPrice = document.querySelector(".total-price");


let price1 = 0;
let price2 = 0;
let price3 = 0;

addBeer.addEventListener("click", function() {
    orderTitle.style.display = "block";
    orderBeer.style.display = "flex";
    orderFood.style.display = "flex";
    total.style.display = "flex";
    completeBtn.style.display = "block";

    price3 += 12;
    beerPrice.textContent = "$" + price3;
    totalPrice.textContent = "$" + (price1 + price2 + price3);
})

removeBeer.addEventListener("click", function() {
    price3 -= 12;
    beerPrice.textContent = "$" + price3;
    totalPrice.textContent = "$" + (price1 + price2 + price3);

    if(price3 < 12) {
        orderBeer.style.display = "none";
    }

    if(price1 < 14 && price2 < 12 && price3 < 12) {
        orderTitle.style.display = "none";
        orderFood.style.display = "none";
        total.style.display = "none";
        completeBtn.style.display = "none";
    }
})

addBurger.addEventListener("click", function() {
    orderTitle.style.display = "block";
    orderBurger.style.display = "flex";
    orderFood.style.display = "flex";
    total.style.display = "flex";
    completeBtn.style.display = "block";

    price2 += 12;
    burgerPrice.textContent = "$" + price2;
    totalPrice.textContent = "$" + (price1 + price2 + price3);
})

removeBurger.addEventListener("click", function() {
    price2 -= 12;
    burgerPrice.textContent = "$" + price2;
    totalPrice.textContent = "$" + (price1 + price2 + price3);

    if(price2 < 12) {
        orderBurger.style.display = "none";
    }
    
    if(price1 < 14 && price2 < 12 && price3 < 12) {
        orderTitle.style.display = "none";
        orderFood.style.display = "none";
        total.style.display = "none";
        completeBtn.style.display = "none";
    }
})

addPizza.addEventListener("click", function() {
    orderTitle.style.display = "block";
    orderPizza.style.display = "flex";
    orderFood.style.display = "flex";
    total.style.display = "flex";
    completeBtn.style.display = "block";

    price1 += 14;
    pizzaPrice.textContent = "$" + price1;
    totalPrice.textContent = "$" + (price1 + price2 + price3);
})

removePizza.addEventListener("click", function() {
    price1 -= 14;
    pizzaPrice.textContent = "$" + price1;
    totalPrice.textContent = "$" + (price1 + price2 + price3);

    if(price1 < 14) {
        orderPizza.style.display = "none";
    }

    if(price1 < 14 && price2 < 12 && price3 < 12) {
        orderTitle.style.display = "none";
        orderFood.style.display = "none";
        total.style.display = "none";
        completeBtn.style.display = "none";
    }
})