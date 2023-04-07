function Pizza(size, topping, price) {
  this.size = size
  this.toppings = [topping]
  this.price = price
}

Pizza.prototype.addToppings = function(topping) {
  this.toppings.push(topping);
  console.log(smallPizza)
}


const smallPizza = new Pizza("small", ["pepperoni"], 5);
const mediumPizza = new Pizza("medium", ["pepperoni"], 7);
const largePizza = new Pizza ("large", ["pepperoni"], 10)
