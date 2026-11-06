const form = document.querySelector("#profile-form");
form.addEventListener("submit", event => {
  event.preventDefault();
  const name = document.querySelector("#name").value.trim();
  const bio = document.querySelector("#bio").value.trim();
  if (!name || !bio) {
    document.querySelector("#status").textContent = "Please complete both fields.";
    return;
  }
  // textContent treats user input as text; it does not parse HTML.
  document.querySelector("#profile-name").textContent = name;
  document.querySelector("#profile-bio").textContent = bio;
  document.querySelector(".avatar").textContent = name.split(/\s+/).map(word => word[0]).join("").slice(0, 2).toUpperCase();
  document.querySelector("#status").textContent = "Profile updated successfully.";
});
