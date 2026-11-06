const fs = require("fs");
const data = JSON.parse(fs.readFileSync("catalogue.json", "utf8"));
function validateCatalogue(value) {
  if (!value || typeof value !== "object" || !Array.isArray(value.products)) return false;
  return value.products.every(product =>
    product && typeof product.id === "string" && product.id.trim() &&
    typeof product.name === "string" && product.name.trim() &&
    typeof product.category === "string" &&
    typeof product.price === "number" && Number.isFinite(product.price) && product.price >= 0 &&
    typeof product.inStock === "boolean"
  );
}
if (!validateCatalogue(data)) {
  console.error("Catalogue is invalid.");
  process.exitCode = 1;
} else console.log(`Valid catalogue: ${data.products.length} products.`);
