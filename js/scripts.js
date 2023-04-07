function Pizza(size, topping) {
  this.size = size
  this.toppings = [topping]
}

const smallPizza = new Pizza("small", ["pepperoni", "olives"])
console.log(smallPizza)