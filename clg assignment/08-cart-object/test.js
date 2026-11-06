const { createCart } = require("./cart");
const cart = createCart();
cart.add({ name: "Notebook", price: 50 }, 2);
cart.add({ name: "Pen", price: 10 }, 3);
console.log("Items:", cart.getItems());
console.log("Expected total: 130 | Actual:", cart.getTotal());
try { cart.add({ name: "Invalid", price: -5 }, 1); } catch (error) { console.log("Validation:", error.message); }
