const form = document.getElementById("quoteForm");
const msg = document.getElementById("msg");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  msg.textContent =
    "¡Gracias! Recibimos tu solicitud de cotización. Te contactaremos pronto.";
  form.reset();
});
