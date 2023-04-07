Describe: Pizza()

Test: "It should return a Pizza object with a property of a given size."
Code: const smallPizza = new Pizza("small");
Expected Output: Pizza {size: "small"}

Test: "It should return a Pizza object with a size property and a toppings property."
Code: const smallPizza = new Pizza("small", ["pepperoni"]);
Expected Output: Pizza {size: "small", toppings:["pepperoni"]}

Test: "It should return a Pizza object with a size, toppings, and price (presently returning an integer with no currecny markers) property."
Code const smallPizza = new Pizza("small", ["pepperoni", "olives"], 5);
Expected Output: Pizza {size: "small", toppings: ["pepperoni", "olives"], price: 5}

//

Describe: Pizza.addToppings();

Test: "It should add a topping to the toppings property of the Pizza object."
Code: smallPizza.addToppings("sausage");
Expected Output: Pizza {size: "small", toppings: ["pepperoni", "sausage"], price: 5}

Test: "For each topping beyond the first, it should increase the price by 1."
Code: smallPizza.addToppings("sausage");
Expected Output: Pizza {size: "small", toppings: ["pepperoni", "sausage"], price: 6}

//

Describe: Pizza.yourPizza();

Test: "It should return a string of all the current pizza's properties."
Code: smallPizza.yourPizza();
Expected Output: "small pizza with pepperoni for $5."

Test: "It should return a list of toppings with 'and' when multiple toppings are in the array."
Code: smallPizza.yourPizza();
Expected Output: "small pizza with pepperoni, and sausage for $6."

// 

Describe: Checkout();
Test: "It should return a Checkout object which contains Pizza objects."
Code: myCheckout = new Checkout();
Expected Output: Checkout { pizzas: {} }

//

Describe: Checkout.addPizza();
Test: "It should add a Pizza object to the Checkout object."
Code: myCheckout.addPizza(smallPizza);
Expected Output: Checkout { pizzas: {small}}