function Pizza(size, topping, price) {
  this.size = size
  this.toppings = [topping]
  this.price = price
}

Pizza.prototype.addToppings = function(topping) {
  let toppingCount = 0
  this.toppings.push(topping);
  for (let i = 1; i < this.toppings.length; i++) {
    toppingCount++
    console.log(toppingCount)
  }
    this.price + toppingCount;
    console.log(smallPizza.price);
  }


const smallPizza = new Pizza("small", ["pepperoni"], 5);
const mediumPizza = new Pizza("medium", ["pepperoni"], 7);
const largePizza = new Pizza ("large", ["pepperoni"], 10)
