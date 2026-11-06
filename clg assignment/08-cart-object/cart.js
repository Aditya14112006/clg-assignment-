function createCart() {
  const items = [];
  return {
    add(product, quantity = 1) {
      if (!product || typeof product.name !== "string" || !product.name.trim()) throw new Error("Product name is required.");
      if (typeof product.price !== "number" || !Number.isFinite(product.price) || product.price < 0) throw new Error("Price must be a valid non-negative number.");
      if (!Number.isInteger(quantity) || quantity < 1 || quantity > 99) throw new Error("Quantity must be an integer from 1 to 99.");
      const existing = items.find(item => item.name === product.name);
      if (existing) {
        if (existing.quantity + quantity > 99) throw new Error("Maximum quantity is 99.");
        existing.quantity += quantity;
      } else items.push({ name: product.name, price: product.price, quantity });
    },
    getItems() { return items.map(item => ({ ...item })); },
    getTotal() { return items.reduce((sum, item) => sum + item.price * item.quantity, 0); },
    clear() { items.length = 0; }
  };
}
if (typeof module !== "undefined") module.exports = { createCart };
