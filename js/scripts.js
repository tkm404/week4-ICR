function Pizza(size, topping, price) {
  this.size = size
  this.toppings = [topping]
  this.price = price
}

const smallPizza = new Pizza("small", ["pepperoni"], 5);
const mediumPizza = new Pizza("medium", ["pepperoni"], 7);
const largePizza = new Pizza ("large", ["pepperoni"], 10)
console.log(smallPizza);
console.log(mediumPizza);
console.log(largePizza);