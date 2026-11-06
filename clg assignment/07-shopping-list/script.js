const form = document.querySelector("#item-form");
const input = document.querySelector("#item-input");
const list = document.querySelector("#items");
const count = document.querySelector("#count");
let items = [];
function render() {
  list.replaceChildren();
  items.forEach((item, index) => {
    const li = document.createElement("li");
    const label = document.createElement("span");
    label.textContent = item;
    const remove = document.createElement("button");
    remove.textContent = "Remove";
    remove.type = "button";
    remove.addEventListener("click", () => { items.splice(index, 1); render(); });
    li.append(label, remove);
    list.append(li);
  });
  count.textContent = `${items.length} item${items.length === 1 ? "" : "s"}`;
}
form.addEventListener("submit", event => {
  event.preventDefault();
  const value = input.value.trim();
  if (!value) return;
  items.push(value);
  input.value = "";
  render();
  input.focus();
});
