const form = document.querySelector("#contact-form");
form.addEventListener("submit", event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();
  if (!name || !email || !message) return;
  const summary = document.querySelector("#summary");
  const text = document.querySelector("#summary-text");
  text.textContent = `Thank you, ${name}. We have recorded your message: "${message}" A reply can be sent to ${email}.`;
  summary.hidden = false;
});
