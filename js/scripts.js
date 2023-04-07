// ---- Utility Logic vvvv ----

Pizza.prototype.toppingSet = function(price, topping) {
  this.toppings.push(" " + topping);
      numberOfToppings = this.toppings.length-1
      this.price = price + numberOfToppings
};


// ---- Business Logic vvvv ----
function Checkout() {
  this.pizzas = {}
  this.totalPrice = []
};

Checkout.prototype.addPizza = function(pizza) {
  this.pizzas[pizza.size] = pizza;
  let price = pizza.price
  this.totalPrice.push(price)
  console.log(myCheckout)
  console.log(price)
}

Checkout.prototype.priceCalculator = function() {
  let totalSale = 0
  this.totalPrice.forEach(function(number) {
    totalSale += number;
    console.log(totalSale)
  })
}

function Pizza(size, topping, price) {
  this.size = size
  this.toppings = [topping]
  this.price = price
}




Pizza.prototype.addToppings = function(topping) {
  if (this.size === "small") {
      this.toppingSet(5, topping)
      console.log(smallPizza);
    } else if (this.size === "medium") {
      this.toppingSet(7, topping)
      console.log(mediumPizza);
    } else {
      this.toppingSet(10, topping)
      console.log(largePizza);
    }
  
    
};


Pizza.prototype.yourPizza = function() {
  if (this.toppings.length > 1) {
    let lastTopping = this.toppings.pop();
    return this.size + " pizza with " + this.toppings.toString() + " and" + lastTopping.toString() + " for $" + this.price;
  } else {
    return this.size + " pizza with " + this.toppings.toString() + " for $" + this.price;
  }
};

  
const myCheckout = new Checkout();
const smallPizza = new Pizza("small", ["pepperoni"], 5);
const mediumPizza = new Pizza("medium", ["pepperoni"], 7);
const largePizza = new Pizza ("large", ["pepperoni"], 10)
