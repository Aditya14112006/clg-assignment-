const controls = { dark: document.querySelector("#dark"), large: document.querySelector("#large") };
const defaults = { dark: false, large: false };
function loadSettings() {
  try {
    const saved = JSON.parse(localStorage.getItem("studentSettings") || "{}");
    return { dark: saved.dark === true, large: saved.large === true };
  } catch {
    return defaults;
  }
}
function render(settings) {
  controls.dark.checked = settings.dark;
  controls.large.checked = settings.large;
  document.body.classList.toggle("dark", settings.dark);
  document.body.classList.toggle("large", settings.large);
}
function saveSettings() {
  const settings = { dark: controls.dark.checked, large: controls.large.checked };
  localStorage.setItem("studentSettings", JSON.stringify(settings));
  render(settings);
  document.querySelector("#status").textContent = "Settings saved.";
}
render(loadSettings());
Object.values(controls).forEach(control => control.addEventListener("change", saveSettings));
document.querySelector("#reset").addEventListener("click", () => {
  localStorage.removeItem("studentSettings");
  render(defaults);
  document.querySelector("#status").textContent = "Settings reset.";
});
