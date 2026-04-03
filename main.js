function mudarTema() {
    document.body.classList.toggle("light");

  }
  
  const dicas = [
    "Evite gastar mais do que ganha",
    "Guarde pelo menos 10% do que recebe",
    "Cuidado com o cartão de crédito",
    "Tenha uma reserva de emergência"
  ];
  
  function gerarDica() {
    let random = Math.floor(Math.random() * dicas.length);
    document.getElementById("dica").textContent = dicas[random];
  }