// JS opcional — apenas para validação simples (você pode deixar vazio)
document.getElementById("formAtivar").addEventListener("submit", function (e) {
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const whatsapp = document.getElementById("whatsapp").value.trim();

  if (!nome || !email || !whatsapp) {
    e.preventDefault();
    alert("Por favor, preencha todos os campos antes de continuar.");
  }
});
