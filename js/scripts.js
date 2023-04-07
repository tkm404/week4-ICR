// ----- Utility Logic vvvv -----

Pizza.prototype.toppingSet = function(price, topping) {
  if (topping === undefined) {
    this.price = price
  } else {
  this.toppings.push(" " + topping);
      numberOfToppings = this.toppings.length-1
      this.price = price + numberOfToppings
  }
};

// ----- Business Logic vvvv -----

// Checkout Object vvvv

function Checkout() {
  this.pizzas = {}
  this.totalPrice = []
}

Checkout.prototype.addPizza = function(pizza) {
  this.pizzas[pizza.size] = pizza;
  let price = pizza.price
  this.totalPrice.push(price)
};

Checkout.prototype.priceCalculator = function() {
  let totalSale = 0
  this.totalPrice.forEach(function(number) {
    totalSale += number;
  })
};

// Pizza Object vvvv

function Pizza(size, topping) {
  this.size = size
  this.toppings = [topping]
  this.price = 0
}

Pizza.prototype.addToppings = function([topping]) {
  if (this.size === "Small") {
      this.toppingSet(5, topping)
  } else if (this.size === "Medium") {
      this.toppingSet(7, topping)
  } else {
      this.toppingSet(10, topping)
  }
};

Pizza.prototype.yourPizza = function() {
  if (this.toppings.length > 1) {
    let lastTopping = this.toppings.pop();
    return this.size + " pizza with pepperoni," + this.toppings.toString() + " and" + lastTopping.toString() + " for $" + this.price;
  } else {
    return this.size + " pizza with pepperoni," + this.toppings.toString() + " for $" + this.price;
  }
};

  

// const smallPizza = new Pizza("small", ["pepperoni"], 5);
// const mediumPizza = new Pizza("medium", ["pepperoni"], 7);
// const largePizza = new Pizza ("large", ["pepperoni"], 10)


// ----- User Interface Logic vvvv -----



function handleMenuSubmission(event) {
  event.preventDefault();
  let topFormArray = ["pepperoni"];
  const myCheckout = new Checkout();
  const sizeSelect = document.getElementById("size-pizza").value;
  const topSelect = document.querySelectorAll("input[name=topping]:checked");
  const topSelectArray = Array.from(topSelect);  
  const myPizza = new Pizza(sizeSelect, topFormArray)
  myPizza.addToppings(topSelectArray);
  myCheckout.addPizza(myPizza)
  console.log(myCheckout)
}


window.addEventListener("load", function() {
  this.document.querySelector("div#menu-list").addEventListener("submit", handleMenuSubmission)
});