Describe: Pizza()

Test: "It should return a Pizza object with a property of a given size."
Code: const smallPizza = new Pizza("small");
Expected Output: Pizza {size: "small"}

Test: "It should return a Pizza object with a size property and a toppings property."
Code: const smallPizza = new Pizza("small", ["pepperoni"]);
Expected Output: Pizza {size: "small", toppings:["pepperoni"]}

Test: "It should return a Pizza object with a size, toppings, and price (presently returning an integer with no currecny markers) property."
Code const smallPizza = new Pizza("small", ["pepperoni", "olives"], 5);
Expected Output: Pizza {size: "small", toppings: ["pepperoni", "olives", price: 5]}

