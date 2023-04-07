function Checkout() {
  this.pizzas = {}
};

Checkout.prototype.addPizza = function(pizza) {
  this.pizzas[pizza.size] = pizza;
  console.log(myCheckout)
}

function Pizza(size, topping, price) {
  this.size = size
  this.toppings = [topping]
  this.price = price
}

Pizza.prototype.addToppings = function(topping) {
  if (this.size === "small") {
      let price = 5
      this.toppings.push(" " + topping);
      numberOfToppings = this.toppings.length-1
      this.price = price + numberOfToppings
      console.log(smallPizza);
    } else if (this.size === "medium") {
      let price = 7
      this.toppings.push(" " + topping);
      numberOfToppings = this.toppings.length-1
      this.price = price + numberOfToppings
      console.log(mediumPizza);
    } else {
      let price = 10
      this.toppings.push(" " + topping);
      numberOfToppings = this.toppings.length-1
      this.price = price + numberOfToppings
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
