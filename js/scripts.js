function Checkout() {
  this.pizzas = {}
};

Checkout.prototype.addPizza = function() {

}

function Pizza(size, topping, price) {
  this.size = size
  this.toppings = [topping]
  this.price = price
}

Pizza.prototype.addToppings = function(topping) {
  let toppingCount = 0
  this.toppings.push(" " + topping);
  for (let i = 1; i < this.toppings.length; i++) {
    toppingCount++
  }
  this.price = toppingCount ! + this.price
};

Pizza.prototype.yourPizza = function() {
  if (this.toppings.length > 1) {
  let lastTopping = this.toppings.pop()
  return this.size + " pizza with " + this.toppings.toString() + " and" + lastTopping + " for $" + this.price;
  } else {
    return this.size + " pizza with " + this.toppings.toString() + " for $" + this.price;
  }
};

  
const myCheckout = new Checkout();
const smallPizza = new Pizza("small", ["pepperoni"], 5);
const mediumPizza = new Pizza("medium", ["pepperoni"], 7);
const largePizza = new Pizza ("large", ["pepperoni"], 10)
